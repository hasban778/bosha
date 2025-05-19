"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Minus, Plus, X, Bitcoin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Cart() {
  const { items, removeItem, updateQuantity } = useCart();
  const [open, setOpen] = React.useState(false);
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="default" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full h-5 w-5 text-xs flex items-center justify-center">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg sm:pr-6">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({items.length})</SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
            <div className="text-xl font-medium text-muted-foreground">Your cart is empty</div>
            <SheetTrigger asChild>
              <Button variant="link" size="sm" className="text-sm text-muted-foreground">
                Continue shopping
              </Button>
            </SheetTrigger>
          </div>
        ) : (
          <>
            <div className="flex flex-1 flex-col gap-4 overflow-auto py-6">
              {items.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="flex items-start justify-between gap-4 pr-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="absolute object-cover"
                        />
                      </div>
                      <div className="flex flex-col self-start">
                        <Link
                          href={`/products/${item.category}/${item.slug}`}
                          className="line-clamp-1 text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                        <span className="line-clamp-1 text-sm text-muted-foreground">
                          ${item.price.toLocaleString()}
                        </span>
                        <div className="mt-2 flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Remove one item</span>
                          </Button>
                          <span className="text-sm tabular-nums">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Add one item</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="line-clamp-1 text-sm font-medium">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                  <div className="border-b" />
                </div>
              ))}
            </div>
            <div className="space-y-4 pr-6">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${total.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Button asChild className="gap-2">
                    <Link href="/checkout">
                      Checkout <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/checkout">
                      <Bitcoin className="h-4 w-4" />
                      Pay with Bitcoin
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}