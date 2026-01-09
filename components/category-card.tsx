"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Category } from "@/lib/static-data"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/category/${category.slug}`}>
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
          <div className="aspect-square relative">
            <Image
              src={category.imageUrl || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gold overlay on hover */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
          </div>
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-white drop-shadow-2xl">
              {category.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
