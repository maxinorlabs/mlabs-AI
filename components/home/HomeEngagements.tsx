'use client';

import { useRef, type CSSProperties, type FocusEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SectionHeader } from '@/components/home/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';
import { ENGAGEMENTS, type EngagementId } from '@/lib/engagements';
import { DURATION } from '@/lib/motion';
import { scrollToElement } from '@/lib/smooth-scroll';
import { cn } from '@/lib/utils';

type Engagement = (typeof ENGAGEMENTS)[number];

// Partnership is the engagement most ventures start with.
const FEATURED: EngagementId = 'partnership';

// Loaded up front, because a card that slides in with an empty photo loses the whole effect.
const PHOTOS: Record<EngagementId, { src: string; focus: string }> = {
  discovery: { src: '/images/photos/entry-free-discovery.webp', focus: '46% 45%' },
  partnership: { src: '/images/photos/entry-free-partnership.webp', focus: '58% 30%' },
  'ai-capability-centre': { src: '/images/photos/entry-free-ai.webp', focus: '50% 45%' },
};

// Each card's surface. Small text on the orange card is navy, because white on this orange is too faint to read.
// `top` is where a card holds: below the header, or higher on a very short window so its button stays on screen.
const LOOKS = [
  {
    sheet: 'border border-navy/[0.08] bg-white text-navy',
    top: 'stack:top-[min(5rem,calc(100svh-28.5rem))]',
    strong: 'text-navy',
    muted: 'text-grey',
    label: 'text-navy/60',
    ring: 'bg-navy/10',
    tick: 'bg-brand text-white',
    link: 'text-grey decoration-navy/20 hover:text-navy hover:decoration-brand',
    cta: 'bg-brand text-white hover:bg-brand/90 focus-visible:outline-brand',
  },
  {
    sheet: 'bg-navy text-warm-white',
    top: 'stack:top-[min(6rem,calc(100svh-28.5rem))]',
    strong: 'text-warm-white',
    muted: 'text-warm-white/70',
    label: 'text-warm-white/60',
    ring: 'bg-white/15',
    tick: 'bg-brand text-white',
    link: 'text-warm-white/70 decoration-white/20 hover:text-warm-white hover:decoration-brand',
    cta: 'bg-brand text-white hover:bg-brand/90 focus-visible:outline-brand',
  },
  {
    sheet: 'bg-brand text-white',
    top: 'stack:top-[min(7rem,calc(100svh-28.5rem))]',
    strong: 'text-navy',
    muted: 'text-navy',
    label: 'text-navy/70',
    ring: 'bg-navy/15',
    tick: 'bg-white text-brand',
    link: 'text-navy decoration-navy/30 hover:decoration-white',
    cta: 'bg-white text-navy hover:bg-warm-white focus-visible:outline-white',
  },
];

// Picking an engagement carries it down to the enquiry form, then takes the visitor there.
function startEnquiry(id: EngagementId, onSelect: (id: EngagementId) => void) {
  onSelect(id);
  requestAnimationFrame(() => {
    const section = document.getElementById('get-started');
    if (section) scrollToElement(section);
    document.getElementById('contact-message')?.focus({ preventScroll: true });
  });
}

// What the plan includes. The ticks fill one after another the first time the list is on screen.
function PlanSteps({ eng, index }: { eng: Engagement; index: number }) {
  const look = LOOKS[index];
  const list = useRef<HTMLUListElement>(null);
  const on = useInView(list, { once: true, amount: 0.6 });

  return (
    <ul ref={list} className="space-y-2">
      {eng.bullets.map((bullet, i) => (
        <li key={bullet} className={cn('flex items-center gap-2 text-sm font-medium leading-snug', look.strong)}>
          <span className={cn('relative flex size-5 shrink-0 items-center justify-center rounded-full', look.ring)}>
            <span
              style={{ transitionDelay: on ? `${i * DURATION.fast}s` : '0s' }}
              className={cn(
                'absolute inset-0 flex items-center justify-center rounded-full transition-opacity duration-300 ease-out motion-reduce:transition-none',
                look.tick,
                on ? 'opacity-100' : 'opacity-0 motion-reduce:opacity-100',
              )}
            >
              <Check aria-hidden="true" className="size-3" strokeWidth={3} />
            </span>
          </span>
          {bullet}
        </li>
      ))}
    </ul>
  );
}

/**
 * One plan. On laptops each card holds under the header while the next slides over it, and the card being covered
 * sinks back. The sheet can't be measured while it is held, so two empty markers stay in the page's flow to mark
 * where it starts and where the next card starts.
 */
function PlanCard({ eng, index, onStart }: { eng: Engagement; index: number; onStart: () => void }) {
  const look = LOOKS[index];
  const last = index === ENGAGEMENTS.length - 1;
  const start = useRef<HTMLDivElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: next, offset: ['start end', 'start 96px'] });
  const covered = useTransform(scrollYProgress, [0, 1], [1, last ? 1 : 0.94]);

  // Tabbing back can land on a link hidden under the next card, so bring its card out first.
  const uncover = (event: FocusEvent<HTMLElement>) => {
    if (last || !holder.current || !next.current || !start.current) return;
    if (!event.target.matches(':focus-visible') || getComputedStyle(holder.current).position !== 'sticky') return;
    if (next.current.getBoundingClientRect().top < holder.current.getBoundingClientRect().bottom) scrollToElement(start.current);
  };

  return (
    <>
      <div ref={start} />
      <div ref={holder} onFocus={uncover} className={cn('stack:sticky lg:h-[min(calc(100svh-7.5rem),36rem)] lg:min-h-[28rem]', look.top, !last && 'mb-10')}>
        <motion.article
          style={{ '--covered': covered } as unknown as CSSProperties}
          className={cn(
            'group grid h-full origin-top overflow-hidden rounded-3xl shadow-[0_-12px_32px_-20px_rgba(11,31,59,0.35)] motion-safe:stack:scale-[var(--covered)] lg:grid-cols-2',
            look.sheet,
          )}
        >
          <div className="flex flex-col justify-between gap-5 p-6 lg:p-8">
            <div>
              <p className={cn('text-[11px] font-medium uppercase tracking-[0.22em]', look.label)}>{eng.choice}</p>
              <h3 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">{eng.name}</h3>
              <p className={cn('mt-3 text-pretty text-base font-light leading-relaxed', look.muted)}>{eng.description}</p>
            </div>
            <div className="space-y-4">
              <PlanSteps eng={eng} index={index} />
              <p className={cn('text-pretty text-sm leading-snug', look.muted)}>
                <span className={cn('mr-1.5 text-[11px] font-medium uppercase tracking-[0.22em]', look.label)}>Best for</span>
                {eng.bestFor}
              </p>
              <div className="flex flex-col items-start gap-3">
                <a
                  href={`/contact?engagement=${eng.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onStart();
                  }}
                  className={cn(
                    'press group/cta inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2',
                    look.cta,
                  )}
                >
                  {eng.cta}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </a>
                <Link
                  href={eng.insight.href}
                  className={cn(
                    'text-xs font-medium underline underline-offset-4 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
                    look.link,
                  )}
                >
                  {eng.insight.label}
                  <ArrowUpRight aria-hidden="true" className="ml-1 inline size-3.5 align-text-bottom" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative order-first h-56 overflow-hidden md:h-80 lg:order-none lg:h-auto">
            <Image
              src={PHOTOS[eng.id].src}
              alt=""
              fill
              loading="eager"
              sizes="(min-width: 1024px) 576px, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ objectPosition: PHOTOS[eng.id].focus }}
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/30 to-navy/0" />
            <div aria-hidden="true" className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            <div className="absolute bottom-5 left-6 right-6 text-warm-white transition-transform duration-300 ease-out group-hover:-translate-y-1">
              {eng.id === FEATURED && (
                <p className="mb-3 w-fit rounded-full bg-brand px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white">Most Popular</p>
              )}
              <p className="font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">{eng.duration}</p>
              <p className="mt-1 text-sm text-warm-white/80">{eng.model}</p>
            </div>
          </div>
        </motion.article>
      </div>
      <div ref={next} />
    </>
  );
}

type Props = { selected: EngagementId | null; onSelect: (id: EngagementId | null) => void };

/**
 * The three ways to start, as a stack of bold cards. Scrolling slides each plan over the last, and its steps tick off
 * as it arrives. A plan's button carries it into the enquiry form at the foot of the page. Phones keep the same cards
 * in a plain column, because a card taller than the screen can't be held in place.
 */
export function HomeEngagements({ onSelect }: Props) {
  return (
    <section id="entry-points" aria-label="Pick your entry point" className="relative scroll-mt-16 bg-warm-white px-6 py-16 text-navy md:px-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader eyebrow="Pick Your Entry Point" parts={[{ text: 'We Scale, Not Just ' }, { text: 'Back Ventures!', className: 'text-brand' }]}>
          <p className="text-pretty text-base font-light leading-relaxed text-grey">
            Maxinor accelerates venture growth with embedded operators and milestone-based funding, shortening the path to scale.
          </p>
        </SectionHeader>

        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/60">Where are you today?</p>

        <Reveal>
          {ENGAGEMENTS.map((eng, i) => (
            <PlanCard key={eng.id} eng={eng} index={i} onStart={() => startEnquiry(eng.id, onSelect)} />
          ))}
        </Reveal>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-grey">
          Looking to invest?
          <Link
            href="/invest"
            className="group inline-flex min-h-11 items-center gap-2 font-medium text-navy underline decoration-navy/30 underline-offset-4 transition-colors duration-300 hover:text-brand hover:decoration-brand"
          >
            Explore Venture Invest
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </p>
      </div>
    </section>
  );
}
