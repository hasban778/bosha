import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Bitcoin, ShoppingCart } from "lucide-react";
import { CartProvider } from "@/context/cart-context";
import { CartQuantityBadge } from "@/components/cart/cart-quantity-badge";
import { Toaster } from "sonner";
import "./globals.css";

const defaultUrl = "https://classicbuy.shop";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ClassicBuy - Unbeatable Tech Deals",
  description: "The best prices on iPhones, PlayStations, and MacBooks. Now accepting Bitcoin!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <CartProvider>
            <Toaster />
            <main className="min-h-screen flex flex-col items-center">
              <header className="w-full flex justify-center border-b border-b-foreground/10">
                <div className="w-full max-w-7xl flex justify-between items-center p-4 px-6">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                      <Bitcoin className="h-6 w-6 text-yellow-400" />
                      <span>ClassicBuy</span>
                    </Link>
                  </div>
                  <nav className="hidden md:flex items-center gap-6">
                    <Link href="/products" className="text-sm hover:text-yellow-400 transition-colors">Products</Link>
                    <Link href="/about" className="text-sm hover:text-yellow-400 transition-colors">About</Link>
                    <Link href="/contact" className="text-sm hover:text-yellow-400 transition-colors">Contact</Link>
                  </nav>
                  <div className="flex items-center gap-4">
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                    <Link href="/cart" className="relative">
                      <ShoppingCart className="h-6 w-6" />
                      <CartQuantityBadge />
                    </Link>
                    <ThemeSwitcher />
                  </div>
                </div>
              </header>

              <div className="flex-1 w-full flex flex-col">
                {children}
              </div>

              <footer className="w-full border-t border-foreground/10 bg-card">
                <div className="max-w-7xl mx-auto py-12 px-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                      <Link href="/" className="flex items-center gap-2">
                        <Bitcoin className="h-6 w-6 text-yellow-400" />
                        <span className="font-bold">ClassicBuy</span>
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        The best prices on tech. Guaranteed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Quick Links</h3>
                      <div className="flex flex-col gap-2">
                        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">Products</Link>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Categories</h3>
                      <div className="flex flex-col gap-2">
                        <Link href="/category/iphone" className="text-sm text-muted-foreground hover:text-foreground">iPhones</Link>
                        <Link href="/category/playstation" className="text-sm text-muted-foreground hover:text-foreground">PlayStation</Link>
                        <Link href="/category/macbook" className="text-sm text-muted-foreground hover:text-foreground">MacBooks</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Connect</h3>
                      <div className="flex flex-col gap-2">
                        <Link href="https://twitter.com/classicbuy" className="text-sm text-muted-foreground hover:text-foreground">Twitter</Link>
                        <Link href="https://instagram.com/classicbuy" className="text-sm text-muted-foreground hover:text-foreground">Instagram</Link>
                        <Link href="https://facebook.com/classicbuy" className="text-sm text-muted-foreground hover:text-foreground">Facebook</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                      © 2025 ClassicBuy. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                      <Bitcoin className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">Now accepting Bitcoin</span>
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
