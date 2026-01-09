"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            For over three decades, Amba Jewellers has been synonymous with timeless elegance and exceptional
            craftsmanship. Our heritage is rooted in the rich traditions of Indian jewellery making, combined with
            contemporary design sensibilities.
          </p>
          <p>
            Each piece in our collection tells a story of passion, precision, and artistry. We source the finest
            materials and work with master craftsmen to create jewellery that becomes a cherished part of your most
            precious moments.
          </p>
          <p className="text-primary font-serif text-2xl italic pt-4">Where tradition meets timeless beauty</p>
        </motion.div>
      </div>
    </section>
  )
}
