import type { Transition } from 'motion/react';

// Shared motion tokens. Keep entrances short and ease-out so content is readable almost immediately.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.6,
} as const;

// How things settle: markers sliding, drawings returning to rest, small swaps.
export const SETTLE: Transition = { duration: DURATION.fast, ease: EASE_OUT };

// For a large surface crossing the page: it needs a gentle start, or its first frame looks like a jump.
export const GLIDE: Transition = { duration: DURATION.slow, ease: [0.45, 0, 0.2, 1] };

// A panel playing its idea by itself. Slow and evenly paced, so each step can be followed.
export const PLAY_THROUGH: Transition = { duration: 2.4, ease: [0.37, 0, 0.63, 1] };

// The one spring, for tactile moves.
export const SPRING = { type: 'spring', stiffness: 300, damping: 22 } as const;

// Delay between siblings in a staggered group.
export const STAGGER = 0.06;

// Distance (px) an element rises while it fades in.
export const RISE = 16;

export const revealTransition: Transition = { duration: DURATION.base, ease: EASE_OUT };

// Fire once, when the element's top edge is a little way inside the screen. Measured by edge rather than by
// fraction so tall blocks (e.g. stacked cards on a phone) don't sit blank while waiting to be "15% visible".
export const revealViewport = { once: true, amount: 0, margin: '0px 0px -12% 0px' } as const;
