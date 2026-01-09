export interface Category {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  description?: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  caption?: string;
  categorySlug: string;
  createdAt: string;
}

// export const categories: Category[] = [
//   {
//     id: "1",
//     title: "Rings",
//     slug: "rings",
//     image: "/exquisite-diamond-solitaire-ring-luxury.jpg",
//     description: "Exquisite rings crafted with precision and adorned with precious stones",
//   },
//   {
//     id: "2",
//     title: "Necklaces",
//     slug: "necklaces",
//     image: "/traditional-gold-temple-necklace.jpg",
//     description: "Traditional and contemporary necklaces that define elegance",
//   },
//   {
//     id: "3",
//     title: "Earrings",
//     slug: "earrings",
//     image: "/elegant-pearl-chandelier-earrings.jpg",
//     description: "Handcrafted earrings that complement every occasion",
//   },
//   {
//     id: "4",
//     title: "Bracelets",
//     slug: "bracelets",
//     image: "/delicate-diamond-tennis-bracelet.jpg",
//     description: "Delicate bracelets that add grace to your wrists",
//   },
// ]

export const categories: Category[] = [
  {
    id: "1",
    title: "Rings",
    slug: "rings",
    imageUrl:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    description:
      "Exquisite rings crafted with precision, from timeless engagement bands to statement cocktail pieces.",
  },
  {
    id: "2",
    title: "Necklaces",
    slug: "necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    description:
      "Elegant necklaces that drape gracefully, from delicate chains to stunning statement pieces.",
  },
  {
    id: "3",
    title: "Earrings",
    slug: "earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    description:
      "From subtle studs to dramatic chandeliers, earrings that frame your face with elegance.",
  },
  {
    id: "4",
    title: "Bracelets",
    slug: "bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    description:
      "Graceful bracelets and bangles that add a touch of sophistication to every gesture.",
  },
];

// Gallery images - newest first
export const galleryImages: GalleryImage[] = [
  // Rings - 12 items
  {
    id: "r12",
    imageUrl: "/exquisite-diamond-solitaire-ring-luxury.jpg",
    caption: "Exquisite Diamond Solitaire Ring",
    categorySlug: "rings",
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "r11",
    imageUrl: "/contemporary-rose-gold-diamond-ring.jpg",
    caption: "Contemporary Rose Gold Diamond Ring",
    categorySlug: "rings",
    createdAt: "2024-03-14T10:00:00Z",
  },
  {
    id: "r10",
    imageUrl: "/antique-ruby-emerald-ring.jpg",
    caption: "Antique Ruby & Emerald Ring",
    categorySlug: "rings",
    createdAt: "2024-03-13T10:00:00Z",
  },
  {
    id: "r9",
    imageUrl: "/art-deco-diamond-ring.jpg",
    caption: "Art Deco Diamond Ring",
    categorySlug: "rings",
    createdAt: "2024-03-12T10:00:00Z",
  },
  {
    id: "r8",
    imageUrl: "/vintage-filigree-ring.jpg",
    caption: "Vintage Filigree Gold Ring",
    categorySlug: "rings",
    createdAt: "2024-03-11T10:00:00Z",
  },
  {
    id: "r7",
    imageUrl: "/modern-minimalist-gold-band-ring.jpg",
    caption: "Modern Minimalist Band",
    categorySlug: "rings",
    createdAt: "2024-03-10T10:00:00Z",
  },
  {
    id: "r6",
    imageUrl: "/vintage-gold-ring-with-ruby-and-diamonds.jpg",
    caption: "Vintage Ruby Diamond Ring",
    categorySlug: "rings",
    createdAt: "2024-03-09T10:00:00Z",
  },
  {
    id: "r5",
    imageUrl: "/delicate-rose-gold-stackable-ring-set.jpg",
    caption: "Rose Gold Stackable Set",
    categorySlug: "rings",
    createdAt: "2024-03-08T10:00:00Z",
  },
  {
    id: "r4",
    imageUrl: "/ornate-gold-ring-with-pearl-centerpiece.jpg",
    caption: "Ornate Pearl Gold Ring",
    categorySlug: "rings",
    createdAt: "2024-03-07T10:00:00Z",
  },
  {
    id: "r3",
    imageUrl: "/contemporary-geometric-gold-ring-design.jpg",
    caption: "Contemporary Geometric Ring",
    categorySlug: "rings",
    createdAt: "2024-03-06T10:00:00Z",
  },
  {
    id: "r2",
    imageUrl: "/classic-gold-signet-ring-engraved.jpg",
    caption: "Classic Engraved Signet Ring",
    categorySlug: "rings",
    createdAt: "2024-03-05T10:00:00Z",
  },
  {
    id: "r1",
    imageUrl: "/diamond-eternity-ring-luxury.jpg",
    caption: "Diamond Eternity Ring",
    categorySlug: "rings",
    createdAt: "2024-03-04T10:00:00Z",
  },

  // Necklaces - 12 items
  {
    id: "n12",
    imageUrl: "/traditional-gold-temple-necklace.jpg",
    caption: "Traditional Temple Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-15T09:00:00Z",
  },
  {
    id: "n11",
    imageUrl: "/vintage-kundan-polki-necklace-set.jpg",
    caption: "Vintage Kundan Polki Set",
    categorySlug: "necklaces",
    createdAt: "2024-03-14T09:00:00Z",
  },
  {
    id: "n10",
    imageUrl: "/modern-geometric-diamond-necklace.jpg",
    caption: "Modern Geometric Diamond Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-13T09:00:00Z",
  },
  {
    id: "n9",
    imageUrl: "/layered-gold-chain-necklace.jpg",
    caption: "Layered Gold Chain",
    categorySlug: "necklaces",
    createdAt: "2024-03-12T09:00:00Z",
  },
  {
    id: "n8",
    imageUrl: "/luxury-emerald-pendant-necklace.jpg",
    caption: "Luxury Emerald Pendant",
    categorySlug: "necklaces",
    createdAt: "2024-03-11T09:00:00Z",
  },
  {
    id: "n7",
    imageUrl: "/classic-solitaire-pendant.jpg",
    caption: "Classic Solitaire Pendant",
    categorySlug: "necklaces",
    createdAt: "2024-03-10T09:00:00Z",
  },
  {
    id: "n6",
    imageUrl: "/emerald-pendant-necklace-indian.jpg",
    caption: "Emerald Pendant Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-09T09:00:00Z",
  },
  {
    id: "n5",
    imageUrl: "/ornate-bridal-necklace-gold-diamonds.jpg",
    caption: "Ornate Bridal Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-08T09:00:00Z",
  },
  {
    id: "n4",
    imageUrl: "/minimalist-bar-necklace-gold.jpg",
    caption: "Minimalist Bar Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-07T09:00:00Z",
  },
  {
    id: "n3",
    imageUrl: "/antique-coin-necklace-indian-jewellery.jpg",
    caption: "Antique Coin Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-06T09:00:00Z",
  },
  {
    id: "n2",
    imageUrl: "/rose-gold-lariat-necklace.jpg",
    caption: "Rose Gold Lariat",
    categorySlug: "necklaces",
    createdAt: "2024-03-05T09:00:00Z",
  },
  {
    id: "n1",
    imageUrl: "/ruby-pendant-necklace-luxury.jpg",
    caption: "Ruby Pendant Necklace",
    categorySlug: "necklaces",
    createdAt: "2024-03-04T09:00:00Z",
  },

  // Earrings - 12 items
  {
    id: "e12",
    imageUrl: "/elegant-pearl-chandelier-earrings.jpg",
    caption: "Elegant Pearl Chandelier Earrings",
    categorySlug: "earrings",
    createdAt: "2024-03-15T08:00:00Z",
  },
  {
    id: "e11",
    imageUrl: "/ornate-gold-jhumka-earrings.jpg",
    caption: "Ornate Gold Jhumka",
    categorySlug: "earrings",
    createdAt: "2024-03-14T08:00:00Z",
  },
  {
    id: "e10",
    imageUrl: "/pearl-gold-drop-earrings.jpg",
    caption: "Pearl & Gold Drop Earrings",
    categorySlug: "earrings",
    createdAt: "2024-03-13T08:00:00Z",
  },
  {
    id: "e9",
    imageUrl: "/contemporary-diamond-studs.jpg",
    caption: "Contemporary Diamond Studs",
    categorySlug: "earrings",
    createdAt: "2024-03-12T08:00:00Z",
  },
  {
    id: "e8",
    imageUrl: "/traditional-gold-hoop-earrings.jpg",
    caption: "Traditional Gold Hoops",
    categorySlug: "earrings",
    createdAt: "2024-03-11T08:00:00Z",
  },
  {
    id: "e7",
    imageUrl: "/delicate-diamond-huggies-earrings.jpg",
    caption: "Delicate Diamond Huggies",
    categorySlug: "earrings",
    createdAt: "2024-03-10T08:00:00Z",
  },
  {
    id: "e6",
    imageUrl: "/ornate-temple-earrings-indian-jewellery.jpg",
    caption: "Ornate Temple Earrings",
    categorySlug: "earrings",
    createdAt: "2024-03-09T08:00:00Z",
  },
  {
    id: "e5",
    imageUrl: "/classic-pearl-drop-earrings.jpg",
    caption: "Classic Pearl Drops",
    categorySlug: "earrings",
    createdAt: "2024-03-08T08:00:00Z",
  },
  {
    id: "e4",
    imageUrl: "/contemporary-threader-earrings-gold.jpg",
    caption: "Contemporary Threader Earrings",
    categorySlug: "earrings",
    createdAt: "2024-03-07T08:00:00Z",
  },
  {
    id: "e3",
    imageUrl: "/art-deco-diamond-earrings-vintage.jpg",
    caption: "Art Deco Diamond Earrings",
    categorySlug: "earrings",
    createdAt: "2024-03-06T08:00:00Z",
  },
  {
    id: "e2",
    imageUrl: "/elegant-minimalist-ear-cuffs.jpg",
    caption: "Elegant Minimalist Cuffs",
    categorySlug: "earrings",
    createdAt: "2024-03-05T08:00:00Z",
  },
  {
    id: "e1",
    imageUrl: "/classic-gold-hoop-earrings.jpg",
    caption: "Classic Gold Hoops",
    categorySlug: "earrings",
    createdAt: "2024-03-04T08:00:00Z",
  },

  // Bracelets - 12 items
  {
    id: "b12",
    imageUrl: "/delicate-diamond-tennis-bracelet.jpg",
    caption: "Delicate Diamond Tennis Bracelet",
    categorySlug: "bracelets",
    createdAt: "2024-03-15T07:00:00Z",
  },
  {
    id: "b11",
    imageUrl: "/classic-gold-kada-bangle.jpg",
    caption: "Classic Gold Kada",
    categorySlug: "bracelets",
    createdAt: "2024-03-14T07:00:00Z",
  },
  {
    id: "b10",
    imageUrl: "/statement-gold-cuff-bracelet.jpg",
    caption: "Statement Gold Cuff",
    categorySlug: "bracelets",
    createdAt: "2024-03-13T07:00:00Z",
  },
  {
    id: "b9",
    imageUrl: "/delicate-gemstone-bracelet.jpg",
    caption: "Delicate Gemstone Bracelet",
    categorySlug: "bracelets",
    createdAt: "2024-03-12T07:00:00Z",
  },
  {
    id: "b8",
    imageUrl: "/ornate-bridal-bangle-set.jpg",
    caption: "Ornate Bridal Bangle Set",
    categorySlug: "bracelets",
    createdAt: "2024-03-11T07:00:00Z",
  },
  {
    id: "b7",
    imageUrl: "/delicate-link-bracelet-gold.jpg",
    caption: "Delicate Link Bracelet",
    categorySlug: "bracelets",
    createdAt: "2024-03-10T07:00:00Z",
  },
  {
    id: "b6",
    imageUrl: "/placeholder.svg?height=800&width=800",
    caption: "Ornate Traditional Kada",
    categorySlug: "bracelets",
    createdAt: "2024-03-09T07:00:00Z",
  },
  {
    id: "b5",
    imageUrl: "/placeholder.svg?height=800&width=800",
    caption: "Classic Polished Bangle",
    categorySlug: "bracelets",
    createdAt: "2024-03-08T07:00:00Z",
  },
  {
    id: "b4",
    imageUrl: "/placeholder.svg?height=800&width=800",
    caption: "Contemporary Stackable Set",
    categorySlug: "bracelets",
    createdAt: "2024-03-07T07:00:00Z",
  },
  {
    id: "b3",
    imageUrl: "/placeholder.svg?height=800&width=800",
    caption: "Elegant Pearl Bracelet",
    categorySlug: "bracelets",
    createdAt: "2024-03-06T07:00:00Z",
  },
  {
    id: "b2",
    imageUrl: "/placeholder.svg?height=800&width=800",
    caption: "Vintage Filigree Bracelet",
    categorySlug: "bracelets",
    createdAt: "2024-03-05T07:00:00Z",
  },
  {
    id: "b1",
    imageUrl: "/placeholder.svg?height=800&width=800",
    caption: "Modern Geometric Bracelet",
    categorySlug: "bracelets",
    createdAt: "2024-03-04T07:00:00Z",
  },
];

// Helper function to get images by category, sorted newest first
export function getImagesByCategory(categorySlug: string): GalleryImage[] {
  return galleryImages
    .filter((img) => img.categorySlug === categorySlug)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
