import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const SITE_URL = 'https://www.maxinor.com';

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
  { path: '/startups', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/scale', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/build', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sme', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/corporate', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/investors', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/team', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
