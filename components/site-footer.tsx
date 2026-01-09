"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border/40 bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Amba Jewellers
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A trusted jewellery showroom in Hisar, offering elegant bridal,
              gold and diamond jewellery crafted with tradition and care.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
              Visit Our Showroom
            </h4>

            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span>
                  Petrol Pump, opp. PLA<br />
                  Jai Dev Nagar, PLA<br />
                  Hisar, Haryana 125001<br />
                  India
                </span>
              </p>

              <Link
                href="https://maps.app.goo.gl/Ct71EvFKtRk4jAnZA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary/80 text-sm underline underline-offset-4"
              >
                Get Directions on Google Maps
              </Link>
            </div>
          </div>

          {/* Contact & Timings */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
              Contact & Timings
            </h4>

            <div className="text-muted-foreground space-y-3">

              {/* Phone */}
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <Link
                  href="tel:+919996767888"
                  className="hover:text-primary transition-colors"
                >
                  +91 99967 67888
                </Link>
              </p>

              {/* WhatsApp */}
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <Link
                  href="https://wa.me/919996767888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors"
                >
                  Chat on WhatsApp
                </Link>
              </p>

              {/* Timings */}
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Mon – Sat: 10:00 AM – 8:00 PM
              </p>

              <p className="text-sm text-muted-foreground/80">
                Call or WhatsApp us for enquiries, custom designs, and bridal
                appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Amba Jewellers, Hisar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
