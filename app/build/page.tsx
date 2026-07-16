'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRight,
  FileQuestion,
  Users,
  TrendingDown,
  Lightbulb,
  Code2,
  Megaphone,
  Plus,
  Minus,
} from 'lucide-react';

/* ─── Shared style tokens ─── */
const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

/* ─── Data ─── */
const painPoints = [
  {
    icon: FileQuestion,
    number: '01',
    title: 'The Blank Page Problem',
    body: 'Most founders have conviction but no structure. Without a validated business model, customer discovery framework, and product scope, the first 6 months are wasted on building the wrong thing.',
  },
  {
    icon: Users,
    number: '02',
    title: 'The Co-Founder Gap',
    body: 'Solo founders need technical or commercial co-founders. Finding and evaluating them alone is slow, expensive, and high-risk without a framework.',
  },
  {
    icon: TrendingDown,
    number: '03',
    title: 'The GTM Graveyard',
    body: 'Building the product is the easy part. Most early-stage startups die because they cannot crack their first 100 customers. GTM is not a phase after launch - it is built in from day one.',
  },
];

const engines = [
  {
    icon: Code2,
    title: 'AI & Tech',
    href: '/capabilities/ai-tech',
    items: [
      'AI product architecture and MVP build',
      'Agentic automation and workflow AI',
      'Data platform and AI infrastructure buildout',
      'Tech architecture built for scale from day one',
      'DevOps, cloud, and full-stack engineering',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Product & Design',
    href: '/capabilities/product-research',
    items: [
      'Market sizing and opportunity validation',
      'Customer discovery and ICP definition',
      'UX/UI design and design systems',
      'MVP scoping and prioritisation',
      'Product development from prototype to shipped release',
    ],
  },
  {
    icon: Megaphone,
    title: 'Brand & Marketing',
    href: '/capabilities/brand-marketing',
    items: [
      'Brand positioning and identity development',
      'First customer acquisition playbook',
      'D2C performance marketing and CAC optimisation',
      'Launch strategy and competitive positioning',
      'Community and content-led growth',
    ],
  },
];

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    timeline: 'Week 1-2',
    detail:
      'Market and customer research, opportunity sizing, initial business model.',
  },
  {
    number: '02',
    phase: 'Validate',
    timeline: 'Week 2-4',
    detail:
      'Customer interviews, prototype testing, pivot or proceed decision.',
  },
  {
    number: '03',
    phase: 'Build',
    timeline: 'Month 2-3',
    detail:
      'Product development, brand, and GTM infrastructure.',
  },
  {
    number: '04',
    phase: 'Launch',
    timeline: 'Month 3',
    detail:
      'First customer acquisition, channel testing, revenue model validation.',
  },
  {
    number: '05',
    phase: 'Scale',
    timeline: 'Month 4+',
    detail:
      'Handover to Venture Scale or independent operation.',
  },
];

const ventures = [
  {
    name: 'IZF',
    url: 'https://izfworld.com/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png',
  },
  {
    name: 'Nattier',
    url: 'https://nattier.co.in/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png',
  },
  {
    name: 'Kachs',
    url: 'https://responcibleai.com/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif',
  },
  {
    name: 'Adaapt',
    url: 'https://www.adaapt.ai/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg',
  },
  {
    name: 'Aseed',
    url: 'https://aseedinternational.org/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png',
  },
];

const faqs = [
  {
    q: 'Who is Venture Build for?',
    a: 'Founders with a validated white space or early prototype who need an execution partner to build fast. Also corporates wanting to spin out a new venture, and domain experts who want to build an AI-native company in their field.',
  },
  {
    q: 'How is this different from an accelerator?',
    a: 'Accelerators give you a programme and a network. We give you an operator who works with you daily, builds with you, and is accountable to the same outcomes you are. There is no cohort, no demo day, and no generic curriculum.',
  },
  {
    q: 'What does Maxinor get from Venture Build?',
    a: 'We take a small equity stake aligned to the build milestones, similar to a co-founder arrangement. The exact structure depends on how much of the build Maxinor contributes.',
  },
  {
    q: 'Do I need to have a product already?',
    a: 'No. Many Venture Build engagements start from a validated market insight or an early customer conversation. We help you build the product and the business model together.',
  },
  {
    q: 'Can Venture Build lead to Venture Scale?',
    a: 'Yes. Most companies that go through Venture Build transition into Venture Scale at the growth stage. The operator relationship deepens as the company scales.',
  },
];

/* ─── FAQ Accordion ─── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-grey/15 overflow-hidden rounded-[2rem] border border-grey/15 bg-white">
      {faqs.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left transition-colors hover:bg-warm-white/60"
          >
            <span className="text-base font-semibold text-navy">{item.q}</span>
            <span className="shrink-0 text-brand">
              {open === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="px-8 pb-6 text-sm font-light leading-relaxed text-grey">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── Page ─── */
export default function BuildPage() {
  return (
    <div className="font-sans">

      {/* ── Section 1: Hero ── */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
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
        {/* Gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            Venture Build
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            We don&apos;t just back founders.{' '}
            <span className="text-brand">We build companies with them.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Maxinor&apos;s Venture Build engine co-creates AI-native startups from validated white spaces. We bring the operators, the technology infrastructure, and the market expertise. You bring the domain insight and founder commitment.
          </motion.p>
          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['AI-Native', '90 Days to Launch', 'Operator Co-Creation'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-warm-white/15 bg-warm-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-warm-white/70"
              >
                {chip}
              </span>
            ))}
          </motion.div>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className={primaryBtn}>
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/scale" className={ghostBtn}>
              See how we scale
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Problem We Solve ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Problem We Solve</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Most startups fail before they find their model.
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
                className="relative rounded-[2rem] border border-grey/15 bg-white p-8"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {p.number}
                </span>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                  <p.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-3 text-lg font-display font-semibold text-navy">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: What Venture Build Covers ── */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What We Cover</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three engines. One integrated build.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {engines.map((engine, i) => (
              <motion.div
                key={engine.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col rounded-[2rem] border border-grey/15 bg-warm-white p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                  <engine.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-5 text-xl font-display font-semibold text-navy">{engine.title}</h3>
                <ul className="mb-6 flex-1 space-y-3">
                  {engine.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-grey">
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

      {/* ── Section 4: How It Works ── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-28 border-t border-white/5">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-60 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/5 blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-20"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Build Process</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
              From white space to working business.
            </h2>
          </motion.div>

          {/* Desktop: horizontal steps */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col px-6 first:pl-0 last:pr-0"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-5 h-px w-1/2 translate-x-full bg-white/10" />
                )}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-xs font-bold text-brand">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-brand/70">{step.timeline}</p>
                <h3 className="mb-3 text-lg font-display font-semibold text-warm-white">{step.phase}</h3>
                <p className="text-sm font-light leading-relaxed text-warm-white/50">{step.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile/tablet: vertical stack */}
          <div className="grid gap-6 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 rounded-[1.5rem] border border-white/8 bg-white/5 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-xs font-bold text-brand">
                  {step.number}
                </span>
                <div>
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand/70">{step.timeline}</p>
                  <h3 className="mb-2 text-base font-display font-semibold text-warm-white">{step.phase}</h3>
                  <p className="text-sm font-light leading-relaxed text-warm-white/50">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Companies Built — hidden, set to true to re-enable ── */}
      {false && (
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Portfolio</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Ventures built from our platform.
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-6">
            {ventures.map((v, i) => (
              <motion.a
                key={v.name}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex items-center justify-center rounded-2xl border border-grey/15 bg-white p-5 transition-all duration-300 hover:border-brand/30 hover:shadow-md sm:p-6"
              >
                <div className="relative h-10 w-full sm:h-12">
                  <Image
                    src={v.logo}
                    alt={v.name}
                    fill
                    className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ── Section 6: FAQ ── */}
      <section className="bg-warm-white px-6 pb-20 md:pb-28 border-t border-grey/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Common Questions</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Everything you need to know.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaqAccordion />
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: CTA ── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 text-center md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/6 blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Get Started</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Have a white space? Let us build it with you.
            </h2>
            <p className="mb-10 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              The conversation starts with an operator, not a pitch deck. Tell us about the opportunity and we will tell you if Venture Build is the right fit.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
    </>
  );
}
