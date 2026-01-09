"use client"

import { motion } from "framer-motion"
import { CategoryCard } from "./category-card"
import { categories } from "@/lib/static-data"

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Collections
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </motion.div>
    </section>
  )
}
