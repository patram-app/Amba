"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    image: "/luxury-gold-diamond-jewellery-collection-hero.jpg",
    title: "Timeless Elegance",
    subtitle: "Discover Our Exquisite Collection",
  },
  {
    id: 2,
    image: "/traditional-indian-bridal-jewellery-hero.jpg",
    title: "Bridal Splendor",
    subtitle: "Crafted for Your Special Moments",
  },
  {
    id: 3,
    image: "/contemporary-diamond-jewellery-hero.jpg",
    title: "Contemporary Classics",
    subtitle: "Where Tradition Meets Modernity",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Pause auto-play on hover/focus for better UX
  const handleMouseEnter = useCallback(() => setIsAutoPlay(false), [])
  const handleMouseLeave = useCallback(() => setIsAutoPlay(true), [])

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  return (
    <div className="relative  sm:mx-10 overflow-hidden bg-black rounded-t-[50px]">
      {/* Static Header Section - Improved spacing and responsiveness */}
      <section className="container mx-auto px-4 py-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb- text-balance leading-tight">
            Amba Jewellers
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb- font-light max-w-2xl mx-auto text-pretty leading-relaxed">
            Timeless Elegance, Crafted with Tradition
          </p>

          {/* Animated Gold Divider - Enhanced with better styling */}
          <motion.div
            className="h-px w-20 sm:w-24 mx-auto bg-linear-to-r from-transparent via-amber-400/80 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      </section>

      {/* Carousel Section - Full responsive height and better overlay */}
      <div
        className="relative  h-[60vh] sm:h-[55vh]  overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full sm:h-90 "
          >
            <Image
              src={heroSlides[currentSlide].image || "/placeholder.svg"}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Improved Gradient Overlay - More subtle and responsive */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content Overlay - Better centering and scaling */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light text-pretty leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Larger on desktop, better positioning */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 z-20"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 z-20"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>

        {/* Dots Indicator - Improved styling and spacing */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${index === currentSlide
                ? "bg-white scale-125 w-8 sm:w-10 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}
        </div>

        {/* Progress Bar Indicator - New addition for better UX */}
        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-10">
          <motion.div
            className="h-full bg-linear-to-r from-amber-400 to-yellow-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (currentSlide % heroSlides.length) / heroSlides.length + 0.2 }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity,  }}
          />
        </div> */}
      </div>
    </div>
  )
}