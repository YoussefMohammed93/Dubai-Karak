"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Dubai Karak Tea Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      {/* Additional gradient overlay for better text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      {/* Background Pattern (Optional - for subtle texture) */}
      <div className="absolute inset-0 z-30 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      {/* Main content */}
      <div className="relative w-full max-w-7xl flex justify-center md:justify-normal z-30 px-4 md:px-8 pt-16 md:pt-28 pb-12">
        <div className="text-center md:text-left space-y-6 md:space-y-8 max-w-4xl">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-inter)] text-white drop-shadow-lg">
              <span>Authentic Dubai</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Karak
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-white/90 font-[family-name:var(--font-inter)] drop-shadow-md pt-5">
              Enjoy some spice in your life
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
