'use client';

import { motion } from 'motion/react';

// Sliders, charts and routes run this far in from each side of their panel.
export const POINTER_INSET = 24;

// The one mark that sits under the pointer on a slider, chart or route. Place it with `x` and `y`, or `left` and `top`.
export function PointerMark({ style }: { style: React.ComponentProps<typeof motion.span>['style'] }) {
  return <motion.span style={style} className="absolute -ml-2 -mt-2 size-4 rounded-full border-2 border-white bg-brand shadow" />;
}
