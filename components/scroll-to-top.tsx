"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  /**
   * The scroll threshold in pixels after which the button appears
   * @default 300
   */
  threshold?: number;
  /**
   * Additional CSS classes to apply to the button
   */
  className?: string;
  /**
   * Custom positioning classes (overrides default bottom-8 right-8)
   */
  position?: string;
}

export function ScrollToTop({
  threshold = 300,
  className,
  position = "bottom-8 right-8",
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  // Handle scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={cn(
        // Base styles following Dubai Karak design system
        "group relative overflow-hidden",
        "fixed z-50",
        position,
        "size-12",
        "bg-primary",
        "backdrop-blur-md",
        "border border-border/40",
        "rounded-full",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        "cursor-pointer",
        "transition-all duration-300",
        // Focus and accessibility styles
        "outline-none",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:ring-[3px]",
        // Fade in/out animation
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
        className
      )}
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      {/* Dubai Karak hover effect overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" />

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <ArrowUp className="h-5 w-5 text-white group-hover:text-white transition-colors duration-300" />
      </div>
    </button>
  );
}

export default ScrollToTop;
