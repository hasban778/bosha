"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send this to your API
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
    });
    
    setEmail("");
  };
  
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Get exclusive deals and offers
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Subscribe to our newsletter and be the first to know about new products and special discounts.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md mx-auto gap-x-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-chart-1"
              required
            />
            <Button type="submit" className="bg-chart-1 hover:bg-chart-1/90 text-white gap-2">
              Subscribe <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-primary-foreground/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}