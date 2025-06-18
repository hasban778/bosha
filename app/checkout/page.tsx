"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cart-context';
import { products } from '@/components/products-data';
import Image from 'next/image';
import { Bitcoin, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'lightning' | 'bitcoin'>('lightning');
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const cartProducts = items.map(item => ({
    ...products.find(p => p.id === item.id)!,
    quantity: item.quantity
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'postalCode', 'country'];
    const emptyFields = requiredFields.filter(field => !customerDetails[field as keyof CustomerDetails]);
    
    if (emptyFields.length > 0) {
      toast.error('Please fill in all required fields');
      return false;
    }

    if (!customerDetails.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    try {
      setIsProcessing(true);
      
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          type: paymentMethod,
          customerDetails,
          items // Pass the cart items
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push(`/payment?invoice=${data.invoice}&amount=${data.satsAmount}&type=${paymentMethod}`);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Failed to process payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Customer Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={customerDetails.firstName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={customerDetails.lastName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={customerDetails.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main St" 
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      placeholder="New York" 
                      value={customerDetails.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input 
                      id="postalCode" 
                      placeholder="10001" 
                      value={customerDetails.postalCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input 
                    id="country" 
                    placeholder="United States" 
                    value={customerDetails.country}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    paymentMethod === 'lightning'
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-border hover:border-yellow-400/50'
                  }`}
                  onClick={() => setPaymentMethod('lightning')}
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <div>
                      <h3 className="font-medium">Bitcoin (Lightning Network)</h3>
                      <p className="text-sm text-muted-foreground">Instant settlement, lower fees</p>
                    </div>
                  </div>
                  {paymentMethod === 'lightning' && (
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p className="mb-2">✨ Benefits of Lightning Network:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Instant payments - no waiting for confirmations</li>
                        <li>Extremely low transaction fees</li>
                        <li>Send directly from Cash App</li>
                        <li>More environmentally friendly</li>
                        <li>Better privacy protection</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    paymentMethod === 'bitcoin'
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-border hover:border-yellow-400/50'
                  }`}
                  onClick={() => setPaymentMethod('bitcoin')}
                >
                  <div className="flex items-center gap-3">
                    <Bitcoin className="w-5 h-5 text-yellow-400" />
                    <div>
                      <h3 className="font-medium">Bitcoin (On-chain)</h3>
                      <p className="text-sm text-muted-foreground">Traditional Bitcoin payment</p>
                    </div>
                  </div>
                  {paymentMethod === 'bitcoin' && (
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p className="mb-2">🔒 Benefits of On-chain Bitcoin:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Maximum security and decentralization</li>
                        <li>Compatible with all Bitcoin wallets</li>
                        <li>Perfect for larger transactions</li>
                        <li>Direct settlement on the Bitcoin blockchain</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartProducts.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 bg-muted/20 rounded-md flex items-center justify-center p-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold mt-6"
                  size="lg"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                      Processing...
                    </div>
                  ) : paymentMethod === 'lightning' ? (
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Pay with Lightning
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Bitcoin className="w-4 h-4" />
                      Pay with Bitcoin
                    </div>
                  )}
                </Button>

                {paymentMethod === 'lightning' ? (
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    💡 Tip: Open Cash App and scan the Lightning QR code to pay instantly!
                  </p>
                ) : (
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    ⚡ Tip: Consider using Lightning Network for faster, cheaper payments!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
