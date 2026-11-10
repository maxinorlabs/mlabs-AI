'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
} from 'motion/react';
import { ArrowUpRight, Check, MousePointer2, PenTool, Square, Type } from 'lucide-react';
import { FILLS, Glyph, STEPS, smooth, type Card } from '@/components/home/capabilitySteps';
import { Reveal } from '@/components/motion/Reveal';
import { POINTER_INSET, PointerMark } from '@/components/home/pointer';
import { SectionHeader } from '@/components/home/SectionHeader';
import { RevealText } from '@/components/motion/RevealText';
import { CAPABILITIES, GROUPS, SECTORS } from '@/components/TShapeWidget';
import { capabilities as DETAIL } from '@/lib/capabilities';
import { sectors as SECTOR_DATA } from '@/lib/sectors';
import { DURATION, EASE_OUT, GLIDE, PLAY_THROUGH, SETTLE, SPRING, STAGGER } from '@/lib/motion';
import { cn } from '@/lib/utils';

// Breadth and depth as a bento, after the feature grids on vibrant.design (Agno, Resurf, Modal). Each capability is a
// tile holding a flip book of its steps, which the pointer turns (see "flip books"; the earlier product panels stay
// behind SHOW_PRODUCT_PANELS). The coverage grid of six
// sectors by eight capabilities is hidden for now (see SHOW_COVERAGE_GRID); its first view lights one diagonal wave.
// No invented numbers: each tile's line is the first sentence of that capability's own description. Reduced motion:
// no wave, no swelling, no tile animation.

type Sel = { r: number; c: number } | null;

export const ITEMS = CAPABILITIES.map((cap) => {
  const d = DETAIL.find((x) => x.path === cap.href);
  return { ...cap, tagline: (d?.description ?? '').split(/(?<=\.)\s/)[0] };
});
const SECTOR_INFO = SECTORS.map((s) => ({ ...s, line: SECTOR_DATA.find((d) => d.name === s.name)?.sector ?? '' }));
const COLS = ITEMS.length;

const N = 'var(--color-navy)';
const O = 'var(--color-brand)';


/* ------------------------------------------------------------------ the coverage grid */

const READOUT_LINK =
  'inline-flex items-center gap-1 text-navy underline decoration-navy/20 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-brand';

function Readout({ sel, touch = false }: { sel: Sel; touch?: boolean }) {
  if (!sel) {
    return (
      <p className="max-w-[34ch] text-pretty text-sm leading-snug text-grey/80">
        {touch ? 'Tap the grid' : 'Point at the grid'} to pair any sector with any capability.
      </p>
    );
  }
  const sector = SECTOR_INFO[sel.r];
  const cap = ITEMS[sel.c];
  return (
    // A plain fade on the new pair, with no exit to wait for, so it keeps up with the pointer.
    <motion.div key={`${sel.r}-${sel.c}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={SETTLE}>
      <p className="text-sm leading-snug text-grey/80">{sector.line}</p>
      <p className="mt-1 font-display text-2xl font-medium leading-tight tracking-tight">
        {sector.name} <span className="text-brand">×</span> {cap.name}
      </p>
      <p className="mt-2 text-pretty text-sm leading-snug text-grey/80">{cap.tagline}</p>
      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
        <Link href={sector.href} className={READOUT_LINK}>
          {sector.name}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link href={cap.href} className={READOUT_LINK}>
          {cap.name}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </p>
    </motion.div>
  );
}

function CoverageGrid({ sel, onSelect }: { sel: Sel; onSelect: (s: Sel) => void }) {
  const reduceMotion = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const glow = useRef<(HTMLSpanElement | null)[]>([]);
  const inView = useInView(gridRef, { once: true, amount: 0.6 });
  const wave = inView && !reduceMotion;
  const centres = useRef<{ x: number; y: number }[] | null>(null);
  const frame = useRef(0);
  const latest = useRef({ px: 0, py: 0, mouse: false });

  // Square centres are measured once per visit, so moving the pointer never forces layout between style writes.
  const measure = () =>
    glow.current.map((el) => {
      const cell = el?.parentElement;
      return { x: (cell?.offsetLeft ?? 0) + (cell?.offsetWidth ?? 0) / 2, y: (cell?.offsetTop ?? 0) + (cell?.offsetHeight ?? 0) / 2 };
    });

  // Squares swell and warm around the pointer; the nearest one is the pair being read.
  const paint = (px: number, py: number, mouse: boolean) => {
    centres.current ??= measure();
    let best = -1;
    let bestD = Infinity;
    centres.current.forEach(({ x, y }, i) => {
      const d = Math.hypot(x - px, y - py);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
      const el = glow.current[i];
      const cell = el?.parentElement;
      if (!mouse || !el || !cell) return;
      const k = Math.max(0, 1 - d / 120);
      el.style.opacity = String(k * 0.8);
      cell.style.transform = `scale(${1 + k * k * 0.22})`;
    });
    if (best < 0) return;
    const r = Math.floor(best / COLS);
    const c = best % COLS;
    if (!sel || sel.r !== r || sel.c !== c) onSelect({ r, c });
  };

  // One paint a frame, always with the latest position. A pending paint is never cancelled, so constant movement
  // cannot starve it.
  const track = (event: React.PointerEvent<HTMLDivElement>) => {
    const box = gridRef.current?.getBoundingClientRect();
    if (!box) return;
    latest.current = {
      px: event.clientX - box.left,
      py: event.clientY - box.top,
      mouse: !reduceMotion && event.pointerType === 'mouse',
    };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const { px, py, mouse } = latest.current;
      paint(px, py, mouse);
    });
  };

  const reset = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    centres.current = null;
    glow.current.forEach((el) => {
      if (!el || !el.parentElement) return;
      el.style.opacity = '0';
      el.parentElement.style.transform = '';
    });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy p-5 text-warm-white sm:p-7">
      {/* Group headings over their columns */}
      <div className="grid grid-cols-[minmax(84px,128px)_1fr] gap-x-3 sm:gap-x-5">
        <span />
        <div className="grid gap-1.5 sm:gap-2" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
          {GROUPS.map((g) => {
            const on = sel !== null && ITEMS[sel.c].group === g.id;
            return (
              <Link
                key={g.id}
                href={`/capabilities#${g.id}`}
                style={{ gridColumn: `span ${g.span}` }}
                className={cn(
                  'border-b pb-1.5 text-xs font-medium transition-colors duration-300 ease-out sm:text-sm',
                  on ? 'border-brand text-warm-white' : 'border-white/15 text-warm-white/45 hover:text-warm-white/80',
                )}
              >
                {g.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[minmax(84px,128px)_1fr] gap-x-3 sm:gap-x-5">
        {/* Sector names down the side */}
        <ul className="grid gap-1.5 sm:gap-2">
          {SECTOR_INFO.map((s, r) => {
            const Icon = s.icon;
            const on = sel?.r === r;
            return (
              <li key={s.name} className="flex items-center">
                <Link
                  href={s.href}
                  className={cn(
                    'flex items-center gap-2 text-xs font-medium transition-colors duration-300 ease-out sm:text-sm',
                    on ? 'text-warm-white' : 'text-warm-white/55 hover:text-warm-white/85',
                  )}
                >
                  <Icon className={cn('size-3.5 shrink-0 transition-colors duration-300 ease-out', on ? 'text-brand' : 'text-warm-white/35')} aria-hidden="true" />
                  {s.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* The squares */}
        <div
          ref={gridRef}
          aria-hidden="true"
          onPointerMove={track}
          onPointerDown={track}
          onPointerLeave={reset}
          className="relative grid touch-pan-y gap-1.5 sm:gap-2"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {SECTOR_INFO.flatMap((_, r) =>
            ITEMS.map((__, c) => {
              const i = r * COLS + c;
              const picked = sel?.r === r && sel?.c === c;
              const crossed = !picked && sel !== null && (sel.r === r || sel.c === c);
              return (
                <span
                  key={i}
                  className={cn(
                    'relative aspect-square rounded-sm transition-[transform,background-color] duration-200 ease-out',
                    picked ? 'bg-brand' : crossed ? 'bg-white/[0.17]' : 'bg-white/[0.07]',
                  )}
                >
                  <span
                    ref={(el) => {
                      glow.current[i] = el;
                    }}
                    className="absolute inset-0 rounded-sm bg-brand opacity-0 transition-opacity duration-200 ease-out"
                  />
                  {wave && (
                    <span className="coverage-wave absolute inset-0 rounded-sm bg-brand opacity-0" style={{ animationDelay: `${(r + c) * STAGGER}s` }} />
                  )}
                </span>
              );
            }),
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-5 lg:hidden">
        <div className="[&_p]:!text-warm-white/80 [&_a]:!text-warm-white">
          <Readout sel={sel} touch />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ capability tiles */

// Each tile's panel is a tiny working product, after the feature grids on vibrant.design (ToDesktop, Clerk, Modal,
// Stripe). Each one has a single idea, and one thing in it sits exactly under the pointer: nothing tilts, drifts or
// trails. Position is written straight through with no spring, so it can't lag; only `live` eases, for the moment
// the pointer enters or leaves. `x` and `y` are the pointer in the drawing's own 320 × 160 units, easing in from the rest position; `ax` is the same across with
// no easing at all, for things that fade in under the pointer instead of travelling to it; `px` and `py` are
// the pointer in the panel's pixels, `width` and `height` are the panel's size, `p` is progress across the panel, and `auto`
// is 1 while the tile plays itself. At rest p is 1 and each panel shows the
// finished work. Each tile plays its idea once, by itself, the first time it scrolls into view, so visitors see that it
// responds; the real pointer takes over at once. On touch screens scrolling a tile into view moves the pointer instead,
// and keyboard focus plays it once.
// Everything runs on motion values, so nothing re-renders. All wording comes from that capability's approved
// deliverables in lib/capabilities.ts; keep it that way, and never add figures.
export type Scrub = {
  p: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  ax: MotionValue<number>;
  px: MotionValue<number>;
  py: MotionValue<number>;
  width: MotionValue<number>;
  height: MotionValue<number>;
  live: MotionValue<number>;
  auto: MotionValue<number>;
};

const NAVY = '#0B1F3B';
const BRAND = '#F36F21';
export const SHEET_SHADOW = 'shadow-[0_12px_24px_-16px_rgba(11,31,59,0.35)]';
export const mix = (from: number, to: number, k: number) => from + (to - from) * k;
export const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

// A small sheet of product UI, cropped by the bottom of the panel so it reads as part of something larger.
function Surface({ children }: { children: React.ReactNode }) {
  return <div className={cn('absolute inset-x-6 top-3 h-36 overflow-hidden rounded-lg border border-navy/[0.08] bg-white', SHEET_SHADOW)}>{children}</div>;
}

function Art({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 160" aria-hidden="true" className="absolute inset-0 size-full">
      {children}
    </svg>
  );
}

const LABEL = { fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 500 };

// A status mark: an empty ring, a spinner while the step runs, then a tick.
function Status({ k, last }: { k: MotionValue<number>; last?: boolean }) {
  const done = useTransform(k, [0.92, 1], [0, 1]);
  const busy = useTransform(k, [0, 0.06, 0.92, 1], [0, 1, 1, 0]);
  const rotate = useTransform(k, [0, 1], [0, 540]);
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0">
      <circle cx={8} cy={8} r={6.5} fill="none" stroke={N} strokeOpacity={0.15} strokeWidth={1.5} />
      <motion.circle cx={8} cy={8} r={6.5} fill="none" stroke={O} strokeWidth={1.5} strokeDasharray="10 31" style={{ opacity: busy, rotate }} />
      <motion.circle cx={8} cy={8} r={7} fill={last ? O : N} style={{ opacity: done }} />
      <motion.path d="M 5 8.2 L 7.2 10.4 L 11 6" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: done, opacity: done }} />
    </svg>
  );
}

function RunStep({ p, at, last, children }: { p: MotionValue<number>; at: number; last?: boolean; children: string }) {
  const k = useTransform(p, [at, at + 0.22], [0, 1]);
  const opacity = useTransform(k, [0, 0.1], [0.45, 1]);
  return (
    <div className="flex h-7 items-center gap-2 border-t border-navy/[0.06] px-2.5">
      <Status k={k} last={last} />
      <motion.span style={{ opacity }} className="truncate text-xs font-medium text-navy">
        {children}
      </motion.span>
    </div>
  );
}

// AI & Tech: a build run. Each stage spins, then ticks, as the pointer crosses it.
function AiRun({ p }: Scrub) {
  return (
    <Surface>
      <div className="flex h-7 items-center justify-between px-2.5 text-xs font-medium text-navy">
        MVP build
        <ArrowUpRight aria-hidden="true" className="size-3.5 text-navy/50" />
      </div>
      <RunStep p={p} at={0.02}>AI product architecture</RunStep>
      <RunStep p={p} at={0.36}>Model fine-tuning</RunStep>
      <RunStep p={p} at={0.7} last>Deployment</RunStep>
    </Surface>
  );
}

const DESIGN_LAYERS = ['User research', 'Strategy', 'UX/UI design', 'Shipped'];

// One layer of the artboard. The layer the pointer is actually on is the one selected, by real hit testing.
function ArtLayer({ layer, index, onPick, className, children }: { layer: MotionValue<number>; index: number; onPick: (i: number) => void; className: string; children: React.ReactNode }) {
  const opacity = useTransform(layer, (i): number => (i === index ? 1 : 0));
  return (
    <div onPointerEnter={() => onPick(index)} className={cn('relative', className)}>
      {children}
      <motion.div style={{ opacity }} className="pointer-events-none absolute -inset-1 border border-brand">
        {['-left-1 -top-1', '-right-1 -top-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((corner) => (
          <span key={corner} className={cn('absolute size-1.5 border border-brand bg-white', corner)} />
        ))}
      </motion.div>
    </div>
  );
}

// Product & Design: a design canvas. Whatever layer the pointer is on is selected, and the operator's name tag
// travels on the pointer itself, the way a teammate's does in a design tool.
function DesignCanvas({ px, py, width, height, live, auto }: Scrub) {
  const hit = useMotionValue(3);
  // Layers are normally picked by real hit testing. When the tile plays itself no pointer is there, so go by height.
  useMotionValueEvent(py, 'change', (v) => {
    if (auto.get() < 0.5) return;
    hit.set(clamp(Math.floor((v / Math.max(1, height.get()) - 0.22) / 0.78 * DESIGN_LAYERS.length), 0, DESIGN_LAYERS.length - 1));
  });
  const layer = useTransform([hit, live], ([i, on]: number[]) => (on < 0.5 ? 3 : i));
  const marker = useSpring(useTransform(layer, (i) => 4 + i * 40), SPRING);
  // The arrow's tip sits on the pointer. At rest it parks on the button.
  const x = useTransform([px, live], ([v, on]: number[]) => `calc(${(1 - on) * 66}% + ${on * v - 3}px)`);
  const y = useTransform([py, live], ([v, on]: number[]) => `calc(${(1 - on) * 82}% + ${on * v - 3}px)`);
  // The tag swaps to the left of the arrow near the right edge, so the panel never cuts it off.
  const tagX = useTransform([px, width, live], ([v, w, on]: number[]) => (on > 0.5 && w - v < 96 ? -86 : 0));
  const pick = (i: number) => hit.set(i);
  return (
    <>
      {/* The layers */}
      <div className={cn('absolute inset-y-3 left-3 w-32 overflow-hidden rounded-lg border border-navy/[0.08] bg-white', SHEET_SHADOW)}>
        <motion.div style={{ y: marker }} className="absolute inset-x-1 top-0 h-10 rounded bg-brand/10" />
        <div className="relative p-1">
          {DESIGN_LAYERS.map((name, i) => (
            <div key={name} onPointerEnter={() => pick(i)} className="flex h-10 items-center gap-1.5 px-1.5">
              <span className="size-2 shrink-0 rounded-sm bg-navy/20" />
              <span className="truncate text-xs font-medium text-navy">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The tools */}
      <div className="absolute left-38 right-3 top-3 flex h-7 items-center justify-center gap-3 rounded-lg border border-navy/[0.08] bg-white text-navy/40">
        <MousePointer2 className="size-3.5 fill-brand text-brand" />
        <Square className="size-3.5" />
        <Type className="size-3.5" />
        <PenTool className="size-3.5" />
      </div>

      {/* The artboard */}
      <div className={cn('absolute inset-y-3 left-38 right-3 top-12 flex flex-col gap-2 rounded-lg border border-navy/[0.08] bg-white p-2.5', SHEET_SHADOW)}>
        <ArtLayer layer={layer} index={0} onPick={pick} className="h-3">
          <div className="flex h-full items-center justify-between">
            <span className="h-1.5 w-8 rounded-full bg-navy/30" />
            <span className="flex gap-1">
              <span className="size-1.5 rounded-full bg-navy/20" />
              <span className="size-1.5 rounded-full bg-navy/20" />
            </span>
          </div>
        </ArtLayer>
        <ArtLayer layer={layer} index={1} onPick={pick} className="flex-1">
          <div className="flex size-full items-end rounded bg-navy p-1.5">
            <span className="h-1.5 w-1/2 rounded-full bg-warm-white/70" />
          </div>
        </ArtLayer>
        <ArtLayer layer={layer} index={2} onPick={pick} className="h-5">
          <div className="flex h-full flex-col justify-between py-0.5">
            <span className="h-1 w-full rounded-full bg-navy/15" />
            <span className="h-1 w-3/4 rounded-full bg-navy/15" />
          </div>
        </ArtLayer>
        <ArtLayer layer={layer} index={3} onPick={pick} className="h-6">
          <div className="h-full rounded bg-brand" />
        </ArtLayer>
      </div>

      {/* The operator's name tag */}
      <motion.div style={{ x, y }} className="pointer-events-none absolute inset-0">
        <span className="flex items-start">
          <MousePointer2 aria-hidden="true" className="size-4 fill-navy text-white" />
          <motion.span style={{ x: tagX }} className="-ml-0.5 mt-3 rounded-full bg-navy px-2 py-0.5 text-xs font-medium text-warm-white ring-1 ring-white/70">Operator</motion.span>
        </span>
      </motion.div>
    </>
  );
}

const BRAND_CARDS = [
  { name: 'Positioning', colour: 'bg-brand', side: -1, fan: -7, front: 0 },
  { name: 'Brand identity', colour: 'bg-navy', side: 0, fan: 0, front: 1 },
  { name: 'Content engine', colour: 'bg-grey', side: 1, fan: 7, front: 0 },
];
const BRAND_CARD_WIDTH = 112;
const BRAND_REST_SHIFT = 64;

function BrandCard({ card, px, width, live }: Pick<Scrub, 'px' | 'width' | 'live'> & { card: (typeof BRAND_CARDS)[number] }) {
  // Where the card sits once the fan has opened, spaced to use the whole panel.
  const spread = (w: number) => Math.min(BRAND_CARD_WIDTH + 6, (w - BRAND_CARD_WIDTH - 12) / 2);
  const x = useTransform([width, live], ([w, on]: number[]) => mix(card.side * BRAND_REST_SHIFT, card.side * spread(w), on));
  // Rises by how close the pointer is, with no steps: the nearest card is highest, like a dock.
  const lift = useTransform([px, width, live], ([v, w, on]: number[]) => {
    const reach = Math.max(1, spread(w));
    const near = 1 - Math.min(1, Math.abs(v - (w / 2 + card.side * spread(w))) / reach);
    return near * near * (3 - 2 * near) * on;
  });
  const y = useTransform([lift, live], ([k, on]: number[]) => mix(Math.abs(card.fan), 6, on) - k * 14);
  const rotate = useTransform(live, [0, 1], [card.fan, 0]);
  const scale = useTransform(lift, [0, 1], [1, 1.05]);
  return (
    <motion.div
      style={{ x, y, rotate, scale, zIndex: card.front }}
      className={cn('absolute flex h-28 w-28 flex-col justify-between rounded-lg border border-white/10 p-2.5 text-warm-white', card.colour, SHEET_SHADOW)}
    >
      <span className="font-display text-3xl font-medium leading-none">Aa</span>
      <span className="text-xs font-medium leading-tight">{card.name}</span>
    </motion.div>
  );
}

// Brand & Marketing: a fan of brand cards. Entering the panel opens the fan into a row, and each card rises smoothly
// by how close the pointer is to it, so nothing swaps or snaps and the whole panel answers.
function BrandKit({ px, width, live }: Scrub) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {BRAND_CARDS.map((card) => (
        <BrandCard key={card.name} card={card} px={px} width={width} live={live} />
      ))}
    </div>
  );
}

// The chart's units: 320 across, 100 down.
const GROWTH_LINE = 'M 0 90 C 110 88, 220 70, 320 12';
const GROWTH_AREA = `${GROWTH_LINE} L 320 100 L 0 100 Z`;
const GROWTH_STAGES = [
  { name: 'GTM strategy', from: -1, to: 0.35 },
  { name: 'Sales playbook', from: 0.35, to: 0.68 },
  { name: 'Market leadership', from: 0.68, to: 2 },
];

// The height of the growth line at a point across the chart, solved from the curve itself.
const growthHeight = (across: number) => {
  const bezier = (t: number, a: number, b: number, c: number, d: number) => {
    const u = 1 - t;
    return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
  };
  let low = 0;
  let high = 1;
  for (let i = 0; i < 16; i += 1) {
    const middle = (low + high) / 2;
    if (bezier(middle, 0, 110, 220, 320) < across) low = middle;
    else high = middle;
  }
  return bezier(high, 90, 88, 70, 12);
};

function GrowthBar({ along, live, i, h }: { along: MotionValue<number>; live: MotionValue<number>; i: number; h: number }) {
  const left = 14 + i * 62;
  const passed = useTransform([along, live], ([v, on]: number[]) => clamp((v * 320 - left) / 44, 0, 1) * on * 0.16);
  return (
    <>
      <rect x={left} y={100 - h} width={44} height={h} fill={N} fillOpacity={0.06} />
      <motion.rect x={left} y={100 - h} width={44} height={h} fill={N} style={{ opacity: passed }} />
    </>
  );
}

function GrowthStage({ progress, name, from, to }: { progress: MotionValue<number>; name: string; from: number; to: number }) {
  // The stages cross-fade over a short stretch of the chart, so the label never flips.
  const opacity = useTransform(progress, [from - 0.03, from + 0.03, to - 0.03, to + 0.03], [0, 1, 1, 0]);
  return <motion.span style={{ opacity }} className="col-start-1 row-start-1 text-right text-brand">{name}</motion.span>;
}

// Growth & Revenue: a revenue dashboard. The handle rides the line exactly under the pointer, the area fills up to it,
// and the header reads the stage. Entering never sends the handle racing along the line: the finished chart fades out
// as the handle fades in under the pointer, and back again on leaving.
function GrowthChart({ px, width, live }: Scrub) {
  const clip = `grow-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const chart = useRef<HTMLDivElement>(null);
  const along = useTransform([px, width], ([v, w]: number[]) => clamp((v - POINTER_INSET) / Math.max(1, w - POINTER_INSET * 2), 0, 1));
  const progress = useTransform([along, live], ([v, on]: number[]) => mix(1, v, on));
  const markX = useTransform([px, width], ([v, w]: number[]) => clamp(v - POINTER_INSET, 0, w - POINTER_INSET * 2));
  const markY = useTransform(along, (v) => (growthHeight(v * 320) / 100) * (chart.current?.clientHeight ?? 0));
  const reach = useTransform(along, (v) => v * 320);
  const finished = useTransform(live, [0, 1], [1, 0]);
  return (
    <div className={cn('absolute inset-3 flex flex-col rounded-lg border border-navy/[0.08] bg-white', SHEET_SHADOW)}>
      <div className="flex h-7 shrink-0 items-center justify-between gap-3 border-b border-navy/[0.06] px-3 text-xs font-medium text-navy">
        <span className="truncate">Revenue operations</span>
        <span className="grid shrink-0">
          {GROWTH_STAGES.map((stage) => (
            <GrowthStage key={stage.name} progress={progress} {...stage} />
          ))}
        </span>
      </div>
      <div ref={chart} className="relative mx-3 mb-2.5 mt-2.5 flex-1">
        <svg viewBox="0 0 320 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full overflow-visible">
          <clipPath id={clip}>
            <motion.rect x={-8} y={-8} height={116} width={reach} />
          </clipPath>
          {[25, 50, 75].map((y) => (
            <line key={y} x1={0} x2={320} y1={y} y2={y} stroke={N} strokeOpacity={0.06} vectorEffect="non-scaling-stroke" />
          ))}
          <line x1={0} x2={320} y1={100} y2={100} stroke={N} strokeOpacity={0.14} vectorEffect="non-scaling-stroke" />
          {[22, 34, 48, 64, 82].map((h, i) => (
            <GrowthBar key={i} along={along} live={live} i={i} h={h} />
          ))}
          {/* The whole line stays on as a faint track, so entering never makes it vanish */}
          <path d={GROWTH_LINE} fill="none" stroke={N} strokeOpacity={0.14} strokeWidth={2} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <motion.g style={{ opacity: finished }}>
            <path d={GROWTH_AREA} fill={O} fillOpacity={0.1} />
            <path d={GROWTH_LINE} fill="none" stroke={O} strokeWidth={2.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </motion.g>
          <motion.g style={{ opacity: live }} clipPath={`url(#${clip})`}>
            <path d={GROWTH_AREA} fill={O} fillOpacity={0.1} />
            <path d={GROWTH_LINE} fill="none" stroke={O} strokeWidth={2.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </motion.g>
        </svg>
        <PointerMark style={{ opacity: finished, left: '100%', top: '12%' }} />
        <motion.span style={{ x: markX, opacity: live }} className="absolute inset-y-0 left-0 w-px bg-brand/40" />
        <PointerMark style={{ x: markX, y: markY, opacity: live }} />
      </div>
    </div>
  );
}

const OPS_STOPS = [
  { x: 46, y: 104, name: 'Sourcing', above: false },
  { x: 124, y: 58, name: 'Warehousing', above: true },
  { x: 198, y: 104, name: 'Logistics', above: false },
  { x: 274, y: 58, name: 'Fulfilment', above: true },
];
const OPS_ROUTE = `M ${OPS_STOPS.map((stop) => `${stop.x} ${stop.y}`).join(' L ')}`;

// The point on the route directly above or below the pointer, and how far along the route that is.
const opsPlace = (v: number) => {
  const x = clamp(v, OPS_STOPS[0].x, OPS_STOPS[3].x);
  const lengths = OPS_STOPS.slice(1).map((stop, i) => Math.hypot(stop.x - OPS_STOPS[i].x, stop.y - OPS_STOPS[i].y));
  const total = lengths.reduce((a, b) => a + b, 0);
  const leg = Math.max(0, OPS_STOPS.findLastIndex((stop) => stop.x <= x && stop !== OPS_STOPS[3]));
  const from = OPS_STOPS[leg];
  const to = OPS_STOPS[leg + 1];
  const t = (x - from.x) / (to.x - from.x);
  const before = lengths.slice(0, leg).reduce((a, b) => a + b, 0);
  return { x, y: mix(from.y, to.y, t), k: (before + lengths[leg] * t) / total };
};

function OpsStop({ x: pointer, live, stop, last }: Pick<Scrub, 'x' | 'live'> & { stop: (typeof OPS_STOPS)[number]; last: boolean }) {
  const reached = useTransform(pointer, (v): number => (v >= stop.x - 2 ? 1 : 0));
  const done = useTransform([reached, live], ([k, on]: number[]) => k * on);
  const opacity = useTransform(reached, [0, 1], [0.45, 1]);
  return (
    <>
      <circle cx={stop.x} cy={stop.y} r={11} fill="white" stroke={N} strokeOpacity={0.15} />
      <rect x={stop.x - 4} y={stop.y - 4} width={8} height={8} rx={2} fill={last ? O : N} fillOpacity={last ? 1 : 0.5} />
      <motion.rect x={stop.x - 4} y={stop.y - 4} width={8} height={8} rx={2} fill={O} style={{ opacity: done }} />
      <motion.text x={stop.x} y={stop.above ? stop.y - 19 : stop.y + 27} textAnchor="middle" fill={N} style={{ ...LABEL, opacity }}>{stop.name}</motion.text>
    </>
  );
}

// Supply Chain & Operations: a shipment tracker. The mark fades in on the route exactly under the pointer, rather than
// racing there from the end of the route.
function OpsTracker({ x, ax, live }: Scrub) {
  const place = useTransform(ax, opsPlace);
  const parcelX = useTransform(place, (at) => at.x);
  const parcelY = useTransform(place, (at) => at.y);
  const trail = useTransform(place, (at) => at.k);
  return (
    <Art>
      <path d={OPS_ROUTE} fill="none" stroke={N} strokeOpacity={0.2} strokeWidth={2} strokeDasharray="4 6" strokeLinejoin="round" />
      <motion.path d={OPS_ROUTE} fill="none" stroke={O} strokeWidth={2} strokeLinejoin="round" style={{ pathLength: trail, opacity: live }} />
      {OPS_STOPS.map((stop, i) => (
        <OpsStop key={stop.name} x={x} live={live} stop={stop} last={i === OPS_STOPS.length - 1} />
      ))}
      <motion.circle r={7} cx={parcelX} cy={parcelY} fill={O} stroke="white" strokeWidth={2} style={{ opacity: live }} />
    </Art>
  );
}

const ROW = 28;

function LedgerRow({ ruler, i, width, children }: { ruler: MotionValue<number>; i: number; width: string; children: string }) {
  const scaleX = useTransform(ruler, [i * ROW, (i + 1) * ROW], [0, 1]);
  const opacity = useTransform(ruler, [i * ROW, i * ROW + 8], [0.45, 1]);
  return (
    <div className="flex h-7 items-center justify-between gap-3 border-b border-navy/[0.06] px-2.5">
      <motion.span style={{ opacity }} className="truncate text-xs font-medium text-navy">{children}</motion.span>
      <motion.span style={{ scaleX }} className={cn('h-1.5 shrink-0 origin-right rounded-full bg-navy/25', width)} />
    </div>
  );
}

// Finance & Accounting: the books. An auditor's ruler sits exactly at the pointer's height; each row posts as it
// passes, and the report signs off at the foot of the ledger.
function FinanceBooks({ py, live }: Scrub) {
  // The ledger starts 13px down the panel. At rest the ruler is past the end, so the books are finished.
  const ruler = useTransform([py, live], ([v, on]: number[]) => mix(ROW * 5, clamp(v - 13, 0, ROW * 4), on));
  const signed = useTransform(ruler, [ROW * 3, ROW * 4], [0, 1]);
  const report = useTransform(signed, [0, 0.1], [0.45, 1]);
  return (
    <Surface>
      <LedgerRow ruler={ruler} i={0} width="w-14">Cash flow planning</LedgerRow>
      <LedgerRow ruler={ruler} i={1} width="w-10">MIS reporting</LedgerRow>
      <LedgerRow ruler={ruler} i={2} width="w-12">Audit readiness</LedgerRow>
      <div className="flex h-8 items-center gap-2 px-2.5">
        <Status k={signed} last />
        <motion.span style={{ opacity: report }} className="truncate text-xs font-medium text-navy">Board-ready reporting</motion.span>
      </div>
      <motion.span style={{ y: ruler, opacity: live }} className="absolute inset-x-0 top-0 h-px bg-brand" />
    </Surface>
  );
}

const DEAL_PARTS = [
  { name: 'Deal sourcing', len: 0.4, start: 0, opacity: 0.6 },
  { name: 'Capital structuring', len: 0.27, start: 0.42, opacity: 0.45 },
  { name: 'Operator support', len: 0.17, start: 0.71, opacity: 0.3 },
  { name: 'Portfolio reporting', len: 0.08, start: 0.9, opacity: 0.18 },
];

const dealPicked = (part: (typeof DEAL_PARTS)[number], bearing: number): number => {
  const f = (((bearing % 360) + 360) % 360) / 360;
  return f >= part.start - 0.01 && f < part.start + part.len + 0.012 ? 1 : 0;
};

function DealSlice({ part, bearing }: { part: (typeof DEAL_PARTS)[number]; bearing: MotionValue<number> }) {
  const opacity = useTransform(bearing, (b) => dealPicked(part, b));
  return (
    <g transform={`rotate(${-90 + part.start * 360} 160 66)`}>
      <circle cx={160} cy={66} r={46} fill="none" stroke={N} strokeOpacity={part.opacity} strokeWidth={15} pathLength={1} strokeDasharray={`${part.len} 1`} />
      <motion.circle cx={160} cy={66} r={46} fill="none" stroke={O} strokeWidth={15} pathLength={1} strokeDasharray={`${part.len} 1`} style={{ opacity }} />
    </g>
  );
}

function DealName({ part, bearing }: { part: (typeof DEAL_PARTS)[number]; bearing: MotionValue<number> }) {
  const opacity = useTransform(bearing, (b) => dealPicked(part, b));
  return <motion.text x={160} y={147} textAnchor="middle" fill={N} style={{ ...LABEL, opacity }}>{part.name}</motion.text>;
}

// Venture Capital: the deal as a dial. A needle like the hero's compass points exactly at the pointer and picks the
// part of the investment it lands on. `turn` stays unwrapped so crossing north goes the short way round.
function DealDial({ x, y, live }: Scrub) {
  const home = (DEAL_PARTS[0].len / 2) * 360;
  const turn = useRef(home);
  const bearing = useTransform([x, y, live], ([px, py, on]: number[]) => {
    const want = on < 0.01 ? home : (Math.atan2(py - 66, px - 160) * 180) / Math.PI + 90;
    turn.current += ((want - turn.current + 540) % 360) - 180;
    return mix(home, turn.current, on);
  });
  return (
    <Art>
      <circle cx={160} cy={66} r={46} fill="none" stroke={N} strokeOpacity={0.05} strokeWidth={15} />
      {DEAL_PARTS.map((part) => (
        <DealSlice key={part.name} part={part} bearing={bearing} />
      ))}
      <circle cx={160} cy={66} r={30} fill="white" stroke={N} strokeOpacity={0.08} />
      <motion.g style={{ rotate: bearing }}>
        <path d="M 160 42 L 165 66 L 160 90 L 155 66 Z" fill={N} fillOpacity={0.14} />
        <path d="M 160 42 L 165 66 L 155 66 Z" fill={O} />
      </motion.g>
      <circle cx={160} cy={66} r={3} fill="white" stroke={N} strokeOpacity={0.4} />
      {DEAL_PARTS.map((part) => (
        <DealName key={part.name} part={part} bearing={bearing} />
      ))}
    </Art>
  );
}

const DEAL_STAGES = [
  { name: 'Term sheet', at: 0 },
  { name: 'Due diligence', at: 0.5 },
  { name: 'Close', at: 0.96 },
];

function DealStage({ closed, name, at }: { closed: MotionValue<number>; name: string; at: number }) {
  const opacity = useTransform(closed, [at - 0.04, at + 0.02], [0.45, 1]);
  return <motion.span style={{ opacity }} className="text-xs font-medium text-navy">{name}</motion.span>;
}

// M&A: a deal slider. The handle sits exactly under the pointer, and left to right runs the whole deal: the two sides
// start apart and close together, filling in what they share, from term sheet to close.
function DealRoom({ px, width, live }: Scrub) {
  const clip = `merge-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const pointed = useTransform([px, width], ([v, w]: number[]) => clamp((v - POINTER_INSET) / Math.max(1, w - POINTER_INSET * 2), 0, 1));
  const progress = useTransform([pointed, live], ([v, on]: number[]) => mix(1, v, on));
  // The handle is exact; the circles glide behind it with no overshoot, so entering at the far left never snaps them.
  const glide = useSpring(progress, { stiffness: 170, damping: 26 });
  const buyer = useTransform(glide, [0, 1], [50, 94]);
  const seller = useTransform(glide, [0, 1], [190, 146]);
  const buyerText = useTransform(buyer, (v) => v - 22);
  const sellerText = useTransform(seller, (v) => v + 22);
  // The handle fades in under the pointer instead of racing there from the far end.
  const handle = useTransform([px, width], ([v, w]: number[]) => clamp(v - POINTER_INSET, 0, w - POINTER_INSET * 2));
  const resting = useTransform(live, [0, 1], [1, 0]);
  const type = { ...LABEL, fontSize: 10 };
  return (
    <>
      <svg viewBox="0 0 240 110" aria-hidden="true" className="absolute inset-x-3 bottom-21 top-3 h-[calc(100%-96px)] w-[calc(100%-24px)]">
        <clipPath id={clip}>
          <motion.circle cx={seller} cy={55} r={48} />
        </clipPath>
        <motion.circle cx={seller} cy={55} r={48} fill="white" stroke={N} strokeOpacity={0.3} strokeWidth={1.2} />
        <motion.circle cx={buyer} cy={55} r={48} fill="white" fillOpacity={0.7} stroke={N} strokeOpacity={0.3} strokeWidth={1.2} />
        <motion.circle cx={buyer} cy={55} r={48} fill={O} clipPath={`url(#${clip})`} />
        <motion.text x={buyerText} y={58.5} textAnchor="middle" fill={N} style={type}>Buy-side</motion.text>
        <motion.text x={sellerText} y={58.5} textAnchor="middle" fill={N} style={type}>Sell-side</motion.text>
      </svg>
      <div className={cn('absolute inset-x-3 bottom-3 h-16 rounded-lg border border-navy/[0.08] bg-white px-3 pt-3.5', SHEET_SHADOW)}>
        <div className="relative h-1 rounded-full bg-navy/10">
          <motion.span style={{ scaleX: progress }} className="absolute inset-0 origin-left rounded-full bg-brand" />
          <PointerMark style={{ opacity: resting, left: '100%', top: '50%' }} />
          <PointerMark style={{ x: handle, opacity: live, top: '50%' }} />
        </div>
        <div className="mt-3 flex items-center justify-between">
          {DEAL_STAGES.map((stage) => (
            <DealStage key={stage.name} closed={progress} {...stage} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ flip books (on Home since 2026-11-10) */

// Each capability is a small book of its steps. Pages turn over as the pointer crosses, ending on the orange outcome,
// so at rest the book lies open on the outcome. Chosen by the client over the product panels above, which stay here
// behind SHOW_PRODUCT_PANELS.
const PAGE_WIDTH = 112;
const PAGE_GAP = 8;
const PAGE_SPAN = 0.2;

function Page({ card, i, along, live }: { card: Card; i: number; along: MotionValue<number>; live: MotionValue<number> }) {
  const start = 0.1 + i * 0.28;
  const turned = useTransform([along, live], ([v, on]: number[]) => mix(1, smooth(clamp((v - start) / PAGE_SPAN, 0, 1)), on));
  const rotateY = useTransform(turned, (t) => -180 * t);
  // A page changes pile while edge-on, when it can't be seen, so the swap in order never shows.
  const zIndex = useTransform(turned, (t) => (t < 0.5 ? 10 - i : 20 + i));
  const face = 'absolute inset-0 flex flex-col justify-between rounded-lg p-2.5 [backface-visibility:hidden]';
  return (
    <motion.div
      style={{ rotateY, zIndex, left: PAGE_WIDTH + PAGE_GAP, width: PAGE_WIDTH, transformOrigin: `-${PAGE_GAP / 2}px 50%`, transformStyle: 'preserve-3d' }}
      className={cn('absolute inset-y-0 rounded-lg', SHEET_SHADOW)}
    >
      <div className={cn(face, FILLS[i])}>
        <Glyph card={card} size="lg" />
        <span className="text-xs font-medium leading-tight">{card.name}</span>
      </div>
      <div className={cn(face, 'border border-navy/[0.08] bg-white text-navy [transform:rotateY(180deg)]')}>
        <span className="flex size-6 items-center justify-center rounded-full bg-navy text-warm-white">
          <Check aria-hidden="true" strokeWidth={2.5} className="size-3.5" />
        </span>
        <span className="text-xs font-medium leading-tight">{card.name}</span>
      </div>
    </motion.div>
  );
}

// The pages are 104 high on a short tile. On a tall one they grow to fill the panel's height, up to a page's own
// proportions, so the book never sits small in empty space.
const PAGE_HEIGHT = 104;
const PAGE_TALLEST = 180;
const BOOK_MARGIN = 20;

function FlipBook({ cards, px, width, height, live }: Pick<Scrub, 'px' | 'width' | 'height' | 'live'> & { cards: Card[] }) {
  const pageHeight = useTransform(height, (h) => clamp(h - BOOK_MARGIN * 2, PAGE_HEIGHT, PAGE_TALLEST));
  const along = useTransform([px, width], ([v, w]: number[]) => clamp((v - POINTER_INSET) / Math.max(1, w - POINTER_INSET * 2), 0, 1));
  const outcome = cards[cards.length - 1];
  return (
    <div className="absolute inset-0 flex items-center justify-center [perspective:900px]">
      <motion.div className="relative" style={{ width: PAGE_WIDTH * 2 + PAGE_GAP, height: pageHeight }}>
        <span className="absolute inset-y-0 left-0 rounded-lg border border-dashed border-navy/15" style={{ width: PAGE_WIDTH }} />
        <div className={cn('absolute inset-y-0 flex flex-col justify-between rounded-lg p-2.5', FILLS[3], SHEET_SHADOW)} style={{ left: PAGE_WIDTH + PAGE_GAP, width: PAGE_WIDTH }}>
          <Glyph card={outcome} size="lg" />
          <span className="text-xs font-medium leading-tight">{outcome.name}</span>
        </div>
        {cards.slice(0, -1).map((card, i) => (
          <Page key={card.name} card={card} i={i} along={along} live={live} />
        ))}
      </motion.div>
    </div>
  );
}

// The book is drawn for the short tile. On taller tiles it grows a little, measured from the panel itself, and the
// pointer is converted into the book's own units, so the pages turn exactly under it.
const BOOK_MIN_WIDTH = 260;

function BookStage({ cards, px, live }: Scrub & { cards: Card[] }) {
  const box = useRef<HTMLDivElement>(null);
  const panelWidth = useMotionValue(320);
  const panelHeight = useMotionValue(144);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => {
      panelWidth.set(el.clientWidth);
      panelHeight.set(el.clientHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [panelWidth, panelHeight]);
  const scale = useTransform([panelWidth, panelHeight], ([w, h]: number[]) => clamp(Math.min(h / 150, w / BOOK_MIN_WIDTH), 1, 1.4));
  const width = useTransform([panelWidth, scale], ([w, s]: number[]) => w / s);
  const height = useTransform([panelHeight, scale], ([h, s]: number[]) => h / s);
  const x = useTransform([px, scale], ([v, s]: number[]) => v / s);
  return (
    <div ref={box} className="absolute inset-0">
      <motion.div style={{ width, height, scale, transformOrigin: '0 0' }} className="absolute left-0 top-0">
        <FlipBook cards={cards} px={x} width={width} height={height} live={live} />
      </motion.div>
    </div>
  );
}

// One component per capability, made once, so a tile never sees a new component type and remounts.
const FLIP_BOOKS: Record<string, (scrub: Scrub) => React.ReactElement> = Object.fromEntries(
  Object.entries(STEPS).map(([href, cards]) => {
    const Book = (scrub: Scrub) => <BookStage {...scrub} cards={cards} />;
    return [href, Book];
  }),
);

// The product panels each tile held before the flip books. Setting this to true brings them back.
const SHOW_PRODUCT_PANELS: boolean = false;

const VIGNETTE: Record<string, (scrub: Scrub) => React.ReactElement> = {
  '/capabilities/ai-tech': AiRun,
  '/capabilities/product-research': DesignCanvas,
  '/capabilities/brand-marketing': BrandKit,
  '/capabilities/growth-revenue': GrowthChart,
  '/capabilities/operations': OpsTracker,
  '/capabilities/finance-accounting': FinanceBooks,
  '/capabilities/venture-capital': DealDial,
  '/capabilities/mergers-acquisitions': DealRoom,
};

// These two panels hold more, so they never drop to the short height.
const TALL_TILES = ['/capabilities/product-research', '/capabilities/mergers-acquisitions'];
const PANEL_DOTS = { backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.14) 1px, transparent 1.3px)', backgroundSize: '14px 14px' };

const DIAL_TILE = '/capabilities/venture-capital';
// Seconds between one column's play-through starting and the next.
const COLUMN_GAP = 0.45;

// Where the tile's own play-through sits at each moment, in the panel's pixels. Most run corner to corner. The dial
// sweeps a full circle from where it rests, because a straight line would swing its needle through the hub.
const playPoint = (href: string, v: number, width: number, height: number) => {
  if (!SHOW_PRODUCT_PANELS || href !== DIAL_TILE) return [v * width, v * height];
  const scale = Math.min(width / 320, height / 160);
  const angle = (DEAL_PARTS[0].len / 2 + v) * Math.PI * 2;
  return [(width - 320 * scale) / 2 + (160 + 70 * Math.sin(angle)) * scale, (height - 160 * scale) / 2 + (66 - 70 * Math.cos(angle)) * scale];
};

// `drawing` swaps in a different panel, for trying options on the lab pages.
export function Tile({ item, still, column, drawing }: { item: (typeof ITEMS)[number]; still: boolean; column: number; drawing?: (scrub: Scrub) => React.ReactElement }) {
  const Drawing = drawing ?? (SHOW_PRODUCT_PANELS ? VIGNETTE : FLIP_BOOKS)[item.href];
  const ref = useRef<HTMLAnchorElement>(null);
  const well = useRef<HTMLDivElement>(null);
  const touch = useRef(false);
  const active = useRef(false);

  const live = useMotionValue(0);
  const across = useMotionValue(1);
  const pointerX = useMotionValue(320);
  const pointerY = useMotionValue(80);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const panelWidth = useMotionValue(0);
  const panelHeight = useMotionValue(0);
  const auto = useMotionValue(0);
  const playing = useRef<AnimationPlaybackControls | null>(null);
  const waiting = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Written straight through while the pointer is here. `live` only eases the way in and out.
  const scrub: Scrub = {
    p: useTransform([across, live], ([v, on]: number[]) => mix(1, v, on)),
    x: useTransform([pointerX, live], ([v, on]: number[]) => mix(320, v, on)),
    y: useTransform([pointerY, live], ([v, on]: number[]) => mix(80, v, on)),
    ax: pointerX,
    px,
    py,
    width: panelWidth,
    height: panelHeight,
    live,
    auto,
  };

  // Takes a point in the panel's pixels. The drawings fit their 320 × 160 units inside the panel, centred.
  const place = (left: number, top: number) => {
    const box = well.current;
    if (!box) return;
    const width = box.clientWidth;
    const height = box.clientHeight;
    const scale = Math.min(width / 320, height / 160);
    panelWidth.set(width);
    panelHeight.set(height);
    px.set(left);
    py.set(top);
    pointerX.set((left - (width - 320 * scale) / 2) / scale);
    pointerY.set((top - (height - 160 * scale) / 2) / scale);
    // The outer tenth of each side counts as the ends, so both are easy to reach.
    across.set(clamp((left / width - 0.1) / 0.8, 0, 1));
  };
  const enter = (transition = SETTLE) => {
    if (active.current) return;
    active.current = true;
    animate(live, 1, transition);
  };
  const leave = (transition = SETTLE) => {
    active.current = false;
    animate(live, 0, transition);
  };

  // No hover on a touch screen, so scrolling the tile up the page moves the pointer through it.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'center 55%'] });
  useEffect(() => {
    touch.current = window.matchMedia('(hover: none)').matches;
  }, []);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const box = well.current;
    if (!touch.current || still || !box) return;
    place(v * box.clientWidth, v * box.clientHeight);
    if (v > 0 && v < 1) enter();
    else leave();
  });

  // The tile plays its own idea once. Stopping it hands straight over to whatever is driving it now.
  const stopPlaying = () => {
    if (waiting.current) clearTimeout(waiting.current);
    waiting.current = null;
    playing.current?.stop();
    playing.current = null;
    auto.set(0);
  };
  const playOnce = () => {
    const box = well.current;
    if (still || !box) return;
    stopPlaying();
    const at = (v: number) => {
      const [left, top] = playPoint(item.href, v, box.clientWidth, box.clientHeight);
      place(left, top);
    };
    auto.set(1);
    at(0);
    enter(GLIDE);
    playing.current = animate(0, 1, {
      ...PLAY_THROUGH,
      onUpdate: at,
      onComplete: () => {
        playing.current = null;
        auto.set(0);
        leave(GLIDE);
      },
    });
  };

  // The first time the tile is on screen, column by column, so only a few move at once. It waits for the column's
  // entrance to finish. Phones skip this, because scrolling already drives them.
  const inView = useInView(well, { once: true, amount: 0.6 });
  const startOnArrival = useRef(() => {});
  useEffect(() => {
    startOnArrival.current = () => {
      if (!touch.current && !active.current) playOnce();
    };
  });
  useEffect(() => {
    if (!inView || still) return;
    waiting.current = setTimeout(() => {
      waiting.current = null;
      startOnArrival.current();
    }, (DURATION.base + column * COLUMN_GAP) * 1000);
    return () => {
      if (waiting.current) clearTimeout(waiting.current);
    };
  }, [inView, still, column]);

  // Only the panel tracks. Over the tile's words it rests, so nothing slides out of view. The mouse always wins.
  const follow = (event: React.PointerEvent<HTMLDivElement>) => {
    const box = well.current?.getBoundingClientRect();
    if (still || !box || event.pointerType !== 'mouse') return;
    if (playing.current || waiting.current) {
      stopPlaying();
      // The tile may still be easing in, so finish that quickly and the handle lands exactly under the pointer.
      animate(live, 1, SETTLE);
    }
    place(event.clientX - box.left, event.clientY - box.top);
    enter();
  };
  const play = (event: React.FocusEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.matches(':focus-visible')) playOnce();
  };

  return (
    <Link
      ref={ref}
      href={item.href}
      onFocus={play}
      className="tile press group/tile flex flex-1 flex-col rounded-2xl border border-navy/[0.08] bg-white p-1.5 transition-[border-color,box-shadow,scale] duration-300 hover:border-navy/20 hover:shadow-[0_22px_44px_-30px_rgba(11,31,59,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:border-navy/20"
    >
      <div ref={well} aria-hidden="true" onPointerMove={follow} onPointerLeave={() => leave()} style={PANEL_DOTS} className={cn('relative flex-1 overflow-hidden rounded-xl bg-[#EFF1F3]', TALL_TILES.includes(item.href) ? 'min-h-56' : 'min-h-36')}>
        {Drawing && <Drawing {...scrub} />}
      </div>
      <div className="flex items-start justify-between gap-3 px-3 pb-2.5 pt-3.5">
        <div>
          <h3 className="font-display text-[17px] font-medium leading-tight tracking-tight">{item.name}</h3>
          <p className="mt-1 text-pretty text-sm leading-snug text-grey/80">{item.tagline}</p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-0.5 size-4 shrink-0 text-navy/30 transition-[color,translate] duration-300 ease-out group-hover/tile:-translate-y-0.5 group-hover/tile:translate-x-0.5 group-hover/tile:text-brand"
        />
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ the section */

// The sector × capability grid is hidden for now: the capability tiles carry this section on their own. Its code
// stays in this file, so setting this to true brings it back.
const SHOW_COVERAGE_GRID: boolean = false;

const HEADING = [{ text: 'Six sectors. One operator team. ' }, { text: 'Your entire business covered.', className: 'text-brand' }];

export function HomeBento() {
  const reduceMotion = useReducedMotion();
  const [sel, setSel] = useState<Sel>(null);

  return (
    <section className="relative bg-warm-white px-6 py-16 text-navy md:px-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        {SHOW_COVERAGE_GRID ? (
          <div className="mb-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
            {/* Heading, and the reading of the grid */}
            <div className="mb-10 flex flex-col lg:col-span-5 lg:mb-0 lg:pr-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The T-Shape Advantage</p>
              <RevealText
                className="max-w-[16ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl"
                parts={HEADING}
              />
              <div className="mt-auto hidden min-h-[150px] pt-10 lg:block" aria-live="polite">
                <Readout sel={sel} />
              </div>
            </div>

            <Reveal className="lg:col-span-7">
              <CoverageGrid sel={sel} onSelect={setSel} />
            </Reveal>
          </div>
        ) : (
          <SectionHeader eyebrow="The T-Shape Advantage" parts={HEADING} />
        )}

        {/* The capabilities, in their three groups */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-5">
          {GROUPS.map((g, i) => (
            <Reveal key={g.id} delay={i * STAGGER} className="group/col flex flex-col">
              <Link
                href={`/capabilities#${g.id}`}
                className="mb-3 inline-flex items-center gap-2 self-start text-sm font-medium text-navy/55 transition-colors duration-300 ease-out hover:text-navy group-has-[.tile:is(:hover,:focus-visible)]/col:text-navy"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand transition-transform duration-300 group-has-[.tile:is(:hover,:focus-visible)]/col:scale-150" />
                {g.name}
              </Link>
              <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-col lg:gap-5">
                {ITEMS.filter((it) => it.group === g.id).map((it) => (
                  <Tile key={it.name} item={it} still={!!reduceMotion} column={i} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
