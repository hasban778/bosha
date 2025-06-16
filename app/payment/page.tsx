"use client";

import { useSearchParams } from 'next/navigation';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Copy, Bitcoin, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { toast } from 'sonner';

function PaymentContent() {
  const searchParams = useSearchParams();
  const invoice = searchParams.get('invoice');
  const satsAmount = searchParams.get('amount');
  const paymentType = searchParams.get('type') || 'lightning';
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [usdEquivalent, setUsdEquivalent] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (invoice) {
      QRCode.toDataURL(invoice)
        .then(url => setQrCodeUrl(url))
        .catch(err => console.error('QR Code generation error:', err));
    }
  }, [invoice]);

  // Fetch BTC price and calculate USD equivalent
  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const btcPrice = data.bitcoin.usd;
        const satsInBtc = Number(satsAmount) / 100000000; // Convert sats to BTC
        const usdAmount = satsInBtc * btcPrice;
        setUsdEquivalent(usdAmount);
      } catch (error) {
        console.error('Error fetching BTC price:', error);
      }
    };

    if (satsAmount) {
      fetchBtcPrice();
    }
  }, [satsAmount]);

  const copyToClipboard = async () => {
    if (invoice) {
      try {
        await navigator.clipboard.writeText(invoice);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        toast.success('Invoice copied to clipboard');
      } catch (err) {
        toast.error('Failed to copy invoice');
      }
    }
  };

  if (!invoice || !satsAmount) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Payment Request</h1>
          <Button asChild>
            <Link href="/checkout">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Checkout
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-lg mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {paymentType === 'lightning' ? 'Lightning Payment' : 'Bitcoin Payment'}
          </h1>
          <p className="text-muted-foreground">
            Scan the QR code below with your {paymentType === 'lightning' ? 'Lightning' : 'Bitcoin'} wallet
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-lg">
              {qrCodeUrl && (
                <img
                  src={qrCodeUrl}
                  alt={`${paymentType === 'lightning' ? 'Lightning' : 'Bitcoin'} Invoice QR Code`}
                  width={256}
                  height={256}
                />
              )}
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-2">Amount:</p>
            <p className="text-xl font-bold">{satsAmount} sats</p>
            {usdEquivalent !== null && (
              <p className="text-sm text-muted-foreground">
                ≈ ${usdEquivalent.toFixed(2)} USD
              </p>
            )}
          </div>

          <div className="flex gap-2 mb-6">
            <Button 
              className="flex-1"
              variant="outline"
              onClick={copyToClipboard}
            >
              <Copy className="w-4 h-4 mr-2" />
              {isCopied ? 'Copied!' : 'Copy Invoice'}
            </Button>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-400/10 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                {paymentType === 'lightning' ? (
                  <Zap className="w-4 h-4" />
                ) : (
                  <Bitcoin className="w-4 h-4" />
                )}
                <span className="font-semibold">Pro Tips:</span>
              </div>
              {paymentType === 'lightning' ? (
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Using Cash App? Tap Bitcoin → Pay → Scan QR</li>
                  <li>• Strike users can paste the invoice directly</li>
                  <li>• Payment confirms instantly - no waiting!</li>
                  <li>• Transaction fees are minimal</li>
                </ul>
              ) : (
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Wait for 1 confirmation before leaving</li>
                  <li>• Transaction may take 10-60 minutes</li>
                  <li>• Make sure to include sufficient fees</li>
                  <li>• Double check the amount before sending</li>
                </ul>
              )}
            </div>

            <Button 
              className="w-full"
              variant="outline"
              asChild
            >
              <Link href="/checkout">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PaymentContent />
    </Suspense>
  );
}