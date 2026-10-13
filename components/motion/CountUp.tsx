'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/**
 * Shows `value` (e.g. "30", "₹100+ Cr") and, the first time it scrolls into view, counts its number up from
 * zero. The final text is what the server renders, so search engines and no-JS visitors see the real figure.
 */
export function CountUp({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!inView || reduceMotion || !match || !ref.current) return;
    const [, prefix, number, suffix] = match;
    const target = parseFloat(number);
    const decimals = number.includes('.') ? number.split('.')[1].length : 0;
    const el = ref.current;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value, duration]);

  return <span ref={ref}>{value}</span>;
}
