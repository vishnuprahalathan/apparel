import { MetadataRoute } from 'next'
import { PRODUCTS } from '@/config/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://voidstitch.in'

  const productEntries = PRODUCTS.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const staticPages = [
    '',
    '/shop',
    '/about',
    '/lookbook',
    '/fabric-science',
    '/location',
    '/movement',
    '/collections/vol-01',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }))

  return [...staticPages, ...productEntries]
}
