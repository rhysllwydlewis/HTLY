import type { MetadataRoute } from 'next';
import { brandOrigin, brandUrl } from '@/lib/brand';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: brandUrl('/sitemap.xml'),
    host: brandOrigin()
  };
}
