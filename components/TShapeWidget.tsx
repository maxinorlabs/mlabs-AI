'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react';
import { ArrowRight, GraduationCap, Hospital, Landmark, MonitorPlay, Shield, Store } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { useScrub } from '@/components/motion/useScrub';
import { EASE_OUT } from '@/lib/motion';
import { trackSpotlight } from '@/lib/spotlight';

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

// Home: the hero's paper look. Hairline cells that fill from the bottom on hover, orange for Build, navy otherwise.
const PAPER_FILL: Record<string, string> = { build: 'bg-brand', scale: 'bg-navy', invest: 'bg-navy' };

function PaperCell({ cap, className, handlers }: { cap: (typeof CAPABILITIES)[number]; className: string; handlers: object }) {
  return (
    <Link
      href={cap.href}
      {...handlers}
      className={`group/cell relative flex items-center justify-center overflow-hidden text-center font-semibold leading-tight text-navy outline-none transition-colors duration-500 hover:text-warm-white focus-visible:text-warm-white ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cell:scale-y-100 group-focus-visible/cell:scale-y-100 ${PAPER_FILL[cap.group]}`}
      />
      <span className="relative">{cap.name}</span>
    </Link>
  );
}

const SECTORS = [
  { name: 'Healthcare', href: '/sectors/healthcare', icon: Hospital },
  { name: 'D2C', href: '/sectors/d2c', icon: Store },
  { name: 'BFSI', href: '/sectors/bfsi', icon: Landmark },
  { name: 'Media', href: '/sectors/media', icon: MonitorPlay },
  { name: 'Education', href: '/sectors/education', icon: GraduationCap },
  { name: 'Defence', href: '/sectors/defence', icon: Shield },
];

// The T builds with the scroll position (and unbuilds when scrolling back): the capability bar wipes in
// left to right, the stem draws down, then sectors arrive one by one along it. Values are scroll progress.
const BAR = [0, 0.3];
const STEM = [0.28, 0.4];
const SPINE = [0.36, 1];
const sectorRange = (i: number) => [0.38 + i * 0.09, 0.52 + i * 0.09];

function ScrubRow({ progress, index, children }: { progress: MotionValue<number>; index: number; children: React.ReactNode }) {
  const range = sectorRange(index);
  const opacity = useTransform(progress, range, [0, 1]);
  const x = useTransform(progress, range, [index % 2 === 0 ? -28 : 28, 0]);
  return <motion.div style={{ opacity, x }}>{children}</motion.div>;
}

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
  const paper = variant === 'home';
  const reduceMotion = useReducedMotion();
  const buildRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  // On the home page, on screens tall enough to show the whole T at once, the T holds still in view while
  // the scroll builds it. Elsewhere (phones, short laptops, other pages) it builds as it scrolls past.
  // Decided after mount, so the server markup is always the unpinned version.
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    if (variant !== 'home') return;
    const query = window.matchMedia('(min-width: 1024px) and (min-height: 860px) and (prefers-reduced-motion: no-preference)');
    const update = () => setPinned(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [variant]);
  const progress = useScrub(pinned ? pinRef : buildRef, pinned ? ['start start', 'end end'] : ['start 80%', 'end 85%']);
  const barClip = useTransform(progress, BAR, ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);
  const stemScale = useTransform(progress, STEM, [0, 1]);
  const spineScale = useTransform(progress, SPINE, [0, 1]);
  // Hover links the two halves of the T: a sector lights the stem up to the full capability bar,
  // a capability lights the whole sector stack. `sweep` restarts the light passing across the bar.
  const [activeSector, setActiveSector] = useState<number | null>(null);
  const [capActive, setCapActive] = useState(false);
  const [sweep, setSweep] = useState(0);
  const linked = activeSector !== null || capActive;

  const sectorOn = (i: number) => {
    setActiveSector(i);
    setSweep((n) => n + 1);
  };
  const capHandlers = {
    onPointerEnter: () => setCapActive(true),
    onPointerLeave: () => setCapActive(false),
    onFocus: () => setCapActive(true),
    onBlur: () => setCapActive(false),
  };

  const wrapperClass = paper
    ? `group/hero relative overflow-clip border-t border-navy/10 bg-warm-white px-6 py-20 md:py-28 ${fullBleed ? '' : 'rounded-[2.5rem] md:px-12'}`
    : 'relative';

  return (
    <div className={wrapperClass} onPointerMove={paper ? trackSpotlight : undefined}>
      {paper && (
        <>
          {/* The hero's paper: navy dot grid, lit orange around the pointer, and a little grain */}
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
          />
          <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
          <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.35] mix-blend-multiply" />
        </>
      )}

      {/* overflow-clip above (not hidden) keeps position: sticky working inside this section */}
      <div ref={pinRef} className={pinned ? 'h-[200vh]' : undefined}>
      <div className={pinned ? 'sticky top-16 flex h-[calc(100svh-4rem)] items-center' : undefined}>
      <div ref={buildRef} className="relative z-10 mx-auto w-full max-w-4xl">
        <Reveal className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">{copy.eyebrow}</p>
          <h2 className={`text-2xl font-display font-medium tracking-tight md:text-4xl text-navy`}>
            {copy.headline}
          </h2>
          {copy.concept && (
            <p className={`mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-grey/50`}>{copy.concept}</p>
          )}
        </Reveal>

        {/* Capability block — group headers + cells */}
        <div
          className={`rounded-2xl transition-shadow duration-500 ${
            activeSector !== null
              ? 'shadow-[0_0_0_2px_rgba(243,111,33,0.7),0_0_60px_-6px_rgba(243,111,33,0.45)]'
              : paper
                ? 'shadow-[0_24px_60px_-30px_rgba(11,31,59,0.35)]'
                : ''
          }`}
        >
          <motion.div
            style={{ clipPath: barClip }}
            className={`relative overflow-hidden rounded-2xl transition-opacity duration-500 ${dimHorizontal ? 'opacity-30' : 'opacity-100'} ${
              paper ? 'border border-navy/15 bg-white/60 backdrop-blur-sm' : ''
            }`}
          >
            {sweep > 0 && !reduceMotion && (
              <motion.span
                key={sweep}
                aria-hidden="true"
                initial={{ left: '-30%' }}
                animate={{ left: '110%' }}
                transition={{ duration: 0.9, ease: EASE_OUT }}
                className="pointer-events-none absolute inset-y-0 z-10 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              />
            )}
            {/* Desktop: single 8-col row, grouped headers on top */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-8">
                {GROUPS.map((g, gi) =>
                  paper ? (
                    <Link
                      key={g.id}
                      href={`/capabilities#${g.id}`}
                      style={{ gridColumn: `span ${g.span} / span ${g.span}` }}
                      className="flex items-center justify-center gap-3 border-b border-r border-navy/10 py-3 text-xs font-bold uppercase tracking-[0.18em] text-navy transition-colors last:border-r-0 hover:text-brand"
                    >
                      <span className="font-mono text-[11px] font-normal tracking-wider text-brand">0{gi + 1}</span>
                      {g.name}
                    </Link>
                  ) : (
                    <Link
                      key={g.id}
                      href={`/capabilities#${g.id}`}
                      style={{ gridColumn: `span ${g.span} / span ${g.span}` }}
                      className="border-r border-white/10 bg-navy py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-warm-white transition-colors last:border-r-0 hover:bg-white/10 hover:text-brand"
                    >
                      {g.name}
                    </Link>
                  ),
                )}
              </div>
              <div className="grid grid-cols-8">
                {CAPABILITIES.map((cap, ci) => {
                  const style = GROUP_STYLE[cap.group];
                  if (paper) {
                    // A slightly stronger divider where one group ends and the next begins
                    const groupEnd = ci === 2 || ci === 5;
                    return (
                      <PaperCell
                        key={cap.name}
                        cap={cap}
                        handlers={capHandlers}
                        className={`min-h-[84px] px-2 py-4 text-xs last:border-r-0 ${groupEnd ? 'border-r border-navy/15' : 'border-r border-navy/[0.07]'}`}
                      />
                    );
                  }
                  return (
                    <Link
                      key={cap.name}
                      href={cap.href}
                      {...capHandlers}
                      className={`flex min-h-[84px] items-center justify-center border-r border-white/15 px-2 py-4 text-center text-xs font-semibold leading-tight transition-[filter] duration-300 last:border-r-0 hover:brightness-105 ${style.bg} ${style.text}`}
                    >
                      {cap.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile: grouped rows of 3 / 3 / 2 */}
            <div className="flex flex-col gap-1.5 sm:hidden">
              {GROUPS.map((g, gi) => (
                <div key={g.id} className={`overflow-hidden rounded-xl ${paper ? 'border border-navy/15 bg-white/60' : ''}`}>
                  <Link
                    href={`/capabilities#${g.id}`}
                    className={
                      paper
                        ? 'flex items-center justify-center gap-2 border-b border-navy/10 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:text-brand'
                        : 'block bg-navy py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-warm-white transition-colors hover:text-brand'
                    }
                  >
                    {paper && <span className="font-mono font-normal text-brand">0{gi + 1}</span>}
                    {g.name}
                  </Link>
                  <div className={`grid ${paper ? 'divide-x divide-navy/[0.07]' : 'gap-0.5'} ${g.span === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {CAPABILITIES.filter((c) => c.group === g.id).map((cap) => {
                      const style = GROUP_STYLE[cap.group];
                      if (paper) {
                        return <PaperCell key={cap.name} cap={cap} handlers={capHandlers} className="min-h-[64px] px-1.5 py-2.5 text-[10px]" />;
                      }
                      return (
                        <Link
                          key={cap.name}
                          href={cap.href}
                          {...capHandlers}
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
        </div>

        {/* Stem connector */}
        <div className="relative flex justify-center py-4">
          <div
            aria-hidden="true"
            className={`absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-brand shadow-[0_0_12px_rgba(243,111,33,0.8)] transition-opacity duration-300 ${linked ? 'opacity-100' : 'opacity-0'}`}
          />
          <motion.div
            style={{ scaleY: stemScale }}
            className={`h-8 w-0.5 origin-top bg-gradient-to-b from-navy/20 to-navy/10`}
          />
        </div>

        {/* Sectors — stacked down the stem of the T, which runs on behind them */}
        <div className={`relative mx-auto max-w-sm transition-opacity duration-500 ${dimVertical ? 'opacity-30' : 'opacity-100'}`}>
          <motion.div
            aria-hidden="true"
            style={{ scaleY: spineScale }}
            className={`absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-navy/10 to-navy/0`}
          />
          {/* Lit section of the stem, running down to the hovered sector (or the whole stack) */}
          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{ scaleY: capActive ? 1 : activeSector !== null ? (activeSector + 0.5) / SECTORS.length : 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 origin-top bg-brand shadow-[0_0_12px_rgba(243,111,33,0.8)]"
          />
          <div className="relative flex flex-col gap-2">
            {SECTORS.map((sector, i) => (
              <ScrubRow key={sector.name} progress={progress} index={i}>
                <Link
                  href={sector.href}
                  onPointerEnter={() => sectorOn(i)}
                  onPointerLeave={() => setActiveSector(null)}
                  onFocus={() => sectorOn(i)}
                  onBlur={() => setActiveSector(null)}
                  className={`group grid grid-cols-[1rem_1fr_1rem] items-center gap-3 rounded-xl border px-5 py-3 text-center text-sm font-medium transition-[translate,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 ${
                    variant === 'sectors'
                      ? 'border-brand/40 bg-[#F7E9E0] font-semibold text-navy shadow-[0_0_24px_rgba(243,111,33,0.12)]'
                      : paper
                        ? `bg-white/60 text-navy/80 backdrop-blur-sm hover:border-brand/50 hover:bg-white hover:text-navy ${capActive ? 'border-brand/50' : 'border-navy/15'}`
                        : `bg-warm-white text-navy/80 hover:border-brand/50 hover:bg-[#EBECEC] ${capActive ? 'border-brand/50' : 'border-grey/15'}`
                  }`}
                >
                  <sector.icon className={`h-4 w-4 transition-colors duration-300 group-hover:text-brand text-navy/40`} />
                  {sector.name}
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-brand opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-x-0 group-hover:opacity-100 [@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-60" />
                </Link>
              </ScrubRow>
            ))}
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
