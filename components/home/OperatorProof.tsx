'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { animate, motion, useInView, useReducedMotion, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/home/SectionHeader';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import { useScrub } from '@/components/motion/useScrub';
import { DURATION, EASE_OUT, SETTLE } from '@/lib/motion';
import { cn } from '@/lib/utils';

// Figures and career details come from the approved Team page bios. Keep them in step with those bios.
const RECORDS = [
  {
    value: 260,
    prefix: 'US$',
    suffix: 'M+',
    label: 'GMV run-rate at SOLV, built as a core founding member',
    who: 'Samir Gupta',
    image: '/team/samir-gupta-v3.webp',
    title: 'Building a B2B marketplace at SOLV',
    role: 'Core founding member',
    detail: 'Samir was a core founding member at SOLV, which reached a US$260M+ GMV run-rate. His career spans e-commerce, B2B marketplaces, gaming and BPO, including business leadership at Bzinga and Paytm.',
    slug: 'samir-gupta',
  },
  {
    value: 80,
    prefix: '',
    suffix: 'M+',
    label: 'users on ZEE5, after a 200-engineer team modernised the platform',
    who: 'Alok Kumar',
    image: '/team/alok-kumar-v3.webp',
    title: 'Engineering at the scale of ZEE5',
    role: 'SVP Engineering, ZEE5',
    detail: 'At ZEE5, Alok led a 200-engineer organisation that modernised the platform for 80M+ users. Earlier, he built the engineering function for SOLV, Standard Chartered’s greenfield B2B fintech venture, and held engineering roles at Fidelity and Oracle.',
    slug: 'alok-kumar',
  },
  {
    value: 1500,
    prefix: '₹',
    suffix: ' Cr+',
    label: 'of retail categories managed across fashion, beauty and lifestyle',
    who: 'Zubair Patel',
    image: '/team/zubair-patel-v3.webp',
    title: 'Operating across fashion, beauty and lifestyle',
    role: 'Retail and P&L leadership',
    detail: 'Zubair has managed retail categories worth over ₹1,500 Cr. His experience spans Shoppers Stop, Future Lifestyle Fashions and Health & Glow, including private label portfolios of 60+ brands and an omnichannel pivot in 60 days.',
    slug: 'zubair-patel',
  },
  {
    value: 10,
    prefix: '',
    suffix: 'x',
    label: 'revenue growth helped drive at Teleperformance India',
    who: 'Samir Gupta',
    image: '/team/samir-gupta-v3.webp',
    title: 'Growing Teleperformance India',
    role: 'Business leadership',
    detail: 'Samir helped drive 10x revenue growth at Teleperformance India. He brings over 25 years of experience building and scaling businesses, and founded Maxinor to build alongside founders as an operator.',
    slug: 'samir-gupta',
  },
];


const format = (n: number) => Math.round(n).toLocaleString('en-IN');

// A number that counts up from zero the first time it scrolls into view, and counts in again, briefly, each time
// it is picked (`replay` goes up by one).
function CountUp({ value, prefix, suffix, replay }: { value: number; prefix: string; suffix: string; replay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = replay
      ? animate(value * 0.6, value, { duration: DURATION.base, ease: EASE_OUT, onUpdate: setShown })
      : animate(0, value, { duration: 0.8, ease: EASE_OUT, onUpdate: setShown });
    return () => controls.stop();
  }, [inView, reduceMotion, value, replay]);

  return (
    <span ref={ref} className="tabular-nums">
      {/* Screen readers get the final figure, not every frame of the count */}
      <span aria-hidden="true">
        {prefix}
        {format(reduceMotion ? value : shown)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {format(value)}
        {suffix}
      </span>
    </span>
  );
}

/**
 * Attributed career experience. Selecting a figure reveals its operator's role and approved biography.
 */
export function OperatorProof() {
  const [selected, setSelected] = useState(1);
  const [picks, setPicks] = useState(() => RECORDS.map(() => 0));
  const record = RECORDS[selected];
  // Scrolling in from the hero, the navy spreads out from where the compass sits, like ink from its centre.
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const progress = useScrub(ref, ['start end', 'start 15%']);
  const clipPath = useTransform(progress, (p) => (reduceMotion ? 'none' : `circle(${(p * 150).toFixed(2)}% at 76% 0%)`));

  return (
    <motion.section ref={ref} style={{ clipPath }} aria-label="Track record" className="relative overflow-hidden bg-navy px-6 py-16 text-warm-white md:px-12 md:py-20">
      <NavyBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <SectionHeader eyebrow="Track record" parts={[{ text: 'Not advisors who have read the playbook. ' }, { text: "They've run the plays.", className: 'text-brand' }]}>
          <p className="text-pretty text-base font-light leading-relaxed text-warm-white/60">
            Experience from the operators’ careers before Maxinor. Select a figure to explore the role behind it.
          </p>
        </SectionHeader>

        {/* The numbers, each signed by the operator behind it */}
        <div role="group" aria-label="Explore operator career experience" className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20 lg:grid-cols-4">
          {RECORDS.map((record, i) => (
            <motion.button
              key={record.label}
              type="button"
              aria-pressed={selected === i}
              aria-controls="operator-career-story"
              onClick={() => {
                setSelected(i);
                setPicks((runs) => runs.map((n, j) => (j === i ? n + 1 : n)));
              }}
              className={cn(
                'press group relative flex flex-col px-4 py-5 text-left transition duration-300 hover:bg-[#162e4e] focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand sm:px-6 sm:py-7',
                selected === i ? 'bg-[#162e4e]' : 'bg-navy',
              )}
            >
              {/* A faint rule previews a figure; the orange marker slides over from the last one picked */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-white/25 transition-transform duration-300 group-hover:scale-x-100" />
              {selected === i && <motion.span aria-hidden="true" layoutId="proof-marker" transition={SETTLE} className="absolute inset-x-0 top-0 z-10 h-0.5 bg-brand" />}
              <p className="mb-3 whitespace-nowrap font-display text-[clamp(20px,6vw,40px)] font-medium leading-none tracking-tight text-warm-white lg:text-[clamp(28px,3vw,44px)]">
                <CountUp value={record.value} prefix={record.prefix} suffix={record.suffix} replay={picks[i]} />
              </p>
              <p className="mb-4 flex-1 text-xs font-light leading-relaxed text-warm-white/65 sm:mb-6 sm:text-sm">{record.label}</p>
              <p className="flex items-center gap-2 border-t border-white/10 pt-3 text-[11px] text-warm-white/70 sm:gap-2.5 sm:pt-4 sm:text-xs">
                <span className={cn('relative size-7 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 transition-shadow duration-300', selected === i ? 'ring-brand' : 'ring-white/20 group-hover:ring-white/50')}>
                  <Image src={record.image} alt="" fill sizes="28px" className="object-cover object-top" />
                </span>
                {record.who}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Every story sits in the same grid cell, so swapping is a crossfade and the page never jumps */}
        <div id="operator-career-story" role="region" aria-label="Selected operator career story" className="mt-4 grid rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 lg:mt-5">
          {RECORDS.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                'col-start-1 row-start-1 grid gap-6 transition-[opacity,visibility] duration-300 ease-out md:grid-cols-[0.65fr_1.35fr] md:gap-10',
                selected === i ? 'opacity-100' : 'invisible opacity-0',
              )}
            >
              <div className="flex items-start gap-4">
                <Image src={item.image} alt={item.who} width={64} height={64} className="size-16 shrink-0 rounded-xl object-cover object-top" />
                <div>
                  <p className="font-display text-lg font-medium">{item.who}</p>
                  <p className="mt-1 text-xs leading-relaxed text-warm-white/75">{item.role}</p>
                  <Link href={`/team#${item.slug}`} className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-medium underline decoration-white/40 underline-offset-4 transition-colors duration-300 hover:decoration-brand focus-visible:outline-2 focus-visible:outline-brand">Read the biography<ArrowUpRight aria-hidden="true" className="size-3.5" /></Link>
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-white/65">Career experience · before Maxinor</p>
                <h3 className="font-display text-2xl font-medium leading-tight tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-white/80">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="sr-only" role="status">{record.who}: {record.title}</p>
      </div>
    </motion.section>
  );
}
