"use client"

import { motion } from "framer-motion"
import { Sparkles, Award, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Excellence",
    description: "Every piece is meticulously crafted by skilled artisans with decades of experience",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest gold, precious stones, and materials in our collections",
  },
  {
    icon: Heart,
    title: "Heritage & Tradition",
    description: "Timeless designs inspired by rich Indian heritage and contemporary elegance",
  },
  {
    icon: Shield,
    title: "Certified Authenticity",
    description: "All our jewellery comes with proper certification and quality assurance",
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto rounded-4xl px-4 py-20 bg-secondary/90">
      <motion.h2
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
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
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center space-y-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
