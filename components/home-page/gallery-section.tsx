import React from "react";
import Image from "next/image";

import MenuCTAButton from "../menu-cta-button";

export default function GallerySection() {
  const galleryImages = [
    { src: "/view-1.jpg", alt: "Dubai Karak Gallery Image One" },
    { src: "/view-2.png", alt: "Dubai Karak Gallery Image Two" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-primary/50 via-primary/5 to-primary/10 py-8 md:py-12 !pt-16">
      <div className="container mx-auto">
        {/* Gallery Grid - Responsive layout for 2 images */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto !gap-10 px-4 md:px-6">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className="relative w-full aspect-square overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading={i === 0 ? "eager" : "lazy"}
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
              />
            </div>
          ))}
        </div>

        {/* View Menu Button */}
        <div className="flex justify-center pt-8 md:pt-12">
          <MenuCTAButton size="xl" />
        </div>
      </div>
    </section>
  );
}
