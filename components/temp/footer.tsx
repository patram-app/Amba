import { Instagram, Facebook, Mail, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Shop: ["Rings", "Necklaces", "Earrings", "Bracelets"],
    Company: ["About Us", "Our Story", "Certifications", "Careers"],
    Support: ["Contact", "FAQs", "Shipping", "Returns"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  }

  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-serif font-semibold">Amba Jewellers</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Crafting timeless elegance and celebrating Indian artistry through exquisite jewellery for over 15 years.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">© 2025 Amba Jewellers. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-background/70">
            <MapPin className="w-4 h-4" />
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
