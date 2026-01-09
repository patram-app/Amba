"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "They have an amazing collection. My wedding jewellery and daily wear articles are all bought from Amba Jewellers. Their collection, quality, attention to detail, and customer service is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali Verma",
    text: "Amba Jewellers is the most trusted jewellery brand. The exquisite designs are more of heirloom pieces to be passed through generations. The quality is outstanding!",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    text: "Our family jeweller for decades. Trusted for quality and the right advice. They innovate while maintaining tradition, offering great style and value for money.",
    rating: 5,
  },
  {
    id: 4,
    name: "Meera Patel",
    text: "After years of purchasing from Amba Jewellers, I confidently vouch for the quality of their designs and unmatchable customer service. This is definitely the place for priceless ornaments!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Customer&apos;s Speak</h2>
          <div className="h-0.5 w-24 mx-auto bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{testimonial.text}</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
