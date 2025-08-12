"use client";

import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { theme } = useTheme();

  const socialLinks = [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-muted/40 via-background to-muted/60 dark:from-muted/30 dark:via-background dark:to-muted/40 border-t border-border/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section - Spans 5 columns */}
          <div className="lg:col-span-5">
            <div className="group relative bg-background/80 dark:bg-muted/80 shadow-xs overflow-hidden bg-gradient-to-br from-primary/5 via-background/80 to-primary/10 dark:from-primary/10 dark:via-muted/20 dark:to-primary/5 backdrop-blur-md rounded-3xl p-8 transition-all border border-border/40 duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              {/* Background Pattern */}
              <div className="absolute bottom-4 right-4 opacity-5">
                <Coffee className="w-20 h-20 text-primary" />
              </div>
              <div className="relative z-10 space-y-6">
                {/* Brand Logo and Name */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
                      alt="Dubai Karak Logo"
                      priority
                      width={100}
                      height={100}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black font-[family-name:var(--font-merienda)] bg-gradient-to-r from-primary via-primary/90 to-primary/70 dark:from-primary dark:via-primary/80 dark:to-primary/90 bg-clip-text text-transparent">
                      The Dubai Karak
                    </span>
                  </div>
                </div>
                {/* Brand Promise */}
                <div className="space-y-4">
                  <p className="text-muted-foreground font-[family-name:var(--font-geist-sans)] leading-relaxed">
                    Experience the authentic taste of Dubai&apos;s beloved Karak
                    tea, crafted with the finest Indian tea leaves and purified
                    water.
                  </p>
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary font-[family-name:var(--font-geist-sans)]">
                        Our Promise
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-foreground font-[family-name:var(--font-merienda)] italic">
                      &quot;The first sip will take you far, and your mind will
                      be at peace—leaving you with just one word to say:
                      <span className="text-primary ml-1">Waaaw!</span>&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact & Hours Section - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact Information */}
            <div className="group relative overflow-hidden bg-background/80 dark:bg-muted/80 shadow-xs backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    Get in Touch
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Dubai, UAE
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Premium locations across the city
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">+971 XX XXX XXXX</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      hello@dubaikarak.ae
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Operating Hours */}
            <div className="group relative shadow-xs overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Mon - Thu
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      7:00 AM - 11:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Fri - Sat
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      7:00 AM - 12:00 AM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Sunday
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      8:00 AM - 10:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation & Social - Spans 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Links */}
            <div className="group relative shadow-xs overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    Quick Links
                  </h3>
                </div>
                <nav className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-[family-name:var(--font-geist-sans)]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            {/* Social Media */}
            <div className="group relative bg-background/80 dark:bg-muted/80 shadow-xs overflow-hidden bg-gradient-to-br from-primary/10 via-background/80 to-primary/5 dark:from-primary/15 dark:via-muted/20 dark:to-primary/10 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-merienda)]">
                    Follow Us
                  </h3>
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group/social relative overflow-hidden bg-background/60 dark:bg-muted/60 border border-border/40 p-3 rounded-xl transition-all duration-300 hover:border-primary/40"
                      aria-label={social.name}
                    >
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/social:opacity-100 transition-all duration-300 ease-out transform -translate-x-full -translate-y-full group-hover/social:translate-x-0 group-hover/social:translate-y-0"></div>
                      <social.icon className="relative z-10 w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors duration-200" />
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                  Share your #DubaiKarak moments
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                © {currentYear} The Dubai Karak. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-[family-name:var(--font-geist-sans)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-[family-name:var(--font-geist-sans)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          {/* Final Brand Touch */}
          <div className="text-center mt-6 pt-6">
            <p className="text-xs text-muted-foreground font-[family-name:var(--font-geist-sans)] italic">
              Crafted with{" "}
              <Heart className="inline w-4 h-4 text-primary mx-1" /> in Dubai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
