import type { MetadataRoute } from 'next';
import { buildSiteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: buildSiteUrl('/sitemap.xml'),
  };
}
