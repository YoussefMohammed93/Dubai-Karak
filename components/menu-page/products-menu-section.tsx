"use client";

import Image from "next/image";

import { Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Dubai Karak",
    image: "/product-1.png",
  },
  {
    id: 2,
    name: "Spicy-sauce Chips Oman sandwich",
    image: "/product-2.jpg",
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
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground">
            Our Signature Collection
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Explore our curated premium products, blending authentic Dubai
            flavors with quality, taste, and rich culinary heritage for an
            exceptional experience.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 max-w-5xl mx-auto pt-12">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative z-10 text-center space-y-6">
                {/* Product Image with rounded-full background */}
                <div className="relative mx-auto w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[26rem] 2xl:h-[26rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden p-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Product Name */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)] leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
