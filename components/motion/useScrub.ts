'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, type MotionValue } from 'motion/react';

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

/**
 * Scroll progress (0 → 1) of `target` passing through the viewport, smoothed, for scrubbing an animation
 * back and forth with the scroll position. Reduced-motion visitors get a constant 1 (everything in place).
 * That switch happens after mount, so server and first client render always match.
 */
export function useScrub(target: RefObject<HTMLElement | null>, offset: ScrollOffset): MotionValue<number> {
  const reduceMotion = useReducedMotion();
  const still = useRef(false);
  const { scrollYProgress } = useScroll({ target, offset });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const progress = useMotionValue(0);

  useMotionValueEvent(smooth, 'change', (value) => {
    if (!still.current) progress.set(value);
  });

  useEffect(() => {
    still.current = !!reduceMotion;
    progress.set(reduceMotion ? 1 : smooth.get());
  }, [reduceMotion, progress, smooth]);

  return progress;
}
