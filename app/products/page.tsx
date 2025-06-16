"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/components/products-data';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, TrendingDown, Star } from 'lucide-react';

type Category = 'all' | 'iphone' | 'playstation' | 'macbook';
type SortOption = 'featured' | 'price-low' | 'price-high' | 'discount';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all' as Category, name: 'All Products', count: products.length },
    { id: 'iphone' as Category, name: 'iPhone', count: products.filter(p => p.category === 'iphone').length },
    { id: 'playstation' as Category, name: 'PlayStation', count: products.filter(p => p.category === 'playstation').length },
    { id: 'macbook' as Category, name: 'MacBook', count: products.filter(p => p.category === 'macbook').length },
  ];

  const sortOptions = [
    { id: 'featured' as SortOption, name: 'Featured' },
    { id: 'price-low' as SortOption, name: 'Price: Low to High' },
    { id: 'price-high' as SortOption, name: 'Price: High to Low' },
    { id: 'discount' as SortOption, name: 'Highest Discount' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => b.discount - a.discount);
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            All Products
            <span className="block text-sm text-yellow-400 mt-2">Unbeatable Tech Deals</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of premium tech products at the best prices. 
            From the latest iPhones to powerful MacBooks and gaming consoles.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                    : "hover:border-yellow-400"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Sort by:</span>
            </div>
            {sortOptions.map((option) => (
              <Button
                key={option.id}
                variant={sortBy === option.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSortBy(option.id)}
                className={`${
                  sortBy === option.id 
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                    : ""
                }`}
              >
                {option.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-center text-sm text-muted-foreground"
        >
          Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
          {searchQuery && ` for "${searchQuery}"`}
        </motion.div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 group"
              >
                <div className="relative h-48 sm:h-56">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </div>
                    
                    {/* Best Deal Badge */}
                    {product.discount >= 15 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" />
                        Best Deal
                      </div>
                    )}

                    {/* Stock Status */}
                    <div className="absolute bottom-3 left-3">
                      <Badge 
                        variant={product.stock > 10 ? "default" : product.stock > 0 ? "secondary" : "destructive"}
                        className="text-xs"
                      >
                        {product.stock > 10 ? "In Stock" : product.stock > 0 ? `${product.stock} left` : "Out of Stock"}
                      </Badge>
                    </div>
                  </Link>
                </div>

                <div className="p-4 space-y-3">
                  {/* Product Name - Clickable */}
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-bold text-lg group-hover:text-yellow-400 transition-colors line-clamp-1 cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-yellow-400">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  </div>

                  {/* Description - Clickable */}
                  <Link href={`/products/${product.id}`}>
                    <p className="text-sm text-muted-foreground line-clamp-2 cursor-pointer hover:text-foreground transition-colors">
                      {product.description}
                    </p>
                  </Link>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>Key Features:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <AddToCartButton 
                    productId={product.id}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* No Results */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('featured');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-card rounded-lg p-8 border border-border"
        >
          <h2 className="text-2xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us and we'll help you find the perfect tech product at the best price.
          </p>
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}