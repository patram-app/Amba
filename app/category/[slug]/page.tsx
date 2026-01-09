import { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/static-data";
import { getSanityImagesByCategory } from "@/lib/sanity";
import Navbar from "@/components/navbar";
import GalleryGrid from "@/components/gallery-grid";
import { SiteFooter } from "@/components/site-footer";
import { BackButton } from "@/components/back-button";
import { CategoryNotFound } from "@/components/category-not-found";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.title,
    description: category.description || `Explore our exclusive collection of ${category.title} at Amba Jewellers Hisar.`,
    openGraph: {
      images: [
        {
          url: category.imageUrl,
          width: 800,
          height: 600,
          alt: category.title,
        },
      ],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);
  const sanityImages = await getSanityImagesByCategory(slug);

  // Map Sanity images to the format expected by GalleryGrid
  const images = sanityImages.map((img) => ({
    id: img._id,
    imageUrl: img.imageUrl,
    caption: img.title, // Using title as the main caption
    categorySlug: img.category,
    createdAt: img.publishedAt,
  }));

  // Helper to ensure we have a valid category object even if just for the UI
  // But strictly, we rely on static-data for the main category info
  if (!category) {
    return <CategoryNotFound />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <BackButton />

      <GalleryGrid
        images={images}
        categoryTitle={category.title}
        categoryDescription={category.description}
      />

      <SiteFooter />
    </main>
  );
}

/* sortCategory removed */
