"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  "/elegant-gold-ring-with-gemstone-on-hand-instagram-.jpg",
  "/beautiful-indian-necklace-worn-by-bride-instagram-.jpg",
  "/gold-earrings-close-up-luxury-jewelry-instagram-st.jpg",
  "/gold-bangles-stack-on-wrist-instagram-style.jpg",
  // "/diamond-ring-engagement-flat-lay-instagram-style.jpg",
  // "/traditional-indian-jewelry-set-flat-lay-instagram-.jpg",
  // "/gold-chain-necklace-minimalist-instagram-style.jpg",
  // "/chandelier-earrings-elegant-display-instagram-styl.jpg",
];

export function InstagramGallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="w-5 h-5 text-primary" />
            <p className="text-sm uppercase tracking-widest text-primary font-medium">
              Follow Us
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            <Link
              href="https://www.instagram.com/ambajewellershisar/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @ambajewellershisar
            </Link>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Join our community and discover daily inspiration from our
            collection
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card cursor-pointer"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className=" flex justify-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="flex items-center justify-center gap-2 bg-transparent"
          >
            <Link
              href="https://www.instagram.com/ambajewellershisar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
