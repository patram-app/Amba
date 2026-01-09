
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ambajewellershisar.com'

    // Static routes
    const routes = [
        '',
        '/category/rings',
        '/category/necklaces',
        '/category/earrings',
        '/category/bracelets',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
