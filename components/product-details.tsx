'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Bitcoin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/lib/store"

interface Product {
  name: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  features?: string[];
  specs?: Record<string, string>;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductDetailsProps {
  product: Product;
  category: string;
  slug: string;
}

export function ProductDetails({ product, category, slug }: ProductDetailsProps) {
  const { toast } = useToast();
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: category,
      slug: slug,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discount = product.comparePrice 
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100) 
    : 0;

  const formattedPrice = product.price?.toLocaleString() || '0';
  const formattedComparePrice = product.comparePrice?.toLocaleString();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            {product.images?.[0] && (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute right-2 top-2 flex flex-col gap-2">
              {product.isNew && (
                <Badge variant="default">New</Badge>
              )}
              {discount > 0 && (
                <Badge variant="sale">-{discount}%</Badge>
              )}
              {product.isFeatured && (
                <Badge variant="secondary">Featured</Badge>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images?.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${formattedPrice}</span>
              {formattedComparePrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${formattedComparePrice}
                </span>
              )}
            </div>
            <Badge variant="price" className="py-1">Lowest Price</Badge>
          </div>

          <div className="flex items-center gap-4">
            <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <div className="flex items-center gap-2 rounded-lg border px-4 py-2">
              <Bitcoin className="h-5 w-5 text-chart-1" />
              <span className="text-sm">Crypto Accepted</span>
            </div>
          </div>

          <div className="space-y-4 rounded-lg bg-muted/30 p-6">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="grid gap-2">
              {product.features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-chart-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-lg bg-card p-6 border">
            <h2 className="text-xl font-semibold">Technical Specifications</h2>
            <dl className="grid gap-4">
              {Object.entries(product.specs || {}).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2">
                  <dt className="font-medium capitalize">{key.replace('_', ' ')}</dt>
                  <dd className="text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}