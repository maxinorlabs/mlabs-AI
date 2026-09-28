import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { buildSiteUrl } from '@/lib/site';

const pageRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/sectors', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/sectors/bfsi', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sectors/media', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sectors/d2c', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sectors/healthcare', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sectors/education', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sectors/defence', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/startups', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/scale', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/build', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/investment', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/capability-centre', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/sme', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/corporate', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/investors', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/team', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
];

export function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }];
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  // Sitemap 1: all blog posts
  if (id === 1) {
    const posts = getAllPosts();
    return posts.map((post) => ({
      url: buildSiteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.lastModified ?? post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

  // Sitemap 0: all pages
  const pageEntries: MetadataRoute.Sitemap = pageRoutes.map(({ path, priority, changeFrequency }) => ({
    url: buildSiteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return pageEntries;
}
