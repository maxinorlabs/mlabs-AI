'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

// Pulls its child a few pixels toward the pointer while hovered, then springs back. Mouse only.
export function Magnetic({ children, strength = 0.25, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.6 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.6 });

  const onMove = (event: React.PointerEvent) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Cap the pull so large buttons don't drift far from where they belong.
    x.set(Math.max(-10, Math.min(10, (event.clientX - (rect.left + rect.width / 2)) * strength)));
    y.set(Math.max(-8, Math.min(8, (event.clientY - (rect.top + rect.height / 2)) * strength)));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset} className={className}>
      {children}
    </motion.div>
  );
}
