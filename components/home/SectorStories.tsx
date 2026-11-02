'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import { RevealText } from '@/components/motion/RevealText';
import { COMING_SOON, SECTOR_PHOTOS, sectors } from '@/lib/sectors';
import { EASE_OUT } from '@/lib/motion';

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
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-white/70">{sector.sector}</p>
            <p className="text-3xl font-display font-medium">{sector.name}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4, ease: EASE_OUT }}
          className="overflow-y-auto p-6 md:p-8"
        >
          <p className="mb-4 text-xl font-display font-medium leading-snug">{sector.problem}</p>
          <p className="mb-6 text-[15px] font-light leading-relaxed text-grey">{sector.problemDetail}</p>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-navy/50">What we do</p>
          <ul className="mb-6 border-t border-navy/10">
            {sector.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-navy/[0.06] py-2.5 text-[14px] text-navy/80">
                <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-navy/50">What founders tell us</p>
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
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-warm-white transition-colors hover:bg-brand/90"
              >
                Explore {sector.name}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <span className="rounded-full border border-navy/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-navy/40">
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
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-warm-white/90 text-navy shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-brand"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

/**
 * The sectors as tall photo cards. Pointing at one brings it into focus and dims the rest; opening one grows it
 * into the sector's full story. On phones the cards scroll sideways.
 */
export function SectorStories() {
  const [focused, setFocused] = useState<number | null>(null);
  const [open, setOpen] = useState<Sector | null>(null);

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-warm-white md:flex md:min-h-[calc(100svh-4rem)] md:flex-col md:justify-center md:py-[clamp(32px,6svh,96px)]">
      <NavyBackdrop />
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="mb-10 flex flex-col gap-4 md:mb-[clamp(24px,5svh,56px)] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm-white/50">
              <span aria-hidden="true" className="text-brand">→</span> Inside each sector
            </p>
            <RevealText
              className="max-w-2xl text-3xl font-display font-medium leading-[1.08] tracking-tight md:text-[clamp(32px,min(4.2vw,6.6svh),56px)]"
              parts={[{ text: "We don't just know your industry. " }, { text: "We've built inside it.", className: 'text-brand' }]}
            />
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-warm-white/55">
            Open a sector to see the problems founders bring us and how we work on them.
          </p>
        </div>
      </div>

      {/* Cards: a row on desktop, a sideways scroll on phones */}
      <div
        className="relative mx-auto flex w-full max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:grid md:grid-cols-6 md:gap-3 md:overflow-visible md:px-12 md:pb-0"
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
              onMouseEnter={() => setFocused(i)}
              onFocus={() => setFocused(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE_OUT }}
              aria-label={`Open the ${sector.name} story`}
              className={`group relative aspect-[3/4] w-[68vw] shrink-0 snap-start overflow-hidden rounded-2xl text-left transition-[filter,opacity,transform] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-[42vw] md:aspect-[3/5] md:max-h-[58svh] md:w-auto ${
                dimmed ? 'opacity-50 blur-[2px] md:scale-[0.97]' : ''
              }`}
            >
              <motion.div layoutId={`sector-photo-${sector.id}`} className="absolute inset-0">
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 220px, 70vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: photo.position }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-1 font-mono text-[9px] uppercase leading-snug tracking-[0.18em] text-warm-white/60">{sector.sector}</p>
                <p className="text-2xl font-display font-medium text-warm-white">{sector.name}</p>
                <p className="mt-2 max-h-0 overflow-hidden text-xs font-light leading-relaxed text-warm-white/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {sector.problem}
                </p>
              </div>
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-navy/30 text-warm-white backdrop-blur transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                <Plus className="h-4 w-4" />
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>{open && <SectorPanel key={open.id} sector={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
