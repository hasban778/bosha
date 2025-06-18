"use client";

import { useCart } from "@/context/cart-context";

export function CartQuantityBadge() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {totalItems}
    </span>
  );
}