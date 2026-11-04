'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { SETTLE } from '@/lib/motion';
import { scrollToElement } from '@/lib/smooth-scroll';
import { cn } from '@/lib/utils';

// `dark` marks a navy section, where the rail switches to light marks so it stays visible.
export type RailStop = { id: string; label: string; dark?: boolean };

/**
 * A slim guide in the right margin of the Home page: a dot per section, with an orange dash that slides to the
 * current one. Pointing at it names every stop; clicking one glides there. It keeps out of the way: no panel
 * behind it, hidden over the hero and the footer, and on large screens only.
 */
export function SectionRail({ stops }: { stops: RailStop[] }) {
  const [current, setCurrent] = useState(0);
  const [nearFooter, setNearFooter] = useState(false);

  // The current section is the last one whose top has passed the middle of the screen.
  const update = useCallback(() => {
    const footer = document.querySelector('footer');
    const middle = window.innerHeight / 2;
    let index = 0;
    stops.forEach((stop, i) => {
      const el = document.getElementById(stop.id);
      if (el && el.getBoundingClientRect().top <= middle) index = i;
    });
    setCurrent(index);
    setNearFooter(!!footer && footer.getBoundingClientRect().top < window.innerHeight * 0.75);
  }, [stops]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', update);

  useEffect(() => {
    const first = requestAnimationFrame(update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(first);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const hidden = current === 0 || nearFooter;
  const dark = stops[current]?.dark ?? false;

  return (
    // layoutRoot: the rail is fixed, so the sliding dash must not be measured against the page's scroll.
    <motion.nav
      layoutRoot
      aria-label="Sections on this page"
      className={cn(
        'group/rail fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 lg:block',
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      <ol className="flex flex-col items-end gap-0.5">
        {stops.map((stop, i) => {
          const on = current === i;
          return (
            <li key={stop.id}>
              <button
                type="button"
                tabIndex={hidden ? -1 : 0}
                onClick={() => {
                  const el = document.getElementById(stop.id);
                  if (el) scrollToElement(el);
                }}
                aria-current={on ? 'true' : undefined}
                className="group/stop relative flex h-5 w-4 items-center justify-center focus-visible:outline-2 focus-visible:outline-brand"
              >
                {/* The names slide out on small tags only while the rail is pointed at */}
                <span
                  style={{ transitionDelay: `${i * 15}ms` }}
                  className={cn(
                    'pointer-events-none absolute right-full mr-2 translate-x-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.22em] opacity-0 transition-[opacity,translate,color] duration-300 group-focus-within/rail:translate-x-0 group-focus-within/rail:opacity-100 group-hover/rail:pointer-events-auto group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-hover/stop:text-brand',
                    dark ? 'bg-navy/80' : 'bg-warm-white/90',
                    on ? 'text-brand' : dark ? 'text-warm-white/80' : 'text-navy/70',
                  )}
                >
                  {stop.label}
                </span>
                <span aria-hidden="true" className={cn('block size-1.5 rounded-full transition-colors duration-300 group-hover/stop:bg-brand', dark ? 'bg-warm-white/40' : 'bg-navy/30')} />
                {on && <motion.span aria-hidden="true" layoutId="rail-dash" transition={SETTLE} className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 rounded-full bg-brand" />}
              </button>
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
