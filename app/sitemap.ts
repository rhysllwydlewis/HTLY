import type { MetadataRoute } from 'next';
import { brandUrl } from '@/lib/brand';
import { deals, getDealHref } from '@/lib/holiday-data';

const routes = ['', '/holidays', '/hotels', '/destinations', '/deals', '/search', '/inspiration', '/help', '/account', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: brandUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/account' ? 0.5 : 0.7
  } satisfies MetadataRoute.Sitemap[number]));

  const dealRoutes = deals.map((deal) => ({
    url: brandUrl(getDealHref(deal)),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  } satisfies MetadataRoute.Sitemap[number]));

  return [...staticRoutes, ...dealRoutes];
}
