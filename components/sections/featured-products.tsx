"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../products-data';
import { TrendingDown } from 'lucide-react';
import { AddToCartButton } from '../cart/add-to-cart-button';

export default function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.discount >= 15).slice(0, 4);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Deals
            <span className="block text-sm text-yellow-400 mt-2">Unbeatable Prices</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56">
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                  <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    Lowest Price
                  </div>
                </Link>
              </div>
              <div className="p-4">
                <Link href={`/products/${product.id}`} className="block">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-yellow-400">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  <div className="mt-1 text-xs text-green-400">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">{product.description}</p>
                </Link>
                <div className="mt-4">
                  <AddToCartButton 
                    productId={product.id}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}