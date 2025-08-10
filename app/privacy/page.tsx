import PrivacyContentSection from "@/components/privacy-page/privacy-content-section";
import PrivacyHeroSection from "@/components/privacy-page/privacy-hero-section";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy - Dubai Karak | Your Data Protection & Privacy Rights",
  description:
    "Learn how Dubai Karak protects your privacy and personal data. Comprehensive privacy policy covering data collection, cookies, user rights, and contact information for privacy inquiries.",
  keywords: [
    "privacy policy",
    "data protection",
    "Dubai Karak privacy",
    "user rights",
    "cookies",
    "personal data",
  ],
  openGraph: {
    title: "Privacy Policy - Dubai Karak",
    description:
      "Learn how Dubai Karak protects your privacy and personal data. Comprehensive privacy policy covering data collection, cookies, user rights, and contact information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyHeroSection />
      <PrivacyContentSection />
    </main>
  );
}
