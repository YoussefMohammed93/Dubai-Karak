import type { Metadata } from "next";

import ContactHeroSection from "@/components/contact-page/contact-hero-section";
import ContactInfoSection from "@/components/contact-page/contact-info-section";

export const metadata: Metadata = {
  title: "Contact Us - Dubai Karak | Get in Touch",
  description:
    "Contact Dubai Karak for inquiries about our premium street-style Karak tea. Reach out to us for locations, catering, partnerships, or any questions. Experience the taste that will leave you saying Waaaw!",
  openGraph: {
    title: "Contact Us - Dubai Karak | Get in Touch",
    description:
      "Contact Dubai Karak for inquiries about our premium street-style Karak tea. Reach out to us for locations, catering, partnerships, or any questions. Experience the taste that will leave you saying Waaaw!",
    type: "website",
  },
  keywords: [
    "Dubai Karak contact",
    "contact Dubai Karak",
    "Karak tea inquiries",
    "Dubai tea contact",
    "premium Karak contact",
    "street-style tea contact",
    "Dubai Karak locations",
    "Karak catering Dubai",
    "Dubai tea business contact",
  ],
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactInfoSection />
    </main>
  );
}
