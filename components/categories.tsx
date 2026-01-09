"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const categories = [
  {
    id: "rings",
    name: "Rings",
    description: "Elegant bands and statement pieces",
    image: "/elegant-gold-indian-ring-on-white-background-luxur.jpg",
    count: 120,
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Traditional and contemporary designs",
    image: "/ornate-gold-indian-necklace-on-white-background-lu.jpg",
    count: 85,
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "From subtle studs to grand chandeliers",
    image: "/beautiful-gold-indian-earrings-on-white-background.jpg",
    count: 150,
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Delicate chains and bold bangles",
    image: "/elegant-gold-indian-bracelet-bangles-on-white-back.jpg",
    count: 95,
  },
]

export function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Our Collections</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Each piece is carefully crafted to celebrate the beauty of Indian artistry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-card">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {hoveredCategory === category.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        View {category.count} Items
                      </Button>
                    </div>
                  )}
                </div>

                <div className="p-6 text-center bg-card">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
