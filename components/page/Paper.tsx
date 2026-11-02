'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { HeroCompass } from '@/components/Compass';
import { trackSpotlight } from '@/lib/spotlight';

/**
 * The Home page's visual language, shared by the inner pages: the hero's paper (navy dot grid, lit orange
 * around the pointer, a little grain), mono eyebrows, hairline-ruled panels and the route compass.
 */

// A section on the hero's paper. Pass `fill` to make it fill one screen below the header on desktop.
export function PaperSection({
  children,
  className = '',
  fill = false,
}: {
  children: ReactNode;
  className?: string;
  fill?: boolean;
}) {
  return (
    <section
      onPointerMove={trackSpotlight}
      className={`group/hero relative overflow-clip border-t border-navy/10 bg-warm-white px-6 text-navy md:px-12 ${
        fill ? 'flex flex-col justify-center md:min-h-[calc(100svh-4rem)]' : ''
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
      />
      <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply" />
      <div className="relative mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

// The small mono label above a heading, as on the Home page's closing section.
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50 ${className}`}>
      <span aria-hidden="true" className="text-brand">→</span> {children}
    </p>
  );
}

// The white, hairline-divided panel the Home page uses for its entry points.
export const panelClass =
  'grid divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white/60 shadow-[0_24px_60px_-36px_rgba(11,31,59,0.35)] backdrop-blur-[2px] md:divide-x md:divide-y-0';

// An orange rule that draws along the top of a panel cell on hover, like a lit route on the compass.
export function HoverRule({ on = false }: { on?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-brand transition-transform duration-500 ease-out ${
        on ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}
    />
  );
}

// A list drawn as thin ruled rows, each marked with a small orange diamond.
export function RuledList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`border-t border-navy/10 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 border-b border-navy/[0.06] py-2.5 text-[14px] leading-snug text-navy/80">
          <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Questions as hairline rows that open in place.
export function RuledFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-navy/15">
      {items.map((item, i) => (
        <div key={item.q} className="border-b border-navy/15">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span className={`text-base font-medium transition-colors duration-300 md:text-lg ${open === i ? 'text-brand' : 'text-navy group-hover:text-brand'}`}>
              {item.q}
            </span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                open === i ? 'border-brand bg-brand text-warm-white' : 'border-navy/15 text-navy/60 group-hover:border-brand group-hover:text-brand'
              }`}
            >
              <Plus className={`h-4 w-4 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="max-w-2xl pb-6 text-[15px] font-light leading-relaxed text-grey">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// The three ways in, at the same bearings as on the Home page's compass.
export const ROUTES = [
  { label: 'Build', href: '/build', bearing: 300 },
  { label: 'Scale', href: '/scale', bearing: 0 },
  { label: 'Invest', href: '/invest', bearing: 60 },
] as const;

export type Route = (typeof ROUTES)[number]['label'];

/**
 * The hero's compass with its three route labels. The needle rests on the page's own route ("you are
 * here"); pointing at another label swings it there. The labels repeat links found in the navigation,
 * so they stay out of the tab order.
 */
export function RouteCompass({ here, className = '' }: { here: Route; className?: string }) {
  const [pointed, setPointed] = useState<number | null>(null);
  const home = ROUTES.find((r) => r.label === here)!.bearing;
  const bearing = pointed ?? home;

  return (
    <div className={`relative ${className}`}>
      <HeroCompass bearing={bearing} className="relative w-full text-navy" />
      {ROUTES.map((route) => {
        const rad = ((route.bearing - 90) * Math.PI) / 180;
        const lit = bearing === route.bearing;
        return (
          <Link
            key={route.href}
            href={route.href}
            tabIndex={-1}
            onMouseEnter={() => setPointed(route.bearing)}
            onMouseLeave={() => setPointed(null)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
              lit ? 'border-brand/40 bg-warm-white text-brand' : 'border-transparent text-navy/40 hover:border-navy/15'
            }`}
            style={{ left: `${50 + 58 * Math.cos(rad)}%`, top: `${50 + 58 * Math.sin(rad)}%` }}
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
}

export const primaryButtonClass =
  'group inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white shadow-[0_0_40px_rgba(243,111,33,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] active:translate-y-0 active:scale-[0.98] sm:px-10';

export const secondaryButtonClass =
  'group inline-flex items-center justify-center rounded-full border border-navy/20 px-8 py-4 text-base font-semibold tracking-wide text-navy transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand active:translate-y-0 active:scale-[0.98] sm:px-10';
