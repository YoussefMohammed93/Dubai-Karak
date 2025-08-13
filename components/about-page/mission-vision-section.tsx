"use client";

import Image from "next/image";

import { useTheme } from "next-themes";

export default function MissionVisionSection() {
  const { theme } = useTheme();

  return (
    <section className="w-full">
      {/* Top CTA */}
      <div className="flex flex-col items-center justify-center py-16 px-4 md:px-6">
        <div className="relative">
          <Image
            src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
            alt="Dubai Karak Logo"
            priority
            width={200}
            height={100}
            className="h-20 w-48 object-contain"
          />
        </div>
        <p className="text-muted-foreground text-sm sm:text-lg max-w-lg text-center pt-5">
          The first sip will take you far, and your mind will be at
          peace—leaving you with just one word to say : Waaaw!
        </p>
      </div>
      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Top Left - Mission Image */}
        <div className="relative aspect-[4/3] bg-muted/20">
          <Image
            src="/message.jpg"
            alt="Our Mission - Dubai Karak brewing tradition"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        {/* Top Right - Our Mission Text */}
        <div className="flex items-center justify-center p-8 md:p-12 lg:p-24 bg-background aspect-[4/3]">
          <div className="max-w-lg w-full text-center lg:text-left md:p-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
              To preserve and elevate the authentic Dubai street-style Karak
              experience by combining traditional brewing methods with premium
              ingredients, creating moments of connection and joy in
              high-footfall community spaces.
            </p>
          </div>
        </div>
        {/* Bottom Right - Our Vision Text */}
        <div className="flex items-center justify-center p-8 md:p-12 lg:p-24 bg-muted/30 lg:order-4 aspect-[4/3]">
          <div className="max-w-lg w-full text-center lg:text-left md:p-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-6">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
              To become the most beloved premium Karak brand, recognized
              globally for authenticity and quality, while preserving
              Dubai&apos;s rich tea culture and creating lasting connections
              across communities.
            </p>
          </div>
        </div>
        {/* Bottom Left - Vision Image */}
        <div className="relative aspect-[4/3] bg-muted/40 lg:order-4">
          <Image
            src="/vision.jpg"
            alt="Our Vision - Global recognition of Dubai Karak culture"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
