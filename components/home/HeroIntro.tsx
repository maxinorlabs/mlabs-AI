'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EASE_OUT } from '@/lib/motion';

const SEEN_KEY = 'maxinor-intro-seen';
const HOLD_MS = 1150;

// Runs before the page paints: on a repeat visit in the same session, or for reduced motion, it hides the
// curtain at once (so it never flashes) and lets the hero's entrance play straight away.
const SKIP_SCRIPT = `try{if(sessionStorage.getItem('${SEEN_KEY}')||matchMedia('(prefers-reduced-motion: reduce)').matches){var s=document.createElement('style');s.id='hero-intro-skip';s.textContent='.hero-intro{display:none!important}.hero-await,.hero-await *{animation-play-state:running!important}';document.head.appendChild(s)}}catch(e){}`;

const WORD = 'MAXINOR';

/**
 * The Home page's opening: a navy curtain where the compass needle spins in and settles on north while the
 * wordmark rises, then the curtain lifts off the hero. Once per session; a click, key or scroll skips it.
 * The curtain is server-rendered with CSS animations, so it plays before JavaScript loads, and while it is up
 * the hero's own entrance waits (see `.hero-await` in globals.css).
 */
export function HeroIntro() {
  const [up, setUp] = useState(true);

  useEffect(() => {
    if (document.getElementById('hero-intro-skip')) {
      const t = setTimeout(() => setUp(false), 0);
      return () => clearTimeout(t);
    }
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {}
    const lift = () => setUp(false);
    const timer = setTimeout(lift, HOLD_MS);
    const events = ['pointerdown', 'keydown', 'wheel', 'touchstart'] as const;
    events.forEach((e) => window.addEventListener(e, lift, { once: true, passive: true }));
    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, lift));
    };
  }, []);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SCRIPT }} />
      <AnimatePresence>
        {up && (
          <motion.div
            key="intro"
            aria-hidden="true"
            initial={false}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            className="hero-intro fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy text-warm-white"
          >
            {/* The compass: a ring of ticks and a needle that spins in and settles on north */}
            <svg viewBox="-60 -60 120 120" className="mb-8 h-28 w-28 md:h-36 md:w-36" fill="none">
              <circle r="54" stroke="currentColor" strokeOpacity="0.2" />
              <circle r="46" stroke="currentColor" strokeOpacity="0.12" />
              {Array.from({ length: 36 }, (_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="-54"
                  x2="0"
                  y2={i % 9 === 0 ? -47 : -51}
                  stroke="currentColor"
                  strokeOpacity={i % 9 === 0 ? 0.6 : 0.25}
                  transform={`rotate(${i * 10})`}
                />
              ))}
              <g className="intro-needle">
                <path d="M0 -40 L6 0 L0 40 L-6 0 Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M0 -40 L6 0 L-6 0 Z" fill="#F36F21" />
              </g>
              <circle r="3" fill="currentColor" />
            </svg>
            <p className="flex overflow-hidden font-display text-3xl font-medium tracking-[0.3em] md:text-4xl">
              {WORD.split('').map((letter, i) => (
                <span key={i} className="intro-letter inline-block" style={{ animationDelay: `${250 + i * 55}ms` }}>
                  {letter}
                </span>
              ))}
            </p>
            <p className="intro-letter mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-white/50" style={{ animationDelay: '700ms' }}>
              Operators backing Entrepreneurs
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
