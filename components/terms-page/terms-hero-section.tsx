"use client";

import { Scale, Calendar, FileText, Shield } from "lucide-react";

export default function TermsHeroSection() {
  return (
    <section className="relative pt-32 md:pt-10 pb-12 bg-gradient-to-br from-primary/90 via-muted to-primary min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary/10 dark:from-primary/15 dark:via-muted/30 dark:to-primary/20 "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          filter: "blur(5px)",
        }}
      />
      {/* Header overlay with blur effect */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/85 backdrop-blur-md" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Legal Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-full blur-xl" />
            <div className="relative bg-gradient-to-br from-primary/15 to-primary/5 dark:from-primary/25 dark:to-primary/15 border border-primary/20 dark:border-primary/30 p-6 rounded-full">
              <Scale className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-[family-name:var(--font-merienda)] mb-6">
          <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 dark:from-primary dark:via-primary/80 dark:to-primary/90 bg-clip-text text-transparent">
            Terms of Service
          </span>
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-[family-name:var(--font-geist-sans)] leading-relaxed">
          Our comprehensive legal terms and conditions governing the use of
          Dubai Karak services, ensuring transparency and protecting both our
          customers and business.
        </p>
        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="group shadow-xs relative overflow-hidden bg-secondary/50 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-geist-sans)]">
                Last Updated
              </h3>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                August 15, 2025
              </p>
            </div>
          </div>
          <div className="group shadow-xs relative overflow-hidden bg-secondary/50 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-geist-sans)]">
                Version
              </h3>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                1.0
              </p>
            </div>
          </div>
          <div className="group shadow-xs relative overflow-hidden bg-secondary/50 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-geist-sans)]">
                Governing Law
              </h3>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                UAE Federal Law
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
