import type { MetadataRoute } from 'next';
import { brand } from '@/lib/brand';

const routes = ['', '/holidays', '/hotels', '/destinations', '/deals', '/search', '/inspiration', '/help', '/account', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: brand.siteUrl + route,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/account' ? 0.5 : 0.7
  }));
}
