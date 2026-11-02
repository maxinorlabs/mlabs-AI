'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PaperSection, Eyebrow } from '@/components/page/Paper';
import { RevealText } from '@/components/motion/RevealText';
import { EASE_OUT } from '@/lib/motion';

// The three ways in, in the words of their own pages. Photos are Pexels stock: they set the scene, they are not our team.
const STORIES = [
  {
    route: 'Build',
    href: '/build',
    title: "We don't just back founders. We build companies with them.",
    body: 'We co-create AI-native startups from validated white spaces. We bring the operators, the technology infrastructure, and the market expertise. You bring the domain insight and founder commitment.',
    chips: ['AI-Native', '90 Days to Launch', 'Operator Co-Creation'],
    photo: '/images/photos/operators-workshop.webp',
  },
  {
    route: 'Scale',
    href: '/scale',
    title: 'Your startup has traction. Now it needs operators.',
    body: 'We embed experienced operators into your founding team to execute growth, fix operations, and systematically build the business towards Series A. Not advisory. Not consulting. Embedded execution with skin in the game.',
    chips: ['Embedded Operators', '₹1 Cr–₹20 Cr ARR', 'Series A Preparation'],
    photo: '/images/photos/founder-laptop.webp',
  },
  {
    route: 'Invest',
    href: '/invest',
    title: 'Deal flow where we already know the business works.',
    body: 'We deploy capital and structure transactions with something most deal flow does not have: an operator already inside the business. Venture Capital and M&A, backed by evidence, not just conviction.',
    chips: ['Operator-Validated', 'Co-Investment Access', 'M&A Advisory'],
    photo: '/images/photos/operators-handshake.webp',
  },
];

// One chapter of the story. It reports itself as active while it holds the middle of the screen.
function Chapter({ story, index, onActive }: { story: (typeof STORIES)[number]; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="flex flex-col justify-center py-10 md:min-h-[70svh] md:py-0">
      {/* Phones: each chapter carries its own photo */}
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl md:hidden">
        <Image src={story.photo} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Venture {story.route}</p>
      <h3 className="mb-5 text-3xl font-display font-medium leading-[1.1] tracking-tight text-navy md:text-[clamp(28px,min(3.2vw,5.4svh),44px)]">
        {story.title}
      </h3>
      <p className="mb-6 max-w-lg border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg">{story.body}</p>
      <ul className="mb-8 flex w-fit flex-wrap divide-x divide-navy/10 rounded-full border border-navy/10 bg-white/60 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/70">
        {story.chips.map((chip) => (
          <li key={chip} className="px-3.5 py-2">{chip}</li>
        ))}
      </ul>
      <Link
        href={story.href}
        className="group inline-flex w-fit items-center gap-2 text-base font-semibold text-navy transition-colors hover:text-brand"
      >
        Explore Venture {story.route}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

/**
 * Build, Scale and Invest told as a scroll story: the photo stays pinned on the left and changes with each chapter,
 * while a rail beside it lights the route being read.
 */
export function RouteStory() {
  const [active, setActive] = useState(0);

  return (
    <PaperSection className="py-20 md:py-[clamp(48px,10svh,128px)]">
      <div className="mb-10 md:mb-6">
        <Eyebrow>How we work</Eyebrow>
        <RevealText
          className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
          parts={[{ text: 'Build. Scale. ' }, { text: 'Invest.', className: 'text-brand' }]}
        />
      </div>

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        {/* The pinned photo, with the route rail */}
        <div className="hidden md:block">
          <div className="sticky top-[calc(4rem+8svh)] flex h-[74svh] gap-5">
            <ol className="flex flex-col justify-center gap-6" aria-hidden="true">
              {STORIES.map((story, i) => (
                <li key={story.route} className="flex items-center gap-3">
                  <span className={`h-10 w-0.5 rounded-full transition-colors duration-500 ${active === i ? 'bg-brand' : 'bg-navy/15'}`} />
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 [writing-mode:vertical-rl] rotate-180 ${
                      active === i ? 'text-brand' : 'text-navy/35'
                    }`}
                  >
                    {story.route}
                  </span>
                </li>
              ))}
            </ol>
            <div className="relative flex-1 overflow-hidden rounded-3xl shadow-[0_30px_80px_-40px_rgba(11,31,59,0.5)]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT }}
                  className="absolute inset-0"
                >
                  <Image src={STORIES[active].photo} alt="" fill sizes="45vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <p className="absolute bottom-6 left-6 text-4xl font-display font-medium text-warm-white">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block"
                  >
                    {STORIES[active].route}
                  </motion.span>
                </AnimatePresence>
              </p>
            </div>
          </div>
        </div>

        <div>
          {STORIES.map((story, i) => (
            <Chapter key={story.route} story={story} index={i} onActive={setActive} />
          ))}
        </div>
      </div>
    </PaperSection>
  );
}
