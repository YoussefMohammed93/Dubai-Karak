"use client";

import {
  Target,
  Eye,
  Users,
  Coffee,
  Heart,
  Sparkles,
  Globe,
} from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-8 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium font-[family-name:var(--font-geist-sans)] mb-8">
            <Target className="w-5 h-5" />
            <span>Our Purpose & Vision</span>
            <Eye className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground mb-6">
            Driven by{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
        </div>
        {/* Mission & Vision Cards - Hexagonal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Mission Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-background via-muted/80 to-background dark:from-muted/80 dark:via-muted/20 dark:to-muted/30 shadow backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-12 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            {/* Background Pattern */}
            <div className="absolute -top-8 -right-8 opacity-5">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-3xl">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    Our Mission
                  </h3>
                  <p className="text-primary text-lg font-medium">
                    What drives us daily
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-8">
                To preserve and elevate the authentic Dubai street-style Karak
                experience by combining traditional brewing methods with premium
                ingredients, creating moments of connection and joy in
                high-footfall community spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <Coffee className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                      Authentic Brewing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional methods preserved
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                      Community Focus
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Bringing people together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Vision Card */}
          <div className="group shadow relative overflow-hidden bg-gradient-to-bl from-background via-muted/80 to-background dark:from-muted/80 dark:via-muted/20 dark:to-muted/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-12 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            {/* Background Pattern */}
            <div className="absolute -top-8 -right-8 opacity-5">
              <Eye className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-3xl">
                  <Eye className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    Our Vision
                  </h3>
                  <p className="text-primary text-lg font-medium">
                    Where we&apos;re heading
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-8">
                To become the most beloved premium Karak brand, recognized
                globally for authenticity and quality, while preserving
                Dubai&apos;s rich tea culture and creating lasting connections
                across communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                      Global Recognition
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Authentic Dubai Karak worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                      Cultural Preservation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Honoring tea traditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Values Grid - Unique Asymmetric Layout */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-geist-sans)]">
              The principles that guide every decision we make and every cup we
              serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Authenticity */}
            <div className="group relative shadow overflow-hidden bg-background/80 dark:bg-muted/40 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-2">
                  Authenticity
                </h4>
                <p className="text-muted-foreground text-sm">
                  True to Dubai&apos;s street culture
                </p>
              </div>
            </div>
            {/* Quality */}
            <div className="group relative shadow overflow-hidden bg-background/80 dark:bg-muted/40 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-2">
                  Excellence
                </h4>
                <p className="text-muted-foreground text-sm">
                  Premium ingredients always
                </p>
              </div>
            </div>
            {/* Community */}
            <div className="group relative shadow overflow-hidden bg-background/80 dark:bg-muted/40 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-2">
                  Connection
                </h4>
                <p className="text-muted-foreground text-sm">
                  Bringing hearts together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
