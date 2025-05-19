import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";

const productsByCategory = {
  playstation: {
    title: "PlayStation 5",
    description: "Experience the next generation of gaming with lightning-fast loading, haptic feedback, adaptive triggers, and stunning 4K graphics.",
    heroImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    products: [
      {
        id: "ps5-slim",
        name: "PlayStation 5 Slim",
        description: "The sleek and compact version of the PS5, featuring the same powerful performance in a smaller design.",
        price: 449.99,
        comparePrice: 499.99,
        imageSrc: "https://images.pexels.com/photos/12956707/pexels-photo-12956707.jpeg",
        category: "playstation",
        slug: "ps5-slim",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "ps5-digital",
        name: "PlayStation 5 Digital Edition",
        description: "Experience next-gen gaming without the disc drive. Download and play digital games instantly.",
        price: 399.99,
        comparePrice: 449.99,
        imageSrc: "https://images.pexels.com/photos/18260975/pexels-photo-18260975/free-photo-of-sony-playstation-5.jpeg",
        category: "playstation",
        slug: "ps5-digital-edition",
        isNew: false,
        isFeatured: true,
      },
      {
        id: "ps5-god-of-war",
        name: "PlayStation 5 God of War Bundle",
        description: "PS5 console bundled with the epic God of War Ragnarök game. Experience the award-winning action-adventure.",
        price: 499.99,
        comparePrice: 559.99,
        imageSrc: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
        category: "playstation",
        slug: "ps5-god-of-war-bundle",
        isNew: false,
        isFeatured: false,
      },
      {
        id: "ps5-horizon",
        name: "PlayStation 5 Horizon Bundle",
        description: "PS5 console with Horizon Forbidden West. Explore breathtaking landscapes in stunning 4K resolution.",
        price: 499.99,
        comparePrice: 559.99,
        imageSrc: "https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg",
        category: "playstation",
        slug: "ps5-horizon-bundle",
        isNew: false,
        isFeatured: false,
      },
      {
        id: "ps5-spiderman-2",
        name: "PlayStation 5 Spider-Man 2 Bundle",
        description: "Swing through New York City with the PS5 console and Marvel's Spider-Man 2. Features a custom designed console and controller.",
        price: 499.99,
        comparePrice: 559.99,
        imageSrc: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
        category: "playstation",
        slug: "ps5-spiderman-2-bundle",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "ps5-fc24",
        name: "PlayStation 5 EA FC 24 Bundle",
        description: "The ultimate football gaming experience with PS5 console and EA SPORTS FC™ 24. Includes exclusive in-game content.",
        price: 499.99,
        comparePrice: 559.99,
        imageSrc: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        category: "playstation",
        slug: "ps5-fc24-bundle",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "ps5-call-of-duty",
        name: "PlayStation 5 Call of Duty Bundle",
        description: "Join the action with PS5 console and Call of Duty: Modern Warfare III. Includes bonus multiplayer content.",
        price: 499.99,
        comparePrice: 559.99,
        imageSrc: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg",
        category: "playstation",
        slug: "ps5-call-of-duty-bundle",
        isNew: false,
        isFeatured: false,
      },
      {
        id: "ps5-final-fantasy",
        name: "PlayStation 5 Final Fantasy XVI Bundle",
        description: "Embark on an epic journey with PS5 console and Final Fantasy XVI. Features exclusive digital content and themed controller.",
        price: 499.99,
        comparePrice: 559.99,
        imageSrc: "https://images.pexels.com/photos/7240318/pexels-photo-7240318.jpeg",
        category: "playstation",
        slug: "ps5-final-fantasy-bundle",
        isNew: false,
        isFeatured: false,
      }
    ],
  },
  iphone16: {
    title: "iPhone 16",
    description: "Experience the future of iPhone with our most advanced chip, stunning camera system, and beautiful design. Available in multiple storage options and colors.",
    heroImage: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
    products: [
      {
        id: "iphone-16-128gb-black",
        name: "iPhone 16 128GB - Midnight Black",
        description: "The latest iPhone in sleek Midnight Black, featuring a stunning 6.1-inch Super Retina XDR display and A18 Bionic chip.",
        price: 799.99,
        comparePrice: 899.99,
        imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
        category: "iphone16",
        slug: "iphone-16-128gb-black",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "iphone-16-128gb-blue",
        name: "iPhone 16 128GB - Pacific Blue",
        description: "Experience the power of iPhone 16 in stunning Pacific Blue with advanced dual-camera system.",
        price: 799.99,
        comparePrice: 899.99,
        imageSrc: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
        category: "iphone16",
        slug: "iphone-16-128gb-blue",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-256gb-black",
        name: "iPhone 16 256GB - Midnight Black",
        description: "More storage for your photos and apps in elegant Midnight Black finish.",
        price: 899.99,
        comparePrice: 999.99,
        imageSrc: "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
        category: "iphone16",
        slug: "iphone-16-256gb-black",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-256gb-blue",
        name: "iPhone 16 256GB - Pacific Blue",
        description: "Enhanced storage capacity meets beautiful Pacific Blue design.",
        price: 899.99,
        comparePrice: 999.99,
        imageSrc: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
        category: "iphone16",
        slug: "iphone-16-256gb-blue",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-512gb-black",
        name: "iPhone 16 512GB - Midnight Black",
        description: "Massive storage for power users in sophisticated Midnight Black.",
        price: 1099.99,
        comparePrice: 1199.99,
        imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
        category: "iphone16",
        slug: "iphone-16-512gb-black",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-512gb-blue",
        name: "iPhone 16 512GB - Pacific Blue",
        description: "Ultimate storage meets premium Pacific Blue design.",
        price: 1099.99,
        comparePrice: 1199.99,
        imageSrc: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
        category: "iphone16",
        slug: "iphone-16-512gb-blue",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-1tb-black",
        name: "iPhone 16 1TB - Midnight Black",
        description: "Maximum storage capacity in elegant Midnight Black finish.",
        price: 1299.99,
        comparePrice: 1399.99,
        imageSrc: "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
        category: "iphone16",
        slug: "iphone-16-1tb-black",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-1tb-blue",
        name: "iPhone 16 1TB - Pacific Blue",
        description: "The ultimate iPhone 16 with 1TB storage in Pacific Blue.",
        price: 1299.99,
        comparePrice: 1399.99,
        imageSrc: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
        category: "iphone16",
        slug: "iphone-16-1tb-blue",
        isNew: true,
        isFeatured: false,
      }
    ],
  },
  iphone16pro: {
    title: "iPhone 16 Pro",
    description: "Pro. Beyond. Featuring the most powerful camera system ever in an iPhone, the A18 Pro chip, and a stunning ProMotion XDR display with Always-On technology.",
    heroImage: "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg",
    products: [
      {
        id: "iphone-16-pro-128",
        name: "iPhone 16 Pro 128GB",
        description: "The ultimate iPhone with a pro camera system, ProMotion display, and A18 Pro chip. Featuring premium materials and advanced technology.",
        price: 999.99,
        comparePrice: 1099.99,
        imageSrc: "https://images.pexels.com/photos/16005007/pexels-photo-16005007/free-photo-of-iphone-14-pro-in-deep-purple.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-128gb",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "iphone-16-pro-256",
        name: "iPhone 16 Pro 256GB",
        description: "More storage for your pro workflow. Perfect for capturing ProRAW photos and ProRes video with the advanced camera system.",
        price: 1099.99,
        comparePrice: 1199.99,
        imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-256gb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-pro-512",
        name: "iPhone 16 Pro 512GB",
        description: "Massive storage for professional users. Store your entire creative library with room to spare.",
        price: 1299.99,
        comparePrice: 1399.99,
        imageSrc: "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-512gb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-pro-1tb",
        name: "iPhone 16 Pro 1TB",
        description: "The ultimate storage capacity for professionals. Perfect for videographers and content creators.",
        price: 1499.99,
        comparePrice: 1599.99,
        imageSrc: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-1tb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-pro-max-128",
        name: "iPhone 16 Pro Max 128GB",
        description: "The biggest iPhone display ever with advanced pro camera features and incredible battery life.",
        price: 1199.99,
        comparePrice: 1299.99,
        imageSrc: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-max-128gb",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "iphone-16-pro-max-256",
        name: "iPhone 16 Pro Max 256GB",
        description: "Enhanced storage on the largest iPhone display, perfect for pro users who demand the best.",
        price: 1299.99,
        comparePrice: 1399.99,
        imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-max-256gb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-pro-max-512",
        name: "iPhone 16 Pro Max 512GB",
        description: "Massive storage combined with the largest iPhone display for ultimate productivity.",
        price: 1499.99,
        comparePrice: 1599.99,
        imageSrc: "https://images.pexels.com/photos/632722/pexels-photo-632722.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-max-512gb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "iphone-16-pro-max-1tb",
        name: "iPhone 16 Pro Max 1TB",
        description: "The ultimate iPhone experience with maximum storage and the largest display.",
        price: 1699.99,
        comparePrice: 1799.99,
        imageSrc: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
        category: "iphone16pro",
        slug: "iphone-16-pro-max-1tb",
        isNew: true,
        isFeatured: false,
      }
    ],
  },
  macbook: {
    title: "MacBook",
    description: "Incredibly powerful laptops for everyone. From students to professionals, find the perfect MacBook with revolutionary Apple silicon.",
    heroImage: "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg",
    products: [
      {
        id: "macbook-air-13-m3-8-256",
        name: "MacBook Air 13\" M3 8GB/256GB",
        description: "The most affordable MacBook Air featuring the M3 chip, 13-inch Retina display, and all-day battery life.",
        price: 999.99,
        comparePrice: 1199.99,
        imageSrc: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-macbook-air-15-on-a-desk.jpeg",
        category: "macbook",
        slug: "macbook-air-13-m3-8-256",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "macbook-air-13-m3-16-512",
        name: "MacBook Air 13\" M3 16GB/512GB",
        description: "Enhanced memory and storage for better multitasking and more space for your files.",
        price: 1299.99,
        comparePrice: 1499.99,
        imageSrc: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
        category: "macbook",
        slug: "macbook-air-13-m3-16-512",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "macbook-air-15-m3-8-256",
        name: "MacBook Air 15\" M3 8GB/256GB",
        description: "The most popular MacBook Air with a spacious 15-inch Retina display and powerful M3 performance.",
        price: 1199.99,
        comparePrice: 1399.99,
        imageSrc: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
        category: "macbook",
        slug: "macbook-air-15-m3-8-256",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "macbook-air-15-m3-16-512",
        name: "MacBook Air 15\" M3 16GB/512GB",
        description: "More memory and storage with a larger display for enhanced productivity.",
        price: 1499.99,
        comparePrice: 1699.99,
        imageSrc: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
        category: "macbook",
        slug: "macbook-air-15-m3-16-512",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "macbook-pro-14-m3-pro-18-512",
        name: "MacBook Pro 14\" M3 Pro 18GB/512GB",
        description: "Professional-grade performance with M3 Pro chip, 14-inch Liquid Retina XDR display, and advanced connectivity.",
        price: 1999.99,
        comparePrice: 2199.99,
        imageSrc: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
        category: "macbook",
        slug: "macbook-pro-14-m3-pro-18-512",
        isNew: true,
        isFeatured: true,
      },
      {
        id: "macbook-pro-14-m3-pro-36-1tb",
        name: "MacBook Pro 14\" M3 Pro 36GB/1TB",
        description: "Enhanced memory and storage for demanding professional workflows.",
        price: 2499.99,
        comparePrice: 2699.99,
        imageSrc: "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg",
        category: "macbook",
        slug: "macbook-pro-14-m3-pro-36-1tb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "macbook-pro-16-m3-max-32-1tb",
        name: "MacBook Pro 16\" M3 Max 32GB/1TB",
        description: "Ultimate pro performance with M3 Max chip, 16-inch Liquid Retina XDR display, and exceptional battery life.",
        price: 2999.99,
        comparePrice: 3199.99,
        imageSrc: "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg",
        category: "macbook",
        slug: "macbook-pro-16-m3-max-32-1tb",
        isNew: true,
        isFeatured: false,
      },
      {
        id: "macbook-pro-16-m3-max-64-2tb",
        name: "MacBook Pro 16\" M3 Max 64GB/2TB",
        description: "Maximum performance with enhanced memory and storage for the most demanding professional needs.",
        price: 3499.99,
        comparePrice: 3699.99,
        imageSrc: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
        category: "macbook",
        slug: "macbook-pro-16-m3-max-64-2tb",
        isNew: true,
        isFeatured: false,
      }
    ],
  },
} as const;

interface CategoryPageProps {
  params: {
    category: keyof typeof productsByCategory;
  };
}

export async function generateStaticParams() {
  return Object.keys(productsByCategory).map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryData = productsByCategory[params.category];

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <Image
            src={categoryData.heroImage}
            alt={categoryData.title}
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {categoryData.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              {categoryData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Available Models</h2>
            <p className="mt-1 text-muted-foreground">
              Choose the perfect {categoryData.title} for your needs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categoryData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}