"use client";

import {
  Heart,
  Quote,
  Star,
  Coffee,
  Sparkles,
  Users,
  Clock,
} from "lucide-react";

export default function BrandPromiseSection() {
  return (
    <section className="py-8 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Promise Section */}
        <div className="relative mb-20">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="shadow bg-gradient-to-br from-background/95 via-muted/40 to-background/95 dark:from-primary/10 dark:via-muted/50 dark:to-primary/10 backdrop-blur-xl border border-border/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center">
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
              <div
                className="absolute top-16 right-12 w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-12 left-16 w-4 h-4 bg-primary/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-8 right-8 w-2 h-2 bg-primary/50 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="space-y-8">
                {/* Promise Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
                    <Heart className="w-8 h-8 text-primary" />
                    <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    The Dubai Karak Promise
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mx-auto"></div>
                </div>
                {/* Main Promise Quote */}
                <div className="relative max-w-5xl mx-auto">
                  <Quote className="absolute -top-6 -left-4 md:-left-8 w-12 h-12 text-primary/20" />
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-[family-name:var(--font-merienda)] italic px-8 md:px-16">
                    The first sip will take you far, and your mind will be at
                    peace—leaving you with just one word to say:
                  </blockquote>
                  <Quote className="absolute -bottom-6 -right-4 md:-right-8 w-12 h-12 text-primary/20 rotate-180" />
                </div>
                {/* Waaaw Highlight */}
                <div className="relative">
                  <div className="inline-block relative">
                    <span className="text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-[family-name:var(--font-merienda)] not-italic">
                      Waaaw!
                    </span>
                    <div className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10 blur-xl"></div>
                  </div>
                </div>
                {/* Supporting Text */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                    This isn&apos;t just our promise—it&apos;s our sacred
                    commitment to you.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                    Every cup we serve carries the essence of Dubai&apos;s
                    vibrant street culture, the warmth of traditional
                    hospitality, and the soul of authentic Karak brewing. We
                    don&apos;t just serve tea—we create moments that transcend
                    the ordinary and connect you to something truly special.
                  </p>
                </div>
                {/* Decorative Elements */}
                <div className="flex items-center justify-center gap-8 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/70 rounded-full"></div>
                    <div className="w-4 h-4 bg-primary/40 rounded-full"></div>
                  </div>
                  <Coffee className="w-8 h-8 text-primary" />
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary/40 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/70 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* What Makes Us Different */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 dark:bg-primary/15 text-primary px-6 py-3 rounded-full text-lg font-medium font-[family-name:var(--font-geist-sans)] mb-8">
              <Sparkles className="w-5 h-5" />
              <span>What Makes Us Different</span>
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-6">
              The Dubai Karak{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Difference
              </span>
            </h3>
          </div>
          {/* Difference Cards - Unique Staggered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Premium Ingredients */}
            <div className="group relative overflow-hidden shadow bg-gradient-to-br from-background via-muted to-background dark:from-muted dark:via-muted/20 dark:to-muted/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer lg:mt-10">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-3xl w-fit mx-auto mb-6">
                  <Star className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-4">
                  Premium Ingredients
                </h4>
                <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-6">
                  We source only the finest Indian tea leaves and use purified
                  water to ensure every cup meets our uncompromising standards.
                </p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <p className="text-sm font-medium text-primary">
                    Finest Indian Tea Leaves + Purified Water
                  </p>
                </div>
              </div>
            </div>
            {/* Traditional Methods */}
            <div className="group relative overflow-hidden shadow bg-gradient-to-br from-background via-muted to-background dark:from-muted dark:via-muted/20 dark:to-muted/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-3xl w-fit mx-auto mb-6">
                  <Clock className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-4">
                  Traditional Brewing
                </h4>
                <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-6">
                  Our brewing methods honor generations of Dubai street vendors,
                  preserving the authentic techniques that make Karak special.
                </p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <p className="text-sm font-medium text-primary">
                    Time-Honored Techniques
                  </p>
                </div>
              </div>
            </div>
            {/* Community Focus */}
            <div className="group relative overflow-hidden shadow bg-gradient-to-br from-background via-muted to-background dark:from-muted dark:via-muted/20 dark:to-muted/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer lg:mt-10">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-3xl w-fit mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-4">
                  Community Heart
                </h4>
                <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] mb-6">
                  We position ourselves in high-footfall areas like markets and
                  festivals, becoming part of the community&apos;s daily rhythm.
                </p>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <p className="text-sm font-medium text-primary">
                    Markets & Festivals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
