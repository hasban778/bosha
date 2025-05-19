import Image from "next/image";
import Link from "next/link";
import { Truck, PackageCheck, Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const shippingMethods = [
  {
    name: "Standard Shipping",
    time: "3-5 business days",
    price: "Free",
    description: "Available for all orders over $50"
  },
  {
    name: "Express Shipping",
    time: "1-2 business days",
    price: "$14.99",
    description: "Guaranteed delivery by end of next business day"
  },
  {
    name: "International Shipping",
    time: "7-14 business days",
    price: "Varies",
    description: "Available to most countries worldwide"
  }
];

const features = [
  {
    icon: Truck,
    title: "Fast & Reliable",
    description: "Most orders ship within 24 hours of payment confirmation"
  },
  {
    icon: PackageCheck,
    title: "Secure Packaging",
    description: "Products are carefully packaged to ensure safe delivery"
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    description: "We ship to most countries with tracking provided"
  }
];

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Shipping & Delivery</h1>
          <p className="text-lg text-muted-foreground">
            Fast, secure, and reliable shipping for all your tech purchases.
            Track your order every step of the way.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg"
              alt="Shipping and delivery"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-white">
                  <feature.icon className="h-8 w-8 text-chart-1 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Shipping Methods</h2>
          <div className="grid gap-6">
            {shippingMethods.map((method, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{method.name}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">{method.price}</span>
                    <p className="text-sm text-muted-foreground">{method.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Shipping Policies</h2>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">Order Processing</h3>
              <p className="text-sm text-muted-foreground">
                Most orders are processed and shipped within 24 hours of payment confirmation.
                You'll receive a tracking number via email once your order ships.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">International Orders</h3>
              <p className="text-sm text-muted-foreground">
                International customers are responsible for all duties, import taxes, and customs fees.
                These are not included in the shipping cost or product price.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">Tracking Your Order</h3>
              <p className="text-sm text-muted-foreground">
                All shipments include tracking information. You can track your order through your
                account dashboard or using the tracking number provided in your shipping confirmation email.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground mb-6">
            Browse our selection of products and enjoy fast, reliable shipping to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/products/playstation">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}