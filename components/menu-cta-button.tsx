"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Coffee, ArrowRight, Sparkles } from "lucide-react";

interface MenuCTAButtonProps {
  className?: string;
  size?: "default" | "lg" | "xl";
  variant?: "primary" | "outline";
  children?: React.ReactNode;
}

export default function MenuCTAButton({
  className,
  size = "lg",
  variant = "primary",
  children = "Explore Menu",
}: MenuCTAButtonProps) {
  const sizeClasses = {
    default: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    xl: "h-16 px-10 text-xl",
  };

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border-2 border-primary bg-background/80 text-primary hover:bg-primary hover:text-primary-foreground",
  };

  return (
    <Link
      href="/menu"
      className={cn(
        // Base styles
        "group relative overflow-hidden",
        "inline-flex items-center justify-center gap-3",
        "font-semibold font-[family-name:var(--font-geist-sans)]",
        "rounded-2xl",
        "transition-all duration-500 ease-out",
        "cursor-pointer",
        "shadow-lg shadow-primary/20 dark:shadow-primary/30",
        "backdrop-blur-md",
        // Focus and accessibility
        "outline-none",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]",
        "focus-visible:scale-105",
        // Hover effects
        "hover:scale-105",
        "hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/40",
        "hover:-translate-y-1",
        // Size and variant classes
        sizeClasses[size],
        variantClasses[variant],

        className
      )}
      aria-label="Navigate to menu page to explore our tea collection"
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left" />
      {/* Decorative sparkle effect */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
        <Sparkles className="w-4 h-4 text-primary-foreground/60 animate-pulse" />
      </div>
      {/* Tea leaf decoration - top left */}
      <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-primary-foreground/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
      {/* Tea leaf decoration - bottom right */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border border-primary-foreground/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
      {/* Button content */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Coffee icon with rotation animation */}
        <div className="relative">
          <Coffee className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
        </div>
        {/* Button text */}
        <span className="relative">
          {children}
          {/* Underline animation */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full" />
        </span>
        {/* Arrow icon with slide animation */}
        <ArrowRight className="w-5 h-5 transition-all duration-500 transform group-hover:translate-x-1 group-hover:scale-110" />
      </div>
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Link>
  );
}
