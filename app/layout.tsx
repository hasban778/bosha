import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClassicBuy - The Lowest Prices on Tech Products',
  description: 'Shop the latest PlayStation 5, iPhone 16, iPhone 16 Pro, and MacBook laptops at the lowest prices. We accept Bitcoin payments and offer guest checkout.',
  metadataBase: new URL('https://classicbuy.shop'),
  openGraph: {
    title: 'ClassicBuy - The Lowest Prices on Tech Products',
    description: 'Shop the latest PlayStation 5, iPhone 16, iPhone 16 Pro, and MacBook laptops at the lowest prices. We accept Bitcoin payments and offer guest checkout.',
    url: 'https://classicbuy.shop',
    siteName: 'ClassicBuy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClassicBuy - The Lowest Prices on Tech Products',
    description: 'Shop the latest PlayStation 5, iPhone 16, iPhone 16 Pro, and MacBook laptops at the lowest prices. We accept Bitcoin payments and offer guest checkout.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}