"use client";

import {
  MapPin,
  Mail,
  Heart,
  Award,
  Sparkles,
  Facebook,
  Instagram,
} from "lucide-react";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61579280997459&mibextid=wwXIfr",
      icon: Facebook,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/thedubaikarak?igsh=cnB4MDZ4Y2tpYzU3",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {mounted && (
                    <Image
                      src={theme === "dark" ? "/logo-dark.png" : "/logo.png"}
                      alt="Dubai Karak Logo"
                      priority
                      width={200}
                      height={100}
                      className="h-20 w-48 object-contain"
                    />
                  )}
                </div>
              </div>
              {/* Brand Promise */}
              <div className="relative">
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed max-w-sm">
                  &quot;The first sip will take you far, and your mind will be
                  at peace—leaving you with just one word to say:{" "}
                  <span className="text-primary font-semibold not-italic">
                    Waaaw!
                  </span>
                  &quot;
                </blockquote>
              </div>
              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">
                    Orange County, Los Angeles
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">
                    Thedubaikarak@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Quick Links
              </h3>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm sm:text-base py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-[family-name:var(--font-geist-sans)]"
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          {/* Social */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Follow Us
              </h3>
              <div className="flex gap-3 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 transition-transform duration-300" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Share your{" "}
                <span className="text-primary font-medium">#DubaiKarak</span>{" "}
                moments with us
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/40">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} The Dubai Karak. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-[family-name:var(--font-geist-sans)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-[family-name:var(--font-geist-sans)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          {/* Final Touch */}
          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Crafted with{" "}
              <Heart className="w-5 h-5 text-red-500 animate-pulse" /> in Dubai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
