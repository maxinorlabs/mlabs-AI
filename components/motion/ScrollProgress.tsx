'use client';

import { motion, useScroll, useSpring } from 'motion/react';

// Thin brand line along the bottom edge of the header showing how far down the page the visitor is.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 origin-left bg-brand"
    />
  );
}
