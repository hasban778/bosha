import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/supabase';
import { sendOrderConfirmation } from '@/utils/email';

async function usdToSats(usdAmount: number) {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    const btcPrice = data.bitcoin.usd;
    const btcAmount = usdAmount / btcPrice;
    return Math.round(btcAmount * 100000000); // Convert to satoshis
  } catch (error) {
    console.error('Error fetching BTC price:', error);
    throw new Error('Failed to convert USD to satoshis');
  }
}

export async function POST(request: Request) {
  try {
    const { amount, type = "lightning", customerDetails, items } = await request.json();
    console.log('--------', items);
    if (!amount || !type || !customerDetails || !items) {
      return NextResponse.json(
        { error: 'Amount, payment type, customer details, and items are required' },
        { status: 400 }
      );
    }

    const satsAmount = await usdToSats(amount);
    
    const response = await fetch("https://coinos.io/api/invoice", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.COINOS_API_KEY}`
      },
      body: JSON.stringify({
        invoice: {
          amount: satsAmount,
          type
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to generate ${type} invoice`);
    }

    const data = await response.json();

    // First, insert customer details
    const { data: customerData, error: customerError } = await supabase
      .from('customer_details')
      .insert({
        first_name: customerDetails.firstName,
        last_name: customerDetails.lastName,
        email: customerDetails.email,
        address: customerDetails.address,
        city: customerDetails.city,
        postal_code: customerDetails.postalCode,
        country: customerDetails.country
      })
      .select()
      .single();

    if (customerError) {
      console.error('Error saving customer details:', customerError);
      throw new Error('Failed to save customer details');
    }

    // Get the authenticated user if available
    const { data: { user } } = await supabase.auth.getUser();

    // Then insert payment with customer details reference
    const { error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: user?.id || null,
        customer_details_id: customerData.id,
        amount: amount,
        sats_amount: satsAmount,
        invoice: data.hash,
        payment_type: type,
        status: 'pending'
      });

    if (paymentError) {
      console.error('Error saving payment:', paymentError);
      throw new Error('Failed to save payment details');
    }

    // Send order confirmation email
    await sendOrderConfirmation(
      customerDetails,
      items,
      data.hash,
      type,
      amount,
      satsAmount
    );

    return NextResponse.json({ 
      success: true, 
      invoice: data.hash,
      satsAmount
    });
  } catch (error) {
    console.error('Payment processing error:', error);
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    );
  }
}