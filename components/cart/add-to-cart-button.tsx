"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  productId: string;
  className?: string;
}

export function AddToCartButton({ productId, className }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addItem(productId);
    toast.success("Added to cart", {
      description: "Item has been added to your cart",
      action: {
        label: "View Cart",
        onClick: () => router.push("/cart")
      }
    });
  };

  return (
    <Button 
      onClick={handleAddToCart}
      className={className}
      size="lg"
    >
      <ShoppingCart className="w-4 h-4 mr-2" />
      Add to Cart
    </Button>
  );
}