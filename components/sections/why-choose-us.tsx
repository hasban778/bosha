import * as React from "react";
import { LightbulbIcon, ShieldCheckIcon, CreditCardIcon, TruckIcon } from "lucide-react";

const features = [
  {
    name: "Lowest Price Guarantee",
    description: "If you find a lower price elsewhere, we'll match it and give you an additional 10% off.",
    icon: LightbulbIcon,
  },
  {
    name: "Secure Payments",
    description: "We accept cryptocurrency payments (Bitcoin) for added security and convenience.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Guest Checkout",
    description: "Quick and easy checkout process with no account required.",
    icon: CreditCardIcon,
  },
  {
    name: "Fast Shipping",
    description: "Free express shipping on all orders with tracking included.",
    icon: TruckIcon,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Why Shop With Us</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="absolute -top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <feature.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{feature.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}