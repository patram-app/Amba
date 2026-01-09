import { sanityClient } from "./client"
import type { JewelleryItem } from "./types"

export async function getJewelleryItemsByCategory(categorySlug: string): Promise<JewelleryItem[]> {
  const query = `
    *[_type == "jewelleryItem" && category->slug.current == $categorySlug] | order(createdAt desc) {
      _id,
      title,
      "image": image.asset->url,
      description,
      createdAt
    }
  `

  try {
    const items = await sanityClient.fetch(query, { categorySlug })
    return items
  } catch (error) {
    console.error("Error fetching from Sanity:", error)
    return []
  }
}

export async function getAllCategories() {
  const query = `
    *[_type == "category"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      order
    }
  `

  try {
    const categories = await sanityClient.fetch(query)
    return categories
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}
