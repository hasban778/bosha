"use client";


import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg')] bg-cover bg-center opacity-20" />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Unbeatable Tech Deals
          <span className="block text-yellow-400">Best Prices Guaranteed</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Get the latest iPhones, PlayStations, and MacBooks at the lowest prices anywhere. 
          Now accepting Bitcoin payments for ultimate convenience.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}