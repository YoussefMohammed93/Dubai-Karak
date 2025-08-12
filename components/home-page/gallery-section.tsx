import Image from "next/image";

import MenuCTAButton from "../menu-cta-button";

export default function GallerySection() {
  return (
    <section className="w-full bg-gradient-to-br from-primary/50 via-primary/5 to-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative w-full aspect-square">
          <Image
            src="/view-1.jpg"
            alt="Gallery Image One"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-2.jpg"
            alt="Gallery Image Two"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-3.jpg"
            alt="Gallery Image Three"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-4.jpg"
            alt="Gallery Image Four"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full absolute inset-0"
            poster="/view-5.jpg"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-6.jpg"
            alt="Gallery Image Six"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-7.jpg"
            alt="Gallery Image Six"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-8.jpg"
            alt="Gallery Image Six"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/view-9.jpg"
            alt="Gallery Image Six"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <MenuCTAButton size="xl" />
      </div>
    </section>
  );
}
