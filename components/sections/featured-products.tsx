"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

// Sample product data
const products = [
  {
    id: "ps5-digital",
    name: "PlayStation 5 Digital Edition",
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, and a whole new generation of incredible PlayStation games.",
    price: 399,
    comparePrice: 499,
    imageSrc: "https://images.pexels.com/photos/18260975/pexels-photo-18260975/free-photo-of-sony-playstation-5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "playstation",
    slug: "ps5-digital-edition",
    isNew: false,
    isFeatured: true,
  },
  {
    id: "iphone-16",
    name: "iPhone 16 128GB",
    description: "The latest iPhone with a stunning display, powerful chip, and amazing camera system. Available in multiple colors.",
    price: 799,
    comparePrice: 899,
    imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "iphone16",
    slug: "iphone-16-128gb",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro 256GB",
    description: "The most powerful iPhone ever with Pro camera system, ProMotion display, and incredible battery life. Premium design with surgical-grade stainless steel.",
    price: 1099,
    comparePrice: 1199,
    imageSrc: "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "iphone16pro",
    slug: "iphone-16-pro-256gb",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "macbook-air",
    name: "MacBook Air M3",
    description: "Incredibly thin and light, yet packed with amazing performance, battery life, and a beautiful Retina display.",
    price: 999,
    comparePrice: 1199,
    imageSrc: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "macbook",
    slug: "macbook-air-m3",
    isNew: false,
    isFeatured: true,
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Tech Deals</h2>
            <p className="mt-2 text-muted-foreground">
              The latest devices at guaranteed lowest prices
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All Products <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}