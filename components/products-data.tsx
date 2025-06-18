interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  discount: number;
  image: string;
  category: 'iphone' | 'playstation' | 'macbook';
  stock: number;
  features: string[];
}

export const products: Product[] = [
  // iPhone Category
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    price: 1099.99,
    originalPrice: 1299.99,
    description: 'The most powerful iPhone ever with revolutionary A18 Pro chip',
    discount: 15,
    image: '/images/iphones/iphone_16_pro_max_1.jpeg',
    category: 'iphone',
    stock: 50,
    features: ['6.9" Super Retina XDR display', 'A18 Pro chip', '1TB storage', 'Titanium design']
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    price: 999.99,
    originalPrice: 1199.99,
    description: 'Pro camera system for mind-blowing shots',
    discount: 17,
    image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg',
    category: 'iphone',
    stock: 75,
    features: ['6.7" Super Retina XDR display', 'A18 Pro chip', '512GB storage', 'Pro camera system']
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    price: 899.99,
    originalPrice: 999.99,
    description: 'Big beautiful display with all-day battery life',
    discount: 10,
    image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg',
    category: 'iphone',
    stock: 100,
    features: ['6.7" Super Retina display', 'A18 chip', '256GB storage', 'Dual camera']
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    price: 799.99,
    originalPrice: 899.99,
    description: 'The perfect iPhone for everyone',
    discount: 11,
    image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg',
    category: 'iphone',
    stock: 150,
    features: ['6.1" Super Retina display', 'A18 chip', '128GB storage', 'All-day battery']
  },

  // PlayStation 5 Category
  {
    id: 'ps5-digital',
    name: 'PS5 Digital Edition',
    price: 399.99,
    originalPrice: 499.99,
    description: 'Next-gen gaming without the disc drive',
    discount: 20,
    image: 'https://images.pexels.com/photos/12719149/pexels-photo-12719149.jpeg',
    category: 'playstation',
    stock: 45,
    features: ['Digital Edition', '825GB SSD', '4K gaming', 'Ray tracing']
  },
  {
    id: 'ps5-disc',
    name: 'PS5 Disc Edition',
    price: 449.99,
    originalPrice: 549.99,
    description: 'The complete PS5 experience with disc drive',
    discount: 18,
    image: 'https://images.pexels.com/photos/12719149/pexels-photo-12719149.jpeg',
    category: 'playstation',
    stock: 30,
    features: ['4K Blu-ray drive', '825GB SSD', '4K gaming', '3D Audio']
  },
  {
    id: 'ps5-horizon',
    name: 'PS5 Horizon Bundle',
    price: 499.99,
    originalPrice: 599.99,
    description: 'PS5 with Horizon Forbidden West game',
    discount: 17,
    image: 'https://images.pexels.com/photos/12719149/pexels-photo-12719149.jpeg',
    category: 'playstation',
    stock: 25,
    features: ['Disc Edition', 'Horizon game', 'DualSense controller', 'Premium theme']
  },
  {
    id: 'ps5-spiderman',
    name: 'PS5 Spider-Man Bundle',
    price: 499.99,
    originalPrice: 599.99,
    description: 'PS5 with Spider-Man 2 game',
    discount: 17,
    image: 'https://images.pexels.com/photos/12719149/pexels-photo-12719149.jpeg',
    category: 'playstation',
    stock: 20,
    features: ['Disc Edition', 'Spider-Man 2', 'DualSense controller', 'Digital content']
  },

  // MacBook Category
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16"',
    price: 2299.99,
    originalPrice: 2499.99,
    description: 'Ultimate power for ultimate professionals',
    discount: 8,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    category: 'macbook',
    stock: 35,
    features: ['M3 Max chip', '32GB RAM', '1TB SSD', '16" Liquid Retina XDR']
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    price: 1799.99,
    originalPrice: 1999.99,
    description: 'Pro performance in a portable size',
    discount: 10,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    category: 'macbook',
    stock: 40,
    features: ['M3 Pro chip', '16GB RAM', '512GB SSD', '14" Liquid Retina XDR']
  },
  {
    id: 'macbook-air-15',
    name: 'MacBook Air 15"',
    price: 1299.99,
    originalPrice: 1499.99,
    description: 'Incredibly thin. Seriously powerful.',
    discount: 13,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    category: 'macbook',
    stock: 60,
    features: ['M3 chip', '16GB RAM', '512GB SSD', '15" Liquid Retina']
  },
  {
    id: 'macbook-air-13',
    name: 'MacBook Air 13"',
    price: 999.99,
    originalPrice: 1199.99,
    description: 'The most affordable MacBook Air',
    discount: 17,
    image: '/images/iphones/iphone16.jpeg',
    category: 'macbook',
    stock: 85,
    features: ['M3 chip', '8GB RAM', '256GB SSD', '13.6" Liquid Retina']
  }
];