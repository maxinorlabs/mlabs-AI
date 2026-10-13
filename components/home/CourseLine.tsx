'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'motion/react';

/**
 * The "course" above the entry-point cards: a line that plots itself from one waypoint to the next as the
 * visitor scrolls, each waypoint lighting up as the line reaches it. Desktop only; phones get connectors
 * between the stacked cards instead.
 */
export function CourseLine({ stops }: { stops: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'start 40%'] });
  // Tied to the scroll position itself, so it only moves when the visitor does.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [reached, setReached] = useState(0);

  useMotionValueEvent(progress, 'change', (value) => {
    // Stop i sits at i / (stops - 1) along the line.
    setReached(Math.floor(value * (stops - 1) + 0.02) + 1);
  });

  const inset = `${50 / stops}%`;

  return (
    <div ref={ref} aria-hidden="true" className="relative mb-10 hidden h-6 md:block">
      {/* The plotted course: dashed track underneath, solid line drawn over it */}
      <div className="absolute top-1/2 h-px -translate-y-1/2 border-t border-dashed border-navy/20" style={{ left: inset, right: inset }} />
      <motion.div
        className="absolute top-1/2 h-0.5 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-brand/60 to-brand"
        style={{ left: inset, right: inset, scaleX: progress }}
      />
      <div className="relative grid h-full" style={{ gridTemplateColumns: `repeat(${stops}, minmax(0, 1fr))` }}>
        {Array.from({ length: stops }, (_, i) => {
          const on = i < reached;
          return (
            <div key={i} className="flex items-center justify-center">
              <span
                className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 transition-[background-color,border-color,transform] duration-500 ease-out ${
                  on ? 'scale-100 border-brand bg-[#EDE7DC]' : 'scale-75 border-navy/20 bg-[#EDE7DC]'
                }`}
              >
                <span className={`h-2 w-2 rounded-full transition-colors duration-500 ${on ? 'bg-brand' : 'bg-navy/20'}`} />
                {on && !reduceMotion && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-brand"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
