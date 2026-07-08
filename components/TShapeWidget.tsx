'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

type Variant = 'home' | 'sectors' | 'capabilities';

const CAPABILITIES = [
  { name: 'AI & Tech', href: '/capabilities/ai-tech', group: 'build' as const },
  { name: 'Product & Design', href: '/capabilities/product-research', group: 'build' as const },
  { name: 'Brand & Marketing', href: '/capabilities/brand-marketing', group: 'build' as const },
  { name: 'Growth & Revenue', href: '/capabilities/growth-revenue', group: 'scale' as const },
  { name: 'Supply Chain & Operations', href: '/capabilities/operations', group: 'scale' as const },
  { name: 'Finance & Accounting', href: '/capabilities/finance-accounting', group: 'scale' as const },
  { name: 'Venture Capital', href: '/capabilities/venture-capital', group: 'invest' as const },
  { name: 'M&A', href: '/capabilities/mergers-acquisitions', group: 'invest' as const },
];

const GROUPS = [
  { id: 'build', name: 'Build', span: 3 },
  { id: 'scale', name: 'Scale', span: 3 },
  { id: 'invest', name: 'Invest', span: 2 },
] as const;

const GROUP_STYLE: Record<string, { bg: string; text: string }> = {
  build: { bg: 'bg-brand', text: 'text-white' },
  scale: { bg: 'bg-[#F0997B]', text: 'text-[#4A1B0C]' },
  invest: { bg: 'bg-[#FAC775]', text: 'text-[#412402]' },
};

const SECTORS = [
  { name: 'Healthcare', href: '/sectors/healthcare' },
  { name: 'D2C', href: '/sectors/d2c' },
  { name: 'BFSI', href: '/sectors/bfsi' },
  { name: 'Media', href: '/sectors/media' },
  { name: 'Education', href: '/sectors/education' },
  { name: 'Defence', href: '/sectors/defence' },
];

const COPY: Record<Variant, { eyebrow: string; headline: string; concept: string }> = {
  home: {
    eyebrow: 'The T-Shape Advantage',
    headline: 'Six sectors. One operator team. Your entire business covered.',
    concept: '',
  },
  sectors: {
    eyebrow: 'Where We Play',
    headline: 'Deep operator expertise. High-growth sectors.',
    concept: 'Sector depth. Operator breadth.',
  },
  capabilities: {
    eyebrow: 'Where Maxinor Adds Value',
    headline: 'Our operator capabilities. One accountable team.',
    concept: 'Sector depth. Operator breadth.',
  },
};

export function TShapeWidget({ variant = 'home', fullBleed = false }: { variant?: Variant; fullBleed?: boolean }) {
  const copy = COPY[variant];
  const dimHorizontal = variant === 'sectors';
  const dimVertical = variant === 'capabilities';
  const dark = variant === 'home';

  const wrapperClass = dark
    ? `relative overflow-hidden bg-navy px-6 py-20 md:py-28 ${fullBleed ? '' : 'rounded-[2.5rem] md:px-12'}`
    : 'relative';

  return (
    <div className={wrapperClass}>
      {dark && (
        <>
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/10 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-teal/10 blur-[100px]" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">{copy.eyebrow}</p>
          <h2 className={`text-2xl font-display font-medium tracking-tight md:text-4xl ${dark ? 'text-warm-white' : 'text-navy'}`}>
            {copy.headline}
          </h2>
          {copy.concept && (
            <p className={`mt-4 text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? 'text-warm-white/35' : 'text-grey/50'}`}>{copy.concept}</p>
          )}
        </div>

        {/* Capability block — group headers + cells */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`overflow-hidden rounded-2xl transition-opacity duration-500 ${dimHorizontal ? 'opacity-30' : 'opacity-100'}`}
        >
          {/* Desktop: single 8-col row, grouped headers on top */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-8">
              {GROUPS.map((g) => (
                <div
                  key={g.id}
                  style={{ gridColumn: `span ${g.span} / span ${g.span}` }}
                  className="border-r border-white/10 bg-navy py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-warm-white last:border-r-0"
                >
                  {g.name}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-8">
              {CAPABILITIES.map((cap) => {
                const style = GROUP_STYLE[cap.group];
                return (
                  <Link
                    key={cap.name}
                    href={cap.href}
                    className={`flex min-h-[84px] items-center justify-center border-r border-white/15 px-2 py-4 text-center text-xs font-semibold leading-tight transition-opacity duration-300 last:border-r-0 hover:opacity-90 ${style.bg} ${style.text}`}
                  >
                    {cap.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile: grouped rows of 3 / 3 / 2 */}
          <div className="flex flex-col gap-1.5 sm:hidden">
            {GROUPS.map((g) => (
              <div key={g.id} className="overflow-hidden rounded-xl">
                <div className="bg-navy py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-warm-white">
                  {g.name}
                </div>
                <div className={`grid gap-0.5 ${g.span === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                  {CAPABILITIES.filter((c) => c.group === g.id).map((cap) => {
                    const style = GROUP_STYLE[cap.group];
                    return (
                      <Link
                        key={cap.name}
                        href={cap.href}
                        className={`flex min-h-[64px] items-center justify-center px-1.5 py-2.5 text-center text-[10px] font-semibold leading-tight ${style.bg} ${style.text}`}
                      >
                        {cap.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stem connector */}
        <div className="flex justify-center py-4">
          <div className={`h-8 w-0.5 bg-gradient-to-b ${dark ? 'from-white/25 to-white/5' : 'from-navy/20 to-navy/5'}`} />
        </div>

        {/* Sectors row — horizontal on desktop, stacked on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`flex flex-col gap-2 transition-opacity duration-500 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2.5 ${dimVertical ? 'opacity-30' : 'opacity-100'}`}
        >
          {SECTORS.map((sector) => (
            <Link
              key={sector.name}
              href={sector.href}
              className={`rounded-xl border px-5 py-3 text-center text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 sm:flex-1 sm:min-w-[100px] ${
                variant === 'sectors'
                  ? 'border-brand/40 bg-brand/10 font-semibold text-navy shadow-[0_0_24px_rgba(243,111,33,0.12)]'
                  : dark
                    ? 'border-white/10 bg-white/5 text-warm-white/80 hover:border-white/25 hover:bg-white/8'
                    : 'border-grey/15 bg-warm-white text-navy/80 hover:border-navy/20 hover:bg-navy/5'
              }`}
            >
              {sector.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
