'use client';

import { motion, type HTMLMotionProps, type Variants } from 'motion/react';
import { RISE, STAGGER, revealTransition, revealViewport } from '@/lib/motion';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
};

// Fades and rises its children into place the first time they scroll into view.
export function Reveal({ delay = 0, y = RISE, transition, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ ...revealTransition, delay, ...transition }}
      {...props}
    />
  );
}

const staggerParent: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: STAGGER, delayChildren: delay },
  }),
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: RISE },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

type StaggerProps = HTMLMotionProps<'div'> & { delay?: number };

// Reveals each <StaggerItem> inside it one after another.
export function Stagger({ delay = 0, ...props }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      custom={delay}
      variants={staggerParent}
      {...props}
    />
  );
}

export function StaggerItem(props: HTMLMotionProps<'div'>) {
  return <motion.div variants={staggerChild} {...props} />;
}
