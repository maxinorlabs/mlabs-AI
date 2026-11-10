'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import { SectionHeader } from '@/components/home/SectionHeader';
import { SETTLE } from '@/lib/motion';
import { cn } from '@/lib/utils';

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  minutes: number;
  author: string;
  authorRole?: string;
  authorImage?: string;
};

function Avatar({ name, image, size }: { name: string; image?: string; size: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-[11px] font-semibold text-navy ring-2 ring-white"
      style={{ width: size, height: size }}
    >
      {image ? (
        <Image src={image} alt="" fill sizes={`${size}px`} className="object-cover object-top" />
      ) : (
        name
          .split(' ')
          .map((part) => part[0])
          .slice(0, 2)
          .join('')
      )}
    </span>
  );
}

/**
 * The latest articles from the blog, written by the operators. A list on the left; pointing at or focusing an
 * article shows it in the reading panel on the right, with its author. On phones the list stands alone.
 */
export function OperatorInsights({ insights }: { insights: Insight[] }) {
  const [active, setActive] = useState(0);
  if (insights.length === 0) return null;

  return (
    <section className="relative overflow-clip bg-navy px-6 py-16 text-warm-white md:px-12 md:py-20">
      <NavyBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
      <SectionHeader eyebrow="Insights" parts={[{ text: 'Operator-tested ' }, { text: 'insights.', className: 'text-brand' }]}>
        <p className="text-pretty text-base font-light leading-relaxed text-warm-white/60">Written by founders and operators who have been in the trenches.</p>
        <Link
          href="/blog"
          className="press group mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-warm-white transition duration-300 hover:border-brand hover:bg-brand"
        >
          All articles
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {/* The list */}
        <ol className="border-t border-white/15">
          {insights.map((post, i) => (
            <li key={post.slug} className="border-b border-white/15">
              <Link
                href={`/blog/${post.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="press group relative flex items-start gap-4 py-5 pl-4 transition-[scale] duration-300 md:py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand "
              >
                {active === i && <motion.span aria-hidden="true" layoutId="insight-marker" transition={SETTLE} className="absolute inset-y-0 left-0 w-0.5 bg-brand" />}
                <span className="min-w-0 flex-1">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.22em] text-warm-white/75">
                    {post.category} · {post.date}
                  </span>
                  <span className={`block text-lg font-display font-medium leading-snug transition-colors duration-300 md:text-xl ${active === i ? 'text-brand' : 'text-warm-white group-hover:text-brand'}`}>
                    {post.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-warm-white/70 lg:hidden">{post.excerpt}</span>
                  <span className="mt-2 flex items-center gap-2 text-xs text-warm-white/75">
                    <Avatar name={post.author} image={post.authorImage} size={22} />
                    {post.author} · {post.minutes} min read
                  </span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-warm-white/30 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            </li>
          ))}
        </ol>

        {/* The reading panel (desktop). Every article sits in the same grid cell, so moving down the list is an
            immediate crossfade with no waiting and no jump in height. */}
        <div className="relative hidden self-start overflow-hidden rounded-2xl bg-warm-white p-8 text-navy lg:sticky lg:top-24 lg:grid">
          {insights.map((post, i) => (
            <div
              key={post.slug}
              className={cn(
                'col-start-1 row-start-1 flex flex-col transition-[opacity,visibility,translate] duration-300 ease-out',
                active === i ? 'opacity-100' : 'invisible translate-y-2 opacity-0',
              )}
            >
              <p className="mb-4 border-l-2 border-brand pl-3 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/70">{post.category}</p>
              <p className="mb-4 text-balance font-display text-2xl font-medium leading-tight tracking-tight">{post.title}</p>
              <p className="mb-8 line-clamp-5 flex-1 text-pretty text-base font-light leading-relaxed text-grey">{post.excerpt}</p>
              <div className="flex items-center justify-between gap-4 border-t border-navy/10 pt-5">
                <span className="flex items-center gap-3">
                  <Avatar name={post.author} image={post.authorImage} size={40} />
                  <span>
                    <span className="block text-sm font-semibold">{post.author}</span>
                    {post.authorRole && <span className="block text-xs text-grey">{post.authorRole}</span>}
                  </span>
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="press group inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-navy transition duration-300 hover:bg-brand/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
                >
                  Read
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
