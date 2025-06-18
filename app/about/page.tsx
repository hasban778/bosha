"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Bitcoin, 
  Shield, 
  Truck, 
  Award, 
  Users, 
  Globe, 
  Heart,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const stats = [
  { number: '50,000+', label: 'Happy Customers', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { number: '24/7', label: 'Customer Support', icon: Heart },
  { number: '150+', label: 'Countries Served', icon: Globe }
];

const values = [
  {
    icon: Award,
    title: 'Best Prices Guaranteed',
    description: 'We constantly monitor the market to ensure you get the absolute best deals on premium tech products.'
  },
  {
    icon: Bitcoin,
    title: 'Crypto-First Approach',
    description: 'Leading the way in cryptocurrency adoption, making Bitcoin payments seamless and secure for everyone.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your security is our priority. All transactions are protected with enterprise-grade encryption.'
  },
  {
    icon: Truck,
    title: 'Lightning Fast Delivery',
    description: 'Free express shipping worldwide with tracking. Get your tech delivered faster than anywhere else.'
  }
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Former Apple engineer with 15+ years in tech retail and cryptocurrency.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    bio: 'Blockchain expert and former Tesla software architect building the future of payments.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
    bio: 'Supply chain optimization specialist ensuring the fastest delivery times globally.'
  }
];

const milestones = [
  { year: '2020', event: 'ClassicBuy founded with a vision to revolutionize tech retail' },
  { year: '2021', event: 'First to accept Bitcoin payments for consumer electronics' },
  { year: '2022', event: 'Reached 10,000 satisfied customers worldwide' },
  { year: '2023', event: 'Launched Lightning Network integration for instant payments' },
  { year: '2024', event: 'Expanded to 150+ countries with same-day delivery' },
  { year: '2025', event: 'Leading the industry with 50,000+ happy customers' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ClassicBuy
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">
                Revolutionizing Tech Retail
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're not just another tech retailer. We're pioneers in cryptocurrency payments, 
              champions of fair pricing, and believers that everyone deserves access to the latest technology 
              at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
                <span className="block text-yellow-400 text-lg mt-2">Democratizing Technology Access</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At ClassicBuy, we believe that cutting-edge technology shouldn't come with cutting-edge prices. 
                Our mission is to make premium tech products accessible to everyone by offering the best prices 
                in the market while pioneering the future of digital payments.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just selling products; we're building a community of tech enthusiasts who value 
                innovation, transparency, and the freedom that comes with cryptocurrency payments.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold">Price Match Guarantee</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold">Bitcoin-First Payments</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold">Global Express Shipping</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Modern technology workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
              <span className="block text-yellow-400 text-lg mt-2">What Drives Us Forward</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have with our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
              <span className="block text-yellow-400 text-lg mt-2">The Minds Behind ClassicBuy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of tech veterans, cryptocurrency experts, and customer experience specialists 
              work tirelessly to bring you the best shopping experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-yellow-400 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
              <span className="block text-yellow-400 text-lg mt-2">Milestones & Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a global leader in tech retail and cryptocurrency payments.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-yellow-400">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-lg">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've discovered the ClassicBuy advantage. 
              Best prices, Bitcoin payments, and lightning-fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-yellow-400 hover:bg-gray-800 font-bold">
                <Link href="/products">Start Shopping</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}