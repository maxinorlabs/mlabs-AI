'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Boxes, Calculator } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import {
  Eyebrow,
  HoverRule,
  PaperSection,
  RouteCompass,
  RuledFaq,
  RuledList,
  panelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page/Paper';
import { EASE_OUT } from '@/lib/motion';

const painPoints = [
  {
    number: '01',
    title: 'The Founder Bottleneck',
    body: 'Every decision passes through you. Sales closes when you are in the room. Product moves when you push. This was fine at 10 people. At 30, it is the ceiling. Scaling requires systems, not more founder hours.',
  },
  {
    number: '02',
    title: 'Revenue Without Repeatability',
    body: 'You have customers. But the path to acquiring the next 100 looks exactly like the path to the first 10. No playbook, no pipeline system, no qualification framework. You are growing but you cannot tell anyone how.',
  },
  {
    number: '03',
    title: 'The Series A Gap',
    body: 'Investors are interested but the data room is not ready, the unit economics are not clean, and the operating model does not look like a company that can absorb ₹5 Cr and deploy it efficiently. The gap between traction and Series A readiness is almost always an execution gap, not a product gap.',
  },
];

const engines = [
  {
    icon: TrendingUp,
    title: 'Growth (GTM, Sales & Partnerships)',
    href: '/capabilities/growth-revenue',
    items: [
      'GTM strategy and channel buildout',
      'Sales playbook and pipeline execution',
      'Partnership and business development strategy',
      'Pricing architecture and unit economics',
      'Revenue operations, forecasting and retention',
    ],
  },
  {
    icon: Boxes,
    title: 'Supply Chain & Operations',
    href: '/capabilities/operations',
    items: [
      'End-to-end supply chain design and management',
      'Vendor sourcing, warehousing, logistics and fulfilment',
      'Offline distributor and channel operations',
      'Business process design and standardisation',
      'Reporting infrastructure and dashboards',
    ],
  },
  {
    icon: Calculator,
    title: 'Finance & Accounting',
    href: '/capabilities/finance-accounting',
    items: [
      'Financial modelling and MIS reporting',
      'Accounting systems and bookkeeping infrastructure',
      'Fundraising process and data room management',
      'Statutory compliance and audit readiness',
      'Cash flow planning and working capital management',
    ],
  },
];

const engagementModels = [
  {
    name: 'Discovery',
    duration: '30 DAYS',
    description:
      'Fixed scope. Fixed cost. A root cause diagnosis, capability gap mapping, and a 90-day execution roadmap. The right start if you need clarity before committing.',
  },
  {
    name: 'Partnership',
    duration: 'EMBEDDED OR FRACTIONAL',
    description:
      'Co-aligned functional execution, integrated P&L ownership, and full operator bench access to build and scale a capability you own. The right model for ventures ready for full or fractional operator execution, not just advice.',
  },
  {
    name: 'AI Capability Centre',
    duration: 'ON REQUIREMENT',
    description:
      'AI capabilities, without building it yourself. We design, staff, and run it end-to-end, spanning AI product and engineering, agentic automation and workflow design, data infrastructure and AI operations, and systems and intelligence.',
  },
];

const portfolioLogos = [
  {
    name: 'IZF',
    src: '/images/izf-fill-logo.png',
    url: 'https://izfworld.com/',
  },
  {
    name: 'Nattier',
    src: '/images/screenshot-2026-01-07-at-9-02-56-pm.png',
    url: 'https://nattier.co.in/',
  },
  {
    name: 'Kachs',
    src: '/images/kachslogo-djobqbobxjiekpjl.webp',
    url: 'https://responcibleai.com/',
  },
  {
    name: 'Adaapt',
    src: '/images/adaapt.svg',
    url: 'https://www.adaapt.ai/',
  },
  {
    name: 'Aseed',
    src: '/images/screenshot-2026-01-07-at-9-08-21-pm.png',
    url: 'https://aseedinternational.org/',
  },
];

const partnerLogos = [
  {
    name: 'Hygriv',
    src: '/images/logo-with-capital.png',
    url: 'https://www.hygriv.com/',
  },
  {
    name: 'Saptharushi',
    src: '/images/saptharushi7-logo.jpg',
    url: 'https://saptharushi.com/',
  },
  {
    name: 'iAccel GBI',
    src: '/images/logo-removebg.webp',
    url: 'https://iaccelgbi.com/',
  },
];

const faqs = [
  {
    q: 'What stage does Venture Scale work best?',
    a: 'Seed to pre-Series A. Typically startups between ₹1 Cr–₹20 Cr ARR who have product-market fit but have hit the ceiling of founder-led execution.',
  },
  {
    q: 'How is this different from hiring a COO or VP?',
    a: 'A hired VP takes 3 months to onboard and 6 months to be productive. A Maxinor operator is productive on day one. They also bring cross-domain operator network, institutional playbooks, and direct accountability to milestones that a new hire does not have.',
  },
  {
    q: 'What does the operator actually do day to day?',
    a: 'They run a function. They attend your leadership meetings, manage your teams, own your KPIs, and build the systems. It looks like having a senior executive, not a consultant.',
  },
  {
    q: 'Do we need to give equity?',
    a: 'The Partnership model involves a small equity stake aligned to execution milestones. Discovery is fee-based with no equity.',
  },
  {
    q: 'How do we know if Venture Scale is working?',
    a: 'We set measurable milestones at the start of every engagement. If we do not hit them, we diagnose why and adjust. Operators are accountable to outcomes, not hours.',
  },
];

export default function ScalePage() {
  return (
    <div className="pt-16 font-sans">

      {/* ── Section 1: Hero — words on the left, the compass pointing at Scale on the right ── */}
      <PaperSection fill className="border-t-0 py-16 md:py-[clamp(24px,5svh,64px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <Eyebrow>Venture Scale</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="mb-[clamp(16px,3svh,28px)] text-[clamp(36px,min(5.4vw,7.6svh),76px)] font-display font-medium leading-[1.02] tracking-[-0.03em]"
            >
              Your startup has traction.{' '}
              <span className="text-brand">Now it needs operators.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-[clamp(20px,3.5svh,32px)] max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg"
            >
              Maxinor embeds experienced operators into your founding team to execute growth, fix operations,
              and systematically build the business towards Series A. Not advisory. Not consulting. Embedded
              execution with skin in the game.
            </motion.p>
            {/* The three promises, as a ruled strip */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-[clamp(24px,4svh,40px)] flex w-fit flex-wrap divide-x divide-navy/10 rounded-full border border-navy/10 bg-white/60 font-mono text-[11px] uppercase tracking-[0.16em] text-navy/70"
            >
              {['Embedded Operators', '₹1 Cr–₹20 Cr ARR', 'Series A Preparation'].map((chip) => (
                <li key={chip} className="px-4 py-2">{chip}</li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className={primaryButtonClass}>
                Start with a Discovery Sprint <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/build" className={secondaryButtonClass}>
                See Venture Build
              </Link>
            </motion.div>
          </div>
          <div className="hidden justify-center md:flex">
            <RouteCompass here="Scale" className="w-[min(78%,58svh,440px)] animate-fade [animation-delay:200ms]" />
          </div>
        </div>
      </PaperSection>

      {/* ── Section 2: Who This Is For ───────────────────────────────────────── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>Who This Is For</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'You have product-market fit. ' }, { text: 'The machine is missing.', className: 'text-navy/50' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {painPoints.map((p) => (
            <StaggerItem key={p.title} className="group relative px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <span aria-hidden="true" className="mb-6 block h-0.5 w-8 bg-brand" />
              <h3 className="mb-3 text-xl font-display font-medium text-navy">{p.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-grey">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* ── Section 3: The Operator Engines ──────────────────────────────────── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>Operator Engines</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Three operator engines. ' }, { text: 'One system.', className: 'text-brand' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {engines.map((engine) => (
            <StaggerItem key={engine.title} className="group relative flex flex-col px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <div className="mb-5 flex items-start gap-3">
                <engine.icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-navy/40 transition-colors duration-300 group-hover:text-brand" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium text-navy">{engine.title}</h3>
              </div>
              <RuledList items={engine.items} className="mb-6 flex-1" />
              <Link
                href={engine.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-all duration-200 hover:gap-2.5 hover:text-brand"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* ── Section 4: Engagement Models ─────────────────────────────────────── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>Engagement Models</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Three ways ' }, { text: 'to engage.', className: 'text-brand' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {engagementModels.map((model) => (
            <StaggerItem key={model.name} className="group relative flex flex-col px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50">{model.duration}</p>
              <h3 className="mb-4 text-2xl font-display font-medium text-navy">{model.name}</h3>
              <p className="flex-1 border-t border-navy/10 pt-4 text-[15px] font-light leading-relaxed text-grey">{model.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* ── Section 5: Companies Scaled — hidden, set to true to re-enable ── */}
      {false && (
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Portfolio
            </p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Ventures we have scaled.
            </h2>
          </motion.div>

          {/* Portfolio logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {portfolioLogos.map((logo, i) => (
              <motion.a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex h-20 w-36 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 transition-all duration-300 hover:border-brand/25 hover:shadow-md sm:h-24 sm:w-44"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Partners label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-navy/30"
          >
            Partners
          </motion.p>

          {/* Partner logos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {partnerLogos.map((logo, i) => (
              <motion.a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex h-20 w-36 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 transition-all duration-300 hover:border-brand/25 hover:shadow-md sm:h-24 sm:w-44"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* ── Section 6: FAQ ────────────────────────────────────────────────────── */}
      <PaperSection className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <Reveal>
            <Eyebrow>Common Questions</Eyebrow>
            <RevealText
              className="text-3xl font-display font-medium tracking-tight md:text-5xl"
              parts={[{ text: 'Frequently asked ' }, { text: 'questions.', className: 'text-brand' }]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <RuledFaq items={faqs} />
          </Reveal>
        </div>
      </PaperSection>

      {/* ── Section 7: CTA — laid out like the hero, so the page ends where it began ── */}
      <PaperSection fill className="py-20 md:py-[clamp(28px,6svh,128px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <Eyebrow>Get Started</Eyebrow>
            <RevealText
              className="mb-6 text-4xl font-display font-medium leading-[1.05] tracking-tight md:text-[clamp(36px,min(5vw,7.4svh),64px)]"
              parts={[{ text: 'Start with a 30-day ' }, { text: 'Discovery Sprint.', className: 'text-brand' }]}
            />
            <p className="mb-10 max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg">
              Most Venture Scale engagements begin with a Discovery Sprint -- a focused 30-day diagnosis
              that maps your constraints, identifies your highest-leverage opportunities, and produces a
              90-day operator-led execution plan.
            </p>
            <Link href="/contact" className={primaryButtonClass}>
              Book a Discovery Sprint <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="hidden justify-center md:flex">
            <RouteCompass here="Scale" className="w-[min(70%,52svh,400px)]" />
          </div>
        </div>
      </PaperSection>

    </div>
  );
}
