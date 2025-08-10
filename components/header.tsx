"use client";

import Link from "next/link";

import * as React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, Coffee, Home, Info, MapPin, Phone, Star } from "lucide-react";

// Navigation items
const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Menu", href: "/menu", icon: Coffee },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "Locations", href: "/locations", icon: MapPin },
] as const;

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 dark:bg-muted/65 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-background/80 dark:bg-muted/55 backdrop-blur-md border-b border-border/20"
      } supports-[backdrop-filter]:bg-background/80`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo/Name - Left Side */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center space-x-3 text-foreground hover:text-primary transition-all duration-300"
              aria-label="Dubai Karak Home"
            >
              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary/15 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 dark:border-primary/30 p-2.5 rounded-xl">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-[family-name:var(--font-merienda)] bg-gradient-to-r from-primary via-primary/90 to-primary/70 dark:from-primary dark:via-primary/80 dark:to-primary/90 bg-clip-text text-transparent">
                  The Dubai Karak
                </span>
                <div className="flex items-center space-x-1 -mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 fill-primary/60 text-primary/60"
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1 font-[family-name:var(--font-geist-sans)]">
                    Premium
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation - Center */}
          <nav
            className="hidden md:flex md:items-center md:space-x-1"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group flex items-center space-x-2 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-2 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 font-[family-name:var(--font-geist-sans)]"
                >
                  <IconComponent className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 group-hover:w-10 rounded-full" />
                </Link>
              );
            })}
          </nav>
          {/* Right Side - Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            {/* Mobile Sheet Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "md:hidden relative group overflow-hidden",
                    "dark:bg-input/30 backdrop-blur-sm",
                    "border-border/50 dark:border-border/30 hover:border-primary/30",
                    "hover:bg-accent/50 hover:text-accent-foreground",
                    "transition-all duration-300 ease-in-out",
                    "min-w-[40px] sm:min-w-[80px] h-8 sm:h-9 px-3 gap-2"
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[320px] sm:w-[400px] dark:bg-muted/40 backdrop-blur-xl border-r border-border/40"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-3 px-1.5 text-left">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary/15 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20 dark:border-primary/30 p-2.5 rounded-xl">
                        <Coffee className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-black font-[family-name:var(--font-merienda)] bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                        The Dubai Karak
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                {/* Mobile Navigation */}
                <nav className="mt-8 px-1.5" aria-label="Mobile navigation">
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeSheet}
                          className="group flex items-center space-x-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300 py-4 px-4 rounded-xl border border-transparent hover:border-primary/10 dark:hover:border-primary/20 font-[family-name:var(--font-geist-sans)]"
                        >
                          <div className="bg-gradient-to-br from-primary/15 to-primary/5 dark:from-primary/10 dark:to-primary/10 border border-primary/20 dark:border-primary/30 p-3 rounded-xl transition-all duration-300">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="flex-1">{item.name}</span>
                          <div className="w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                        </Link>
                      );
                    })}
                  </div>
                </nav>
                {/* Mobile Footer */}
                <div className="mt-auto border-t border-border/40">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/5 p-4 border-t border-primary/10">
                      <p className="text-sm font-semibold text-foreground font-[family-name:var(--font-geist-sans)]">
                        Authentic Dubai Street-Style Karak
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 font-[family-name:var(--font-geist-sans)] italic">
                        The first sip will take you far
                      </p>
                      <div className="flex items-center justify-center space-x-1 mt-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-primary/70 text-primary/70"
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-2 font-[family-name:var(--font-geist-sans)]">
                          Premium Quality
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
