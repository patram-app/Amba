export interface JewelleryItem {
  _id: string
  title?: string
  image: string
  description?: string
  createdAt: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  order?: number
}
