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
 * A band of large type drifting slowly sideways. Scrolling pushes it faster, and scrolling back up reverses it,
 * so it answers the visitor's own movement. It stops while hovered or focused, off-screen, for reduced-motion
 * visitors, and whenever the visitor presses its pause button (WCAG 2.2.2: moving content must be pausable).
 * The words repeat the capabilities shown elsewhere, so the band itself is hidden from screen readers.
 */
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
        <span
          className={`px-6 md:px-10 ${
            i % 2 === 0 ? 'text-warm-white' : 'text-transparent [-webkit-text-stroke:1px_rgb(247_247_245/0.45)]'
          }`}
        >
          {item}
        </span>
        <svg viewBox="-10 -10 20 20" className="h-5 w-5 shrink-0 text-brand md:h-7 md:w-7" fill="currentColor">
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
      className="relative overflow-hidden whitespace-nowrap bg-navy pb-20 pt-4 md:pb-32 md:pt-6"
    >
      <div aria-hidden="true" className="grain absolute inset-0" />
      <motion.div
        aria-hidden="true"
        style={{ x }}
        className="flex w-max text-4xl font-display font-medium tracking-tight md:text-7xl"
      >
        {run(0)}
        {run(1)}
      </motion.div>
      {/* Hidden by CSS (not by a JS check) under reduced motion, so server and client markup always match */}
      <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Play the moving capabilities band' : 'Pause the moving capabilities band'}
          className="absolute bottom-12 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-warm-white/70 transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hidden md:bottom-20 md:right-10"
        >
          {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
