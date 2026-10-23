'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useTransform, type MotionValue } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES, GROUPS, SECTORS } from '@/components/TShapeWidget';
import { useScrub } from '@/components/motion/useScrub';
import { EASE_OUT } from '@/lib/motion';
import { trackSpotlight } from '@/lib/spotlight';

// The T on the hero's paper: breadth across the top (capabilities), depth down a spine (sectors).
// Scrolling draws the spine down; each node turns orange as the line reaches it and its sector branches out.

const FILL: Record<string, string> = { build: 'bg-brand', scale: 'bg-navy', invest: 'bg-navy' };
const ROWS = Math.ceil(SECTORS.length / 2);
const SPINE = [0.05, 0.8];
// Scroll progress at which the drawn spine reaches node row r.
const reach = (row: number) => SPINE[0] + ((row + 0.5) / ROWS) * (SPINE[1] - SPINE[0]);

function Axis({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p aria-hidden="true" className={`font-mono text-[10px] uppercase tracking-[0.22em] text-navy/40 ${className}`}>
      {children}
    </p>
  );
}

function SectorBranch({
  sector,
  index,
  progress,
  lit,
  reached,
  onEnter,
  onLeave,
}: {
  sector: (typeof SECTORS)[number];
  index: number;
  progress: MotionValue<number>;
  lit: boolean;
  reached: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const row = Math.floor(index / 2);
  const left = index % 2 === 0;
  const at = reach(row);
  const opacity = useTransform(progress, [at - 0.04, at + 0.06], [0, 1]);
  // Branches slide out from the spine: left ones move left, right ones move right.
  const x = useTransform(progress, [at - 0.04, at + 0.08], [left ? 24 : -24, 0]);
  const Icon = sector.icon;

  return (
    <motion.div
      style={{ opacity, x, ['--row' as string]: row + 1 }}
      className={`relative flex items-center md:[grid-row:var(--row)] ${left ? 'md:col-start-1 md:justify-end' : 'md:col-start-3'}`}
    >
      {/* Connector from the spine to the card: always on the left on phones, toward the spine on desktop */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 h-px w-6 -left-6 transition-colors duration-300 md:w-12 ${left ? 'md:left-auto md:-right-12' : 'md:-left-12'} ${
          lit ? 'bg-brand' : 'bg-navy/15'
        }`}
      />
      {/* Phones: this sector's own node on the spine */}
      <span
        aria-hidden="true"
        className={`absolute -left-[27.5px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full border transition-colors duration-300 md:hidden ${
          reached || lit ? 'border-brand bg-brand' : 'border-navy/30 bg-warm-white'
        }`}
      />
      <Link
        href={sector.href}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
        className={`group/sector flex w-full items-center gap-4 rounded-xl border bg-white/60 px-4 py-3 text-navy backdrop-blur-sm transition-[border-color,background-color,translate] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:max-w-xs ${
          lit ? 'border-brand/50' : 'border-navy/15'
        }`}
      >
        <span className="font-mono text-[11px] tracking-wider text-brand">0{index + 1}</span>
        <Icon className="h-4 w-4 text-navy/40 transition-colors duration-300 group-hover/sector:text-brand" aria-hidden="true" />
        <span className="flex-1 text-sm font-semibold tracking-tight">{sector.name}</span>
        <ArrowUpRight
          className="h-4 w-4 text-navy/30 transition duration-300 group-hover/sector:-translate-y-0.5 group-hover/sector:translate-x-0.5 group-hover/sector:text-brand"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}

export function HomeTShape() {
  const spineRef = useRef<HTMLDivElement>(null);
  const progress = useScrub(spineRef, ['start 85%', 'end 55%']);
  const spineScale = useTransform(progress, SPINE, [0, 1]);

  // How many node rows the drawn spine has reached, for lighting the nodes.
  const [reached, setReached] = useState(0);
  useMotionValueEvent(progress, 'change', (p) => {
    let n = 0;
    while (n < ROWS && p >= reach(n)) n++;
    setReached((prev) => (prev === n ? prev : n));
  });

  // Hover links the two halves: a sector lights the spine down to it, a capability lights the whole spine.
  const [activeSector, setActiveSector] = useState<number | null>(null);
  const [capActive, setCapActive] = useState(false);
  const activeRow = activeSector === null ? null : Math.floor(activeSector / 2);
  const litTo = capActive ? 1 : activeRow === null ? 0 : (activeRow + 0.5) / ROWS;
  const capHandlers = {
    onPointerEnter: () => setCapActive(true),
    onPointerLeave: () => setCapActive(false),
    onFocus: () => setCapActive(true),
    onBlur: () => setCapActive(false),
  };

  return (
    <section
      onPointerMove={trackSpotlight}
      className="group/hero relative overflow-clip border-t border-navy/10 bg-warm-white px-6 py-20 text-navy md:py-28"
    >
      {/* The hero's paper: navy dot grid, lit orange around the pointer, and a little grain */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
      />
      <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.35] mix-blend-multiply" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-10 text-center md:mb-12"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The T-Shape Advantage</p>
          <h2 className="mx-auto max-w-3xl text-2xl font-display font-medium tracking-tight md:text-4xl">
            Six sectors. One operator team. Your entire business covered.
          </h2>
        </motion.div>

        {/* Breadth: the capability bar */}
        <Axis className="mb-2">Breadth · 0{CAPABILITIES.length} capabilities →</Axis>
        <div
          className={`overflow-hidden rounded-2xl border bg-white/60 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ${
            activeSector !== null
              ? 'border-brand/50 shadow-[0_24px_60px_-30px_rgba(243,111,33,0.45)]'
              : 'border-navy/15 shadow-[0_24px_60px_-30px_rgba(11,31,59,0.35)]'
          }`}
        >
          <div className="grid grid-cols-1 divide-y divide-navy/10 sm:grid-cols-8 sm:divide-x sm:divide-y-0">
            {GROUPS.map((group, gi) => {
              const caps = CAPABILITIES.filter((c) => c.group === group.id);
              return (
                <div key={group.id} className="sm:[grid-column:span_var(--span)/span_var(--span)]" style={{ ['--span' as string]: group.span }}>
                  <Link
                    href={`/capabilities#${group.id}`}
                    className="flex items-center justify-center gap-3 border-b border-navy/10 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:text-brand"
                  >
                    <span className="font-mono text-[11px] font-normal tracking-wider text-brand">0{gi + 1}</span>
                    {group.name}
                  </Link>
                  <div className="grid divide-x divide-navy/[0.07]" style={{ gridTemplateColumns: `repeat(${caps.length}, minmax(0, 1fr))` }}>
                    {caps.map((cap) => (
                      <motion.div
                        key={cap.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: CAPABILITIES.indexOf(cap) * 0.06, ease: EASE_OUT }}
                      >
                        <Link
                          href={cap.href}
                          {...capHandlers}
                          className="group/cell relative flex h-full min-h-[72px] items-center justify-center overflow-hidden px-2 py-4 text-center text-[11px] font-semibold leading-tight outline-none transition-colors duration-500 hover:text-warm-white focus-visible:text-warm-white sm:min-h-[84px] sm:text-xs"
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cell:scale-y-100 group-focus-visible/cell:scale-y-100 ${FILL[cap.group]}`}
                          />
                          <span className="relative">{cap.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Depth: the spine, with sectors branching off it */}
        <div ref={spineRef} className="relative mt-0 pt-10">
          {/* Spine: a faint track, the scroll-drawn line, and the lit stretch on hover */}
          <div aria-hidden="true" className="absolute bottom-6 left-4 top-0 w-px md:left-1/2 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-navy/[0.07]" />
            <motion.div style={{ scaleY: spineScale }} className="absolute inset-0 origin-top bg-navy/30" />
            <motion.div
              initial={false}
              animate={{ scaleY: litTo }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="absolute inset-0 origin-top bg-brand shadow-[0_0_10px_rgba(243,111,33,0.7)]"
            />
          </div>
          <Axis className="absolute left-8 top-3 md:left-[calc(50%+14px)]">Depth · 0{SECTORS.length} sectors ↓</Axis>

          <div className="relative grid gap-x-12 gap-y-3 pl-10 md:grid-cols-[1fr_0_1fr] md:gap-y-4 md:pl-0" style={{ gridTemplateRows: `repeat(${ROWS}, auto)` }}>
            {/* Nodes on the spine, one per row */}
            {Array.from({ length: ROWS }, (_, row) => {
              const on = row < reached || capActive || (activeRow !== null && row <= activeRow);
              return (
                <span
                  key={row}
                  aria-hidden="true"
                  style={{ gridRow: row + 1 }}
                  className="pointer-events-none col-start-2 hidden items-center justify-center md:flex"
                >
                  <span
                    className={`-mx-[3.5px] block h-[7px] w-[7px] shrink-0 rounded-full border transition-colors duration-300 ${
                      on ? 'border-brand bg-brand shadow-[0_0_0_4px_rgba(243,111,33,0.15)]' : 'border-navy/30 bg-warm-white'
                    }`}
                  />
                </span>
              );
            })}
            {SECTORS.map((sector, i) => (
              <SectorBranch
                key={sector.name}
                sector={sector}
                index={i}
                progress={progress}
                lit={activeSector === i || capActive}
                reached={Math.floor(i / 2) < reached}
                onEnter={() => setActiveSector(i)}
                onLeave={() => setActiveSector(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
