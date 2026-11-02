'use client';

import { useEffect, useState } from 'react';
import { scrollToElement } from '@/lib/smooth-scroll';

export type RailStop = { id: string; label: string };

/**
 * A slim guide on the right edge of the Home page: a dot per section, the current one drawn as a longer
 * orange dash. Pointing at the rail names every stop; clicking one glides there. Large screens only.
 */
export function SectionRail({ stops }: { stops: RailStop[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const sections = stops.map((stop) => document.getElementById(stop.id));
    // The current section is the last one whose top has passed the middle of the screen.
    const update = () => {
      const middle = window.innerHeight / 2;
      let index = 0;
      sections.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= middle) index = i;
      });
      setCurrent(index);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [stops]);

  return (
    <nav
      aria-label="Sections on this page"
      className="group/rail fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="flex flex-col items-end gap-1 rounded-full border border-navy/10 bg-warm-white/80 px-1.5 py-3 shadow-[0_12px_30px_-16px_rgba(11,31,59,0.35)] backdrop-blur-md">
        {stops.map((stop, i) => {
          const on = current === i;
          return (
            <li key={stop.id}>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById(stop.id);
                  if (el) scrollToElement(el);
                }}
                aria-current={on ? 'true' : undefined}
                className="group/stop flex items-center gap-2.5 rounded-full py-1 pl-2 pr-0.5 focus-visible:outline-2 focus-visible:outline-brand"
              >
                <span
                  className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300 ${
                    on ? 'text-brand' : 'text-navy/60'
                  } max-w-0 overflow-hidden opacity-0 group-hover/rail:max-w-40 group-hover/rail:opacity-100 group-focus-within/rail:max-w-40 group-focus-within/rail:opacity-100 group-hover/stop:text-brand`}
                >
                  {stop.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`block rounded-full transition-all duration-300 ${on ? 'h-4 w-1.5 bg-brand' : 'h-1.5 w-1.5 bg-navy/30 group-hover/stop:bg-brand'}`}
                />
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
