import type { Metadata } from "next";

import AboutHeroSection from "@/components/about-page/about-hero-section";
import BrandStorySection from "@/components/about-page/brand-story-section";
import BrandPromiseSection from "@/components/about-page/brand-promise-section";
import MissionVisionSection from "@/components/about-page/mission-vision-section";

export const metadata: Metadata = {
  title: "About Us - Dubai Karak | Premium Street-Style Karak Tea",
  description:
    "Discover the Dubai Karak story - from Dubai's bustling streets to your heart. Learn about our premium tea business using finest Indian tea leaves, traditional brewing methods, and our commitment to authentic street-style Karak tea.",
  keywords:
    "Dubai Karak, about us, premium tea, Indian tea leaves, traditional brewing, street-style Karak, authentic tea, Dubai tea culture",
  openGraph: {
    title: "About Dubai Karak - Premium Street-Style Karak Tea",
    description:
      "Experience the authentic taste of Dubai's beloved Karak tea, crafted with finest Indian tea leaves and purified water. The first sip will take you far, leaving you with just one word: Waaaw!",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <BrandStorySection />
      <MissionVisionSection />
      <BrandPromiseSection />
    </main>
  );
}
