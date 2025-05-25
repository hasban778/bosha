"use client";

import { motion } from 'framer-motion';
import { Bitcoin, Shield, Truck, Award } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Best Prices',
    description: 'We guarantee the lowest prices on all products. Find it cheaper elsewhere? We\'ll beat it!'
  },
  {
    icon: Bitcoin,
    title: 'Crypto Payments',
    description: 'Pay securely with Bitcoin. Fast, secure, and convenient cryptocurrency transactions.'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free express shipping on all orders. Get your tech delivered to your doorstep quickly.'
  },
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Shop with confidence. All transactions are protected with enterprise-grade security.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Us
          <span className="block text-sm text-yellow-400 mt-2">The ClassicBuy Advantage</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-900 rounded-lg"
            >
              <div className="inline-block p-3 bg-yellow-400 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}