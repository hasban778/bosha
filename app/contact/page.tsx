"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Monday to Friday, 9am to 6pm EST"
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@classicbuy.shop",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Tech Street, New York, NY 10001",
    description: "United States"
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri: 9:00 AM - 6:00 PM EST",
    description: "Closed on weekends and holidays"
  }
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or need assistance? We're here to help.
            Get in touch with our support team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-8">
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Contact support"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border bg-card">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 rounded-lg bg-muted">
              <h3 className="font-medium mb-2">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/faq" className="block text-muted-foreground hover:text-foreground transition">
                  Frequently Asked Questions
                </Link>
                <Link href="/shipping" className="block text-muted-foreground hover:text-foreground transition">
                  Shipping Information
                </Link>
                <Link href="/returns" className="block text-muted-foreground hover:text-foreground transition">
                  Returns & Refunds
                </Link>
                <Link href="/price-guarantee" className="block text-muted-foreground hover:text-foreground transition">
                  Price Guarantee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}