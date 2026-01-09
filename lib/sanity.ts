import { createClient } from "next-sanity"
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"

export const client = createClient({
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
    process.env.SANITY_PROJECT_ID!,
  dataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET ??
    process.env.SANITY_DATASET!,
  apiVersion: "2024-03-01",
  useCdn: true,
})

/* Image URL builder */
const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/* Types */
export interface SanityGalleryImage {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category: string
  publishedAt: string
}

/* Queries */
export async function getSanityImagesByCategory(
  categorySlug: string
): Promise<SanityGalleryImage[]> {
  const query = `
    *[_type == "galleryImage" && category == $categorySlug]
    | order(publishedAt desc) {
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      category,
      publishedAt
    }
  `

  return client.fetch(query, { categorySlug })
}
