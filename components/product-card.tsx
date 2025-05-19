"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Bitcoin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/lib/store";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    comparePrice?: number;
    imageSrc: string;
    category: string;
    slug: string;
    isNew?: boolean;
    isFeatured?: boolean;
  };
}

export function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = React.useState(false);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageSrc,
      category: product.category,
      slug: product.slug,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discount = product.comparePrice 
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100) 
    : 0;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <Link href={`/products/${product.category}/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute right-2 top-2 z-10 flex flex-col gap-2">
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
          
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )} />
        </div>
        
        <div className="p-4">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="line-clamp-1 text-lg font-medium">{product.name}</h3>
            <div className="flex items-center">
              <Bitcoin className="h-4 w-4 text-chart-2 mr-1" />
              <span className="text-xs text-muted-foreground">Crypto</span>
            </div>
          </div>
          
          <p className="line-clamp-2 text-sm text-muted-foreground mb-3">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold">${product.price.toLocaleString()}</span>
              {product.comparePrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.comparePrice.toLocaleString()}
                </span>
              )}
            </div>
            
            <Badge variant="price" className="py-1">Lowest Price</Badge>
          </div>
          
          <div className={cn(
            "mt-4 flex items-center justify-between gap-4 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <Button 
              variant="default" 
              className="w-full gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}