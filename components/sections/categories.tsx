"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'iPhone',
    image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg',
    link: '/products',
    description: 'Latest iPhone models at unbeatable prices'
  },
  {
    name: 'PlayStation',
    image: 'https://images.pexels.com/photos/12719149/pexels-photo-12719149.jpeg',
    link: '/products',
    description: 'Next-gen gaming consoles and accessories'
  },
  {
    name: 'MacBook',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    link: '/products',
    description: 'Premium laptops for work and creativity'
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Shop by Category
            <span className="block text-sm text-yellow-400 mt-2">Find What You Need</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={category.link} 
                className="block relative h-64 rounded-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-yellow-400 transition-colors">
                      Shop Now
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}