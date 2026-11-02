'use client';

import { useEffect, useState } from 'react';
import { scrollToElement } from '@/lib/smooth-scroll';

// `dark` marks a navy section, where the rail switches to light marks so it stays visible.
export type RailStop = { id: string; label: string; dark?: boolean };

/**
 * A slim guide in the right margin of the Home page: a dot per section, the current one drawn as a longer
 * orange dash. Pointing at it names every stop; clicking one glides there. It keeps out of the way: no panel
 * behind it, hidden over the hero and the footer, and on large screens only.
 */
export function SectionRail({ stops }: { stops: RailStop[] }) {
  const [current, setCurrent] = useState(0);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const sections = stops.map((stop) => document.getElementById(stop.id));
    const footer = document.querySelector('footer');
    // The current section is the last one whose top has passed the middle of the screen.
    const update = () => {
      const middle = window.innerHeight / 2;
      let index = 0;
      sections.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= middle) index = i;
      });
      setCurrent(index);
      setNearFooter(!!footer && footer.getBoundingClientRect().top < window.innerHeight * 0.75);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [stops]);

  const hidden = current === 0 || nearFooter;
  const dark = stops[current]?.dark ?? false;

  return (
    <nav
      aria-label="Sections on this page"
      className={`group/rail fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-500 lg:block ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
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
                className="group/stop flex items-center gap-2.5 py-1 focus-visible:outline-2 focus-visible:outline-brand"
              >
                {/* The names slide out on small tags only while the rail is pointed at */}
                <span
                  className={`max-w-0 overflow-hidden whitespace-nowrap rounded-full font-mono text-[10px] uppercase tracking-[0.16em] opacity-0 transition-all duration-300 group-hover/rail:max-w-40 group-hover/rail:px-2 group-hover/rail:py-0.5 group-hover/rail:opacity-100 group-focus-within/rail:max-w-40 group-focus-within/rail:px-2 group-focus-within/rail:opacity-100 ${
                    dark ? 'bg-navy/80' : 'bg-warm-white/90'
                  } ${on ? 'text-brand' : dark ? 'text-warm-white/80' : 'text-navy/70'} group-hover/stop:text-brand`}
                >
                  {stop.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`block rounded-full transition-all duration-300 ${
                    on ? 'h-5 w-1 bg-brand' : `h-1.5 w-1.5 ${dark ? 'bg-warm-white/40' : 'bg-navy/30'} group-hover/stop:bg-brand`
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
