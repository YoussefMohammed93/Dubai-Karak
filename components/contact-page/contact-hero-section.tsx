"use client";

import { Coffee, Phone, Heart, Star, MessageCircle } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-background to-primary/10 dark:from-primary/15 dark:via-muted/30 dark:to-primary/20 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/15 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-primary/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 right-32 hidden lg:block">
        <div
          className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
      <div className="absolute top-1/3 right-10 hidden lg:block">
        <div
          className="w-4 h-4 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
      {/* Floating Tea Cup Illustration */}
      <div className="absolute top-1/4 right-1/8 hidden xl:block">
        <div className="relative">
          <div className="w-40 h-40 border-2 border-primary/15 rounded-full animate-pulse"></div>
          <Coffee className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary/20" />
        </div>
      </div>
      {/* Floating Contact Icons */}
      <div className="absolute bottom-1/4 left-1/8 hidden xl:block">
        <div className="relative">
          <div
            className="w-32 h-32 border border-primary/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <MessageCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary/15" />
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] mb-6">
          <Phone className="w-4 h-4" />
          Get in Touch
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 font-[family-name:var(--font-merienda)]">
          <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Let&apos;s Connect Over
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 dark:from-primary dark:via-primary/80 dark:to-primary/90 bg-clip-text text-transparent">
            Perfect Karak
          </span>
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 font-[family-name:var(--font-geist-sans)]">
          Have questions about our premium street-style Karak tea? Want to
          explore partnership opportunities? Or simply curious about our
          authentic Dubai brewing methods? We&apos;d love to hear from you.
        </p>
        {/* Brand Promise Quote */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <div className="bg-background/80 dark:bg-muted/40 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
              <Heart className="w-8 h-8 text-primary" />
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-merienda)] italic mb-4">
              &quot;The first sip will take you far, and your mind will be at
              peace—leaving you with just one word to say: Waaaw!&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
