'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { setSmoothScroll } from '@/lib/smooth-scroll';

/**
 * Eases wheel and trackpad scrolling across the site, so the page glides rather than steps. Touch scrolling is
 * left native, and visitors who ask for reduced motion get ordinary scrolling. Dialogs and anything marked
 * `data-lenis-prevent` scroll natively inside themselves.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -64 },
      prevent: (node) => !!node.closest('dialog, [role="dialog"], [data-lenis-prevent]'),
    });
    setSmoothScroll(lenis);
    return () => {
      setSmoothScroll(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
