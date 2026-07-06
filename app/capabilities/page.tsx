'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';
const outlineBtn =
  'inline-flex items-center justify-center rounded-full border border-grey/40 bg-white/80 px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-warm-white sm:px-10 sm:py-5';

const capabilities = [
  {
    number: '01',
    category: 'Go-To-Market',
    title: 'GTM',
    path: '/capabilities/gtm',
    description:
      'From idea to market. GTM strategy, sales motion design, and consumer brand execution run by operators who have built pipelines from zero.',
    deliverables: [
      'GTM strategy, channel buildout and sales pipeline execution',
      'Consumer brand positioning and D2C performance marketing',
      'Sales playbook design and qualification frameworks',
      'Content, community and performance-led growth',
      'Launch execution and competitive positioning',
      'Revenue operations design and growth analytics',
    ],
    operator: 'Samir Gupta & Priyabrata Padhi',
    operatorBg: 'GTM leads',
    operatorLinks: [
      { name: 'Samir Gupta', slug: 'samir-gupta' },
      { name: 'Priyabrata Padhi', slug: 'priyabrata-padhi' },
    ],
  },
  {
    number: '02',
    category: 'AI & Technology',
    title: 'AI and Tech',
    path: '/capabilities/ai-tech',
    description:
      'From AI strategy to working system. No pilots that never ship. No tech debt that kills scale.',
    deliverables: [
      'AI strategy and use-case prioritisation',
      'AI product scoping, architecture, and MVP build',
      'Agentic automation and workflow AI',
      'Model fine-tuning, evaluation and deployment',
      'Data platform and AI-readiness buildout',
      'Tech architecture review and debt remediation',
    ],
    operator: 'Alok Kumar & Amar Daing',
    operatorBg: 'AI & Technology leads',
    operatorLinks: [
      { name: 'Alok Kumar', slug: 'alok-kumar' },
      { name: 'Amar Daing', slug: 'amar-daing' },
    ],
  },
  {
    number: '03',
    category: 'People & Org Building',
    title: 'Talent, Culture & Organisational Design',
    path: '/capabilities/talent-culture',
    description:
      'Scaling a company is ultimately about Talent Architecture, high-performing systems, and the growth and retention of people. Most founders realize this a year later than they should.',
    deliverables: [
      'Founding team gap analysis and role definition',
      'Org design for Series A and beyond',
      'Hiring systems, culture design, and leadership onboarding',
      'Performance frameworks for operator-led teams',
      'ESOPs, compensation benchmarking and retention design',
      'Interim leadership and CXO transition planning',
    ],
    operator: 'Parool Duggal & Samir Gupta',
    operatorBg: 'People, Org & Culture leads',
    operatorLinks: [
      { name: 'Parool Duggal', slug: 'parool-duggal' },
      { name: 'Samir Gupta', slug: 'samir-gupta' },
    ],
  },
];

const problems = [
  "My ARR has been stuck at ₹3 Cr for 8 months. I don't know what's blocking it.",
  "I have a sales team but no repeatable process. Every deal runs on founder effort.",
  "I need to raise Series A in 6 months and my metrics aren't investor-ready.",
  "Our AI is live but it hasn't moved a single business number.",
  "I need a CMO, a CTO, and a CFO. I can only afford one.",
  "We are growing 3x but losing money on every order. Unit economics are broken.",
  "Our FinTech product is live but compliance is still a black box for us.",
  "My founding team can't run a 50-person company. The org is starting to break.",
];

const steps = [
  { number: '01', title: 'Discover', description: 'Understand your business, market, and the real problem. Not the symptom.' },
  { number: '02', title: 'Diagnose', description: '30-day Venture Sprint: hands-on diagnosis of what\'s blocking scale.' },
  { number: '03', title: 'Plan', description: 'Tailored execution roadmap with milestones, owners, timelines, and capital triggers.' },
  { number: '04', title: 'Embed', description: 'Operator(s) go in, not as advisors but as your team. Accountable, not adjacent.' },
  { number: '05', title: 'Execute', description: 'Measurable work done week by week, with clear accountability and output metrics.' },
  { number: '06', title: 'Scale', description: 'Milestone-linked capital + Series A preparation. Growth that compounds.' },
];

const engagements = [
  {
    name: 'Venture Sprint',
    duration: '30 days',
    model: 'Fixed scope & Cost',
    description: "A focused 30-day sprint to diagnose what's blocking you and build an execution roadmap.",
    bullets: ['Problem diagnosis', 'Capability mapping', '90-day execution plan', 'Operator assignment'],
    bestFor: 'Founders who need clarity before committing capital.',
    commercial: 'Fixed fee.',
    cta: 'Start a Sprint',
    featured: false,
  },
  {
    name: 'Partnership',
    duration: '1-3 years',
    model: 'Embedded co-ownership',
    description: 'An operator joins your team: embedded, accountable, and aligned on outcomes through equity.',
    bullets: ['Full execution ownership', 'Weekly operating cadence', 'Series A preparation'],
    bestFor: 'Ventures at ₹1 Cr–₹20 Cr ARR ready to scale.',
    commercial: 'Equity-linked + execution fee.',
    cta: 'Explore Partnership',
    featured: true,
  },
  {
    name: 'Fractional CXO',
    duration: 'On demand',
    model: 'Custom design',
    description: 'A fractional CXO who operates as part of your leadership team.',
    bullets: ['Functional gap coverage', 'Team building and systems', 'Transition planning', 'Strategy and execution'],
    bestFor: 'Companies that need executive depth without full-time cost.',
    commercial: 'Retainer.',
    cta: 'Get a Fractional CXO',
    featured: false,
  },
];

const stats = [
  { display: '6', label: 'Sectors covered' },
  { display: '30', label: 'days to your roadmap' },
  { display: '3', label: 'Engagement models' },
  { display: '₹100+ Cr', label: 'ARR built by our operators' },
];

function StatItem({ display, label, delay }: { display: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl font-display font-bold text-brand md:text-5xl lg:text-6xl">{display}</div>
      <p className="mt-2 text-sm font-light text-warm-white/60">{label}</p>
    </motion.div>
  );
}

export default function CapabilitiesPage() {
  return (
    <div className="font-sans">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-warm-white px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-2/5 bg-brand/5 [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand"
          >
            The Operator Platform
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-3xl text-4xl font-display font-medium tracking-tight text-navy md:text-6xl lg:text-7xl"
          >
            What Maxinor can{' '}
            <span className="text-brand">specifically</span> do for you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-xl text-base font-light leading-relaxed text-grey md:text-lg"
          >
            Not advisory. Not a deck. Embedded operator capability built around your problem, with milestone accountability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link href="#capabilities" className={primaryBtn}>
              See Capabilities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#how-we-work" className={outlineBtn}>
              How we engage
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 6 Capability Blocks ── */}
      <section id="capabilities" className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Where Maxinor Adds Value</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Our operator capabilities.{' '}
              <span className="text-brand">One accountable team.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 origin-left md:mb-20"
          >
            <div className="overflow-hidden rounded-2xl">
              {/* Group labels */}
              <div className="grid grid-cols-7 bg-navy/95">
                <Link href="/build" className="col-span-3 border-r-2 border-white/20 py-2.5 text-center transition-colors hover:bg-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand/80 hover:text-brand">Build</span>
                </Link>
                <Link href="/scale" className="col-span-3 border-r-2 border-white/20 py-2.5 text-center transition-colors hover:bg-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand/80 hover:text-brand">Scale</span>
                </Link>
                <Link href="/investment" className="col-span-1 py-2.5 text-center transition-colors hover:bg-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand/80 hover:text-brand">Invest</span>
                </Link>
              </div>
              {/* Items bar */}
              <div className="flex">
                {[
                  { label: 'Ideation',   shade: 'bg-brand',     divider: false },
                  { label: 'Strategy',   shade: 'bg-brand',     divider: false },
                  { label: 'Product',    shade: 'bg-brand',     divider: true  },
                  { label: 'GTM',        shade: 'bg-brand/80',  divider: false },
                  { label: 'Operations', shade: 'bg-brand/80',  divider: false },
                  { label: 'Revenue',    shade: 'bg-brand/80',  divider: true  },
                  { label: 'Capital',    shade: 'bg-brand/60',  divider: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex-1 px-1 py-4 text-center ${item.shade} ${item.divider ? 'border-r-2 border-white/30' : 'border-r border-white/10 last:border-r-0'}`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-2 text-center text-xs font-light text-grey/50">
              Operator capabilities across the full venture lifecycle
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-[2rem] border border-grey/20 bg-white p-8 transition-all duration-500 hover:border-brand/30 hover:shadow-lg"
              >
                <span className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-display font-bold leading-none text-brand/6">
                  {cap.number}
                </span>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">{cap.category}</p>
                <h3 className="mb-3 text-lg font-display font-semibold text-navy leading-snug md:text-xl">
                  {cap.title}
                </h3>
                <p className="mb-5 text-sm font-light leading-relaxed text-grey">{cap.description}</p>
                <ul className="mb-6 space-y-2.5">
                  {cap.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-grey">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-grey/12 pt-4 flex items-center justify-between">
                  <p className="text-xs text-grey/60">
                    {cap.operatorLinks.map((op, idx) => (
                      <span key={op.slug}>
                        <Link
                          href={`/team/${op.slug}`}
                          className="font-semibold text-navy transition-colors hover:text-brand"
                        >
                          {op.name}
                        </Link>
                        {idx < cap.operatorLinks.length - 2 ? ', ' : idx === cap.operatorLinks.length - 2 ? ' & ' : ''}
                      </span>
                    ))}
                    {' '}· {cap.operatorBg}
                  </p>
                  <Link
                    href={cap.path}
                    className="ml-4 shrink-0 text-xs font-semibold text-brand transition-transform group-hover:translate-x-1"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems (navy) ── */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">What Brings Founders to Us</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              You have traction.{' '}
              <span className="text-brand">Here is where scaling gets hard.</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-300 hover:border-brand/30 hover:bg-white/8"
              >
                <span className="mt-0.5 shrink-0 text-sm font-bold text-brand/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base font-light leading-relaxed text-warm-white/85">
                  &ldquo;{p}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-base font-light text-warm-white/60">
              If any of these sound familiar, you&apos;re in the right place.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How We Work — 6 steps ── */}
      <section id="how-we-work" className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">How Capability Becomes Delivery</p>
            <h2 className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              How we actually work.
            </h2>
            <p className="mx-auto max-w-xl text-base font-light text-grey md:text-lg">
              Not a proposal. Not a retainer. A structured operating model with milestone accountability.
            </p>
          </div>

          {/* Desktop: horizontal steps with connector line */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-grey/20 to-transparent" />
              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand/25 bg-warm-white shadow-[0_0_20px_rgba(243,111,33,0.08)]">
                      <span className="text-lg font-display font-bold text-brand">{step.number}</span>
                    </div>
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-navy">{step.title}</h3>
                    <p className="text-xs font-light leading-relaxed text-grey">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical steps */}
          <div className="lg:hidden space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-brand/15" />
                )}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand/25 bg-warm-white">
                  <span className="text-sm font-display font-bold text-brand">{step.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-navy">{step.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-grey">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Operator platform visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 rounded-[2rem] bg-navy px-8 py-10 text-center md:px-14 md:py-14"
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Operator Platform</p>
            <h3 className="mb-2 text-xl font-display font-medium text-warm-white md:text-2xl">
              One accountable operator team. Multiple capability domains.
            </h3>
            <p className="mb-8 text-sm font-light text-warm-white/50">Your business in the centre.</p>
            <div className="mb-6 flex flex-wrap justify-center gap-3">
              {['AI & Tech', 'People & Org', 'Revenue', 'Product', 'Brand & D2C'].map((cap) => (
                <span key={cap} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-warm-white/80">
                  {cap}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 text-brand/60 mb-4">
              <div className="h-px w-16 bg-brand/30" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand/60">feeds into</span>
              <div className="h-px w-16 bg-brand/30" />
            </div>
            <div className="inline-flex items-center justify-center rounded-full border-2 border-brand/40 bg-brand/10 px-8 py-3 text-base font-semibold text-warm-white">
              Your Business Outcome
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-navy px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <StatItem key={s.label} display={s.display} label={s.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-warm-white px-6 py-20 md:py-28">
        <div className="absolute left-0 right-0 top-0 h-1 bg-brand" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Let&apos;s Talk</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Not sure which capability fits your stage?
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-grey md:text-lg">
              We&apos;ll spend 30 minutes with you. No pitch deck. No NDAs. Just an honest conversation about what
              you&apos;re building and where we might fit.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <p className="mt-5 text-sm text-grey/50">We respond to every inquiry within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
