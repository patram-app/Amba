
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Amba Jewellers',
        short_name: 'Amba Jewellers',
        description: 'Exquisite Indian Jewellery in Hisar',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon-light-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/icon-dark-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
