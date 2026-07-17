'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus, Minus, TrendingUp, Boxes, Calculator } from 'lucide-react';

// Section

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

// Section

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
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png',
    url: 'https://izfworld.com/',
  },
  {
    name: 'Nattier',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png',
    url: 'https://nattier.co.in/',
  },
  {
    name: 'Kachs',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif',
    url: 'https://responcibleai.com/',
  },
  {
    name: 'Adaapt',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg',
    url: 'https://www.adaapt.ai/',
  },
  {
    name: 'Aseed',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png',
    url: 'https://aseedinternational.org/',
  },
];

const partnerLogos = [
  {
    name: 'Hygriv',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png',
    url: 'https://www.hygriv.com/',
  },
  {
    name: 'Saptharushi',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg',
    url: 'https://saptharushi.com/',
  },
  {
    name: 'iAccel GBI',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4e70f6eb738b4cf11a6c00_logo-removebg.avif',
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

// Section

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-navy/10 last:border-b-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-semibold text-navy md:text-lg">{q}</span>
        <span className="shrink-0 rounded-full border border-navy/15 p-1.5 text-navy/50 transition-colors hover:border-brand/30 hover:text-brand">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm font-light leading-relaxed text-navy/60 md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Section

export default function ScalePage() {
  return (
    <div className="font-sans">

      {/* ── Section 1: Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-28 md:pt-44 md:pb-36">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Brand glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand/3 blur-[100px]" />
        {/* Gradient fade at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            Venture Scale
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Your startup has traction.{' '}
            <span className="text-brand">Now it needs operators.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Maxinor embeds experienced operators into your founding team to execute growth, fix operations,
            and systematically build the business towards Series A. Not advisory. Not consulting. Embedded
            execution with skin in the game.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Embedded Operators', '₹1 Cr–₹20 Cr ARR', 'Series A Preparation'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-warm-white/15 bg-warm-white/5 px-5 py-2 text-sm font-medium text-warm-white/80 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className={primaryBtn}>
              Start with a Discovery Sprint <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/build" className={ghostBtn}>
              See Venture Build
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Who This Is For ───────────────────────────────────────── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Who This Is For
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              You have product-market fit.{' '}
              <span className="text-navy/50">The machine is missing.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] border border-grey/15 bg-white p-8"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {p.number}
                </span>
                <div className="mb-5 h-0.5 w-8 bg-brand" />
                <h3 className="mb-3 text-lg font-display font-semibold text-navy">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Four Engines ──────────────────────────────────────── */}
      <section className="border-t border-grey/10 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Operator Engines
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Three operator engines. One system.
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {engines.map((engine, i) => (
              <motion.div
                key={engine.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col rounded-[2rem] border border-grey/15 bg-warm-white p-8 md:p-10"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                  <engine.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-5 text-xl font-display font-semibold text-navy md:text-2xl">
                  {engine.title}
                </h3>
                <ul className="mb-6 flex-1 space-y-3">
                  {engine.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-grey md:text-base"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={engine.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all duration-200 hover:gap-2"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Engagement Models ─────────────────────────────────────── */}
      <section className="bg-navy px-6 py-20 md:py-28">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Engagement Models
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl lg:text-5xl">
              Three ways to engage.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:bg-white/8 md:p-10"
              >
                <span className="mb-4 inline-block self-start rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand">
                  {model.duration}
                </span>
                <h3 className="mb-4 text-xl font-display font-semibold text-warm-white md:text-2xl">
                  {model.name}
                </h3>
                <p className="flex-1 text-sm font-light leading-relaxed text-warm-white/55 md:text-base">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="border-t border-grey/10 bg-warm-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-14"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Common Questions
            </p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Frequently asked questions.
            </h2>
          </motion.div>

          <div className="divide-y divide-navy/10 rounded-[2rem] border border-navy/10 bg-white px-8 py-2 shadow-sm md:px-10">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 text-center md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/6 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Get Started
            </p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Start with a 30-day Discovery Sprint.
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/55 md:text-lg">
              Most Venture Scale engagements begin with a Discovery Sprint -- a focused 30-day diagnosis
              that maps your constraints, identifies your highest-leverage opportunities, and produces a
              90-day operator-led execution plan.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Book a Discovery Sprint <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
