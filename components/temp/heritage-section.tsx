"use client"

import { motion } from "framer-motion"

export function HeritageSection() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
            Exquisite Jewellery Crafted Since 1969
          </h2>
          <div className="h-0.5 w-24 mx-auto bg-primary mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Established by our forefathers, who handed us down the know-how of sorting out standapart jewels that salute
            timeless class with their purity and quality. Embellished to perfection, our jewels are authentic and
            unmatched. Every piece tells a story of tradition, craftsmanship, and timeless elegance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
