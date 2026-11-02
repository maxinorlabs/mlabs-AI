'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { animate, motion, useInView, useReducedMotion, useTransform } from 'motion/react';
import { useScrub } from '@/components/motion/useScrub';
import { ArrowUpRight } from 'lucide-react';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import { RevealText } from '@/components/motion/RevealText';
import { EASE_OUT } from '@/lib/motion';
import { PARTNER_FACES as FACES } from '@/lib/partners';

// Track records taken word for word from the operators' bios on the Team page. Keep them in step with those bios.
const RECORDS = [
  {
    value: 260,
    prefix: 'US$',
    suffix: 'M+',
    label: 'GMV run-rate at SOLV, built as a core founding member',
    who: 'Samir Gupta',
    image: '/team/samir-gupta-v3.webp',
  },
  {
    value: 80,
    prefix: '',
    suffix: 'M+',
    label: 'users on ZEE5, after a 200-engineer team modernised the platform',
    who: 'Alok Kumar',
    image: '/team/alok-kumar-v3.webp',
  },
  {
    value: 1500,
    prefix: '₹',
    suffix: ' Cr+',
    label: 'of retail categories managed across fashion, beauty and lifestyle',
    who: 'Zubair Patel',
    image: '/team/zubair-patel-v3.webp',
  },
  {
    value: 10,
    prefix: '',
    suffix: 'x',
    label: 'revenue growth helped drive at Teleperformance India',
    who: 'Samir Gupta',
    image: '/team/samir-gupta-v3.webp',
  },
];


const format = (n: number) => Math.round(n).toLocaleString('en-IN');

// A number that counts up from zero the first time it scrolls into view.
function CountUp({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, { duration: 1.6, ease: EASE_OUT, onUpdate: setShown });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

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
 * Proof that the team are operators: real numbers from their own careers, each signed with the operator's face,
 * and the partners as a row of portraits that lift and name themselves on hover.
 */
export function OperatorProof() {
  const [hovered, setHovered] = useState<number | null>(null);
  // Scrolling in from the hero, the navy spreads out from where the compass sits, like ink from its centre.
  const ref = useRef<HTMLElement>(null);
  const progress = useScrub(ref, ['start end', 'start 15%']);
  const clipPath = useTransform(progress, (p) => `circle(${(p * 150).toFixed(2)}% at 76% 0%)`);

  return (
    <motion.section ref={ref} style={{ clipPath }} className="relative overflow-hidden bg-navy px-6 py-20 text-warm-white md:flex md:min-h-[calc(100svh-4rem)] md:flex-col md:justify-center md:px-12 md:py-[clamp(32px,6svh,96px)]">
      <NavyBackdrop />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-12 grid gap-6 md:mb-[clamp(28px,6svh,64px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm-white/50">
              <span aria-hidden="true" className="text-brand">→</span> Operators, not advisors
            </p>
            <RevealText
              className="text-3xl font-display font-medium leading-[1.08] tracking-tight md:text-[clamp(32px,min(4.2vw,6.6svh),56px)]"
              parts={[
                { text: 'Not advisors who have read the playbook. ' },
                { text: "They've run the plays.", className: 'text-brand' },
              ]}
            />
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-warm-white/60 md:justify-self-end">
            A few of the numbers our partners put on the board before Maxinor. Hover a face to see who.
          </p>
        </div>

        {/* The numbers, each signed by the operator behind it */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {RECORDS.map((record, i) => (
            <motion.div
              key={record.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
              className="group relative flex flex-col bg-navy/90 px-6 py-7 transition-colors duration-300 hover:bg-[#13294a] md:py-[clamp(20px,3.6svh,36px)]"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <p className="mb-3 text-[clamp(36px,min(4vw,7svh),56px)] font-display font-medium leading-none tracking-tight text-warm-white">
                <CountUp value={record.value} prefix={record.prefix} suffix={record.suffix} />
              </p>
              <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-warm-white/65">{record.label}</p>
              <p className="flex items-center gap-2.5 border-t border-white/10 pt-4 text-xs text-warm-white/70">
                <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
                  <Image src={record.image} alt="" fill sizes="28px" className="object-cover object-top" />
                </span>
                {record.who}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The partners: overlapping portraits that lift and show a name tag on hover */}
        <div className="mt-12 flex flex-col items-start gap-6 md:mt-[clamp(28px,6svh,64px)] md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center pl-3" onMouseLeave={() => setHovered(null)}>
            {FACES.map((face, i) => (
              <li
                key={face.name}
                className="relative -ml-3"
                style={{ zIndex: hovered === i ? 20 : FACES.length - i }}
                onMouseEnter={() => setHovered(i)}
              >
                <motion.div
                  animate={{ y: hovered === i ? -6 : 0, scale: hovered === i ? 1.12 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10 ring-2 ring-navy md:h-14 md:w-14"
                >
                  <Image src={face.image} alt={`${face.name}, ${face.role}`} fill sizes="56px" className="object-cover object-top grayscale-[30%]" />
                </motion.div>
                {hovered === i && (
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-warm-white px-3 py-1.5 text-center text-navy shadow-xl"
                  >
                    <span className="block text-xs font-semibold">{face.name}</span>
                    <span className="block text-[10px] text-grey">{face.role}</span>
                  </motion.span>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/team"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-warm-white transition-colors duration-300 hover:border-brand hover:bg-brand"
          >
            Meet the operator team
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
