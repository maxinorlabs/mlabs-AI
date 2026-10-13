'use client';

import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';

// Honour the visitor's reduced-motion setting for every motion component on the site:
// transform animations are skipped, opacity fades still run.
// Also moves the soft highlight of whichever `.spotlight` card the mouse is over (see globals.css),
// so cards anywhere on the site get it from a class alone.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !(event.target instanceof Element)) return;
      const card = event.target.closest<HTMLElement>('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
