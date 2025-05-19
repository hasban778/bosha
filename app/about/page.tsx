import Image from "next/image";
import Link from "next/link";
import { Bitcoin, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    label: "Active Customers",
    value: "50K+",
    description: "Satisfied customers worldwide"
  },
  {
    label: "Products Sold",
    value: "100K+",
    description: "Genuine tech products delivered"
  },
  {
    label: "Bitcoin Transactions",
    value: "10K+",
    description: "Secure crypto payments processed"
  },
  {
    label: "Price Matches",
    value: "5K+",
    description: "Best price guarantees honored"
  }
];

const values = [
  {
    icon: Bitcoin,
    title: "Crypto Innovation",
    description: "Leading the way in cryptocurrency adoption for tech retail, making high-end purchases more accessible and secure."
  },
  {
    icon: Shield,
    title: "Absolute Authenticity",
    description: "Every product is sourced directly from authorized manufacturers and distributors, guaranteeing genuine items."
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    description: "Fast, reliable shipping with real-time tracking and secure packaging for every order."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated support team providing personalized assistance and ensuring complete satisfaction."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About ClassicBuy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing tech retail with cryptocurrency payments, unbeatable prices, 
            and exceptional customer service since 2023.
          </p>
        </div>

        {/* Mission Section */}
        <div className="relative rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              To make premium technology accessible to everyone by offering the lowest prices, 
              accepting cryptocurrency payments, and providing an exceptional shopping experience 
              backed by our price guarantee and authentic product assurance.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card border">
              <div className="text-3xl font-bold text-chart-1 mb-2">{stat.value}</div>
              <div className="font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg bg-card border">
              <div className="flex-shrink-0">
                <value.icon className="h-8 w-8 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Sarah Chen</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Michael Roberts</h3>
              <p className="text-muted-foreground">CTO</p>
            </div>
            <div className="text-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                  alt="COO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Jessica Taylor</h3>
              <p className="text-muted-foreground">COO</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground mb-6">
            Experience the future of tech retail with unbeatable prices and crypto payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/products/playstation">Shop Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}