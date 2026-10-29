'use client';

import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'motion/react';

/**
 * A slim tape of capabilities on the hero's paper, over a fine ruler of ticks, drifting slowly sideways. Scrolling pushes it faster, and scrolling back up reverses it,
 * so it answers the visitor's own movement. It stops while hovered or focused, off-screen, for reduced-motion
 * visitors, and whenever the visitor presses its pause button (WCAG 2.2.2: moving content must be pausable).
 * The words repeat the capabilities shown elsewhere, so the band itself is hidden from screen readers.
 */
const RULER = {
  backgroundImage:
    'repeating-linear-gradient(90deg, rgb(11 31 59 / 0.28) 0 1px, transparent 1px 80px), repeating-linear-gradient(90deg, rgb(11 31 59 / 0.14) 0 1px, transparent 1px 8px)',
  backgroundSize: '100% 100%, 100% 50%',
  backgroundPosition: 'bottom, bottom',
  backgroundRepeat: 'no-repeat',
};

export function VelocityMarquee({ items, baseSpeed = 1.6 }: { items: string[]; baseSpeed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const direction = useRef(1);

  // The strip holds two identical runs; wrapping between -50% and 0 makes the loop seamless.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!inView || reduceMotion || paused || held) return;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    const move = direction.current * baseSpeed * (delta / 1000) * (1 + Math.abs(factor));
    baseX.set(baseX.get() - move);
  });

  const run = (copy: number) =>
    items.map((item, i) => (
      <span key={`${copy}-${i}`} className="flex shrink-0 items-center">
        <span className="px-6 md:px-9">
          {item}
        </span>
        <svg viewBox="-10 -10 20 20" className="h-2.5 w-2.5 shrink-0 text-brand md:h-3 md:w-3" fill="currentColor">
          <path d="M0,-10 L2,-2 L10,0 L2,2 L0,10 L-2,2 L-10,0 L-2,-2 Z" />
        </svg>
      </span>
    ));

  return (
    <div
      ref={ref}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
      className="relative overflow-hidden whitespace-nowrap border-y border-navy/10 bg-warm-white"
    >
      <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.35] mix-blend-multiply" />
      {/* The strip: words over a ruler (a tall tick at every 10th mark), moving together. Edges fade out at the screen sides. */}
      <div className="[mask-image:linear-gradient(90deg,transparent,black_6%,black_90%,transparent)]">
      <motion.div
        aria-hidden="true"
        style={{ x }}
        className="relative flex w-max py-5 pb-7 font-mono text-[11px] uppercase tracking-[0.22em] text-navy/70 md:py-6 md:pb-8 md:text-xs"
      >
        {[0, 1].map((copy) => (
          // Each copy carries its own ruler, so the two halves are identical and the loop has no seam.
          <span key={copy} className="relative flex">
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-7 h-3 md:-bottom-8" style={RULER} />
            {run(copy)}
          </span>
        ))}
      </motion.div>
      </div>
      {/* Hidden by CSS (not by a JS check) under reduced motion, so server and client markup always match */}
      <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Play the moving capabilities band' : 'Pause the moving capabilities band'}
          className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-navy/15 bg-warm-white text-navy/60 transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hidden md:right-6"
        >
          {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
      </button>
    </div>
  );
}
