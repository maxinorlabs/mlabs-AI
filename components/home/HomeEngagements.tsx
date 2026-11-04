'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useTransform, type Variants } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CourseLine } from '@/components/home/CourseLine';
import { useScrub } from '@/components/motion/useScrub';
import { RevealText } from '@/components/motion/RevealText';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { ENGAGEMENTS, type EngagementId } from '@/lib/engagements';
import { DURATION, EASE_OUT, SETTLE, SPRING, STAGGER } from '@/lib/motion';
import { scrollToElement } from '@/lib/smooth-scroll';
import { trackSpotlight } from '@/lib/spotlight';
import { cn } from '@/lib/utils';

type Engagement = (typeof ENGAGEMENTS)[number];

// Partnership is the engagement most ventures start with, so it is lit until a visitor picks their own.
const FEATURED: EngagementId = 'partnership';

// The "Most Popular" badge settles onto its card just after the card itself arrives.
const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { ...SETTLE, delay: DURATION.fast } },
};

// Checklist items tick in one after another once their card has arrived.
const bulletList: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: DURATION.fast, staggerChildren: STAGGER } },
};
const bulletItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: SETTLE },
};
const bulletTick: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: SPRING },
};

// Picking an engagement carries it down to the enquiry form, then takes the visitor there.
function startEnquiry(id: EngagementId, onSelect: (id: EngagementId) => void) {
  onSelect(id);
  requestAnimationFrame(() => {
    const section = document.getElementById('get-started');
    if (section) scrollToElement(section);
    document.getElementById('contact-message')?.focus({ preventScroll: true });
  });
}

// One column of the entry-point panel, drawn like the T-shape: hairline rules, mono labels, no card chrome.
// `fit` comes from the "Where are you today?" picker: the matching card lights up and the others step back.
function EngagementCard({
  eng,
  fit,
  onStart,
}: {
  eng: Engagement;
  fit: 'match' | 'other' | null;
  onStart: () => void;
}) {
  const featured = eng.id === FEATURED;
  const lit = fit === 'match' || (fit === null && featured);
  return (
    <StaggerItem
      className={cn(
        'group relative flex flex-col px-6 py-7 transition-colors duration-300 hover:bg-white md:px-[clamp(20px,2.4vw,36px)] md:py-[clamp(16px,3svh,36px)]',
        lit && 'bg-white',
      )}
    >
      {/* The lit route's orange rule slides across to the new choice, like a lit route on the compass. A faint rule previews the others. */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-navy/20 transition-transform duration-300 group-hover:scale-x-100" />
      {lit && <motion.span aria-hidden="true" layoutId="engagement-rule" transition={SETTLE} className="absolute inset-x-0 top-0 z-10 h-0.5 bg-brand" />}
      <div className={cn('flex flex-1 flex-col transition-opacity duration-300', fit === 'other' && 'opacity-40 group-hover:opacity-100')}>
      <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] md:mb-[clamp(8px,1.8svh,16px)]">
        <span className="text-navy/60">{eng.duration}</span>
        {featured && (
          <motion.span variants={badgeVariants} className="-my-1 ml-auto rounded-full bg-brand/10 px-2 py-0.5 text-brand">
            Most Popular
          </motion.span>
        )}
      </p>
      <h3 className="text-[26px] font-display font-medium leading-tight tracking-tight text-navy md:text-[clamp(22px,3.4svh,28px)]">{eng.name}</h3>
      <p className="mt-1 text-sm text-grey">{eng.model}</p>
      <p className="mt-4 text-[15px] font-light leading-relaxed text-grey md:mt-[clamp(8px,1.8svh,16px)] md:text-[clamp(14px,2svh,16px)]">{eng.description}</p>
      <motion.ul variants={bulletList} className="mt-5 flex-1 border-t border-navy/10 md:mt-[clamp(10px,2svh,20px)]">
        {eng.bullets.map((b) => (
          <motion.li
            key={b}
            variants={bulletItem}
            className="flex items-center gap-3 border-b border-navy/[0.06] py-2 text-[14px] text-navy/80 md:py-[clamp(4px,0.9svh,9px)] md:text-[clamp(13px,1.9svh,15px)]"
          >
            <motion.span variants={bulletTick} aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
            {b}
          </motion.li>
        ))}
      </motion.ul>
      <p className="mt-4 text-[13px] leading-relaxed text-grey md:mt-[clamp(8px,1.8svh,16px)]">
        <span className="mr-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/60">Best for</span>
        {eng.bestFor}
      </p>
      <Link
        href={eng.insight.href}
        className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-grey underline decoration-navy/20 underline-offset-4 transition-colors duration-300 hover:text-navy hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {eng.insight.label}
        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      </Link>
      <a
        href={`/contact?engagement=${eng.id}`}
        onClick={(event) => {
          event.preventDefault();
          onStart();
        }}
        className={`press group/cta mt-5 inline-flex items-center justify-between gap-3 rounded-full border px-5 py-3 text-[15px] font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:mt-[clamp(10px,2svh,20px)] md:py-[clamp(8px,1.5svh,12px)] ${
          lit ? 'border-brand bg-brand text-white hover:bg-brand/90' : 'border-navy/15 text-navy hover:border-brand hover:text-brand'
        }`}
      >
        {eng.cta}
        <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
      </a>
      </div>
    </StaggerItem>
  );
}

type Props = { selected: EngagementId | null; onSelect: (id: EngagementId | null) => void };

/**
 * The three ways to start. "Where are you today?" lights the matching engagement; its button carries that
 * choice into the enquiry form at the foot of the page, so the visitor doesn't have to say it twice.
 */
export function HomeEngagements({ selected, onSelect }: Props) {
  // The section rises over the band above it like a card, widening to full size as it arrives.
  const ref = useRef<HTMLElement>(null);
  const progress = useScrub(ref, ['start end', 'start 35%']);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);

  return (
    // Paper behind it, so while it's scaled down the section reads as a card rising up the page
    <div id="entry-points" className="relative z-10 scroll-mt-16 bg-warm-white pt-4 md:pt-6">
      <motion.section
        ref={ref}
        style={{ scale }}
        onPointerMove={trackSpotlight}
        aria-label="Pick your entry point"
        className="group/hero relative flex origin-top flex-col justify-center overflow-clip rounded-t-[2.5rem] border-x border-t border-navy/10 bg-warm-white px-6 py-20 shadow-[0_-24px_60px_-40px_rgba(11,31,59,0.25)] md:rounded-t-[4rem] md:py-[clamp(48px,8svh,96px)]"
      >
        {/* The hero's paper: navy dot grid, lit orange around the pointer, and a little grain */}
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
        />
        <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal className="mb-14 text-center md:mb-[clamp(12px,3svh,56px)]">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Pick Your Entry Point</p>
            <RevealText
              className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:mb-[clamp(8px,1.6svh,16px)] md:text-[clamp(30px,min(4.4vw,6.4svh),48px)]"
              parts={[{ text: 'We Scale, Not Just ' }, { text: 'Back Ventures!', className: 'text-brand' }]}
            />
            <p className="mx-auto max-w-xl text-base font-light text-grey md:text-lg">
              Maxinor accelerates venture growth with embedded operators and milestone-based funding, shortening the path to scale.
            </p>
          </Reveal>
          <CourseLine stops={ENGAGEMENTS.length} />
          {/* A quick picker: say where you are and the matching engagement lights up */}
          <div className="mx-auto mb-6 flex max-w-6xl flex-col items-center gap-3 md:mb-[clamp(12px,2.4svh,24px)] md:flex-row md:justify-center">
            <span id="engagement-picker-label" className="text-[11px] font-medium uppercase tracking-[0.22em] text-navy/60">
              Where are you today?
            </span>
            <div role="group" aria-labelledby="engagement-picker-label" className="flex flex-wrap justify-center gap-2">
              {ENGAGEMENTS.map((eng) => (
                <button
                  key={eng.id}
                  type="button"
                  aria-pressed={selected === eng.id}
                  onClick={() => onSelect(selected === eng.id ? null : eng.id)}
                  className={cn(
                    'press relative min-h-11 rounded-full border bg-white/70 px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                    selected === eng.id ? 'border-brand text-white' : 'border-navy/15 text-navy hover:border-brand hover:text-brand',
                  )}
                >
                  {selected === eng.id && <motion.span aria-hidden="true" layoutId="engagement-pill" transition={SETTLE} className="absolute -inset-px rounded-full bg-brand" />}
                  <span className="relative">{eng.choice}</span>
                </button>
              ))}
            </div>
          </div>
          <Stagger className="mx-auto grid max-w-6xl divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white/60 shadow-[0_24px_60px_-36px_rgba(11,31,59,0.35)] backdrop-blur-[2px] md:grid-cols-3 md:divide-x md:divide-y-0">
            {ENGAGEMENTS.map((eng) => (
              <EngagementCard
                key={eng.id}
                eng={eng}
                fit={selected === null ? null : selected === eng.id ? 'match' : 'other'}
                onStart={() => startEnquiry(eng.id, onSelect)}
              />
            ))}
          </Stagger>
          <p className="sr-only" role="status">
            {selected ? `${ENGAGEMENTS.find((eng) => eng.id === selected)?.name} highlighted.` : ''}
          </p>
          <p className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-grey">
            Looking to invest?
            <Link
              href="/invest"
              className="group inline-flex min-h-11 items-center gap-2 font-medium text-navy underline decoration-navy/30 underline-offset-4 transition-colors duration-300 hover:text-brand hover:decoration-brand"
            >
              Explore Venture Invest
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </p>
        </div>
      </motion.section>
    </div>
  );
}
