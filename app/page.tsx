import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CategoriesSection } from "@/components/sections/categories-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}