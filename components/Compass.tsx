'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { EASE_OUT, revealViewport } from '@/lib/motion';

// Geometry of the "true north" mark (public/images/true-north-v1.webp), in a 400×400 box centred on 0,0.
const CARDINAL_TIP = 160;
const INTERCARDINAL_TIP = 110;
const INNER_RADIUS = 32.5;

// 0° points up (north), angles run clockwise.
function polar(radius: number, degrees: number) {
  const rad = ((degrees - 90) * Math.PI) / 180;
  return `${(radius * Math.cos(rad)).toFixed(2)},${(radius * Math.sin(rad)).toFixed(2)}`;
}

const STAR_POINTS = Array.from({ length: 8 }, (_, i) => {
  const angle = i * 45;
  const tip = polar(i % 2 === 0 ? CARDINAL_TIP : INTERCARDINAL_TIP, angle);
  return {
    north: i === 0,
    lightFacet: `${tip} ${polar(INNER_RADIUS, angle - 22.5)} 0,0`,
    darkFacet: `${tip} ${polar(INNER_RADIUS, angle + 22.5)} 0,0`,
  };
});

const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);

function Bezel({ draw = false }: { draw?: boolean }) {
  const ring = draw
    ? {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: revealViewport,
        transition: { duration: 0.9, ease: EASE_OUT },
      }
    : {};
  const ticks = draw
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: revealViewport,
        transition: { duration: 0.5, delay: 0.5 },
      }
    : {};

  return (
    <svg viewBox="-200 -200 400 400" className="absolute inset-0 h-full w-full" fill="none">
      <motion.circle r={188} stroke="currentColor" strokeOpacity={0.16} strokeWidth={1} {...ring} />
      <motion.circle r={176} stroke="currentColor" strokeOpacity={0.08} strokeWidth={1} {...ring} />
      <motion.g {...ticks}>
        {TICKS.map((deg) => {
          const major = deg % 45 === 0;
          return (
            <line
              key={deg}
              x1={0}
              y1={major ? -170 : -177}
              x2={0}
              y2={-182}
              transform={`rotate(${deg})`}
              stroke={deg === 0 ? 'var(--color-brand)' : 'currentColor'}
              strokeOpacity={deg === 0 ? 0.8 : major ? 0.3 : 0.12}
              strokeWidth={major ? 1.5 : 1}
            />
          );
        })}
      </motion.g>
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="-200 -200 400 400" className="absolute inset-0 h-full w-full">
      {STAR_POINTS.map((p, i) => (
        <g key={i}>
          <polygon points={p.lightFacet} fill={p.north ? 'var(--color-brand)' : 'currentColor'} fillOpacity={p.north ? 0.38 : 0.1} />
          <polygon points={p.darkFacet} fill={p.north ? 'var(--color-brand)' : 'currentColor'} fillOpacity={p.north ? 0.22 : 0.045} />
        </g>
      ))}
      <circle r={7} fill="currentColor" fillOpacity={0.2} />
      <circle r={3.5} fill="var(--color-navy)" fillOpacity={0.8} />
    </svg>
  );
}

/**
 * The hero compass. The star turns toward the pointer while it is inside the surrounding <section>,
 * and settles back to north when the pointer leaves. Touch devices get one settling swing on load;
 * reduced-motion visitors get a still compass.
 */
export function HeroCompass({
  className = '',
  bearing = null,
  onHeading,
}: {
  className?: string;
  bearing?: number | null;
  /** Called with the needle's heading (0–359°) as it moves, for a readout. */
  onHeading?: (degrees: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();
  const target = useMotionValue(0);
  const rotate = useSpring(target, { stiffness: 60, damping: 14 });

  // On load the needle spins in and settles on north, like a compass finding its bearing.
  useEffect(() => {
    if (reduceMotion) return;
    target.jump(-300);
    rotate.jump(-300);
    const settle = setTimeout(() => target.set(0), 250);
    return () => clearTimeout(settle);
  }, [reduceMotion, rotate, target]);

  useEffect(() => {
    if (!onHeading) return;
    return rotate.on('change', (v) => onHeading(Math.round(((v % 360) + 360) % 360)));
  }, [onHeading, rotate]);

  // At rest a real needle never sits dead still: it hunts a few degrees either side of its heading.
  const restRef = useRef(0);
  const lastMoveRef = useRef(0);
  useEffect(() => {
    if (reduceMotion || !inView) return;
    const id = setInterval(() => {
      if (performance.now() - lastMoveRef.current < 1500) return;
      target.set(restRef.current + (Math.random() * 2 - 1) * 4);
    }, 1800);
    return () => clearInterval(id);
  }, [inView, reduceMotion, target]);

  // A chosen bearing (e.g. while a hero button is hovered) takes over from the pointer.
  const bearingRef = useRef(bearing);
  useEffect(() => {
    bearingRef.current = bearing;
    if (bearing === null) return;
    // (on release the pointer, or the idle hunt, takes over again from this heading)
    const current = target.get();
    const delta = ((((bearing - current) % 360) + 540) % 360) - 180;
    restRef.current = current + delta;
    lastMoveRef.current = performance.now();
    target.set(current + delta);
  }, [bearing, target]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = ref.current;
    const area = el?.closest('section');
    if (!el || !area) return;

    const onMove = (event: PointerEvent) => {
      if (bearingRef.current !== null) return;
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      // Ignore the centre, where the angle swings wildly with tiny movements.
      if (Math.hypot(dx, dy) < 48) return;
      const angle = (Math.atan2(dx, -dy) * 180) / Math.PI;
      // Turn the short way round instead of spinning back through 360°.
      const current = target.get();
      const delta = ((((angle - current) % 360) + 540) % 360) - 180;
      restRef.current = current + delta;
      lastMoveRef.current = performance.now();
      target.set(current + delta);
    };
    const onLeave = () => {
      if (bearingRef.current !== null) return;
      restRef.current = Math.round(target.get() / 360) * 360;
      target.set(restRef.current);
    };

    area.addEventListener('pointermove', onMove);
    area.addEventListener('pointerleave', onLeave);
    return () => {
      area.removeEventListener('pointermove', onMove);
      area.removeEventListener('pointerleave', onLeave);
    };
  }, [inView, reduceMotion, target]);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none aspect-square ${className}`}>
      <Bezel draw />
      <motion.div className="absolute inset-0" style={{ rotate }}>
        <Star />
      </motion.div>
    </div>
  );
}

// The compass ring alone, drawn once when it scrolls into view. Used as a quiet background motif.
// With `spin`, the ring turns a little as the page scrolls past it (tied to scroll, never looping).
export function CompassRing({ className = '', spin = false }: { className?: string; spin?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, spin && !reduceMotion ? 90 : 0]);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none aspect-square ${className}`}>
      <motion.div className="absolute inset-0" style={{ rotate }}>
        <Bezel draw />
      </motion.div>
    </div>
  );
}
