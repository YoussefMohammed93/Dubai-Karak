"use client";

import { MapPin, Coffee, Globe, Award } from "lucide-react";

export default function BrandStorySection() {
  return (
    <section className="py-24 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary/10 dark:bg-primary/15 text-primary px-6 py-3 rounded-full text-lg font-medium font-[family-name:var(--font-geist-sans)] mb-8">
            <Globe className="w-5 h-5" />
            <span>The Dubai Karak Story</span>
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground mb-6">
            Where{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Tradition
            </span>
            <br className="hidden md:block" />
            Meets{" "}
            <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/90 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Every great story begins with a single moment of inspiration. Ours
            started in the heart of Dubai&apos;s most vibrant streets.
          </p>
        </div>
        {/* Story Cards - Unique Diagonal Layout */}
        <div className="space-y-16 lg:space-y-24">
          {/* Discovery Card - Left Aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="group relative shadow overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background dark:from-muted/80 dark:via-muted/20 dark:to-muted/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-12 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                {/* Background Pattern */}
                <div className="absolute top-8 right-8 opacity-5">
                  <MapPin className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                        The Discovery
                      </h3>
                      <p className="text-primary font-medium">
                        Where it all began
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-6">
                    Walking through Dubai&apos;s bustling markets and vibrant
                    festivals, we were captivated by the rich aroma and
                    authentic taste of traditional Karak tea. Each vendor had
                    their own secret blend, their own story, their own
                    connection to this beloved beverage that brings people
                    together.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-merienda)]">
                        High-Footfall Areas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Markets & festivals
                      </p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-merienda)]">
                        Cultural Heritage
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Authentic traditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/90 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-8 text-center">
                    <Coffee className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                      Street-Style Karak
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Authentic & Traditional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mission Card - Right Aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/90 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-8 text-center">
                    <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                      Premium Quality
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Finest Ingredients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="group shadow relative overflow-hidden bg-gradient-to-bl from-background via-muted/50 to-background dark:from-muted/80 dark:via-muted/20 dark:to-muted/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-12 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                {/* Background Pattern */}
                <div className="absolute top-8 right-8 opacity-5">
                  <Award className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                        The Mission
                      </h3>
                      <p className="text-primary font-medium">
                        Premium meets authentic
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-6">
                    We realized that while the streets of Dubai offered
                    incredible authenticity, there was an opportunity to elevate
                    this experience. By sourcing the finest Indian tea leaves
                    and using purified water, we could honor tradition while
                    delivering uncompromising premium quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-merienda)]">
                        Finest Tea Leaves
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sourced from India
                      </p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-merienda)]">
                        Purified Water
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Crystal clear quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
