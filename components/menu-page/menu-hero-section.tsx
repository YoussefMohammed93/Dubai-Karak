"use client";

import { Coffee, Star, Droplets, Leaf } from "lucide-react";

export default function MenuHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/15 via-background to-primary/10 dark:from-primary/15 dark:via-muted/30 dark:to-primary/20 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-30"></div>
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 transform rotate-12">
        <div className="bg-primary/10 dark:bg-primary/15 border border-primary/20 p-3 rounded-2xl">
          <Coffee className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 transform -rotate-12">
        <div className="bg-primary/10 dark:bg-primary/15 border border-primary/20 p-3 rounded-2xl">
          <Leaf className="w-6 h-6 text-primary" />
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8 pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
          <Coffee className="w-4 h-4" />
          Our Menu
        </div>
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-merienda)]">
            <span className="text-foreground">Signature </span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/90 bg-clip-text text-transparent">
              Karak Collection
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground font-[family-name:var(--font-merienda)]">
            Crafted with Love, Served with Pride
          </h2>
        </div>
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
          Each cup is a journey to Dubai&apos;s bustling streets, where
          tradition meets perfection.
          <span className="font-semibold text-foreground">
            {" "}
            Experience the authentic flavors that will leave you saying Waaaw!
          </span>
        </p>
        {/* Quality Indicators */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Leaf className="w-4 h-4 text-primary/80" />
            <span>Finest Indian Tea Leaves</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Droplets className="w-4 h-4 text-primary/80" />
            <span>Purified Water</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 text-primary/80" />
            <span>Traditional Brewing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
