'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import { RevealText } from '@/components/motion/RevealText';
import { COMING_SOON, SECTOR_PHOTOS, sectors } from '@/lib/sectors';
import { DURATION, EASE_OUT, SPRING, STAGGER } from '@/lib/motion';
import { cn } from '@/lib/utils';

type Sector = (typeof sectors)[number];

// The open story: the card's photo grows into a panel with the sector's problem, plays and operator.
function SectorPanel({ sector, onClose }: { sector: Sector; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = SECTOR_PHOTOS[sector.id];
  const live = !COMING_SOON.includes(sector.id);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-lenis-prevent
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        layoutId={`sector-${sector.id}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${sector.name}: ${sector.sector}`}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-warm-white text-navy shadow-2xl sm:rounded-3xl md:flex-row"
      >
        <motion.div layoutId={`sector-photo-${sector.id}`} className="relative h-48 shrink-0 md:h-auto md:w-[42%]">
          <Image src={photo.src} alt="" fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover" style={{ objectPosition: photo.position }} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-warm-white">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-warm-white/70">{sector.sector}</p>
            <p className="text-3xl font-display font-medium">{sector.name}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: STAGGER * 2, duration: DURATION.base, ease: EASE_OUT }}
          className="overflow-y-auto p-6 md:p-8"
        >
          <p className="mb-4 text-xl font-display font-medium leading-snug">{sector.problem}</p>
          <p className="mb-6 text-[15px] font-light leading-relaxed text-grey">{sector.problemDetail}</p>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/50">What we do</p>
          <ul className="mb-6 border-t border-navy/10">
            {sector.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-navy/[0.06] py-2.5 text-[14px] text-navy/80">
                <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/50">What founders tell us</p>
          <blockquote className="mb-6 border-l-2 border-brand pl-4 text-[15px] italic leading-relaxed text-navy/80">
            {sector.clientProblems[0]}
          </blockquote>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-5">
            <p className="text-xs text-grey">
              <span className="font-semibold text-navy">{sector.operator}</span> · {sector.operatorBg}
            </p>
            {live ? (
              <Link
                href={sector.standaloneUrl}
                className="press group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-warm-white transition duration-300 hover:bg-brand/90"
              >
                Explore {sector.name}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <span className="rounded-full border border-navy/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-navy/40">
                Page coming soon
              </span>
            )}
          </div>
        </motion.div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="press absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-warm-white/90 text-navy shadow transition duration-300 hover:rotate-90 hover:bg-white focus-visible:outline-2 focus-visible:outline-brand"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

/**
 * The sectors as a reel of tall photo cards. On desktop the section pins and scrolling down glides the reel
 * sideways, each photo drifting inside its frame; a small "Open story" tag follows the pointer over a card.
 * Pointing at a card brings it into focus and dims the rest; opening one grows it into the sector's story.
 * On phones (and for reduced motion) the reel is an ordinary sideways swipe.
 */
export function SectorStories() {
  const [focused, setFocused] = useState<number | null>(null);
  const [open, setOpen] = useState<Sector | null>(null);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // How far the reel has to travel sideways: its overflow past the screen. Zero on phones and for reduced motion.
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;
    const wide = window.matchMedia('(min-width: 768px)');
    const measure = () => setDistance(wide.matches ? Math.max(0, track.offsetWidth - document.documentElement.clientWidth) : 0);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    wide.addEventListener('change', measure);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      wide.removeEventListener('change', measure);
      window.removeEventListener('resize', measure);
    };
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 32, restDelta: 0.001 });
  const x = useTransform(progress, (p) => -p * distance);
  const drift = useTransform(progress, [0, 1], distance ? ['6%', '-6%'] : ['0%', '0%']);

  // The pointer tag, placed in screen coordinates.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tagX = useSpring(pointerX, SPRING);
  const tagY = useSpring(pointerY, SPRING);
  const placeTag = (event: { clientX: number; clientY: number }) => {
    pointerX.set(event.clientX + 16);
    pointerY.set(event.clientY + 16);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={placeTag}
      style={{ ['--reel' as string]: `${distance}px` }}
      className="relative bg-navy text-warm-white md:h-[calc(100svh-4rem+var(--reel))]"
    >
      <div className="relative overflow-hidden py-20 md:sticky md:top-16 md:flex md:h-[calc(100svh-4rem)] md:flex-col md:justify-center md:py-0">
        <NavyBackdrop />

        {/* The title stays put above the reel, so the moving cards never slice it */}
        <div className="relative mx-auto mb-8 flex w-full max-w-7xl flex-col gap-4 px-6 md:mb-[clamp(16px,3.5svh,36px)] md:flex-row md:items-end md:justify-between md:px-12">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Inside each sector</p>
            <RevealText
              className="text-balance text-3xl font-display font-medium leading-[1.08] tracking-tight md:text-[clamp(28px,min(3.4vw,5.6svh),48px)]"
              parts={[{ text: "We don't just know your industry. " }, { text: "We've built inside it.", className: 'text-brand' }]}
            />
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-warm-white/55">
            Open a sector to see the problems founders bring us and how we work on them.
            {distance > 0 && <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-warm-white/40">Scroll to move along →</span>}
          </p>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex w-full snap-x snap-mandatory scroll-px-6 items-center gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:w-max md:snap-none md:gap-5 md:overflow-visible md:px-12 md:pb-0"
          onMouseLeave={() => setFocused(null)}
        >
          {sectors.map((sector, i) => {
            const photo = SECTOR_PHOTOS[sector.id];
            const dimmed = focused !== null && focused !== i;
            return (
              <motion.button
                key={sector.id}
                layoutId={`sector-${sector.id}`}
                type="button"
                onClick={() => setOpen(sector)}
                onMouseEnter={(event) => {
                  placeTag(event);
                  setFocused(i);
                }}
                onFocus={() => setFocused(i)}
                aria-label={`Open the ${sector.name} story`}
                className={cn(
                  'press group relative aspect-[3/4] w-[68vw] shrink-0 snap-start overflow-hidden rounded-2xl text-left transition-[opacity,scale] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-[42vw] md:h-[min(52svh,480px)] md:w-auto',
                  dimmed && 'opacity-50 md:scale-[0.97]',
                )}
              >
                <motion.div layoutId={`sector-photo-${sector.id}`} className="absolute inset-0 overflow-hidden">
                  <motion.div style={{ x: drift }} className="absolute inset-y-0 -inset-x-[8%]">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 420px, 70vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: photo.position }}
                    />
                  </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/0" />
                {/* Deepens as the caption rises, so it stays readable over the middle of the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  {/* The caption rises to show the sector's problem. It moves as one block, so no text reflows. */}
                  <div className="transition-transform duration-300 ease-out md:translate-y-22 md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0">
                    <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-white/60">{sector.sector}</p>
                    <p className="text-2xl font-display font-medium text-warm-white md:text-3xl">{sector.name}</p>
                    <p className="mt-2 hidden h-20 text-sm font-light leading-snug text-warm-white/75 opacity-0 md:line-clamp-4 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                      {sector.problem}
                    </p>
                  </div>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-navy/30 text-warm-white backdrop-blur transition-colors duration-300 group-hover:border-brand group-hover:bg-brand md:hidden">
                  <Plus className="h-4 w-4" />
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* The pointer tag over a card (mouse only) */}
      <motion.span
        aria-hidden="true"
        style={{ x: tagX, y: tagY }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: focused !== null && !open ? 1 : 0, scale: focused !== null && !open ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden items-center gap-1.5 rounded-full bg-brand px-3.5 py-2 text-xs font-semibold text-white shadow-lg [@media(hover:hover)]:md:flex"
      >
        <Plus className="h-3.5 w-3.5" /> Open story
      </motion.span>

      <AnimatePresence>{open && <SectorPanel key={open.id} sector={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
