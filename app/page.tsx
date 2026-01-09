"use client"

import  Navbar  from "@/components/navbar"
import { CategoryShowcase } from "@/components/category-showcase"

import { FeaturesSection } from "@/components/features-section"
import { SiteFooter } from "@/components/site-footer"
import { InstagramGallery } from "@/components/instagram-gallery"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import NewHeroSection from "@/components/NewHero"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NewHeroSection/>
      <CategoryShowcase />
      <Hero/>
      <FeaturesSection />
      <About/>
      <HeroCarousel />
      <InstagramGallery/>
      <SiteFooter />
    </div>
  )
}
