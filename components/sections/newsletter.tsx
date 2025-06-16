"use client";


import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-t from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Stay Updated
            <span className="block text-sm text-yellow-400 mt-2">Get Exclusive Deals & Updates</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            Subscribe to our newsletter and be the first to know about special offers and new products.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              required
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Subscribe
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}