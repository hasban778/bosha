"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "playstation",
    name: "PlayStation 5",
    description: "The next generation of gaming",
    image: "https://images.pexels.com/photos/18260975/pexels-photo-18260975/free-photo-of-sony-playstation-5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/products/playstation",
  },
  {
    id: "iphone",
    name: "iPhone 16",
    description: "The most powerful iPhone yet",
    image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/products/iphone16",
  },
  {
    id: "iphonepro",
    name: "iPhone 16 Pro",
    description: "Pro camera. Pro display. Pro performance.",
    image: "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/products/iphone16pro",
  },
  {
    id: "macbook",
    name: "MacBook",
    description: "Incredibly powerful. Remarkably thin.",
    image: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/products/macbook",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Shop By Category</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect tech for you with our curated selection of premium devices at unbeatable prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string;
    href: string;
  };
}

function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Link
      href={category.href}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-xl font-bold">{category.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
          
          <div className={cn(
            "mt-4 inline-flex items-center text-sm font-medium transition-all duration-300",
            isHovered ? "translate-x-2" : "translate-x-0"
          )}>
            Shop Now
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}