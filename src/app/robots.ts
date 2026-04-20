import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/', '/admin/'],
    },
    sitemap: 'https://voidstitch.in/sitemap.xml',
  }
}
