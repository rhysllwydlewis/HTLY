import type { MetadataRoute } from 'next';
import { brand } from '@/lib/brand';

const routes = ['', '/holidays', '/hotels', '/destinations', '/deals', '/inspiration', '/support', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: brand.siteUrl + route,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7
  }));
}
