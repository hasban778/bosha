import { notFound } from "next/navigation"
import { ProductDetails } from "@/components/product-details"

interface ProductPageProps {
  params: {
    category: string
    slug: string
  }
}

async function getProduct(category: string, slug: string) {
  // Product data organized by category
  const products = {
    "playstation": {
      "ps5-slim": {
        name: "PlayStation 5 Slim",
        description: "Experience the next generation of gaming with the sleek and compact PS5 Slim. Featuring the same powerful performance in a smaller design.",
        price: 449.99,
        comparePrice: 499.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg",
          "https://images.pexels.com/photos/18260975/pexels-photo-18260975/free-photo-of-sony-playstation-5.jpeg"
        ],
        features: [
          "40% smaller than the original PS5",
          "Ultra-high speed SSD",
          "Ray tracing support",
          "4K HDR gaming",
          "3D Audio",
          "DualSense wireless controller"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "358 × 96 × 216 mm",
          weight: "3.2 kg"
        },
        isNew: true,
        isFeatured: true
      },
      "ps5-digital-edition": {
        name: "PlayStation 5 Digital Edition",
        description: "The all-digital PS5 console delivers an all-new generation of incredible PlayStation games without a disc drive.",
        price: 399.99,
        comparePrice: 449.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/18260975/pexels-photo-18260975/free-photo-of-sony-playstation-5.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "Digital-only gaming",
          "Ultra-high speed SSD",
          "Ray tracing support",
          "4K HDR gaming",
          "3D Audio",
          "DualSense wireless controller"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: false,
        isFeatured: true
      },
      "ps5-god-of-war-bundle": {
        name: "PlayStation 5 God of War Bundle",
        description: "Experience the epic God of War Ragnarök on PS5 with this special bundle including a PS5 console and the full game.",
        price: 499.99,
        comparePrice: 559.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "PS5 Console",
          "God of War Ragnarök full game",
          "DualSense wireless controller",
          "Custom theme",
          "Digital content",
          "Ultra-high speed SSD"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: false,
        isFeatured: false
      },
      "ps5-horizon-bundle": {
        name: "PlayStation 5 Horizon Bundle",
        description: "Explore breathtaking landscapes and face fearsome machines in Horizon Forbidden West, included with this PS5 console bundle.",
        price: 499.99,
        comparePrice: 559.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "PS5 Console",
          "Horizon Forbidden West full game",
          "DualSense wireless controller",
          "Digital content",
          "4K HDR gaming",
          "3D Audio"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: false,
        isFeatured: false
      },
      "ps5-spiderman-2-bundle": {
        name: "PlayStation 5 Spider-Man 2 Bundle",
        description: "Swing through New York City with the PS5 console and Marvel's Spider-Man 2. Features a custom designed console and controller.",
        price: 499.99,
        comparePrice: 559.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "Custom Spider-Man 2 PS5 Console",
          "Spider-Man 2 full game",
          "Custom DualSense controller",
          "Digital content",
          "4K HDR gaming",
          "3D Audio"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: true,
        isFeatured: true
      },
      "ps5-fc24-bundle": {
        name: "PlayStation 5 EA FC 24 Bundle",
        description: "The ultimate football gaming experience with PS5 console and EA SPORTS FC™ 24. Includes exclusive in-game content.",
        price: 499.99,
        comparePrice: 559.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "PS5 Console",
          "EA SPORTS FC™ 24 full game",
          "DualSense wireless controller",
          "Exclusive in-game content",
          "4K HDR gaming",
          "3D Audio"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: true,
        isFeatured: false
      },
      "ps5-call-of-duty-bundle": {
        name: "PlayStation 5 Call of Duty Bundle",
        description: "Join the action with PS5 console and Call of Duty: Modern Warfare III. Includes bonus multiplayer content.",
        price: 499.99,
        comparePrice: 559.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "PS5 Console",
          "Call of Duty: Modern Warfare III",
          "DualSense wireless controller",
          "Bonus multiplayer content",
          "4K HDR gaming",
          "3D Audio"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: false,
        isFeatured: false
      },
      "ps5-final-fantasy-bundle": {
        name: "PlayStation 5 Final Fantasy XVI Bundle",
        description: "Embark on an epic journey with PS5 console and Final Fantasy XVI. Features exclusive digital content and themed controller.",
        price: 499.99,
        comparePrice: 559.99,
        category: "playstation",
        images: [
          "https://images.pexels.com/photos/7240318/pexels-photo-7240318.jpeg",
          "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg"
        ],
        features: [
          "PS5 Console",
          "Final Fantasy XVI full game",
          "Themed DualSense controller",
          "Exclusive digital content",
          "4K HDR gaming",
          "3D Audio"
        ],
        specs: {
          cpu: "x86-64-AMD Ryzen™ Zen 2",
          gpu: "AMD Radeon™ RDNA 2-based graphics engine",
          memory: "16GB GDDR6",
          storage: "825GB SSD",
          dimensions: "390 × 92 × 260 mm",
          weight: "3.4 kg"
        },
        isNew: false,
        isFeatured: false
      }
    },
    "iphone16": {
      "iphone-16-128gb-black": {
        name: "iPhone 16 128GB - Midnight Black",
        description: "The latest iPhone in sleek Midnight Black, featuring a stunning 6.1-inch Super Retina XDR display and A18 Bionic chip.",
        price: 799.99,
        comparePrice: 899.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "128GB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: true
      },
      "iphone-16-128gb-blue": {
        name: "iPhone 16 128GB - Pacific Blue",
        description: "Experience the power of iPhone 16 in stunning Pacific Blue with advanced dual-camera system.",
        price: 799.99,
        comparePrice: 899.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "128GB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-256gb-black": {
        name: "iPhone 16 256GB - Midnight Black",
        description: "More storage for your photos and apps in elegant Midnight Black finish.",
        price: 899.99,
        comparePrice: 999.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "256GB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-256gb-blue": {
        name: "iPhone 16 256GB - Pacific Blue",
        description: "Enhanced storage capacity meets beautiful Pacific Blue design.",
        price: 899.99,
        comparePrice: 999.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "256GB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-512gb-black": {
        name: "iPhone 16 512GB - Midnight Black",
        description: "Massive storage for power users in sophisticated Midnight Black.",
        price: 1099.99,
        comparePrice: 1199.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
          "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "512GB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-512gb-blue": {
        name: "iPhone 16 512GB - Pacific Blue",
        description: "Ultimate storage meets premium Pacific Blue design.",
        price: 1099.99,
        comparePrice: 1199.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
          "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "512GB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-1tb-black": {
        name: "iPhone 16 1TB - Midnight Black",
        description: "Maximum storage capacity in elegant Midnight Black finish.",
        price: 1299.99,
        comparePrice: 1399.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "1TB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-1tb-blue": {
        name: "iPhone 16 1TB - Pacific Blue",
        description: "The ultimate iPhone 16 with 1TB storage in Pacific Blue.",
        price: 1299.99,
        comparePrice: 1399.99,
        category: "iphone16",
        images: [
          "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
        ],
        features: [
          "6.1-inch Super Retina XDR display",
          "A18 Bionic chip",
          "Dual 48MP + 12MP camera system",
          "Face ID",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch Super Retina XDR",
          chip: "A18 Bionic",
          camera: "Dual 48MP + 12MP",
          storage: "1TB",
          battery: "Up to 20 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      }
    },
    "iphone16pro": {
      "iphone-16-pro-128gb": {
        name: "iPhone 16 Pro 128GB",
        description: "The ultimate iPhone with a pro camera system, ProMotion display, and A18 Pro chip. Featuring premium materials and advanced technology.",
        price: 999.99,
        comparePrice: 1099.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg",
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg"
        ],
        features: [
          "6.1-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "128GB",
          battery: "Up to 23 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: true
      },
      "iphone-16-pro-256gb": {
        name: "iPhone 16 Pro 256GB",
        description: "More storage for your pro workflow. Perfect for capturing ProRAW photos and ProRes video.",
        price: 1099.99,
        comparePrice: 1199.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.1-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "256GB",
          battery: "Up to 23 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-pro-512gb": {
        name: "iPhone 16 Pro 512GB",
        description: "Massive storage for professional users. Store your entire creative library with room to spare.",
        price: 1299.99,
        comparePrice: 1399.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.1-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "512GB",
          battery: "Up to 23 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-pro-1tb": {
        name: "iPhone 16 Pro 1TB",
        description: "The ultimate storage capacity for professionals. Perfect for videographers and content creators.",
        price: 1499.99,
        comparePrice: 1599.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.1-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.1-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "1TB",
          battery: "Up to 23 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-pro-max-128gb": {
        name: "iPhone 16 Pro Max 128GB",
        description: "The biggest iPhone display ever with advanced pro camera features and incredible battery life.",
        price: 1199.99,
        comparePrice: 1299.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.7-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.7-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "128GB",
          battery: "Up to 25 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: true
      },
      "iphone-16-pro-max-256gb": {
        name: "iPhone 16 Pro Max 256GB",
        description: "Enhanced storage on the largest iPhone display, perfect for pro users who demand the best.",
        price: 1299.99,
        comparePrice: 1399.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.7-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.7-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "256GB",
          battery: "Up to 25 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-pro-max-512gb": {
        name: "iPhone 16 Pro Max 512GB",
        description: "Massive storage combined with the largest iPhone display for ultimate productivity.",
        price: 1499.99,
        comparePrice: 1599.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.7-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.7-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "512GB",
          battery: "Up to 25 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      },
      "iphone-16-pro-max-1tb": {
        name: "iPhone 16 Pro Max 1TB",
        description: "The ultimate iPhone experience with maximum storage and the largest display.",
        price: 1699.99,
        comparePrice: 1799.99,
        category: "iphone16pro",
        images: [
          "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
          "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg"
        ],
        features: [
          "6.7-inch ProMotion XDR display",
          "A18 Pro chip",
          "Pro camera system",
          "ProRAW and ProRes video",
          "5G capable",
          "MagSafe charging"
        ],
        specs: {
          display: "6.7-inch ProMotion XDR",
          chip: "A18 Pro",
          camera: "Triple 48MP + 12MP + 12MP",
          storage: "1TB",
          battery: "Up to 25 hours video playback",
          water_resistance: "IP68"
        },
        isNew: true,
        isFeatured: false
      }
    },
    "macbook": {
      "macbook-air-13-m3-8-256": {
        name: "MacBook Air 13\" M3 8GB/256GB",
        description: "The most affordable MacBook Air featuring the M3 chip, 13-inch Retina display, and all-day battery life.",
        price: 999.99,
        comparePrice: 1199.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg",
          "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg"
        ],
        features: [
          "13.3-inch Retina display",
          "Apple M3 chip",
          "8GB unified memory",
          "256GB SSD storage",
          "Up to 18 hours battery life",
          "Two Thunderbolt ports"
        ],
        specs: {
          display: "13.3-inch Retina",
          chip: "Apple M3",
          memory: "8GB unified memory",
          storage: "256GB SSD",
          battery: "Up to 18 hours",
          weight: "2.7 pounds"
        },
        isNew: true,
        isFeatured: true
      },
      "macbook-air-13-m3-16-512": {
        name: "MacBook Air 13\" M3 16GB/512GB",
        description: "Enhanced memory and storage for better multitasking and more space for your files.",
        price: 1299.99,
        comparePrice: 1499.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
          "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg"
        ],
        features: [
          "13.3-inch Retina display",
          "Apple M3 chip",
          "16GB unified memory",
          "512GB SSD storage",
          "Up to 18 hours battery life",
          "Two Thunderbolt ports"
        ],
        specs: {
          display: "13.3-inch Retina",
          chip: "Apple M3",
          memory: "16GB unified memory",
          storage: "512GB SSD",
          battery: "Up to 18 hours",
          weight: "2.7 pounds"
        },
        isNew: true,
        isFeatured: false
      },
      "macbook-air-15-m3-8-256": {
        name: "MacBook Air 15\" M3 8GB/256GB",
        description: "The most popular MacBook Air with a spacious 15-inch Retina display and powerful M3 performance.",
        price: 1199.99,
        comparePrice: 1399.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
          "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg"
        ],
        features: [
          "15.3-inch Retina display",
          "Apple M3 chip",
          "8GB unified memory",
          "256GB SSD storage",
          "Up to 18 hours battery life",
          "Two Thunderbolt ports"
        ],
        specs: {
          display: "15.3-inch Retina",
          chip: "Apple M3",
          memory: "8GB unified memory",
          storage: "256GB SSD",
          battery: "Up to 18 hours",
          weight: "3.3 pounds"
        },
        isNew: true,
        isFeatured: false
      },
      "macbook-air-15-m3-16-512": {
        name: "MacBook Air 15\" M3 16GB/512GB",
        description: "More memory and storage with a larger display for enhanced productivity.",
        price: 1499.99,
        comparePrice: 1699.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
          "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg"
        ],
        features: [
          "15.3-inch Retina display",
          "Apple M3 chip",
          "16GB unified memory",
          "512GB SSD storage",
          "Up to 18 hours battery life",
          "Two Thunderbolt ports"
        ],
        specs: {
          display: "15.3-inch Retina",
          chip: "Apple M3",
          memory: "16GB unified memory",
          storage: "512GB SSD",
          battery: "Up to 18 hours",
          weight: "3.3 pounds"
        },
        isNew: true,
        isFeatured: true
      },
      "macbook-pro-14-m3-pro-18-512": {
        name: "MacBook Pro 14\" M3 Pro 18GB/512GB",
        description: "Professional-grade performance with M3 Pro chip, 14-inch Liquid Retina XDR display, and advanced connectivity.",
        price: 1999.99,
        comparePrice: 2199.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg"
        ],
        features: [
          "14.2-inch Liquid Retina XDR display",
          "Apple M3 Pro chip",
          "18GB unified memory",
          "512GB SSD storage",
          "Up to 22 hours battery life",
          "Three Thunderbolt ports"
        ],
        specs: {
          display: "14.2-inch Liquid Retina XDR",
          chip: "Apple M3 Pro",
          memory: "18GB unified memory",
          storage: "512GB SSD",
          battery: "Up to 22 hours",
          weight: "3.5 pounds"
        },
        isNew: true,
        isFeatured: true
      },
      "macbook-pro-14-m3-pro-36-1tb": {
        name: "MacBook Pro 14\" M3 Pro 36GB/1TB",
        description: "Enhanced memory and storage for demanding professional workflows.",
        price: 2499.99,
        comparePrice: 2699.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg",
          "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
        ],
        features: [
          "14.2-inch Liquid Retina XDR display",
          "Apple M3 Pro chip",
          "36GB unified memory",
          "1TB SSD storage",
          "Up to 22 hours battery life",
          "Three Thunderbolt ports"
        ],
        specs: {
          display: "14.2-inch Liquid Retina XDR",
          chip: "Apple M3 Pro",
          memory: "36GB unified memory",
          storage: "1TB SSD",
          battery: "Up to 22 hours",
          weight: "3.5 pounds"
        },
        isNew: true,
        isFeatured: false
      },
      "macbook-pro-16-m3-max-32-1tb": {
        name: "MacBook Pro 16\" M3 Max 32GB/1TB",
        description: "Ultimate pro performance with M3 Max chip, 16-inch Liquid Retina XDR display, and exceptional battery life.",
        price: 2999.99,
        comparePrice: 3199.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg",
          "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
        ],
        features: [
          "16.2-inch Liquid Retina XDR display",
          "Apple M3 Max chip",
          "32GB unified memory",
          "1TB SSD storage",
          "Up to 22 hours battery life",
          "Three Thunderbolt ports"
        ],
        specs: {
          display: "16.2-inch Liquid Retina XDR",
          chip: "Apple M3 Max",
          memory: "32GB unified memory",
          storage: "1TB SSD",
          battery: "Up to 22 hours",
          weight: "4.7 pounds"
        },
        isNew: true,
        isFeatured: false
      },
      "macbook-pro-16-m3-max-64-2tb": {
        name: "MacBook Pro 16\" M3 Max 64GB/2TB",
        description: "Maximum performance with enhanced memory and storage for the most demanding professional needs.",
        price: 3499.99,
        comparePrice: 3699.99,
        category: "macbook",
        images: [
          "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg"
        ],
        features: [
          "16.2-inch Liquid Retina XDR display",
          "Apple M3 Max chip",
          "64GB unified memory",
          "2TB SSD storage",
          "Up to 22 hours battery life",
          "Three Thunderbolt ports"
        ],
        specs: {
          display: "16.2-inch Liquid Retina XDR",
          chip: "Apple M3 Max",
          memory: "64GB unified memory",
          storage: "2TB SSD",
          battery: "Up to 22 hours",
          weight: "4.7 pounds"
        },
        isNew: true,
        isFeatured: false
      }
    }
  } as const;

  const selectedCategory = products[category as keyof typeof products];
  if (!selectedCategory) {
    return undefined;
  }

  return selectedCategory[slug as keyof typeof selectedCategory] || undefined;
}

export async function generateStaticParams() {
  const products = {
    "playstation": [
      "ps5-slim",
      "ps5-digital-edition",
      "ps5-god-of-war-bundle",
      "ps5-horizon-bundle",
      "ps5-spiderman-2-bundle",
      "ps5-fc24-bundle",
      "ps5-call-of-duty-bundle",
      "ps5-final-fantasy-bundle"
    ],
    "iphone16": [
      "iphone-16-128gb-black",
      "iphone-16-128gb-blue",
      "iphone-16-256gb-black",
      "iphone-16-256gb-blue",
      "iphone-16-512gb-black",
      "iphone-16-512gb-blue",
      "iphone-16-1tb-black",
      "iphone-16-1tb-blue"
    ],
    "iphone16pro": [
      "iphone-16-pro-128gb",
      "iphone-16-pro-256gb",
      "iphone-16-pro-512gb",
      "iphone-16-pro-1tb",
      "iphone-16-pro-max-128gb",
      "iphone-16-pro-max-256gb",
      "iphone-16-pro-max-512gb",
      "iphone-16-pro-max-1tb"
    ],
    "macbook": [
      "macbook-air-13-m3-8-256",
      "macbook-air-13-m3-16-512",
      "macbook-air-15-m3-8-256",
      "macbook-air-15-m3-16-512",
      "macbook-pro-14-m3-pro-18-512",
      "macbook-pro-14-m3-pro-36-1tb",
      "macbook-pro-16-m3-max-32-1tb",
      "macbook-pro-16-m3-max-64-2tb"
    ]
  };

  const paths = Object.entries(products).flatMap(([category, slugs]) =>
    slugs.map((slug) => ({
      category,
      slug,
    }))
  );

  return paths;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.category, params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} category={params.category} slug={params.slug} />;
}