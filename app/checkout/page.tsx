"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bitcoin, Zap, ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = React.useState<"bitcoin" | "lightning" | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [customerInfo, setCustomerInfo] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const fees = selectedMethod === "bitcoin" ? 2.99 : 0;
  const total = subtotal + fees;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    if (!selectedMethod) {
      toast({
        title: "Please select a payment method",
        variant: "destructive",
      });
      return;
    }

    // Validate customer information
    const requiredFields = ["email", "firstName", "lastName", "address", "city", "state", "zipCode", "country"] as const;
    const missingFields = requiredFields.filter(field => !customerInfo[field as keyof typeof customerInfo]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing required information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      const response = await fetch("/api/lightning", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          customerInfo,
          type: selectedMethod
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      router.push(`/checkout/${selectedMethod}?hash=${data.hash}&amount=${total}`);
      return;
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: "Please try again or choose a different payment method",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some items to your cart before proceeding to checkout.
          </p>
          <Button asChild>
            <Link href="/products/playstation">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="space-y-6">
            {/* Customer Information Form */}
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={customerInfo.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={customerInfo.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={customerInfo.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={customerInfo.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={customerInfo.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
                
                <div className="space-y-4">
                  <div
                    className={`relative cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted/50 ${
                      selectedMethod === "lightning" ? "border-chart-1 bg-muted/50" : ""
                    }`}
                    onClick={() => setSelectedMethod("lightning")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-1/10">
                        <Zap className="h-6 w-6 text-chart-1" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Bitcoin via Lightning Network</h3>
                          <span className="text-sm text-chart-1">Recommended</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Instant confirmation, no fees</p>
                        <p className="mt-1 text-xs text-chart-1">Send directly from CashApp!</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Confirmation in seconds</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Image
                          src="https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg"
                          alt="CashApp"
                          width={16}
                          height={16}
                          className="rounded"
                        />
                        <span>Compatible with CashApp's Lightning Network</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted/50 ${
                      selectedMethod === "bitcoin" ? "border-chart-1 bg-muted/50" : ""
                    }`}
                    onClick={() => setSelectedMethod("bitcoin")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <Bitcoin className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Bitcoin (On-chain)</h3>
                        <p className="text-sm text-muted-foreground">Standard Bitcoin transaction</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Confirmation in ~10-30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative aspect-square h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="sticky top-24">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  {selectedMethod === "bitcoin" && (
                    <div className="flex justify-between text-destructive">
                      <span>Network Fee</span>
                      <span>${fees}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                    {selectedMethod === "lightning" && (
                      <p className="mt-1 text-sm text-chart-1">You save ${fees} in network fees!</p>
                    )}
                  </div>
                </div>

                <Button
                  className="mt-6 w-full gap-2"
                  size="lg"
                  onClick={handlePayment}
                  disabled={!selectedMethod || isProcessing}
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      Complete Payment
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure, encrypted payment processing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    By completing this purchase you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-4">Why Choose Lightning Network?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-chart-1" />
                  <span>Instant confirmations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-chart-1" />
                  <span>Zero network fees</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-chart-1" />
                  <span>More environmentally friendly</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-chart-1" />
                  <span>Enhanced privacy features</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-chart-1" />
                  <span>Send directly from CashApp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}