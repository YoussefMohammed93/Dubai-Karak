"use client";

import Link from "next/link";
import Image from "next/image";

import * as React from "react";

import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, Coffee, Home, Info, Phone, Star } from "lucide-react";

// Navigation items
const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Menu", href: "/menu", icon: Coffee },
  { name: "Contact", href: "/contact", icon: Phone },
] as const;

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 dark:bg-muted/65 backdrop-blur-3xl border-b border-border/40 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-background/80 dark:bg-muted/55 backdrop-blur-md border-b border-border/20"
      } supports-[backdrop-filter]:bg-background/80 supports-[backdrop-filter]:dark:bg-background/50`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo/Name - Left Side */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300"
              aria-label="Dubai Karak Home"
            >
              <div className="relative">
                {mounted && (
                  <Image
                    src={theme === "dark" ? "/logo-2-dark.png" : "/logo-2.png"}
                    alt="Dubai Karak Logo"
                    priority
                    width={100}
                    height={100}
                    className="h-16 sm:h-24 w-16 sm:w-24 object-contain"
                  />
                )}
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
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative group flex items-center space-x-2 text-base font-medium transition-all duration-300 px-4 py-2 rounded-xl font-[family-name:var(--font-geist-sans)]",
                    isActive
                      ? "text-foreground bg-primary/10 dark:bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10 dark:hover:bg-primary/10"
                  )}
                >
                  <IconComponent
                    className={cn(
                      "w-4 h-4 transition-colors duration-300",
                      isActive ? "text-primary" : "group-hover:text-primary"
                    )}
                  />
                  <span>{item.name}</span>
                  <span
                    className={cn(
                      "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 rounded-full",
                      isActive ? "w-10" : "w-0 group-hover:w-10"
                    )}
                  />
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
                    "border-border/20 dark:border-border/30 hover:border-primary/30",
                    "hover:bg-accent/20 hover:text-foreground",
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
                  <div className="pt-2">
                    <span className="text-lg font-black font-[family-name:var(--font-merienda)] bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                      The Dubai Karak
                    </span>
                  </div>
                </SheetHeader>
                {/* Mobile Navigation */}
                <nav className="mt-8 px-1.5" aria-label="Mobile navigation">
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeSheet}
                          className={cn(
                            "group flex items-center space-x-4 text-base font-medium transition-all duration-300 py-4 px-4 rounded-xl border font-[family-name:var(--font-geist-sans)]",
                            isActive
                              ? "text-foreground bg-primary/5 border-primary/10 dark:border-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-primary/5 border-transparent hover:border-primary/10 dark:hover:border-primary/20"
                          )}
                        >
                          <div
                            className={cn(
                              "bg-gradient-to-br border p-3 rounded-xl transition-all duration-300",
                              isActive
                                ? "from-primary/20 to-primary/10 dark:from-primary/15 dark:to-primary/15 border-primary/30 dark:border-primary/40"
                                : "from-primary/15 to-primary/5 dark:from-primary/10 dark:to-primary/10 border-primary/20 dark:border-primary/30"
                            )}
                          >
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="flex-1">{item.name}</span>
                          <div
                            className={cn(
                              "w-2 h-2 rounded-full transition-all duration-300",
                              isActive
                                ? "bg-primary"
                                : "bg-primary/0 group-hover:bg-primary"
                            )}
                          />
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
