"use client";

import React from "react";
import Image from "next/image";

import { useTheme } from "next-themes";

export default function MissionVisionSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-muted/75 dark:bg-muted/55">
      {/* Top CTA */}
      <div className="flex flex-col items-center justify-center py-16 px-4 md:px-6">
        <div className="relative">
          {mounted && (
            <Image
              src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
              alt="Dubai Karak Logo"
              priority
              width={200}
              height={100}
              className="h-20 w-48 object-contain"
            />
          )}
        </div>
        <p className="text-muted-foreground text-sm sm:text-lg max-w-lg text-center pt-5">
          The first sip will take you far, and your mind will be at
          peace—leaving you with just one word to say : Waaaw!
        </p>
      </div>
      {/* Mission Section - Image then Text */}
      <div className="max-w-7xl mx-auto p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Mission Image */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-square bg-muted/20">
            <Image
              src="/mission.jpg"
              alt="Our Mission - Dubai Karak brewing tradition"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Mission Text */}
          <div className="flex items-center justify-end w-full lg:w-1/2">
            <div className="max-w-lg w-full text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff7110] font-[family-name:var(--font-inter)] mb-6">
                The Mission
              </h2>
              <p className="text-xl font-semibold text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                Delivering an amazingly unique taste of culture, served with a
                high standard of hospitality. 
              </p>
              <p className="text-lg font-light text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] pt-5">
                To preserve and elevate the authentic Dubai street-style Karak
                experience by combining traditional brewing methods with premium
                ingredients, creating moments of connection and joy in
                high-footfall community spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* History Section - Image then Text */}
      <div className="max-w-7xl mx-auto p-4 sm:p-5 md:p-6 lg:p-8 mt-12 sm:mt-20">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
          {/* History Image */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-square bg-muted/40">
            <Image
              src="/history.jpg"
              alt="Our Vision - Global recognition of Dubai Karak culture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* History Text */}
          <div className="flex items-center justify-start w-full lg:w-1/2">
            <div className="max-w-lg w-full text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff7110] font-[family-name:var(--font-inter)] mb-6">
                The History
              </h2>
              <p className="text-xl font-semibold text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                The Heart of Karak Culture.
              </p>
              <p className="text-lg font-light text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] pt-5">
                The tale of Karak tea is woven into the vibrant streets and
                bustling souks of Dubai, where the drink became more than just a
                cup — it became a daily ritual. Originating from the Indian
                subcontinent, Karak made its way to the UAE through the hands of
                traders and travelers, carrying with it a legacy of strong tea,
                rich spices, and comforting milk. Over time, Dubai embraced
                Karak as its own. From roadside stalls to upscale cafés, the
                aromatic blend became a symbol of warmth, hospitality, and the
                city’s multicultural spirit — a drink that unites people, one
                cup at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Vision Section - Image then Text */}
      <div className="max-w-7xl mx-auto p-4 sm:p-5 md:p-6 lg:p-8 mt-12 sm:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Vision Image */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-square bg-muted/20">
            <Image
              src="/vision.png"
              alt="Our Mission - Dubai Karak brewing tradition"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Vision Text */}
          <div className="flex items-center justify-end w-full lg:w-1/2">
            <div className="max-w-lg w-full text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff7110] font-[family-name:var(--font-inter)] mb-6">
                Our Vision
              </h2>
              <p className="text-xl font-semibold text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                To become the most beloved premium Karak brand, recognized
                globally for authenticity and quality, while preserving
                Dubai&apos;s rich tea culture and creating lasting connections
                across communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
