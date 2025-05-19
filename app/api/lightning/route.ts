import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/supabase';
import nodemailer from 'nodemailer';

// Convert USD to satoshis using real-time BTC price
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

async function sendOrderConfirmation(customerInfo: any, amount: number, hash: string, type: string = 'lightning') {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    }
  });

  const paymentMethod = type === 'lightning' ? 'Lightning Network' : 'Bitcoin';

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: customerInfo.email,
    subject: `Order Confirmation - ClassicBuy Payment`,
    html: `
      <h2>Thank you for your order!</h2>
      <p>Dear ${customerInfo.firstName} ${customerInfo.lastName},</p>
      <p>We've received your payment of $${amount.toLocaleString()} via ${paymentMethod}.</p>
      
      <h3>Order Details:</h3>
      <ul>
        <li>Amount: $${amount.toLocaleString()}</li>
        <li>Payment Method: ${paymentMethod}</li>
        <li>Transaction Hash: ${hash}</li>
      </ul>

      <h3>Shipping Address:</h3>
      <p>
        ${customerInfo.address}<br>
        ${customerInfo.city}, ${customerInfo.state} ${customerInfo.zipCode}<br>
        ${customerInfo.country}
      </p>

      <p>We'll notify you once your order has been shipped.</p>

      <p>If you have any questions, please don't hesitate to contact our support team.</p>

      <p>Best regards,<br>ClassicBuy Team</p>
    `,
  };

  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Failed to send order confirmation:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { amount, customerInfo, type = "lightning" } = await req.json();
    
    // Convert USD amount to satoshis
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

    const data = await response.json();

    // Create payment record in appropriate database table based on type
    const tableName = type === 'bitcoin' ? 'bitcoin_payments' : 'lightning_payments';
    
    const { data: payment, error } = await supabase
      .from(tableName)
      .insert([
        {
          order_id: crypto.randomUUID(),
          hash: data.hash,
          amount: amount, // Store original USD amount
          status: 'pending',
          customer_email: customerInfo.email,
          customer_first_name: customerInfo.firstName,
          customer_last_name: customerInfo.lastName,
          customer_address: customerInfo.address,
          customer_city: customerInfo.city,
          customer_state: customerInfo.state,
          customer_zip: customerInfo.zipCode,
          customer_country: customerInfo.country,
          customer_phone: customerInfo.phone || null
        }
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Send order confirmation email
    await sendOrderConfirmation(customerInfo, amount, data.hash, type);

    return NextResponse.json({ payment, hash: data.hash });
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 });
  }
}