'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES, GROUPS, SECTORS } from '@/components/TShapeWidget';
import { useScrub } from '@/components/motion/useScrub';
import { EASE_OUT } from '@/lib/motion';
import { trackSpotlight } from '@/lib/spotlight';
import { LightTrails, TShapeTrails, type TShapeGeometry } from './TShapeTrails';

// The counts in the axis labels ("8 capabilities", "6 sectors") are hidden for now; set to true to show them.
const SHOW_COUNTS = false;

// The T on the hero's paper: breadth across the top (capabilities), depth down a spine (sectors).
// Scrolling draws the spine down; each node turns orange as the line reaches it and its sector branches out.

const FILL: Record<string, string> = { build: 'bg-brand', scale: 'bg-navy', invest: 'bg-navy' };
const ROWS = Math.ceil(SECTORS.length / 2);
// The streams from the bar draw first, then the spine.
const STREAMS = [0, 0.12];
const SPINE = [0.12, 0.8];

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
  lit,
  reached,
  innerRef,
  onEnter,
  onLeave,
}: {
  sector: (typeof SECTORS)[number];
  index: number;
  lit: boolean;
  reached: boolean;
  innerRef: (el: HTMLDivElement | null) => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const row = Math.floor(index / 2);
  const left = index % 2 === 0;

  return (
    <motion.div
      ref={innerRef}
      // Branches slide out from the spine once the drawn line reaches their node: left ones move left, right ones right.
      initial={false}
      animate={{ opacity: reached ? 1 : 0, x: reached ? 0 : left ? 24 : -24 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      style={{ ['--row' as string]: row + 1 }}
      className={`relative flex items-center md:[grid-row:var(--row)] ${left ? 'md:col-start-1 md:justify-end' : 'md:col-start-3'}`}
    >
      {/* Connector from the spine to the card: always on the left on phones, toward the spine on desktop */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 h-px w-6 -left-6 overflow-hidden bg-navy/15 md:w-12 ${left ? 'md:left-auto md:-right-12' : 'md:-left-12'}`}
      >
        {/* Lit, the connector draws in orange outward from the spine */}
        <span
          className={`absolute inset-0 bg-brand transition-transform duration-300 ease-out origin-left ${left ? 'md:origin-right' : ''} ${
            lit ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </span>
      {/* Phones: this sector's own node on the spine */}
      <span
        aria-hidden="true"
        className={`absolute -left-[27.5px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full border transition-colors duration-300 md:hidden ${
          reached || lit ? 'border-brand bg-brand' : 'border-navy/30 bg-warm-white'
        }`}
      />
      <SectorCard sector={sector} lit={lit} onEnter={onEnter} onLeave={onLeave} />
    </motion.div>
  );
}

/**
 * One sector's card, with small responses to the pointer: a soft orange light follows the cursor across it,
 * the card leans a little toward the cursor, the icon pops into an orange chip and the arrow slides out as
 * a fresh one slides in. A press sinks it slightly. Touch and reduced motion keep it flat.
 */
function SectorCard({
  sector,
  lit,
  onEnter,
  onLeave,
}: {
  sector: (typeof SECTORS)[number];
  lit: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = sector.icon;
  const reduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 300, damping: 22 });
  const rotateY = useSpring(tiltY, { stiffness: 300, damping: 22 });

  const onPointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty('--mx', `${x}px`);
    event.currentTarget.style.setProperty('--my', `${y}px`);
    if (reduceMotion || event.pointerType !== 'mouse') return;
    tiltY.set((x / rect.width - 0.5) * 6);
    tiltX.set(-(y / rect.height - 0.5) * 12);
  };
  const reset = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div style={{ rotateX, rotateY, transformPerspective: 700 }} className="w-full md:max-w-xs">
      <Link
        href={sector.href}
        onPointerEnter={onEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={() => {
          reset();
          onLeave();
        }}
        onFocus={onEnter}
        onBlur={onLeave}
        className={`group/sector relative flex w-full items-center gap-3 overflow-hidden rounded-xl border bg-white/60 px-3 py-2 text-navy backdrop-blur-sm transition-[border-color,background-color,box-shadow,scale] duration-300 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(243,111,33,0.55)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:py-[clamp(5px,1.1svh,9px)] ${
          lit ? 'border-brand/50' : 'border-navy/15'
        }`}
      >
        {/* The light that follows the cursor */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/sector:opacity-100"
          style={{ background: 'radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), rgba(243,111,33,0.16), transparent 70%)' }}
        />
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/[0.05] transition-[background-color,rotate,scale] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/sector:-rotate-6 group-hover/sector:scale-110 group-hover/sector:bg-brand group-focus-visible/sector:bg-brand">
          <Icon
            className="h-4 w-4 text-navy/50 transition-colors duration-300 group-hover/sector:text-white group-focus-visible/sector:text-white"
            aria-hidden="true"
          />
        </span>
        <span className="relative flex-1 text-sm font-semibold tracking-tight transition-transform duration-300 group-hover/sector:translate-x-0.5">
          {sector.name}
        </span>
        {/* The arrow leaves up and to the right as an orange one arrives from below */}
        <span aria-hidden="true" className="relative h-4 w-4 overflow-hidden">
          <ArrowUpRight className="absolute inset-0 h-4 w-4 text-navy/30 transition-transform duration-300 ease-out group-hover/sector:-translate-y-4 group-hover/sector:translate-x-4" />
          <ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-4 translate-y-4 text-brand transition-transform duration-300 ease-out group-hover/sector:translate-x-0 group-hover/sector:translate-y-0" />
        </span>
      </Link>
    </motion.div>
  );
}

export function HomeTShape() {
  const spineRef = useRef<HTMLDivElement>(null);
  const progress = useScrub(spineRef, ['start 85%', 'end end']);
  const spineScale = useTransform(progress, SPINE, [0, 1]);
  const streamDraw = useTransform(progress, STREAMS, [0, 1]);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  // Where the bar, spine and nodes sit, for the light trails drawn over them (desktop only).
  const [geometry, setGeometry] = useState<TShapeGeometry | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const branchRefs = useRef<(HTMLDivElement | null)[]>([]);
  // The spine stops at the last node: kept in step with the layout as the screen size changes.
  const [tailPx, setTailPx] = useState(0);
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => {
      const last = branchRefs.current[SECTORS.length - 1];
      if (last) setTailPx(grid.offsetHeight - (last.offsetTop + last.offsetHeight / 2));

      const container = containerRef.current;
      const bar = barRef.current;
      const spine = spineRef.current;
      if (!container || !bar || !spine || !window.matchMedia('(min-width: 768px)').matches) {
        setGeometry(null);
        return;
      }
      const width = container.offsetWidth;
      const nodes = SECTORS.map((_, i) => {
        const branch = branchRefs.current[i];
        const y = spine.offsetTop + grid.offsetTop + (branch ? branch.offsetTop + branch.offsetHeight / 2 : 0);
        return { y, side: (i % 2 === 0 ? -1 : 1) as -1 | 1 };
      });
      const barBottom = bar.offsetTop + bar.offsetHeight;
      // Each group heading's centre, from the bar's 8-column split.
      let column = 0;
      const groups = GROUPS.map((group) => {
        const centre = ((column + group.span / 2) / 8) * width;
        column += group.span;
        return centre;
      });
      setGeometry({
        width,
        height: container.offsetHeight,
        spineX: width / 2,
        barBottom,
        merge: barBottom + (nodes[0].y - barBottom) * 0.62,
        groups,
        nodes,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // How many sectors the drawn spine has reached, measured against where each one's node actually sits
  // (side by side in pairs on desktop, one per row on phones).
  const trackRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);
  useMotionValueEvent(spineScale, 'change', (v) => {
    const track = trackRef.current;
    const grid = gridRef.current;
    if (!track || !grid) return;
    const drawn = v * track.offsetHeight;
    let n = 0;
    while (n < SECTORS.length) {
      const branch = branchRefs.current[n];
      if (!branch || grid.offsetTop + branch.offsetTop + branch.offsetHeight / 2 > drawn + 1) break;
      n++;
    }
    setReached((prev) => (prev === n ? prev : n));
  });

  // Hover links the two halves: a sector lights the spine down to it, a capability lights the whole spine.
  const [activeSector, setActiveSector] = useState<number | null>(null);
  const [capActive, setCapActive] = useState(false);
  const activeRow = activeSector === null ? null : Math.floor(activeSector / 2);
  // The lit stretch runs from the top of the spine to the hovered sector's node, measured from the layout
  // (the spine also covers the space above the first row, so a fraction of its height would fall short).
  const [litPx, setLitPx] = useState(0);
  useLayoutEffect(() => {
    const branch = activeSector === null ? null : branchRefs.current[activeSector];
    if (!branch || !gridRef.current) return;
    setLitPx(gridRef.current.offsetTop + branch.offsetTop + branch.offsetHeight / 2);
  }, [activeSector]);
  const litHeight = capActive ? '100%' : activeSector === null ? 0 : litPx;
  const capHandlers = {
    onPointerEnter: () => setCapActive(true),
    onPointerLeave: () => setCapActive(false),
    onFocus: () => setCapActive(true),
    onBlur: () => setCapActive(false),
  };

  return (
    <section
      onPointerMove={trackSpotlight}
      className="group/hero relative flex flex-col justify-center overflow-clip border-t border-navy/10 bg-warm-white px-6 py-20 text-navy md:min-h-[calc(100svh-4rem)] md:py-[clamp(24px,5svh,64px)]"
    >
      {/* The hero's paper: navy dot grid, lit orange around the pointer, and a little grain */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
      />
      <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.35] mix-blend-multiply" />
      <LightTrails />

      <div ref={containerRef} className="relative mx-auto w-full max-w-5xl">
        {geometry && (
          <TShapeTrails geometry={geometry} draw={streamDraw} activeSector={activeSector} capActive={capActive} />
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-10 text-center md:mb-[clamp(20px,4.5svh,48px)]"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The T-Shape Advantage</p>
          <h2 className="mx-auto max-w-3xl text-2xl font-display font-medium tracking-tight md:text-[clamp(26px,min(3.4vw,5.4svh),36px)]">
            Six sectors. One operator team.{' '}
            <span className="bg-gradient-to-r from-brand to-[#D9481C] bg-clip-text text-transparent">Your entire business covered.</span>
          </h2>
          <span aria-hidden="true" className="mx-auto mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#FFB547] to-brand" />
        </motion.div>

        {/* Breadth: the capability bar */}
        <Axis className="mb-2">Breadth · {SHOW_COUNTS && `${CAPABILITIES.length} `}capabilities →</Axis>
        <div
          ref={barRef}
          className={`overflow-hidden rounded-2xl border bg-white/60 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ${
            activeSector !== null
              ? 'border-brand/50 shadow-[0_24px_60px_-30px_rgba(243,111,33,0.45)]'
              : 'border-navy/15 shadow-[0_24px_60px_-30px_rgba(11,31,59,0.35)]'
          }`}
        >
          <div className="grid grid-cols-1 divide-y divide-navy/10 sm:grid-cols-8 sm:divide-x sm:divide-y-0">
            {GROUPS.map((group) => {
              const caps = CAPABILITIES.filter((c) => c.group === group.id);
              return (
                <div key={group.id} className="sm:[grid-column:span_var(--span)/span_var(--span)]" style={{ ['--span' as string]: group.span }}>
                  <Link
                    href={`/capabilities#${group.id}`}
                    className="flex items-center justify-center gap-3 border-b border-navy/10 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:text-brand"
                  >
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
                          className="group/cell relative flex h-full min-h-[72px] items-center justify-center overflow-hidden px-2 py-4 text-center text-[11px] font-semibold leading-tight outline-none transition-colors duration-500 hover:text-warm-white focus-visible:text-warm-white sm:min-h-[clamp(56px,9svh,84px)] sm:text-xs"
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
        <div ref={spineRef} className="relative mt-0 pt-10 md:pt-[clamp(72px,11svh,104px)]">
          {/* Spine: a faint track, the scroll-drawn line, and the lit stretch on hover */}
          <div ref={trackRef} aria-hidden="true" style={{ bottom: tailPx }} className="absolute left-4 top-0 w-px md:left-1/2 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-navy/[0.07]" />
            <motion.div style={{ scaleY: spineScale }} className="absolute inset-0 origin-top bg-navy/30" />
            <motion.div
              initial={false}
              animate={{ height: litHeight }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="absolute inset-x-0 top-0 bg-brand shadow-[0_0_10px_rgba(243,111,33,0.7)]"
            />
          </div>
          <Axis className="absolute left-8 top-3 md:left-0">Depth · {SHOW_COUNTS && `${SECTORS.length} `}sectors ↓</Axis>

          <div ref={gridRef} className="relative grid gap-x-12 gap-y-3 pl-10 md:grid-cols-[1fr_0_1fr] md:gap-y-[clamp(8px,1.6svh,16px)] md:pl-0" style={{ gridTemplateRows: `repeat(${ROWS}, auto)` }}>
            {/* Nodes on the spine, one per row */}
            {Array.from({ length: ROWS }, (_, row) => {
              const on = row * 2 < reached || capActive || (activeRow !== null && row <= activeRow);
              return (
                <span
                  key={row}
                  aria-hidden="true"
                  style={{ gridRow: row + 1 }}
                  className="pointer-events-none relative col-start-2 hidden items-center justify-center md:flex"
                >
                  {/* Arriving at a sector sends one ring out from its node */}
                  {activeSector !== null && activeRow === row && (
                    <span key={activeSector} className="node-ping absolute h-[7px] w-[7px] rounded-full border border-brand" />
                  )}
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
                lit={activeSector === i || capActive}
                reached={i < reached}
                innerRef={(el) => {
                  branchRefs.current[i] = el;
                }}
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
