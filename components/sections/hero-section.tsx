"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Technology background"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unbeatable Tech <span className="text-chart-1">Deals</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 max-w-xl text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get the latest PlayStation 5, iPhone 16, and MacBooks at the lowest prices anywhere. 
              We accept crypto payments for your convenience.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Our Price Guarantee
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-1/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-chart-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Lowest Prices</h3>
                  <p className="text-sm text-muted-foreground">Guaranteed or we refund the difference</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-2/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-chart-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Secure Crypto Payments</h3>
                  <p className="text-sm text-muted-foreground">Bitcoin accepted on all products</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-chart-1/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-60 w-60 rounded-full bg-chart-2/20 blur-3xl" />
            
            <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="PlayStation 5"
                width={600}
                height={700}
                className="rounded-t-lg object-cover"
              />
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">PlayStation 5 Slim</h3>
                  <div className="bg-chart-1 text-white text-sm font-medium px-3 py-1 rounded-full">Best Seller</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">$399</span>
                    <span className="text-sm text-muted-foreground line-through">$499</span>
                  </div>
                  <Button variant="default" size="sm" className="gap-1">
                    <span>View Deal</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}