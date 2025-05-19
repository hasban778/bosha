import Image from "next/image";
import Link from "next/link";
import { DollarSign, ShieldCheck, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: DollarSign,
    title: "Find a Lower Price",
    description: "If you find the same product at a lower price from an authorized retailer, take a screenshot or save the URL."
  },
  {
    icon: Clock,
    title: "Submit Your Claim",
    description: "Contact us within 30 days of your purchase with proof of the lower price and your order number."
  },
  {
    icon: ShieldCheck,
    title: "Get Your Refund",
    description: "We'll verify the price and refund you the difference plus an additional 10% of the difference."
  }
];

export default function PriceGuaranteePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Price Guarantee</h1>
          <p className="text-lg text-muted-foreground">
            Shop with confidence knowing you're getting the best price. If you find a lower price,
            we'll match it and give you an additional 10% off the difference.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg"
              alt="Price guarantee"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Price Match Promise
              </h2>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Valid for 30 days after purchase</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Includes authorized online retailers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Get 110% of the price difference</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>Quick and easy claim process</span>
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

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Terms & Conditions</h2>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">Eligible Products</h3>
              <p className="text-sm text-muted-foreground">
                Price matching is available for identical products (same model, color, and condition)
                sold by authorized retailers. The product must be in stock and available for immediate purchase.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">Excluded Items</h3>
              <p className="text-sm text-muted-foreground">
                Price matching excludes:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Special orders or custom configurations</li>
                <li>• Limited time offers or flash sales</li>
                <li>• Marketplace sellers or unauthorized dealers</li>
                <li>• Used or refurbished products</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">Claim Process</h3>
              <p className="text-sm text-muted-foreground">
                Claims must be submitted within 30 days of purchase. Include your order number and
                proof of the lower price (screenshot or URL). Refunds are processed within 5 business days.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Found a Lower Price?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our support team to submit your price match claim. We're here to ensure
            you get the best deal possible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Submit Claim <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faq">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}