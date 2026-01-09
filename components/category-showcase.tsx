"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/static-data";

const categoryTaglines: Record<string, string> = {
  rings: "Midas' Golden Touch",
  necklaces: "Royal Poise",
  earrings: "Bridal's Affair",
  bracelets: "Unmatched Sophistication",
};

export function CategoryShowcase() {
  return (
    <section  id="collections" className="containr mx-auto px-6 py-24">
      {/* Section Heading */}
      {/* <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Collections
      </motion.h2> */}

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 10, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Collections
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto italic">
            Discover our exquisite range of handcrafted jewellery, each piece a testament to timeless elegance
          </p>
        </motion.div>

        
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <Link
              href={`/category/${category.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-primary/10 card-premium">
                
                {/* Image */}
                <div className="aspect-4/5 overflow-hidden">
                  <motion.img
                    src={category.imageUrl || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  {/* Gold divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="gold-divider w-14 mx-auto mb-4"
                  />

                  <h3 className="font-display text-2xl md:text-3xl text-background font-semibold tracking-wide">
                    {category.title}
                  </h3>

                  <p className="font-body text-sm text-background/80 mt-2 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {categoryTaglines[category.slug] ?? "View Collection"}
                  </p>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-4 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
