import type { Metadata } from "next";

import TermsHeroSection from "@/components/terms-page/terms-hero-section";
import TermsContentSection from "@/components/terms-page/terms-content-section";

export const metadata: Metadata = {
  title: "Terms of Service - Dubai Karak | Legal Terms & Conditions",
  description:
    "Read Dubai Karak's comprehensive Terms of Service covering user agreements, service usage, liability limitations, and legal policies for our premium Karak tea services.",
  keywords: [
    "terms of service",
    "legal terms",
    "Dubai Karak terms",
    "user agreement",
    "service conditions",
    "liability",
  ],
  openGraph: {
    title: "Terms of Service - Dubai Karak",
    description:
      "Read Dubai Karak's comprehensive Terms of Service covering user agreements, service usage, liability limitations, and legal policies.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <TermsHeroSection />
      <TermsContentSection />
    </main>
  );
}
