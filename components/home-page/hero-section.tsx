"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Coffee, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/20 dark:from-primary/15 via-primary/5 to-primary/15 flex items-center justify-center overflow-hidden dark:bg-muted/50 pb-12">
      {/* Background Pattern */}
      <div className="hidden md:block absolute inset-0 bg-grid-pattern opacity-35 dark:opacity-100"></div>
      {/* Shape 1 - Grid Dots Pattern */}
      <div className="absolute bottom-32 left-2/12 transform -translate-x-1/2 md:bottom-40">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          className="text-primary/60"
        >
          {/* Grid of dots - 8 rows x 10 columns */}
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 10 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 14}
                cy={10 + row * 12}
                r="2"
                fill="currentColor"
                className="animate-pulse-slow"
                style={{
                  animationDelay: `${(row + col) * 0.1}s`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))
          )}
        </svg>
      </div>
      {/* Shape 2 - Square Grid Pattern (Left Side) */}
      <div className="hidden md:block absolute top-1/3 left-4 md:left-8">
        <svg
          width="100"
          height="120"
          viewBox="0 0 100 120"
          fill="none"
          className="text-primary/40"
        >
          {/* Grid of squares - 8 rows x 8 columns */}
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => (
              <rect
                key={`square-${row}-${col}`}
                x={8 + col * 16}
                y={8 + row * 14}
                width="3"
                height="3"
                fill="currentColor"
                className="animate-pulse-slow"
                style={{
                  animationDelay: `${(row + col) * 0.08}s`,
                  opacity: Math.random() * 0.5 + 0.25,
                }}
              />
            ))
          )}
        </svg>
      </div>
      {/* Shape 3 - Diamond Grid Pattern (Bottom Right) */}
      <div className="hidden md:block absolute bottom-20 right-12 md:bottom-32 md:right-20">
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          className="text-primary/45"
        >
          {/* Grid of diamonds - 5 rows x 5 columns */}
          {Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 5 }, (_, col) => (
              <rect
                key={`diamond-${row}-${col}`}
                x={10 + col * 16}
                y={10 + row * 16}
                width="4"
                height="4"
                transform={`rotate(45 ${12 + col * 16} ${12 + row * 16})`}
                fill="currentColor"
                className="animate-pulse-slow"
                style={{
                  animationDelay: `${(row + col) * 0.15}s`,
                  opacity: Math.random() * 0.4 + 0.4,
                }}
              />
            ))
          )}
        </svg>
      </div>
      {/* Shape 4 - Top Center Left Dots */}
      <div className="hidden md:block absolute top-12 left-2/3 md:top-40 opacity-30">
        <svg
          width="90"
          height="60"
          viewBox="0 0 90 60"
          fill="none"
          className="text-primary/40"
        >
          {/* Small grid of dots - 5 rows x 5 columns */}
          {Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 5 }, (_, col) => (
              <circle
                key={`top-center-${row}-${col}`}
                cx={8 + col * 12}
                cy={8 + row * 12}
                r="1.5"
                fill="currentColor"
                className="animate-pulse-slow"
                style={{
                  animationDelay: `${(row + col) * 0.2}s`,
                  opacity: Math.random() * 0.5 + 0.4,
                }}
              />
            ))
          )}
        </svg>
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-7xl px-4 md:px-6 mx-auto pt-28">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
            <Star className="w-4 h-4 fill-current text-primary" />
            Premium Street-Style Karak Tea
          </div>
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-[family-name:var(--font-merienda)]">
              <span className="text-foreground">Authentic</span>{" "}
              <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/90 bg-clip-text text-transparent">
                Dubai Karak
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground font-[family-name:var(--font-merienda)]">
              From Dubai&apos;s Streets to Your Heart
            </h2>
          </div>
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Experience the authentic taste of Dubai&apos;s beloved Karak tea,
            crafted with the finest Indian tea leaves and purified water.
            <span className="font-semibold text-foreground">
              {" "}
              The first sip will take you far, and your mind will be at
              peace—leaving you with just one word to say: Waaaw!
            </span>
          </p>
          {/* Features */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
              <Coffee className="w-5 h-5 text-primary" />
              <span>Finest Indian Tea Leaves</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
              <Heart className="w-5 h-5 text-primary/80" />
              <span>Traditional Brewing</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
              <Star className="w-5 h-5 text-primary/80" />
              <span>Purified Water</span>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                aria-label="Learn more about Dubai Karak tea Menu"
              >
                View Our Menu
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                aria-label="Learn more about Dubai Karak tea"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
