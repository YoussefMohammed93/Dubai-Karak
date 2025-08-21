"use client";

import { Coffee, Droplets, Leaf, Heart } from "lucide-react";

export default function ProductsServicesSection() {
  return (
    <section className="pb-10 pt-20 bg-gradient-to-br from-primary/20 via-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 mb-10 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
            <Coffee className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground">
            Our Premium <span className="text-primary">Karak</span> Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
            From carefully sourced ingredients to expertly crafted beverages,
            every element of our service is designed to deliver the authentic
            Dubai street-style Karak experience.
          </p>
        </div>
        {/* Key Ingredients */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
              <div className="w-4 h-4 bg-primary/30 rounded-full"></div>
            </div>
            <Leaf className="hidden sm:flex w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center font-[family-name:var(--font-merienda)]">
              Premium Ingredients
            </h3>
            <Leaf className="hidden sm:flex w-6 h-6 md:w-8 md:h-8 text-primary scale-x-[-1]" />
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-4 h-4 bg-primary/30 rounded-full"></div>
              <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden shadow-xs bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10">
                <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground py-3 font-[family-name:var(--font-merienda)]">
                  Finest Indian Tea Leaves
                </h4>
                <p className="text-muted-foreground text-sm font-[family-name:var(--font-geist-sans)]">
                  Carefully selected premium tea leaves sourced directly from
                  India&apos;s finest tea gardens.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden shadow-xs bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10">
                <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground py-3 font-[family-name:var(--font-merienda)]">
                  Purified Water
                </h4>
                <p className="text-muted-foreground text-sm font-[family-name:var(--font-geist-sans)]">
                  Crystal-clear purified water ensuring the purest taste and
                  optimal brewing conditions.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden shadow-xs bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10">
                <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground py-3 font-[family-name:var(--font-merienda)]">
                  Traditional Spices
                </h4>
                <p className="text-muted-foreground text-sm font-[family-name:var(--font-geist-sans)]">
                  Authentic blend of cardamom, ginger, and aromatic spices
                  following traditional recipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
