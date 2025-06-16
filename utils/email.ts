import nodemailer from 'nodemailer';
import { CartItem } from '@/lib/types';
import { products } from '@/components/products-data';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export async function sendOrderConfirmation(
  customerDetails: CustomerDetails,
  items: CartItem[],
  invoice: string,
  paymentType: 'lightning' | 'bitcoin',
  amount: number,
  satsAmount: number
) {
  const cartProducts = items.map(item => ({
    ...products.find(p => p.id === item.id)!,
    quantity: item.quantity
  }));

  const itemsList = cartProducts.map(item => `
    ${item.name} x ${item.quantity}
    Price per unit: $${item.price}
    Subtotal: $${(item.price * item.quantity).toFixed(2)}
  `).join('\n');

  const emailContent = `
    Order Confirmation
    
    Dear ${customerDetails.firstName} ${customerDetails.lastName},
    
    Thank you for your order! Here are your order details:
    
    Order Summary:
    ${itemsList}
    
    Total Amount: $${amount.toFixed(2)} (${satsAmount} sats)
    Payment Method: ${paymentType === 'lightning' ? 'Bitcoin Lightning Network' : 'Bitcoin On-chain'}
    Invoice: ${invoice}
    
    Shipping Address:
    ${customerDetails.address}
    ${customerDetails.city}
    ${customerDetails.postalCode}
    ${customerDetails.country}
    
    We'll process your order once the payment is confirmed.
    
    Best regards,
    ClassicBuy Team
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: customerDetails.email,
    subject: 'Your ClassicBuy Order Confirmation',
    text: emailContent,
  });
}

export async function sendContactFormEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const emailContent = `
    New Contact Form Submission
    
    From: ${name} (${email})
    Subject: ${subject}
    
    Message:
    ${message}
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_FORM_EMAIL,
    subject: `Contact Form: ${subject}`,
    text: emailContent,
  });
}