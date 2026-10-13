import type { Transition } from 'motion/react';

// Shared motion tokens. Keep entrances short and ease-out so content is readable almost immediately.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.6,
} as const;

// Delay between siblings in a staggered group.
export const STAGGER = 0.06;

// Distance (px) an element rises while it fades in.
export const RISE = 16;

export const revealTransition: Transition = { duration: DURATION.base, ease: EASE_OUT };

// Fire once, when the element's top edge is a little way inside the screen. Measured by edge rather than by
// fraction so tall blocks (e.g. stacked cards on a phone) don't sit blank while waiting to be "15% visible".
export const revealViewport = { once: true, amount: 0, margin: '0px 0px -12% 0px' } as const;
