"use client"

import { GalleryImage } from "@/lib/static-data"
import { motion } from "framer-motion"
import Image from "next/image"

interface GalleryItemProps {
  image: GalleryImage
  index: number
  onClick?: () => void
}

export default function GalleryItem({
  image,
  index,
  onClick,
}: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-card border border-primary/10 card-premium image-zoom-container">
        {/* Image */}
        <Image
          src={image.imageUrl}
          alt={image.caption || "Jewellery image"}
          fill
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={index < 3} // top images load first
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end justify-center pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center px-4"
          >
            <p className="font-elegant text-lg text-background italic">
              {image.caption}
            </p>
            <span className="font-body text-xs text-background/70 uppercase tracking-wider mt-2 block">
              Click to view
            </span>
          </motion.div>
        </div>

        {/* Gold corner accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
        <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
      </div>
    </motion.div>
  )
}
