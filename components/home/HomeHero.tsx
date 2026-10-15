'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { HeroCompass } from '@/components/Compass';
import { trackSpotlight } from '@/lib/spotlight';
import { EASE_OUT } from '@/lib/motion';

// The three ways in. Each is a bearing on the hero compass: hovering or focusing one swings the needle to it.
const ROUTES = [
  { label: 'Venture Build', href: '/build', bearing: 300 },
  { label: 'Venture Scale', href: '/scale', bearing: 0 },
  { label: 'Venture Invest', href: '/invest', bearing: 60 },
];

const OPERATORS = [
  { name: 'Samir Gupta', src: '/team/samir-gupta.webp' },
  { name: 'Amar Daing', src: '/images/1663569415671.jpg' },
  { name: 'Parool Duggal', src: '/team/parool-duggal.webp' },
  { name: 'Alok Kumar', src: '/team/alok-kumar-v2.webp' },
  { name: 'Alok Lall', src: '/team/alok-lall.webp' },
  { name: 'Manik Sood', src: '/images/manik.webp' },
];

const HEADLINE = [
  { words: ["India's", '1st'], className: 'text-navy' },
  { words: ['Operator', 'Led', 'AI'], className: 'headline-shimmer' },
  { words: ['Venture', 'Studio'], className: 'headline-shimmer' },
];

// Contour lines around the compass, like depth lines on a chart: gently irregular rings, fixed (not random)
// so server and client draw the same paths.
const CONTOURS = Array.from({ length: 7 }, (_, k) => {
  const base = 120 + k * 46;
  const points = Array.from({ length: 97 }, (_, i) => {
    const t = (i / 96) * Math.PI * 2;
    const r = base * (1 + 0.055 * Math.sin(3 * t + k * 0.8) + 0.03 * Math.sin(5 * t + k * 1.9));
    return `${(r * Math.cos(t)).toFixed(1)},${(r * Math.sin(t)).toFixed(1)}`;
  });
  return `M${points.join('L')}Z`;
});

// Each word settles up into place, one after another. Pure CSS, and the words are never hidden or clipped,
// so the headline is painted on the first frame (it is the page's largest element, so this keeps LCP fast).
function Headline() {
  let index = 0;
  return (
    <h1 className="mb-[clamp(12px,3svh,32px)] text-[clamp(38px,min(7.4vw,8.4svh),92px)] leading-[1.0] font-display font-medium tracking-[-0.03em]">
      {HEADLINE.map((line, l) => (
        <span key={l} className="block">
          {line.words.map((word, w) => {
            const delay = 120 + index++ * 70;
            return (
              <span key={w}>
                <span
                  className={`inline-block animate-settle ${line.className}`}
                  // The second delay times the shimmer so it travels across the words left to right.
                  style={{ animationDelay: `${delay}ms, ${900 + index * 90}ms` }}
                >
                  {word}
                </span>
                {w < line.words.length - 1 && ' '}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

// One contour ring. Draws in once, then drifts with the pointer by its depth, so the rings move apart in parallax.
function Contour({ d, k, px, py }: { d: string; k: number; px: MotionValue<number>; py: MotionValue<number> }) {
  const depth = (k + 1) / CONTOURS.length;
  const x = useTransform(px, (v) => v * depth * 28);
  const y = useTransform(py, (v) => v * depth * 28);
  return (
    <motion.path
      d={d}
      style={{ x, y }}
      stroke={k === 2 ? 'var(--color-brand)' : 'var(--color-navy)'}
      strokeOpacity={k === 2 ? 0.45 : 0.1 + (CONTOURS.length - k) * 0.012}
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.6, delay: 0.2 + k * 0.09, ease: EASE_OUT }}
    />
  );
}

// One cell of the route selector. A navy fill rises from the bottom on hover; the arrow lifts out.
function RouteCell({
  route,
  index,
  onActive,
}: {
  route: (typeof ROUTES)[number];
  index: number;
  onActive: (i: number | null) => void;
}) {
  return (
    <Link
      href={route.href}
      onMouseEnter={() => onActive(index)}
      onMouseLeave={() => onActive(null)}
      onFocus={() => onActive(index)}
      onBlur={() => onActive(null)}
      className="group relative flex flex-1 items-center gap-5 overflow-hidden px-5 py-3 text-navy outline-none transition-colors duration-500 focus-visible:text-warm-white hover:text-warm-white sm:flex-col sm:items-start sm:gap-[clamp(6px,1.6svh,14px)] sm:py-[clamp(10px,1.8svh,16px)]"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 ${
          index === 0 ? 'bg-brand' : 'bg-navy'
        }`}
      />
      <span className="relative flex items-center justify-between gap-4 sm:w-full">
        <span className="font-mono text-xs tracking-wider text-brand transition-colors duration-500 group-hover:text-warm-white/70 group-focus-visible:text-warm-white/70">
          0{index + 1}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="hidden h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
        />
      </span>
      <span className="relative whitespace-nowrap text-base font-semibold tracking-tight md:text-[17px]">{route.label}</span>
      <ArrowUpRight aria-hidden="true" className="relative ml-auto h-4 w-4 sm:hidden" />
    </Link>
  );
}

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Scrolling away: the copy lifts and fades, the compass turns and the contours open out.
  // Reduced motion flattens every range, so the markup is identical either way (no hydration mismatch).
  const still = reduceMotion ?? false;
  const contentY = useTransform(scrollYProgress, [0, 1], [0, still ? 0 : -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, still ? 1 : 0]);
  const dialRotate = useTransform(scrollYProgress, [0, 1], [0, still ? 0 : 35]);
  const contourScale = useTransform(scrollYProgress, [0, 1], [1, still ? 1 : 1.35]);
  const dialY = useTransform(scrollYProgress, [0, 1], [0, still ? 0 : 80]);

  // Pointer position across the hero, -1…1 on each axis, eased, for the contour parallax.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 50, damping: 18 });
  const py = useSpring(rawY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      rawX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
      rawY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [rawX, rawY, reduceMotion]);

  const bearing = active === null || reduceMotion ? null : ROUTES[active].bearing;

  return (
    <section
      ref={ref}
      onPointerMove={trackSpotlight}
      className="group/hero relative flex min-h-[calc(100svh-4rem)] xl:h-[calc(100svh-4rem)] xl:min-h-[480px] flex-col overflow-hidden bg-warm-white text-navy"
    >
      {/* Paper: fine navy dot grid fading to the edges, lit orange around the pointer, and a little grain */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 animate-fade"
        style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
      />
      <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.35] mix-blend-multiply" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-6 px-6 py-[clamp(16px,5svh,64px)] xl:grid-cols-[1.25fr_1fr]">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10">
          <Headline />
          <p className="mb-[clamp(16px,5svh,48px)] max-w-xl animate-rise text-[clamp(17px,min(2.4vw,3svh),24px)] font-semibold leading-relaxed text-navy/80 [animation-delay:560ms]">
            Operators backing Entrepreneurs
          </p>

          <nav
            aria-label="Ways to work with Maxinor"
            className="flex max-w-xl animate-rise flex-col divide-y divide-navy/15 overflow-hidden rounded-xl border border-navy/15 bg-white/60 shadow-[0_24px_60px_-30px_rgba(11,31,59,0.35)] backdrop-blur-sm [animation-delay:660ms] sm:flex-row sm:divide-x sm:divide-y-0"
          >
            {ROUTES.map((route, i) => (
              <RouteCell key={route.href} route={route} index={i} onActive={setActive} />
            ))}
          </nav>
        </motion.div>

        {/* The compass as an instrument on a field of contour lines: its three bearings are the three ways in */}
        <motion.div
          aria-hidden="true"
          style={{ y: dialY }}
          className="pointer-events-none absolute right-[-35%] top-[8%] w-[120vw] max-w-[620px] opacity-40 sm:right-[-20%] sm:opacity-50 xl:relative xl:right-auto xl:top-auto xl:w-[min(88%,64svh)] xl:justify-self-center xl:opacity-100"
        >
          <motion.svg
            viewBox="-470 -470 940 940"
            className="absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
            fill="none"
            style={{ scale: contourScale }}
          >
            {CONTOURS.map((d, k) => (
              <Contour key={k} d={d} k={k} px={px} py={py} />
            ))}
          </motion.svg>

          <motion.div style={{ rotate: dialRotate }} className="relative">
            <HeroCompass bearing={bearing} className="relative w-full animate-fade text-navy [animation-delay:200ms]" />
            {ROUTES.map((route, i) => {
              const rad = ((route.bearing - 90) * Math.PI) / 180;
              return (
                // The cards above are the accessible links; these repeat them for the pointer, so they stay out of the tab order.
                <Link
                  key={route.href}
                  href={route.href}
                  tabIndex={-1}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className={`pointer-events-auto absolute hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 xl:block ${
                    active === i
                      ? 'border-brand/40 bg-warm-white text-brand'
                      : 'border-transparent text-navy/40 hover:border-navy/15'
                  }`}
                  style={{ left: `${50 + 55 * Math.cos(rad)}%`, top: `${50 + 55 * Math.sin(rad)}%` }}
                >
                  {route.label.replace('Venture ', '')}
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Proof strip: the operators behind the studio */}
      <div className="relative z-10 border-t border-navy/10 bg-warm-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl animate-rise items-center justify-between gap-6 px-6 py-[clamp(8px,2svh,20px)] [animation-delay:900ms]">
          <Link href="/team" className="group flex items-center gap-4">
            <span className="flex -space-x-2.5">
              {OPERATORS.map((op, i) => (
                <span
                  key={op.name}
                  className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-warm-white transition-transform duration-300 group-hover:-translate-y-0.5 md:h-[clamp(32px,5svh,44px)] md:w-[clamp(32px,5svh,44px)]"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <Image src={op.src} alt={op.name} fill sizes="44px" className="object-cover object-top" />
                </span>
              ))}
            </span>
            <span className="text-sm font-semibold text-navy/70 transition-colors group-hover:text-navy md:text-base">
              Meet the <span className="text-brand">Operator Team</span>
              <ArrowUpRight aria-hidden="true" className="ml-1 inline h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
          {/* Scroll cue: a line that draws down once, inviting the visitor into the page */}
          <div aria-hidden="true" className="pointer-events-none hidden h-10 w-px overflow-hidden bg-navy/10 md:block">
            <span className="block h-full w-full origin-top animate-draw-down bg-gradient-to-b from-brand to-brand/0 [animation-delay:1100ms]" />
          </div>
        </div>
      </div>
    </section>
  );
}
