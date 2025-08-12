import React from "react";
import Image from "next/image";

import MenuCTAButton from "../menu-cta-button";

export default function GallerySection() {
  return (
    <section className="w-full bg-gradient-to-br from-primary/50 via-primary/5 to-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          { src: "/view-1.jpg", alt: "Gallery Image One" },
          { src: "/view-2.jpg", alt: "Gallery Image Two" },
          { src: "/view-3.jpg", alt: "Gallery Image Three" },
          { src: "/view-4.jpg", alt: "Gallery Image Four" },
          { src: "/view-6.jpg", alt: "Gallery Image Six" },
          { src: "/view-7.jpg", alt: "Gallery Image Seven" },
          { src: "/view-8.jpg", alt: "Gallery Image Eight" },
          { src: "/view-9.jpg", alt: "Gallery Image Nine" },
        ].map((img, i) => {
          // Insert video after the 4th image (i === 4)
          if (i === 4) {
            return (
              <React.Fragment key="video">
                <div className="relative w-full aspect-square">
                  <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full absolute inset-0"
                    poster="/view-5.jpg"
                    preload="metadata"
                  >
                    Sorry, your browser does not support embedded videos.
                  </video>
                </div>
                <div className="relative w-full aspect-square" key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    loading={i < 3 ? "eager" : "lazy"}
                    priority={i < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="/placeholder-blur.jpg"
                  />
                </div>
              </React.Fragment>
            );
          }
          return (
            <div className="relative w-full aspect-square" key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                loading={i < 3 ? "eager" : "lazy"}
                priority={i < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-12">
        <MenuCTAButton size="xl" />
      </div>
    </section>
  );
}
