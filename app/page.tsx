import HeroSection from '@/components/sections/hero';
import FeaturedProducts from '@/components/sections/featured-products';
import Categories from '@/components/sections/categories';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Newsletter from '@/components/sections/newsletter';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <Newsletter />
    </main>
  );
}