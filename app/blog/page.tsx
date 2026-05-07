import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';
import { buildSiteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog — Venture Building & Startup Insights | Maxinor',
  description: 'Operator-tested insights on venture building, SME growth, and the Indian startup ecosystem. Written by founders and operators who have been in the trenches.',
  keywords: ['venture studio', 'startup insights', 'SME growth India', 'venture building', 'Indian startup ecosystem'],
  alternates: { canonical: buildSiteUrl('/blog') },
  openGraph: {
    type: 'website',
    url: buildSiteUrl('/blog'),
    title: 'Blog — Venture Building & Startup Insights | Maxinor',
    description: 'Operator-tested insights on venture building, SME growth, and the Indian startup ecosystem.',
    siteName: 'Maxinor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Maxinor',
    description: 'Operator-tested insights on venture building, SME growth, and the Indian startup ecosystem.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative overflow-hidden bg-warm-white px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[340px] -translate-x-1/2 rounded-full bg-brand/5 blur-[80px] md:h-[400px] md:w-[800px] md:blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Blog</p>
          <h1 className="text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:text-6xl">
            Insights & Perspectives
          </h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-navy/70 md:text-lg">
            Venture building, SME growth, and the Indian startup ecosystem — from operators who&apos;ve been in the trenches.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-navy/50">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                    {post.category}
                  </span>
                  <span className="text-xs text-navy/40">{formatDate(post.date)}</span>
                </div>

                <h2 className="mb-3 text-lg font-display font-medium leading-snug text-navy transition-colors group-hover:text-brand md:text-xl">
                  {post.title}
                </h2>

                <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-navy/60">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-navy/10 pt-4">
                  <span className="text-xs text-navy/40">{post.author}</span>
                  <span className="text-xs font-semibold text-brand transition-transform group-hover:translate-x-1">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
