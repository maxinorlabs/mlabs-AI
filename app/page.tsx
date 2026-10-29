'use client';

import { useRef, useState } from 'react';
import { motion, useTransform, type Variants } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Hospital,
  Landmark,
  MonitorPlay,
  Shield,
  Store,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhyMaxinor from '../components/WhyMaxinor';
import { HomeTShape } from '../components/home/HomeTShape';
import { CompassRing, HeroCompass } from '../components/Compass';
import { HomeHero } from '../components/home/HomeHero';
import { CourseLine } from '../components/home/CourseLine';
import { VelocityMarquee } from '../components/home/VelocityMarquee';
import { useScrub } from '../components/motion/useScrub';
import { Magnetic } from '../components/motion/Magnetic';
import { RevealText } from '../components/motion/RevealText';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { EASE_OUT } from '../lib/motion';
import { trackSpotlight } from '../lib/spotlight';

// The "Most Popular" badge settles onto its card just after the card itself arrives.
const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.3, ease: EASE_OUT } },
};

const sectionPadding = 'px-6 py-20 md:py-28 lg:py-32';
const sectionIntro = 'mb-14 text-center md:mb-20';
const sectionTitle = 'text-3xl md:text-5xl font-display font-medium tracking-tight mb-5 md:mb-6';
const sectionSubtitle = 'mx-auto max-w-xl text-base font-light md:text-lg';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] hover:bg-brand/90 sm:px-12 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

const engagements = [
  {
    name: 'Discovery',
    duration: '30 DAYS',
    model: 'Fixed scope. Fixed cost.',
    description: "A focused 30-day sprint to diagnose what's blocking you and build an execution roadmap.",
    bullets: ['Root cause diagnosis', 'Capability gap mapping', '90-day execution roadmap', 'Operator assignment'],
    bestFor: 'Founders who need clarity before committing capital.',
    commercial: '',
    cta: 'Start Your Discovery',
    featured: false,
  },
  {
    name: 'Partnership',
    duration: '1-3 YEARS',
    model: 'Embedded co-ownership',
    description: 'An operator joins your team, embedded, accountable, and aligned on outcomes.',
    bullets: ['Co-aligned Functional Execution', 'Integrated P&L ownership', 'Full operator bench access', 'Build & Scale capability you own'],
    bestFor: 'Ventures ready for full or fractional operator execution, not just advice.',
    commercial: '',
    cta: 'Explore Partnership',
    featured: true,
  },
  {
    name: 'AI Capability Centre',
    duration: 'ON REQUIREMENT',
    model: 'Operator-built, ready to deploy.',
    description: 'AI capabilities - without building it yourself. We design, staff, and run it end-to-end.',
    bullets: ['AI Product & Engineering capability', 'Agentic automation & Workflow design', 'Data infrastructure & AI operations', 'Systems & Intelligence'],
    bestFor: 'Startups, SMEs, Corporates - from AI-fitment to a structured AI function.',
    commercial: '',
    cta: 'Explore the Capability Centre',
    featured: false,
  },
];

const sectorGroups = [
  {
    category: 'SPECIALIZED SECTORS',
    sectors: [
      {
        name: 'Healthcare',
        description: 'Health Tech & Clinical Tools',
        icon: Hospital,
        href: '/sectors/healthcare',
      },
      {
        name: 'Defence',
        description: 'Defence Tech & Dual-Use',
        icon: Shield,
        href: '/sectors/defence',
      },
    ],
  },
  {
    category: 'CONSUMER & RETAIL',
    sectors: [
      {
        name: 'D2C',
        description: 'Consumer Brands & Retail',
        icon: Store,
        href: '/sectors/d2c',
      },
      {
        name: 'Media',
        description: 'Broadcasting & Digital Media',
        icon: MonitorPlay,
        href: '/sectors/media',
      },
    ],
  },
  {
    category: 'FINANCE & SKILLING',
    sectors: [
      {
        name: 'BFSI',
        description: 'Banking, Financial Services & Insurance',
        icon: Landmark,
        href: '/sectors/bfsi',
      },
      {
        name: 'Education',
        description: 'EdTech & Workforce Development',
        icon: GraduationCap,
        href: '/sectors/education',
      },
    ],
  },
];

type Engagement = {
  name: string;
  duration: string;
  model: string;
  description: string;
  bullets: string[];
  bestFor: string;
  commercial: string;
  cta: string;
  featured: boolean;
};

// Checklist items tick in one after another once their card has arrived.
const bulletList: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.07 } },
};
const bulletItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};
const bulletTick: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 500, damping: 22 } },
};

// One column of the entry-point panel, drawn like the T-shape: hairline rules, mono labels, no card chrome.
function EngagementCard({ eng, index }: { eng: Engagement; index: number }) {
  return (
    <StaggerItem
      className={`group relative flex flex-col px-6 py-7 transition-colors duration-300 hover:bg-white md:px-[clamp(20px,2.4vw,36px)] md:py-[clamp(16px,3svh,36px)] ${
        eng.featured ? 'bg-white' : ''
      }`}
    >
      {/* The featured route is marked by an orange rule along its top edge, like a lit route on the compass */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-brand transition-transform duration-500 ease-out ${
          eng.featured ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
      <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] md:mb-[clamp(8px,1.8svh,16px)]">
        <span className="text-brand">{String(index + 1).padStart(2, '0')}</span>
        <span aria-hidden="true" className="h-px w-4 bg-navy/20" />
        <span className="text-navy/50">{eng.duration}</span>
        {eng.featured && (
          <motion.span variants={badgeVariants} className="-my-1 ml-auto rounded-full bg-brand/10 px-2 py-0.5 text-[10px] tracking-[0.16em] text-brand">
            Most Popular
          </motion.span>
        )}
      </p>
      <h3 className="text-[26px] font-display font-medium leading-tight tracking-tight text-navy md:text-[clamp(22px,3.4svh,28px)]">{eng.name}</h3>
      {eng.model && <p className="mt-1 text-sm text-grey/70">{eng.model}</p>}
      {eng.description && (
        <p className="mt-4 text-[15px] font-light leading-relaxed text-grey md:mt-[clamp(8px,1.8svh,16px)] md:text-[clamp(14px,2svh,16px)]">{eng.description}</p>
      )}
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
      {eng.bestFor && (
        <p className="mt-4 text-[13px] leading-relaxed text-grey md:mt-[clamp(8px,1.8svh,16px)]">
          <span className="mr-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-navy/50">Best for</span>
          {eng.bestFor}
        </p>
      )}
      <Link
        href="/contact"
        className={`group/cta mt-5 inline-flex items-center justify-between gap-3 rounded-full border px-5 py-3 text-[15px] font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:mt-[clamp(10px,2svh,20px)] md:py-[clamp(8px,1.5svh,12px)] ${
          eng.featured
            ? 'border-brand bg-brand text-white hover:bg-brand/90'
            : 'border-navy/15 text-navy hover:border-brand hover:text-brand'
        }`}
      >
        {eng.cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
      </Link>
    </StaggerItem>
  );
}

// The three ways in, around the closing compass at the same bearings as the hero's.
const CLOSING_ROUTES = [
  { label: 'Build', href: '/build', bearing: 300 },
  { label: 'Scale', href: '/scale', bearing: 0 },
  { label: 'Invest', href: '/invest', bearing: 60 },
];

// The operator capabilities, repeated in the scrolling tape under the T-Shape.
const MARQUEE = [
  'AI & Tech',
  'Product & Design',
  'Brand & Marketing',
  'Growth & Revenue',
  'Supply Chain & Operations',
  'Finance & Accounting',
  'Venture Capital',
  'M&A',
];

export default function Home() {
  // The entry-point section rises over the navy band like a card, widening to full size as it arrives.
  const entryRef = useRef<HTMLElement>(null);
  const entryProgress = useScrub(entryRef, ['start end', 'start 35%']);
  const entryScale = useTransform(entryProgress, [0, 1], [0.94, 1]);
  // The closing compass echoes the hero: its labels and the button swing the needle to a bearing.
  const [ctaBearing, setCtaBearing] = useState<number | null>(null);

  return (
    <div className="font-sans">
      <main className="pt-16">
        <HomeHero />

        {/* The Ventures We Work With — hidden, set to true to re-enable */}
        {false && (
        <section className="overflow-hidden border-y border-grey/10 bg-white px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
            <h2 className={`${sectionTitle} mb-4`}>
              The Ventures We <span className="text-brand">Work With</span>
            </h2>
            <p className={`${sectionSubtitle} text-grey`}>
              Partnering with visionary founders to build category-defining companies.
            </p>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 px-4 items-center">
                  {[
                    { url: "https://izfworld.com/", logo: "/images/izf-fill-logo.png" },
                    { url: "https://nattier.co.in/", logo: "/images/screenshot-2026-01-07-at-9-02-56-pm.png" },
                    {
                      url: "https://trailytics.ai/",
                      logo: "/images/trailytics-logo.webp",
                      logoClass: "p-0",
                      cardClass: "w-48 md:w-56",
                    },
                    { url: "https://www.adaapt.ai/", logo: "/images/adaapt.svg" },
                    { url: "", logo: "/images/gemini-generated-image-2c1xpu2c1xpu2c1x.png" },
                    { url: "https://aseedinternational.org/", logo: "/images/screenshot-2026-01-07-at-9-08-21-pm.png" }
                  ].map((item, idx) => (
                    <Link 
                      key={`${i}-${idx}`} 
                      href={item.url || "#"}
                      target={item.url ? "_blank" : undefined}
                      rel={item.url ? "noopener noreferrer" : undefined}
                      className={`relative flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-grey/30 bg-white p-3 transition-all duration-500 hover:border-brand/50 hover:bg-white/90 md:h-24 md:w-48 md:p-4 ${item.cardClass ?? ''}`}
                    >
                      <Image 
                        src={item.logo} 
                        alt={`Venture Partner ${idx + 1}`} 
                        fill 
                        className={`object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 ${item.logoClass ?? 'p-3 md:p-4'}`}
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none md:w-32" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none md:w-32" />
          </div>
        </section>
        )}

        {/* T-Shape Advantage */}
        <HomeTShape />

        <VelocityMarquee items={MARQUEE} />

        {/* Pick Your Entry Point */}
        {/* Paper behind it, so while it's scaled down the section reads as a card rising up the page */}
        <div className="relative z-10 bg-warm-white pt-4 md:pt-6">
        <motion.section
          ref={entryRef}
          style={{ scale: entryScale }}
          onPointerMove={trackSpotlight}
          className="group/hero relative flex origin-top flex-col justify-center overflow-clip rounded-t-[2.5rem] border-x border-t border-navy/10 bg-warm-white px-6 py-20 shadow-[0_-24px_60px_-40px_rgba(11,31,59,0.25)] md:min-h-[calc(100svh-4rem)] md:rounded-t-[4rem] md:py-[clamp(20px,4svh,80px)]"
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Pick Your Entry Point</p>
              <RevealText
                className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:mb-[clamp(8px,1.6svh,16px)] md:text-[clamp(30px,min(4.4vw,6.4svh),48px)]"
                parts={[{ text: 'We Scale, Not Just ' }, { text: 'Back Ventures!', className: 'text-brand' }]}
              />
              <p className={`${sectionSubtitle} text-grey`}>
                Maxinor accelerates venture growth with embedded operators and milestone-based funding, shortening the path to scale.
              </p>
            </Reveal>
            <CourseLine stops={engagements.length} />
            <Stagger className="mx-auto grid max-w-6xl divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white/60 shadow-[0_24px_60px_-36px_rgba(11,31,59,0.35)] backdrop-blur-[2px] md:grid-cols-3 md:divide-x md:divide-y-0">
              {engagements.map((eng, i) => (
                <EngagementCard key={eng.name} eng={eng} index={i} />
              ))}
            </Stagger>
          </div>
        </motion.section>
        </div>

        {/* What We Do Section — hidden, set to true to re-enable */}
        {false && (
        <section className={`${sectionPadding} bg-navy border-y border-grey/20`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={`${sectionTitle} text-warm-white`}>
                What We <span className="text-brand">Do</span>
              </h2>
              <p className={`${sectionSubtitle} text-warm-white/80`}>
                Maxinor assists founders to scale their ventures, SMEs to unlock growth, corporates to craft
                innovation, and investors to seek returns via the &ldquo;Maxinor Operator Platform&rdquo;
              </p>
            </div>

            {/* Two pillar cards */}
            <div className="grid gap-0 grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
              {/* Venture Build — blue */}
              <Link href="/build" className="group border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white/10">
                <h3 className="mb-1 text-xl font-display font-bold text-warm-white md:text-2xl">
                  Venture Build
                </h3>
                <p className="mb-4 text-sm font-semibold text-teal">Venture Creation Engine</p>
                <p className="text-sm font-light leading-relaxed text-warm-white/75">
                  Creation of New AI-Native companies from &ldquo;Scratch&rdquo; across sectors.
                </p>
              </Link>

              {/* Venture Scale — white */}
              <Link href="/scale" className="group bg-warm-white border-l border-grey/20 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white border-t-4 border-t-brand">
                <h3 className="mb-1 text-xl font-display font-bold text-navy md:text-2xl">
                  Venture Scale
                </h3>
                <p className="mb-4 text-sm font-semibold text-brand">Execution Led Engine</p>
                <p className="text-sm font-light leading-relaxed text-grey">
                  Operator capabilities that <strong className="font-semibold text-navy">deliver measurable business outcomes</strong> for existing Ventures, SMEs, and companies.
                </p>
              </Link>
            </div>
          </div>
        </section>
        )}

        {/* Sectors We Work In — hidden, set to true to re-enable */}
        {false && (
        <section className={`${sectionPadding} bg-white border-y border-grey/10`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={sectionTitle}>
                Sectors We <span className="text-brand">Work In</span>
              </h2>
              <p className={`${sectionSubtitle} text-grey`}>
                Deep operator expertise across high-growth sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-y-0">
              {sectorGroups.map((group) => (
                <div key={group.category}>
                  <p className="mt-4 mb-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-brand md:mt-0 md:mb-5 md:text-base">
                    {group.category}
                  </p>
                  <div className="flex flex-col gap-5">
                    {group.sectors.map((sector) => (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        className="group flex min-h-[168px] items-center gap-5 rounded-2xl border border-grey/20 bg-warm-white p-5 transition-all duration-300 hover:border-brand/50 hover:bg-white md:min-h-[180px] md:p-6"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-grey/15 bg-grey/8 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/5 md:h-16 md:w-16">
                          <sector.icon className="h-6 w-6 text-grey/60 transition-colors duration-300 group-hover:text-brand md:h-7 md:w-7" />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <h3 className="text-base font-bold uppercase leading-tight tracking-[0.16em] text-navy transition-colors duration-300 group-hover:text-brand md:text-lg">
                            {sector.name}
                          </h3>
                          <p className="mt-2 max-w-[17rem] text-base font-light leading-[1.45] text-grey md:text-lg">
                            {sector.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Why Maxinor — hidden, set to true to re-enable */}
        {false && <WhyMaxinor />}

        {/* The closing call fills one screen */}
        <div className="md:flex md:min-h-[calc(100svh-4rem)] md:flex-col">
        {/* Our Partners — hidden, set to true to re-enable */}
        {false && (
        <section
          onPointerMove={trackSpotlight}
          className="group/hero relative overflow-clip border-t border-navy/10 bg-warm-white px-6 py-20 md:py-[clamp(24px,4.5svh,72px)]"
        >
          {/* The hero's paper: navy dot grid, lit orange around the pointer, and a little grain */}
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
          />
          <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
          <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="mb-12 text-center md:mb-[clamp(16px,3.5svh,48px)]">
              <RevealText className={`${sectionTitle} mb-4`} parts={[{ text: 'Our ' }, { text: 'Partners', className: 'text-brand' }]} />
              <p className={`${sectionSubtitle} text-grey`}>
                Collaborating with industry leaders to unlock scale and build enduring ventures.
              </p>
            </Reveal>
            {/* One ruled strip split into cells, like the hero's route cards */}
            <Stagger className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white/70 shadow-[0_24px_60px_-36px_rgba(11,31,59,0.35)] backdrop-blur-[2px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                { name: "Hygriv", image: "/images/logo-with-capital.png", url: "https://www.hygriv.com/" },
                { name: "Saptharushi", image: "/images/saptharushi7-logo.jpg", url: "https://saptharushi.com/" },
                { name: "iAccel GBI", image: "/images/logo-removebg.webp", url: "https://iaccelgbi.com/" },
              ].map((partner, idx) => (
                <StaggerItem key={partner.name}>
                  <Link
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col gap-2 px-5 py-4 transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand md:py-[clamp(10px,2svh,20px)]"
                  >
                    <span className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em]">
                      <span className="text-brand">{String(idx + 1).padStart(2, '0')}</span>
                      <ArrowUpRight className="h-4 w-4 text-navy/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </span>
                    <span className="relative block h-16 md:h-[clamp(48px,9svh,96px)]">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        sizes="(min-width: 640px) 280px, 90vw"
                        className="object-contain opacity-70 grayscale transition-[opacity,filter] duration-500 group-hover:opacity-100 group-hover:grayscale-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/50 transition-colors duration-300 group-hover:text-navy">{partner.name}</span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
        )}

        {/* CTA Section */}
        <section
          onPointerMove={trackSpotlight}
          className="group/hero relative flex flex-col justify-center overflow-clip rounded-t-[2.5rem] border-x border-t border-navy/10 bg-warm-white px-6 py-20 text-center text-navy shadow-[0_-24px_60px_-40px_rgba(11,31,59,0.25)] md:flex-1 md:px-12 md:rounded-t-[4rem] md:py-[clamp(28px,6svh,128px)]"
        >
          {/* The hero's paper: navy dot grid, lit orange around the pointer, and a little grain */}
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(rgb(11 31 59 / 0.16) 1px, transparent 1.4px)' }}
          />
          <div aria-hidden="true" className="hero-grid hero-grid-lit pointer-events-none absolute inset-0" />
          <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply" />
          {/* Laid out like the hero: words on the left, the compass ring on the right */}
          <CompassRing
            spin
            className="absolute left-1/2 top-1/2 w-[min(140vw,760px)] -translate-x-1/2 -translate-y-1/2 text-navy opacity-20 md:left-auto md:right-[2%] md:w-[min(46vw,80svh,640px)] md:translate-x-0 md:opacity-60"
          />
          {/* The hero's compass sits inside the ring, so the page ends where it began. Its three bearings
              are the three ways in again; they repeat links found higher up, so they stay out of the tab order. */}
          <div className="pointer-events-none absolute right-[2%] top-1/2 hidden aspect-square w-[min(46vw,80svh,640px)] -translate-y-1/2 items-center justify-center md:flex">
            <div className="relative w-[58%]">
              <HeroCompass bearing={ctaBearing} className="relative w-full text-navy" />
              {CLOSING_ROUTES.map((route) => {
                const rad = ((route.bearing - 90) * Math.PI) / 180;
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    tabIndex={-1}
                    onMouseEnter={() => setCtaBearing(route.bearing)}
                    onMouseLeave={() => setCtaBearing(null)}
                    className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
                      ctaBearing === route.bearing
                        ? 'border-brand/40 bg-warm-white text-brand'
                        : 'border-transparent text-navy/40 hover:border-navy/15'
                    }`}
                    style={{ left: `${50 + 58 * Math.cos(rad)}%`, top: `${50 + 58 * Math.sin(rad)}%` }}
                  >
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <Reveal className="relative mx-auto w-full max-w-7xl md:text-left">
            <div className="md:max-w-[min(600px,52%)]">
              <p className="mb-4 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50 md:justify-start">
                <span className="text-brand">→</span> Next step
              </p>
              <RevealText
                className="mb-6 text-4xl font-display font-medium tracking-tight md:mb-[clamp(12px,3svh,32px)] md:text-[clamp(36px,min(5.4vw,8svh),64px)] md:leading-[1.05]"
                parts={[{ text: 'Ready to ' }, { text: 'Scale', className: 'text-brand' }, { text: ' Your Vision?' }]}
              />
              <p className="mx-auto mb-10 max-w-xl border-t border-navy/10 pt-5 text-base font-light text-grey md:mx-0 md:mb-[clamp(20px,4.5svh,48px)] md:text-lg">
                Join India&apos;s first operator-led AI venture studio. Whether you&apos;re a founder looking to scale or an investor seeking high-growth opportunities, let&apos;s build the future together.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Magnetic className="w-full max-w-[320px] sm:w-auto">
                  <Link
                    href="/contact"
                    onMouseEnter={() => setCtaBearing(0)}
                    onMouseLeave={() => setCtaBearing(null)}
                    onFocus={() => setCtaBearing(0)}
                    onBlur={() => setCtaBearing(null)}
                    className={`group ${primaryButtonClass}`}
                  >
                    Get in Touch <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
              {/* Other ways to reach us, ruled like the panels above */}
              <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 divide-y divide-navy/10 border-y border-navy/10 text-left sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:mx-0 md:mt-[clamp(20px,4.5svh,48px)]">
                {[
                  { label: 'Email', value: 'contact@mlabs.co.in', href: 'mailto:contact@mlabs.co.in' },
                  { label: 'Meet', value: 'The operator team', href: '/team' },
                ].map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group/row flex items-center justify-between gap-3 py-3 transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-4 sm:first:pl-0"
                  >
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-navy/50">
                        <span className="text-brand">{String(i + 1).padStart(2, '0')}</span> · {item.label}
                      </span>
                      <span className="text-[15px] font-medium">{item.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-navy/40 transition duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-brand" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        </div>

      </main>
    </div>
  );
}
