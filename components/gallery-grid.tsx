"use client";

import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { GalleryImage } from "@/lib/static-data";
import GalleryItem from "./gallery-item";

interface GalleryGridProps {
  images: GalleryImage[];
  categoryTitle: string;
  categoryDescription?: string;
}

export default function GalleryGrid({
  images,
  categoryTitle,
  categoryDescription,
}: GalleryGridProps) {
  return (
    <section className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* ================= CATEGORY HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-24"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-4">
            {categoryTitle}
          </h1>

          <div className="w-24 h-px mx-auto mb-6 bg-linear-to-r from-transparent via-primary to-transparent" />

          {categoryDescription && (
            <p className="font-elegant text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto italic">
              {categoryDescription}
            </p>
          )}
        </motion.div>

        {/* ================= GALLERY GRID ================= */}
        <PhotoProvider
          maskOpacity={0.9}
          bannerVisible
          speed={() => 400}
          easing={() => "cubic-bezier(0.25, 0.1, 0.25, 1)"}
          toolbarRender={({ onScale, scale }) => (
            <div className="flex gap-3 items-center">
              <button
                onClick={() => onScale(scale + 0.5)}
                className="text-white/80 hover:text-white transition-colors px-3 py-1 text-sm"
              >
                Zoom In
              </button>
              <button
                onClick={() => onScale(scale - 0.5)}
                className="text-white/80 hover:text-white transition-colors px-3 py-1 text-sm"
              >
                Zoom Out
              </button>
            </div>
          )}
          overlayRender={({ index }) => (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white text-center pointer-events-none backdrop-blur-sm">
              <p className="font-serif text-xl tracking-wide">{images[index]?.caption}</p>
            </div>
          )}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <PhotoView key={image.id} src={image.imageUrl}>
                <div className="cursor-pointer">
                  <GalleryItem image={image} index={index} />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>

        {/* ================= EMPTY STATE ================= */}
        {images.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-elegant text-xl text-muted-foreground italic">
              New pieces coming soon...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
