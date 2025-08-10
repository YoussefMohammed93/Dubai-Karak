import HeroSection from "@/components/home-page/hero-section";
import AboutSection from "@/components/home-page/about-section";
import ProductsMenuSection from "@/components/menu-page/products-menu-section";
import ProductsServicesSection from "@/components/home-page/products-services-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductsServicesSection />
      <ProductsMenuSection />
      <AboutSection />
    </main>
  );
}
