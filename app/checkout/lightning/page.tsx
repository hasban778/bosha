"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/lib/store';

export default function LightningCheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const clearCart = useCart((state) => state.clearCart);
  const [qrCode, setQrCode] = useState('');
  const hash = searchParams.get('hash');
  const amount = searchParams.get('amount');
  const amountUSD = amount ? parseFloat(amount) : 0;

  useEffect(() => {
    if (!hash) {
      router.push('/checkout');
      return;
    }

    // Generate QR code
    QRCode.toDataURL(hash)
      .then(url => setQrCode(url))
      .catch(err => {
        console.error(err);
        toast({
          title: "Error generating QR code",
          variant: "destructive",
        });
      });

    // Poll for payment status
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/lightning/status?hash=' + hash);
        const data = await response.json();
        
        if (data.status === 'completed') {
          clearCart();
          toast({
            title: "Payment received!",
            description: "Your order has been confirmed.",
          });
          router.push('/checkout/success');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hash, router, toast, clearCart]);

  if (!hash) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Complete Your Lightning Payment</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Scan the QR code to send exactly <span className="font-bold text-2xl text-foreground">${amountUSD.toLocaleString()}</span> using your Lightning Network wallet to complete the invoice payment
        </p>

        <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
          {qrCode && (
            <img
              src={qrCode}
              alt="Lightning Network Payment QR Code"
              className="mx-auto mb-6"
              width={300}
              height={300}
            />
          )}
          <p className="text-sm text-muted-foreground mb-2">
            Amount to Send:
          </p>
          <p className="text-3xl font-bold mb-6 text-foreground">${amountUSD.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground mb-4">
            Lightning Network Invoice:
          </p>
          <code className="block p-4 bg-muted rounded text-sm mb-6 break-all">
            {hash}
          </code>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              navigator.clipboard.writeText(hash);
              toast({
                title: "Copied to clipboard",
              });
            }}
          >
            Copy Invoice
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Don't close this page until the payment is confirmed.</p>
          <p>The page will automatically redirect once the payment is received.</p>
        </div>
      </div>
    </div>
  );
}