"use client";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Star,
  Building,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactInfoSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      primary: "Dubai, United Arab Emirates",
      secondary: "Premium locations across the city",
      description:
        "Visit our flagship locations in high-footfall areas including traditional markets and festival venues",
      action: "Find Locations",
      gradient: "from-primary/10 to-primary/10",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+971 XX XXX XXXX",
      secondary: "Available during business hours",
      description:
        "Speak directly with our team for immediate assistance with orders, partnerships, or general inquiries",
      action: "Call Now",
      gradient: "from-primary/10 to-primary/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@dubaikarak.ae",
      secondary: "We respond within 24 hours",
      description:
        "Send us detailed inquiries about our products, catering services, or business opportunities",
      action: "Send Email",
      gradient: "from-primary/10 to-primary/10",
    },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", icon: Instagram, color: "text-pink-600" },
    { name: "Facebook", href: "#", icon: Facebook, color: "text-blue-600" },
    { name: "Twitter", href: "#", icon: Twitter, color: "text-sky-500" },
  ];

  return (
    <section className="py-24 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
            <Building className="w-4 h-4" />
            Contact Information
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Choose the most convenient way to reach out to us. We&apos;re committed
            to providing exceptional service and building lasting relationships
            with our customers.
          </p>
        </div>
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${info.gradient} border border-primary/20 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-lg font-semibold text-foreground">
                    {info.primary}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.secondary}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 font-[family-name:var(--font-geist-sans)]">
                  {info.description}
                </p>
                <Button variant="outline" className="w-full">
                  {info.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* Social Media & Additional Info */}
        <div className="mt-16 text-center">
          <div className="group relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/15 dark:to-primary/10 backdrop-blur-md border border-primary/20 rounded-3xl p-8 md:p-12 transition-all duration-300">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
                <Globe className="w-8 h-8 text-primary" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-4">
                Follow Our Journey
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-[family-name:var(--font-geist-sans)]">
                Stay connected with Dubai Karak on social media for the latest
                updates, behind-the-scenes content, and exclusive offers. Join
                our community of Karak enthusiasts!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="group/social"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon
                        className={`w-5 h-5 ${social.color} transition-transform`}
                      />
                      {social.name}
                    </a>
                  </Button>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                  Rated 5/5 by our customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
