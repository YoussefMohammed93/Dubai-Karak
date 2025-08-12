import HeroSection from "@/components/home-page/hero-section";
import GallerySection from "@/components/home-page/gallery-section";
import ProductsMenuSection from "@/components/menu-page/products-menu-section";
import ProductsServicesSection from "@/components/home-page/products-services-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <ProductsMenuSection />
      <ProductsServicesSection />
    </main>
  );
}
