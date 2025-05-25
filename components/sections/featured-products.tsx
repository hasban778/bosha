"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../products-data';

export default function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.discount >= 15).slice(0, 4);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Deals
          <span className="block text-sm text-yellow-400 mt-2">Unbeatable Prices</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-yellow-400/10 transition-shadow"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-yellow-400">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
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