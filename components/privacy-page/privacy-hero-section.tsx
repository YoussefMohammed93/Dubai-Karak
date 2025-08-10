"use client";

import { Shield, Lock, Eye, Heart, Coffee } from "lucide-react";

export default function PrivacyHeroSection() {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-primary/15 via-background to-primary/10 dark:from-primary/15 dark:via-muted/30 dark:to-primary/20 flex items-center justify-center overflow-hidden pt-32 pb-10"
      aria-labelledby="privacy-hero-title"
      role="banner"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-15">
        {/* Floating Shield Icons */}
        <div className="absolute top-1/4 left-1/6 hidden lg:block">
          <div className="relative">
            <div className="w-24 h-24 border border-primary/20 rounded-full animate-pulse flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary/40" />
            </div>
          </div>
        </div>
        {/* Lock Pattern */}
        <div className="absolute top-1/3 right-1/5 hidden md:block">
          <div className="relative">
            <div className="w-20 h-20 border-2 border-primary/15 rounded-lg animate-pulse flex items-center justify-center">
              <Lock className="w-10 h-10 text-primary/30" />
            </div>
          </div>
        </div>
        {/* Animated Dots Pattern */}
        <div className="absolute bottom-1/4 left-1/4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-4 h-4 bg-primary/30 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
        {/* Privacy Eye Symbol */}
        <div className="absolute bottom-1/3 right-1/4 hidden lg:block">
          <Eye
            className="w-16 h-16 text-primary/25 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
        {/* Geometric Pattern */}
        <div className="absolute top-20 right-1/3">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="text-primary/30"
          >
            {Array.from({ length: 4 }, (_, row) =>
              Array.from({ length: 4 }, (_, col) => (
                <rect
                  key={`privacy-${row}-${col}`}
                  x={8 + col * 12}
                  y={8 + row * 12}
                  width="2"
                  height="2"
                  fill="currentColor"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${(row + col) * 0.2}s`,
                    opacity: Math.random() * 0.6 + 0.3,
                  }}
                />
              ))
            )}
          </svg>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8">
          {/* Brand Connection */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-3 rounded-xl">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-3 rounded-xl">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          {/* Main Heading */}
          <div className="space-y-4">
            <h1
              id="privacy-hero-title"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-[family-name:var(--font-merienda)] leading-tight"
            >
              <span className="text-foreground">Your </span>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/90 bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="text-foreground">Matters</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground font-[family-name:var(--font-merienda)]">
              Transparency in Every Sip, Trust in Every Interaction
            </h2>
          </div>
          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
              At Dubai Karak, we believe that your privacy is as important as
              the quality of our tea. Just as we carefully select the finest
              ingredients for our Karak, we carefully protect your personal
              information with the highest standards of data security and
              transparency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Built with Trust</span>
              </div>
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Secured by Design</span>
              </div>
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Privacy First</span>
              </div>
            </div>
          </div>
          {/* Last Updated Info */}
          <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 text-muted-foreground px-6 py-3 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] border border-border/40">
            <Eye className="w-4 h-4 text-primary/80" />
            <span>Last Updated: August 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
