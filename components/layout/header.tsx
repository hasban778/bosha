"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Search, Bitcoin, User, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Cart } from "@/components/cart";
import { createClient } from "@/utils/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const navigation = [
  { name: "PlayStation 5", href: "/products/playstation" },
  { name: "iPhone 16", href: "/products/iphone16" },
  { name: "iPhone 16 Pro", href: "/products/iphone16pro" },
  { name: "MacBook", href: "/products/macbook" },
  { name: "Deals", href: "/deals" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [user, setUser] = React.useState<SupabaseUser | null>(null);
  const router = useRouter();
  const supabase = createClient();
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" 
        : "bg-transparent"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-chart-1" />
            <span className="font-bold text-xl">ClassicBuy</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 lg:hidden">
          <Cart />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2">
                  <Bitcoin className="h-8 w-8 text-chart-1" />
                  <span className="font-bold text-xl">ClassicBuy</span>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </Sheet>
              </div>
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2.5 px-4 rounded-md hover:bg-muted transition duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="py-6">
                  <div className="relative flex items-center">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search..." 
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
                {user ? (
                  <div className="space-y-4 pt-4 border-t">
                    <Link
                      href="/account"
                      className="block py-2.5 px-4 rounded-md hover:bg-muted transition duration-200"
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left py-2.5 px-4 rounded-md hover:bg-muted transition duration-200 text-destructive"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 pt-4 border-t">
                    <Link
                      href="/login"
                      className="block py-2.5 px-4 rounded-md hover:bg-muted transition duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/login/signup"
                      className="block py-2.5 px-4 rounded-md hover:bg-muted transition duration-200"
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:text-primary/80 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 w-full"
            />
          </div>
          
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {user ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/account" className="w-full cursor-pointer">
                      Account Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="text-destructive cursor-pointer"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="w-full cursor-pointer">
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/login/signup" className="w-full cursor-pointer">
                      Create Account
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Cart />
        </div>
      </nav>
    </header>
  );
}