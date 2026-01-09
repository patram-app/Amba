import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Timeless Elegance
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
            Exquisite Indian Jewellery
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Discover our curated collection of handcrafted jewellery, where
            tradition meets contemporary design
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="group">
            <Link href="/#collections">
              Explore Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Decorative Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border mt-12">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              500+
            </p>
            <p className="text-sm text-muted-foreground mt-1">Unique Designs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              15+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Years Experience
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              100%
            </p>
            <p className="text-sm text-muted-foreground mt-1">Certified Gold</p>
          </div>
        </div>
      </div>
    </section>
  );
}
