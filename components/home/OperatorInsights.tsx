'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import { RevealText } from '@/components/motion/RevealText';
import { EASE_OUT } from '@/lib/motion';

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
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-[10px] font-semibold text-white ring-2 ring-white"
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
  const shown = insights[active];
  if (!shown) return null;

  return (
    <section className="relative overflow-clip bg-navy px-6 py-20 text-warm-white md:flex md:min-h-[calc(100svh-4rem)] md:flex-col md:justify-center md:px-12 md:py-[clamp(40px,8svh,112px)]">
      <NavyBackdrop />
      <div className="relative mx-auto w-full max-w-7xl">
      <div className="mb-10 flex flex-col gap-4 md:mb-[clamp(24px,5svh,48px)] md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm-white/50">
            <span aria-hidden="true" className="text-brand">→</span> From the operators
          </p>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Operator-tested ' }, { text: 'insights.', className: 'text-brand' }]}
          />
          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            Written by founders and operators who have been in the trenches.
          </p>
        </div>
        <Link
          href="/blog"
          className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-warm-white transition-colors hover:border-brand hover:bg-brand"
        >
          All articles
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
        {/* The list */}
        <ol className="border-t border-white/15">
          {insights.map((post, i) => (
            <li key={post.slug} className="border-b border-white/15">
              <Link
                href={`/blog/${post.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group relative flex items-start gap-4 py-5 pl-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:py-[clamp(14px,2.6svh,24px)]"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-0.5 origin-top bg-brand transition-transform duration-300 ${active === i ? 'scale-y-100' : 'scale-y-0'}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-warm-white/45">
                    {post.category} · {post.date}
                  </span>
                  <span className={`block text-lg font-display font-medium leading-snug transition-colors duration-300 md:text-xl ${active === i ? 'text-brand' : 'text-warm-white group-hover:text-brand'}`}>
                    {post.title}
                  </span>
                  <span className="mt-2 flex items-center gap-2 text-xs text-warm-white/60">
                    <Avatar name={post.author} image={post.authorImage} size={22} />
                    {post.author} · {post.minutes} min read
                  </span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-warm-white/30 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            </li>
          ))}
        </ol>

        {/* The reading panel (desktop): a paper card that sizes to the article, not to the list */}
        <div className="relative hidden self-start overflow-hidden rounded-3xl bg-warm-white md:sticky md:top-24 p-[clamp(24px,4svh,44px)] text-navy shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] md:flex md:flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={shown.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="relative flex flex-col"
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-brand">{shown.category}</p>
              <p className="mb-5 text-[clamp(24px,min(2.6vw,4.4svh),36px)] font-display font-medium leading-[1.15] tracking-tight">{shown.title}</p>
              <p className="mb-8 line-clamp-5 text-[15px] font-light leading-relaxed text-grey">{shown.excerpt}</p>
              <div className="flex items-center justify-between gap-4 border-t border-navy/10 pt-5">
                <span className="flex items-center gap-3">
                  <Avatar name={shown.author} image={shown.authorImage} size={40} />
                  <span>
                    <span className="block text-sm font-semibold">{shown.author}</span>
                    {shown.authorRole && <span className="block text-xs text-grey">{shown.authorRole}</span>}
                  </span>
                </span>
                <Link
                  href={`/blog/${shown.slug}`}
                  tabIndex={-1}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  Read
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
}
