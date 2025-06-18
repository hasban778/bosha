"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Bitcoin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg')] bg-cover bg-center opacity-20" />
      
      {/* Mobile-optimized content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Unbeatable Tech Deals
            <span className="block text-yellow-400 mt-2">Best Prices Guaranteed</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            Get the latest iPhones, PlayStations, and MacBooks at the lowest prices anywhere. 
            Now accepting Bitcoin payments for ultimate convenience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>

          {/* Bitcoin acceptance badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 mt-8 bg-black/30 p-3 rounded-full mx-auto w-fit"
          >
            <Bitcoin className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-300">Now accepting Bitcoin</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}