import { Sparkles, Award, Heart } from "lucide-react"
import Image from "next/image"

export function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Handcrafted Excellence",
      description: "Each piece is meticulously crafted by skilled artisans with decades of experience",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "All our jewellery comes with authenticity certificates and hallmarking",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "We pour passion into every design, creating heirlooms for generations",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Crafting Beauty for Over 15 Years
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Amba Jewellers was founded with a vision to preserve traditional Indian jewellery craftsmanship while
              embracing contemporary aesthetics. Our journey began in a small workshop and has grown into a beloved
              brand known for exceptional quality and timeless designs.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece tells a story, carries a tradition, and celebrates the moments that matter most in your life.
              We believe jewellery is not just an accessory  it&apos;s a legacy.
            </p>

            <div className="hidden sm:grid sm:grid-cols-3 gap-6 pt-6">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
              <Image
                src="/indian-jewellery-artisan-crafting-gold-jewelry-wor.jpg"
                alt="Jewellery craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-lg -z-10" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
