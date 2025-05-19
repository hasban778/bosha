import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/supabase';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const hash = searchParams.get('hash');
    const type = searchParams.get('type') || 'lightning';

    if (!hash) {
      return NextResponse.json({ error: 'Payment hash is required' }, { status: 400 });
    }

    // Check payment status in Coinos
    const response = await fetch(`https://coinos.io/api/invoice/${hash}`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.COINOS_API_KEY}`
      }
    });

    const data = await response.json();

    // Payment is complete if received amount is greater than 0
    const isCompleted = data.received > 0;

    // Update payment status in appropriate database table
    const tableName = type === 'bitcoin' ? 'bitcoin_payments' : 'lightning_payments';

    if (isCompleted) {
      const { error } = await supabase
        .from(tableName)
        .update({ status: 'completed' })
        .eq('hash', hash);

      if (error) {
        throw error;
      }
    }

    return NextResponse.json({ status: isCompleted ? 'completed' : 'pending' });
  } catch (error) {
    console.error('Error checking payment status:', error);
    return NextResponse.json({ error: 'Failed to check payment status' }, { status: 500 });
  }
}