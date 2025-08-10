import type { Metadata } from "next";

import MenuHeroSection from "@/components/menu-page/menu-hero-section";
import ProductsMenuSection from "@/components/menu-page/products-menu-section";

export const metadata: Metadata = {
  title: "Menu - Dubai Karak | Premium Street-Style Karak Tea",
  description:
    "Discover our signature Dubai Karak collection featuring authentic street-style tea crafted with finest Indian tea leaves and purified water. Experience the taste that will leave you saying Waaaw!",
  openGraph: {
    title: "Menu - Dubai Karak | Premium Street-Style Karak Tea",
    description:
      "Discover our signature Dubai Karak collection featuring authentic street-style tea crafted with finest Indian tea leaves and purified water. Experience the taste that will leave you saying Waaaw!",
    type: "website",
  },
};

export default function MenuPage() {
  return (
    <main>
      <MenuHeroSection />
      <ProductsMenuSection />
    </main>
  );
}
