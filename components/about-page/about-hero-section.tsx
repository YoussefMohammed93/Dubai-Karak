"use client";

import {
  Coffee,
  Star,
  Heart,
  Compass,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/15 via-background to-primary/10 dark:from-primary/15 dark:via-muted/30 dark:to-primary/20 flex items-center justify-center overflow-hidden pb-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-1/3 w-3 h-3 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
      {/* Floating Tea Cup Illustration */}
      <div className="absolute top-1/4 right-1/6 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse"></div>
          <Coffee className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary/30" />
        </div>
      </div>
      {/* Floating Spice Elements */}
      <div className="absolute bottom-1/4 left-1/8 hidden lg:block">
        <div className="relative">
          <div
            className="w-24 h-24 border border-primary/15 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-primary/25" />
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl px-4 md:px-6 mx-auto pt-28 pb-16">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-background/90 dark:bg-muted/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 text-primary px-6 py-3 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] border border-border/40">
            <Compass className="w-5 h-5" />
            <span>Our Journey & Story</span>
            <Compass className="w-5 h-5 scale-x-[-1]" />
          </div>
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-merienda)]">
              <span className="text-foreground">From Dubai&apos;s</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Streets
              </span>{" "}
              <span className="text-foreground">to Your</span>{" "}
              <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/90 bg-clip-text text-transparent">
                Heart
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
              <Heart className="w-8 h-8 text-primary" />
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
          {/* Description */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
              In the bustling markets and vibrant festivals of Dubai, where
              cultures converge and stories unfold, we discovered something
              extraordinary—the soul of authentic Karak tea.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
              What started as a passion for preserving tradition has grown into
              a premium tea business dedicated to bringing you the finest Indian
              tea leaves, purified water, and time-honored brewing methods.
            </p>
          </div>
          {/* Quality Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] border border-border/40">
              <Star className="w-4 h-4 text-primary/80" />
              <span>Finest Indian Tea Leaves</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] border border-border/40">
              <Star className="w-4 h-4 text-primary/80" />
              <span>Purified Water</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] border border-border/40">
              <Star className="w-4 h-4 text-primary/80" />
              <span>Traditional Brewing</span>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium font-[family-name:var(--font-geist-sans)]">
              Discover Our Story
            </span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
