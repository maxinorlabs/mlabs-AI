'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'home' | 'sectors' | 'capabilities';

const CAPABILITIES = [
  { name: 'Product & Research', href: '/capabilities/product-research', group: 'core' as const },
  { name: 'AI & Tech', href: '/capabilities/ai-tech', group: 'core' as const },
  { name: 'Growth & Revenue', href: '/capabilities/growth-revenue', group: 'core' as const },
  { name: 'Talent & Org', href: '/capabilities/talent-culture', group: 'foundation' as const },
  { name: 'Legal', href: '/capabilities/legal', group: 'foundation' as const },
  { name: 'Operations', href: '/capabilities/operations', group: 'foundation' as const },
];

const SECTORS = [
  { name: 'Healthcare', href: '/sectors/healthcare' },
  { name: 'D2C', href: '/sectors/d2c' },
  { name: 'BFSI', href: '/sectors/bfsi' },
  { name: 'Media', href: '/sectors/media' },
  { name: 'Education', href: '/sectors/education' },
  { name: 'Defence', href: '/sectors/defence' },
];

const COPY: Record<Variant, { eyebrow: string; headline: string; concept: string; subtitle: string }> = {
  home: {
    eyebrow: 'The T-Shape Advantage',
    headline: 'Six sectors. One operator team. Your entire business covered.',
    concept: '',
    subtitle: 'Horizontal depth across every capability a scaling business needs. Vertical expertise inside the sectors we operate in.',
  },
  sectors: {
    eyebrow: 'Where We Play',
    headline: 'Deep operator expertise. High-growth sectors.',
    concept: 'Sector depth. Operator breadth.',
    subtitle: 'Every sector below is backed by the full capability stack, not a single generalist.',
  },
  capabilities: {
    eyebrow: 'How We Deliver',
    headline: 'Six capabilities. One accountable team.',
    concept: 'Sector depth. Operator breadth.',
    subtitle: 'Every capability below carries deep sector context, not a one-size-fits-all playbook.',
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-3 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">{copy.eyebrow}</p>
          <h2 className={`mb-3 text-2xl font-display font-medium tracking-tight md:text-4xl ${dark ? 'text-warm-white' : 'text-navy'}`}>
            {copy.headline}
          </h2>
          <p className={`mx-auto max-w-xl text-sm font-light leading-relaxed md:text-base ${dark ? 'text-warm-white/50' : 'text-grey'}`}>
            {copy.subtitle}
          </p>
          {copy.concept && (
            <p className={`mt-4 text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? 'text-warm-white/35' : 'text-grey/50'}`}>{copy.concept}</p>
          )}
        </div>

        {/* Horizontal bar — capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div
            className={`grid grid-cols-3 gap-4 transition-opacity duration-500 sm:grid-cols-6 md:gap-6 ${dimHorizontal ? 'opacity-30' : 'opacity-100'}`}
          >
            {CAPABILITIES.map((cap) => (
              <Link
                key={cap.name}
                href={cap.href}
                className={`group flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-3 py-6 text-center text-[11px] font-semibold leading-tight backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:text-xs ${
                  dark
                    ? cap.group === 'core'
                      ? 'border-brand/25 bg-brand/10 text-warm-white hover:border-brand/50 hover:bg-brand/15'
                      : 'border-teal/25 bg-teal/10 text-warm-white hover:border-teal/50 hover:bg-teal/15'
                    : cap.group === 'core'
                      ? 'border-navy/10 bg-navy/6 text-navy hover:border-navy/25 hover:bg-navy/12'
                      : 'border-teal/20 bg-teal/8 text-[#1f7d73] hover:border-teal/40 hover:bg-teal/15'
                } ${variant === 'capabilities' ? 'shadow-[0_0_24px_rgba(243,111,33,0.12)]' : ''}`}
              >
                <span>{cap.name}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
              </Link>
            ))}
          </div>
          <div className={`mt-3 grid grid-cols-2 transition-opacity duration-500 ${dimHorizontal ? 'opacity-30' : 'opacity-100'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <p className={`text-center text-[10px] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-warm-white/40' : 'text-grey/50'}`}>Core Engines</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <p className={`text-center text-[10px] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-warm-white/40' : 'text-grey/50'}`}>Foundation</p>
            </div>
          </div>
          <p className={`mt-3 text-center text-[11px] font-bold uppercase tracking-[0.16em] transition-opacity duration-500 ${dark ? 'text-warm-white/30' : 'text-grey/40'} ${dimHorizontal ? 'opacity-30' : 'opacity-100'}`}>
            6 Capabilities
          </p>
        </motion.div>

        {/* Stem connector */}
        <div className="flex justify-center py-4">
          <div className={`h-8 w-0.5 bg-gradient-to-b ${dark ? 'from-white/25 to-white/5' : 'from-navy/20 to-navy/5'}`} />
        </div>

        {/* Vertical stack — sectors */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto flex max-w-sm flex-col gap-2.5"
        >
          {SECTORS.map((sector) => (
            <Link
              key={sector.name}
              href={sector.href}
              className={`group relative flex items-center justify-center rounded-2xl border px-5 py-3 text-center text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                variant === 'sectors'
                  ? 'border-brand/40 bg-brand/10 font-semibold text-navy shadow-[0_0_24px_rgba(243,111,33,0.12)]'
                  : dark
                    ? 'border-white/10 bg-white/5 text-warm-white/80 hover:border-white/25 hover:bg-white/8'
                    : 'border-grey/15 bg-warm-white text-navy/80 hover:border-navy/20 hover:bg-navy/5'
              } ${dimVertical ? 'opacity-30' : 'opacity-100'}`}
            >
              {sector.name}
              <ArrowUpRight className="absolute right-4 h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
            </Link>
          ))}
          <p className={`mt-1 text-center text-[11px] font-bold uppercase tracking-[0.16em] transition-opacity duration-500 ${dark ? 'text-warm-white/30' : 'text-grey/40'} ${dimVertical ? 'opacity-30' : 'opacity-100'}`}>
            6 Sectors
          </p>
        </motion.div>
      </div>
    </div>
  );
}
