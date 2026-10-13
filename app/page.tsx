'use client';

import { useRef } from 'react';
import { motion, useTransform, type Variants } from 'motion/react';
import {
  ArrowRight,
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
import { TShapeWidget } from '../components/TShapeWidget';
import { CompassRing } from '../components/Compass';
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

function EngagementCard({ eng, last }: { eng: Engagement; last: boolean }) {
  return (
    <StaggerItem className="relative">
      <div
        className={`spotlight spotlight-border relative flex h-full flex-col rounded-[2rem] border bg-white p-8 transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-28px_rgba(11,31,59,0.35)] md:p-10 ${
          eng.featured
            ? 'border-brand border-t-4 shadow-[0_0_50px_rgba(243,111,33,0.1)]'
            : 'border-grey/20 hover:border-brand/30'
        }`}
      >
        {eng.featured && (
          <motion.div
            variants={badgeVariants}
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
          >
            Most Popular
          </motion.div>
        )}
        {eng.duration && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">{eng.duration}</p>
        )}
        <h3 className="mb-1 text-[28px] font-display font-semibold leading-tight text-navy">{eng.name}</h3>
        {eng.model && <p className="mb-4 text-sm text-grey/60">{eng.model}</p>}
        {eng.description && (
          <p className="mb-6 text-[15px] font-normal leading-relaxed text-grey md:text-base">{eng.description}</p>
        )}
        <motion.ul variants={bulletList} className="mb-6 flex-1 space-y-2.5">
          {eng.bullets.map((b) => (
            <motion.li key={b} variants={bulletItem} className="flex items-start gap-3 text-[15px] text-grey md:text-base">
              <motion.span variants={bulletTick} className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </motion.span>
              {b}
            </motion.li>
          ))}
        </motion.ul>
        {eng.commercial && (
          <p className="mb-4 text-[13px] leading-relaxed text-grey/70 md:text-sm">
            {eng.commercial}
          </p>
        )}
        {eng.bestFor && (
          <div className="mb-6 rounded-2xl bg-warm-white px-4 py-3.5 space-y-1">
            <p className="text-[13px] leading-relaxed text-grey/70 md:text-sm">
              <span className="font-semibold text-navy">Best for:</span> {eng.bestFor}
            </p>
          </div>
        )}
        <Link
          href="/contact"
          className={`group/cta relative inline-flex w-full items-center justify-center overflow-hidden rounded-full py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] md:text-base ${
            eng.featured
              ? 'bg-brand text-white hover:bg-brand/90 shadow-[0_0_30px_rgba(243,111,33,0.2)]'
              : 'border border-grey/25 text-navy hover:border-brand hover:bg-brand hover:text-white'
          }`}
        >
          {/* A sheen passes across the button on hover */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover/cta:left-full group-hover/cta:opacity-100" />
          {eng.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
        </Link>
      </div>
      {/* Phones: the course continues down between the stacked cards */}
      {!last && (
        <motion.span
          aria-hidden="true"
          variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { delay: 0.3, duration: 0.4, ease: EASE_OUT } } }}
          className="absolute left-1/2 top-full h-6 w-0.5 origin-top -translate-x-1/2 bg-brand/50 md:hidden"
        />
      )}
    </StaggerItem>
  );
}

// The operator capabilities, repeated in the scrolling band under the T-Shape.
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

  return (
    <div className="font-sans">
      <main className="pt-20">
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
        <TShapeWidget variant="home" fullBleed />

        <VelocityMarquee items={MARQUEE} />

        {/* Pick Your Entry Point */}
        {/* Navy behind it, so while it's scaled down the section reads as a card rising out of the navy band */}
        <div className="relative z-10 -mt-10 bg-navy md:-mt-16">
        <motion.section
          ref={entryRef}
          style={{ scale: entryScale }}
          className="origin-top rounded-t-[2.5rem] bg-[#EDE7DC] px-6 py-20 md:rounded-t-[4rem] md:py-28"
        >
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-14 text-center md:mb-20">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Pick Your Entry Point</p>
              <RevealText
                className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl"
                parts={[{ text: 'We Scale, Not Just ' }, { text: 'Back Ventures!', className: 'text-brand' }]}
              />
              <p className={`${sectionSubtitle} text-grey`}>
                Maxinor accelerates venture growth with embedded operators and milestone-based funding, shortening the path to scale.
              </p>
            </Reveal>
            <CourseLine stops={engagements.length} />
            <Stagger className="grid gap-6 md:grid-cols-3">
              {engagements.map((eng, i) => (
                <EngagementCard key={eng.name} eng={eng} last={i === engagements.length - 1} />
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

        {/* Our Partners */}
        <section className="border-y border-grey/30 bg-warm-white px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12 text-center md:mb-16">
              <RevealText className={`${sectionTitle} mb-4`} parts={[{ text: 'Our ' }, { text: 'Partners', className: 'text-brand' }]} />
              <p className={`${sectionSubtitle} text-grey`}>
                Collaborating with industry leaders to unlock scale and build enduring ventures.
              </p>
            </Reveal>
            <Stagger className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:gap-6 md:gap-8">
              {[
                { name: "Hygriv", image: "/images/logo-with-capital.png", url: "https://www.hygriv.com/" },
                { name: "Saptharushi", image: "/images/saptharushi7-logo.jpg", url: "https://saptharushi.com/" },
                { name: "iAccel GBI", image: "/images/logo-removebg.webp", url: "https://iaccelgbi.com/" },
              ].map((partner, idx) => (
                <StaggerItem key={idx}>
                  <Link
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight spotlight-border group relative flex h-20 w-full items-center justify-center rounded-[1.5rem] border border-grey/30 bg-white p-3 transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_36px_-20px_rgba(11,31,59,0.3)] sm:h-28 sm:rounded-[2rem] sm:p-5 md:h-32 md:p-6"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(min-width: 768px) 280px, 33vw"
                      className="object-contain p-3 opacity-70 grayscale transition-[opacity,filter] duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:p-6 [@media(hover:none)]:opacity-100 [@media(hover:none)]:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CTA Section */}
        <section
          onPointerMove={trackSpotlight}
          className={`${sectionPadding} group/cta-section relative overflow-hidden rounded-t-[2.5rem] bg-navy text-center text-warm-white md:rounded-t-[4rem]`}
        >
          {/* Warm light that follows the pointer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [@media(hover:hover)]:group-hover/cta-section:opacity-100"
            style={{ background: 'radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(243,111,33,0.14), transparent 70%)' }}
          />
          <div aria-hidden="true" className="grain absolute inset-0" />
          <CompassRing spin className="absolute left-1/2 top-1/2 w-[min(140vw,760px)] -translate-x-1/2 -translate-y-1/2 text-warm-white opacity-60" />
          <Reveal className="relative max-w-3xl mx-auto">
            <RevealText
              className="mb-6 text-4xl font-display font-medium tracking-tight md:mb-8 md:text-6xl"
              parts={[{ text: 'Ready to ' }, { text: 'Scale', className: 'text-brand' }, { text: ' Your Vision?' }]}
            />
            <p className={`${sectionSubtitle} mb-10 text-warm-white/80 md:mb-12`}>
              Join India&apos;s first operator-led AI venture studio. Whether you&apos;re a founder looking to scale or an investor seeking high-growth opportunities, let&apos;s build the future together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Magnetic className="w-full max-w-[320px] sm:w-auto">
                <Link href="/contact" className={`group ${primaryButtonClass}`}>
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </section>

      </main>
    </div>
  );
}
