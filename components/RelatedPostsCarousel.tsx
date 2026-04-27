'use client';

import Link from 'next/link';
import type { PostMeta } from '@/lib/blog';

function fmtDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
}

export function RelatedPostsCarousel({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  // Ensure enough cards for a seamless loop — duplicate if needed
  const base = posts.length < 5 ? [...posts, ...posts] : posts;
  const doubled = [...base, ...base];

  return (
    <section className="mt-16">
      <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-navy/40">
        Related Reading
      </p>

      <div
        className="overflow-hidden group"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
          style={{ animation: 'marquee 45s linear infinite' }}
        >
          {doubled.map((post, i) => (
            <Link
              key={`${post.slug}-${i}`}
              href={`/blog/${post.slug}`}
              className="group/card flex flex-col w-72 shrink-0 rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {post.category}
                </span>
                <span className="ml-auto text-xs text-navy/40 shrink-0">
                  {fmtDate(post.date)}
                </span>
              </div>

              <h3 className="flex-1 mb-4 text-sm font-display font-medium leading-snug text-navy line-clamp-3 transition-colors group-hover/card:text-brand">
                {post.title}
              </h3>

              <span className="text-xs font-semibold text-brand">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
