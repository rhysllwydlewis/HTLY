import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: '/', lastModified: new Date() },
    { url: '/holidays', lastModified: new Date() },
    { url: '/hotels', lastModified: new Date() },
    { url: '/destinations', lastModified: new Date() },
    { url: '/deals', lastModified: new Date() }
  ];
}
