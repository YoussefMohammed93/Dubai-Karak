import { Header } from "@/components/header";
import HeroSection from "@/components/home-page/hero-section";
import AboutSection from "@/components/home-page/about-section";
import ProductsServicesSection from "@/components/home-page/products-services-section";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductsServicesSection />
      <AboutSection />
    </main>
  );
}
