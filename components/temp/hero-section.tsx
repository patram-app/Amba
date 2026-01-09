"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 text-balance">
          Amba Jewellers
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light max-w-2xl mx-auto text-pretty">
          Timeless Elegance, Crafted with Tradition
        </p>

        {/* Animated Gold Divider */}
        <motion.div
          className="h-0.5 w-24 mx-auto bg-linear-to-r from-transparent via-primary to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </motion.div>
    </section>
  )
}
