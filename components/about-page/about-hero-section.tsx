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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* About Us Text */}
      <div className="relative z-10 flex flex-col gap-8 items-center justify-center pt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center font-[family-name:var(--font-inter)] drop-shadow-2xl">
          Authentic Dubai Karak
        </h1>
        <p className="text-xl md:text-2xl text-white text-center drop-shadow-2xl">
          Brewed with Tradition . Richly Spiced . Truly Dubai
        </p>
      </div>
    </section>
  );
}
