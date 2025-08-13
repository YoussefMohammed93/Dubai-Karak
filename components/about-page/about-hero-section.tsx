"use client";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about.jpg"
        alt="About Dubai Karak - Premium street-style Karak tea background"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        priority
      />
      {/* About Us Text */}
      <div className="relative z-10 flex items-center justify-center pt-10 sm:pt-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center font-[family-name:var(--font-merienda)] drop-shadow-2xl">
          About Us
        </h1>
      </div>
    </section>
  );
}
