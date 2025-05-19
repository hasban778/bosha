import Image from "next/image";
import Link from "next/link";
import { Bitcoin, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Bitcoin,
    title: "Select Bitcoin Payment",
    description: "During checkout, choose Bitcoin as your payment method. We'll generate a unique payment address for your order."
  },
  {
    icon: Clock,
    title: "Send Payment",
    description: "Use your preferred Bitcoin wallet to send the exact amount to the provided address. The payment is processed in real-time."
  },
  {
    icon: ShieldCheck,
    title: "Order Confirmation",
    description: "Once the Bitcoin transaction is confirmed on the blockchain, your order will be automatically processed and shipped."
  }
];

export default function BitcoinPaymentsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Bitcoin Payments</h1>
          <p className="text-lg text-muted-foreground">
            Shop securely with Bitcoin. We make cryptocurrency payments simple, fast, and reliable.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg"
              alt="Bitcoin payment"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Pay with Bitcoin?
              </h2>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Secure and anonymous transactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>No additional fees or charges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Fast processing and confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Available for all products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-lg border bg-card">
              <div className="mb-4">
                <step.icon className="h-8 w-8 text-chart-1" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="font-medium mb-2">How long do Bitcoin payments take to process?</h3>
                <p className="text-sm text-muted-foreground">
                  Bitcoin payments are typically confirmed within 10-30 minutes, depending on network congestion.
                  Your order will be processed immediately after the first blockchain confirmation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="font-medium mb-2">What happens if I send the wrong amount?</h3>
                <p className="text-sm text-muted-foreground">
                  If you send less than the required amount, we'll refund the payment to your Bitcoin address.
                  If you send more, we'll refund the excess amount.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h3 className="font-medium mb-2">Is Bitcoin payment secure?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, Bitcoin transactions are secured by blockchain technology. Each payment gets a unique
                  address and is processed through secure, encrypted channels.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Ready to Shop with Bitcoin?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our selection of products and experience the convenience of cryptocurrency payments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/products/playstation">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Need Help?</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}