'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CompassRing } from '@/components/Compass';
import { EASE_OUT } from '@/lib/motion';

const GRID_LINES =
  'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)';

// Contour lines around the compass, like a chart's depth lines: gently irregular rings, fixed (not random)
// so server and client draw the same paths.
const CONTOURS = Array.from({ length: 5 }, (_, k) => {
  const base = 150 + k * 52;
  const points = Array.from({ length: 73 }, (_, i) => {
    const t = (i / 72) * Math.PI * 2;
    const r = base * (1 + 0.05 * Math.sin(3 * t + k * 0.9) + 0.035 * Math.sin(5 * t + k * 1.7));
    return `${(r * Math.cos(t)).toFixed(1)},${(r * Math.sin(t)).toFixed(1)}`;
  });
  return `M${points.join('L')}Z`;
});

/**
 * Background for the navy sections on inner pages: the faint chart grid they always had, a fine grain, and
 * (mouse only) the grid lit in brand orange around the pointer with a soft glow. `hero` adds the compass
 * motif: contour lines that draw in once on load around a compass ring that turns with the scroll.
 * Nothing here moves on its own after the first couple of seconds. Purely decorative.
 */
export function NavyBackdrop({ hero = false }: { hero?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const area = el?.parentElement;
    if (!el || !area || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    };
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);
    area.addEventListener('pointermove', onMove);
    area.addEventListener('pointerenter', onEnter);
    area.addEventListener('pointerleave', onLeave);
    return () => {
      area.removeEventListener('pointermove', onMove);
      area.removeEventListener('pointerenter', onEnter);
      area.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-active={active ? '' : undefined}
      className="navy-backdrop pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: GRID_LINES, backgroundSize: '60px 60px' }} />
      <div className="navy-backdrop-lit absolute inset-0" />
      <div className="navy-backdrop-glow absolute inset-0" />
      {hero && (
        <div className="absolute -right-56 -top-24 w-[560px] md:-right-48 md:top-1/2 md:w-[760px] md:-translate-y-1/2 lg:-right-24">
          <svg viewBox="-420 -420 840 840" className="absolute inset-0 h-full w-full" fill="none">
            {CONTOURS.map((d, k) => (
              <motion.path
                key={k}
                d={d}
                stroke={k === 1 ? 'var(--color-brand)' : 'currentColor'}
                strokeOpacity={k === 1 ? 0.35 : 0.1}
                strokeWidth={1}
                className="text-warm-white"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.6, delay: reduceMotion ? 0 : 0.2 + k * 0.12, ease: EASE_OUT }}
              />
            ))}
          </svg>
          <div className="aspect-square" />
          <CompassRing spin className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 text-warm-white opacity-60" />
        </div>
      )}
      <div className="grain absolute inset-0" />
    </div>
  );
}
