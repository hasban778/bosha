"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'iPhone',
    image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg',
    link: '/category/iphone'
  },
  {
    name: 'PlayStation',
    image: 'https://images.pexels.com/photos/12719149/pexels-photo-12719149.jpeg',
    link: '/category/playstation'
  },
  {
    name: 'MacBook',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    link: '/category/macbook'
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Shop by Category
          <span className="block text-sm text-yellow-400 mt-2">Find What You Need</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.link} className="block relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}