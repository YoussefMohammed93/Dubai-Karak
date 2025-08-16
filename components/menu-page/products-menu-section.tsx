"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Coffee, Star, Crown, Heart, Sparkles, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Dubai Karak",
    description:
      "Our signature blend that started it all. Rich, creamy, and perfectly spiced with cardamom, ginger, and cinnamon. Brewed to perfection using traditional Dubai street-style methods that have been passed down through generations.",
    price: "USD 12",
    originalPrice: null,
    badge: "Signature",
    icon: Coffee,
    features: [
      "Traditional Recipe",
      "Perfect Spice Balance",
      "Creamy Texture",
      "Street-Style Authentic",
    ],
    image: "/product-1.png",
    gradient: "from-primary/20 to-primary/10",
    popular: true,
  },
  {
    id: 2,
    name: "A spicy-sauce Chips Oman sandwich",
    description:
      "An elevated experience featuring premium saffron threads and exotic spices. This luxurious blend combines the traditional Karak base with the golden essence of saffron, creating a truly royal tea experience.",
    price: "USD 18",
    originalPrice: "USD 22",
    badge: "Premium",
    icon: Crown,
    features: [
      "Premium Saffron",
      "Exotic Spices",
      "Luxury Experience",
      "Limited Edition",
    ],
    image: "/product-2.jpg",
    gradient: "from-amber-500/20 to-orange-400/10",
    popular: false,
  },
];

export default function ProductsMenuSection() {
  return (
    <section className="pt-12 pb-20 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
            <Sparkles className="w-4 h-4" />
            Featured Products
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground">
            Our Signature Collection
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Two exceptional blends that capture the essence of Dubai&apos;s tea
            culture. Each cup tells a story of tradition, quality, and the
            pursuit of perfection.
          </p>
        </div>
        {/* Products Grid - Unique Asymmetric Layout */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group shadow-xs relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-3xl transition-all duration-300 cursor-pointer ${
                index === 0 ? "lg:mt-20" : "lg:mb-20"
              }`}
            >
              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="relative z-10 p-8">
                {/* Product Header */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-2 items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`bg-gradient-to-br ${product.gradient} border border-primary/20 dark:border-primary/30 p-3 rounded-2xl`}
                    >
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            product.badge === "Signature"
                              ? "bg-primary/15 text-primary"
                              : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                          }`}
                        >
                          {product.badge === "Signature" ? (
                            <Star className="w-3 h-3" />
                          ) : (
                            <Crown className="w-3 h-3" />
                          )}
                          {product.badge}
                        </span>
                        {product.popular && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-500/15 text-red-600 dark:text-red-400">
                            <Heart className="w-3 h-3" />
                            Popular
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-bold text-primary font-[family-name:var(--font-merienda)]">
                      {product.price}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
                {/* Product Image Placeholder */}
                <div className="relative mb-6 !rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 h-72 lg:h-96 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt="product"
                    fill
                    className="px-5 sm:px-40 md:px-52 lg:px-5 py-5 !rounded-2xl"
                  />
                </div>
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 font-[family-name:var(--font-geist-sans)]">
                  {product.description}
                </p>
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {/* View Button */}
                <Button className="w-full" size="lg">
                  <Eye className="w-4 h-4" />
                  Click To View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
