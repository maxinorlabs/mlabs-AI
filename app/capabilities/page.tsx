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
    category: 'Revenue & Growth',
    title: 'Go-To-Market Execution Engine',
    description:
      "Building revenue machines — not revenue plans. From acquisition to retention to expansion.",
    deliverables: [
      'GTM strategy + channel buildout from 0',
      'Sales process design and pipeline execution',
      'Revenue operations and growth analytics',
    ],
    operator: 'Samir Gupta',
    operatorBg: 'ex-Paytm, ex-Solv',
  },
  {
    number: '02',
    category: 'Product & Customer Experience',
    title: 'Product-Led Growth & CX Design',
    description:
      "Products that people actually use. Built by someone who's shipped for tens of millions of users before.",
    deliverables: [
      'Product roadmap prioritisation and sprint planning',
      'UX audit and customer journey redesign',
      'CX systems that reduce churn and drive NPS',
    ],
    operator: 'Amar Daing',
    operatorBg: 'ex-Google×Tata, ex-OYO, ex-Grofers',
  },
  {
    number: '03',
    category: 'AI & Technology Build',
    title: 'AI Product Engineering & Tech Architecture',
    description:
      'From AI strategy to working system. No pilots that never ship. No tech debt that kills scale.',
    deliverables: [
      'AI product scoping, architecture, and MVP',
      'Agentic automation and workflow AI',
      'Data platform and AI-readiness buildout',
    ],
    operator: 'Alok Kumar',
    operatorBg: 'ex-Zee, ex-Oracle, ex-StanChart',
  },
  {
    number: '04',
    category: 'FinTech & Financial Operations',
    title: 'Financial Product, Risk & Compliance Execution',
    description:
      "FinTech products that survive regulatory scrutiny and user reality — built by someone who's been on both sides.",
    deliverables: [
      'FinTech product and platform architecture',
      'Banking, insurance, and lending transformation',
      'AI-led compliance and risk operations',
    ],
    operator: 'Rajesh Ramanathan',
    operatorBg: 'ex-Accenture, ex-Wipro, ex-Mastek',
  },
  {
    number: '05',
    category: 'People & Org Building',
    title: 'Talent, Culture & Organisational Design',
    description:
      'Scaling a company means scaling your people. Most founders figure this out 12 months too late.',
    deliverables: [
      'Org design for Series A and beyond',
      'Hiring systems, culture design, and leadership onboarding',
      'Performance frameworks for operator-led teams',
    ],
    operator: 'Parool Duggal',
    operatorBg: 'ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
  },
  {
    number: '06',
    category: 'Consumer & Brand Marketing',
    title: 'Consumer Marketing & D2C Growth',
    description:
      "Brand-building that moves product, not just impressions — from someone who's built at ITC scale.",
    deliverables: [
      'Consumer brand strategy and positioning',
      'D2C content, performance, and offline marketing',
      'Category creation for early-stage consumer brands',
    ],
    operator: 'Priyabrata Padhi',
    operatorBg: 'ex-ITC, ex-Britannia, ex-Unitech',
  },
];

const problems = [
  "I've built a product. I have no idea how to sell it.",
  "My ARR is stuck. I've been at ₹3 Cr for 8 months.",
  "I need to raise Series A in 6 months and I'm not ready.",
  "My AI pilot is working in a lab. It's not deployed anywhere.",
  "I need a CTO / CMO / CFO but can't afford full-time.",
  "I'm scaling D2C but losing money on every order.",
  "I want to build in FinTech but don't know the regulatory landscape.",
  "I need to go from 0 to revenue in 90 days.",
];

const steps = [
  { number: '01', title: 'Discover', description: 'Understand your business, market, and the real problem — not the symptom.' },
  { number: '02', title: 'Diagnose', description: '30-day Venture Sprint — hands-on diagnosis of what\'s blocking scale.' },
  { number: '03', title: 'Plan', description: 'Tailored execution roadmap with milestones, owners, timelines, and capital triggers.' },
  { number: '04', title: 'Embed', description: 'Operator(s) go in — not as advisors but as your team. Accountable, not adjacent.' },
  { number: '05', title: 'Execute', description: 'Measurable work done week by week, with clear accountability and output metrics.' },
  { number: '06', title: 'Scale', description: 'Milestone-linked capital + Series A preparation. Growth that compounds.' },
];

const engagements = [
  {
    name: 'Venture Sprint',
    duration: '30 days',
    model: 'Fixed scope · Fast',
    description: "A focused 30-day sprint to diagnose what's blocking you and build an execution roadmap.",
    bullets: ['Problem diagnosis', 'Capability mapping', '90-day execution plan', 'Operator assignment'],
    bestFor: 'Founders who need clarity before committing capital.',
    commercial: 'Fixed fee.',
    cta: 'Start a Sprint',
    featured: false,
  },
  {
    name: 'Venture Partner',
    duration: '6 months',
    model: 'Embedded · Equity + execution',
    description: 'An operator joins your team — embedded, accountable, and aligned on outcomes through equity.',
    bullets: ['Full execution ownership', 'Weekly operating cadence', 'Capital milestone tracking', 'Series A preparation'],
    bestFor: 'Startups at ₹1–20 Cr ARR ready to scale.',
    commercial: 'Equity-linked + execution fee.',
    cta: 'Explore Partnership',
    featured: true,
  },
  {
    name: 'Venture CXO',
    duration: '6–12 months',
    model: 'Fractional · C-level',
    description: 'A fractional CXO who operates as part of your leadership team — CMO, CTO, CFO, or CPO.',
    bullets: ['Functional gap coverage', 'Team building and systems', 'Transition planning', 'Hiring the permanent hire'],
    bestFor: 'Companies that need executive depth without full-time cost.',
    commercial: 'Retainer.',
    cta: 'Get a Fractional CXO',
    featured: false,
  },
];

const stats = [
  { display: '6', label: 'Domains covered' },
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
            Not advisory. Not a deck. Embedded operator capability built around your problem — with milestone accountability.
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
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Where Maxinor Adds Value</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Six operator capabilities.{' '}
              <span className="text-brand">One accountable team.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="border-t border-grey/12 pt-4">
                  <p className="text-xs text-grey/60">
                    <span className="font-semibold text-navy">{cap.operator}</span> · {cap.operatorBg}
                  </p>
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
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">What Clients Engage Us For</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Founders don&apos;t come with service categories.{' '}
              <span className="text-brand">They come with problems.</span>
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
              {['Revenue', 'Product', 'AI & Tech', 'FinTech', 'People', 'Marketing'].map((cap) => (
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

      {/* ── Engagement Models ── */}
      <section id="engage" className="bg-[#EDE7DC] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Pick Your Entry Point</p>
            <h2 className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Start where you are.
            </h2>
            <p className="mx-auto max-w-xl text-base font-light text-grey md:text-lg">
              Three engagement models so you can begin at the right stage — not where a consultant thinks you should be.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {engagements.map((eng, i) => (
              <motion.div
                key={eng.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] border bg-white p-8 transition-all duration-500 hover:shadow-xl md:p-10 ${
                  eng.featured
                    ? 'border-brand border-t-4 shadow-[0_0_50px_rgba(243,111,33,0.1)]'
                    : 'border-grey/20 hover:border-brand/30'
                }`}
              >
                {eng.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
                    Most Popular
                  </div>
                )}
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">{eng.duration}</p>
                <h3 className="mb-1 text-2xl font-display font-semibold text-navy">{eng.name}</h3>
                <p className="mb-4 text-sm text-grey/60">{eng.model}</p>
                <p className="mb-6 text-sm font-light leading-relaxed text-grey">{eng.description}</p>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {eng.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-grey">
                      <span className="mt-0.5 text-brand">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mb-6 rounded-2xl bg-warm-white px-4 py-3.5 space-y-1">
                  <p className="text-xs text-grey/70">
                    <span className="font-semibold text-navy">Best for:</span> {eng.bestFor}
                  </p>
                  <p className="text-xs text-grey/70">
                    <span className="font-semibold text-navy">Model:</span> {eng.commercial}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className={`inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    eng.featured
                      ? 'bg-brand text-white hover:bg-brand/90 shadow-[0_0_30px_rgba(243,111,33,0.2)]'
                      : 'border border-grey/25 text-navy hover:border-brand hover:text-brand'
                  }`}
                >
                  {eng.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operator Network / Partners ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Operator Network</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              When your problem needs depth we don&apos;t have in-house, we already know who does.
            </h2>
            <p className="max-w-xl text-base font-light text-grey">
              Partner slots are selective — we only bring in operators we&apos;ve personally worked with.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                category: 'D2C & Consumer Data',
                partner: 'Saptharushi',
                description:
                  'Audience-as-a-Service — audience segmentation, data enrichment, and retail analytics for ₹10–100 Cr D2C brands.',
                url: 'https://saptharushi.com/',
                image:
                  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg',
                tags: ['D2C', 'Consumer brands', 'Audience targeting'],
                coming: false,
              },
              {
                category: 'Tech Infrastructure',
                partner: 'Hygriv',
                description:
                  'Climate-tech, cooling infrastructure, and enterprise tech backbone for scaling startups and AI workloads.',
                url: 'https://www.hygriv.com/',
                image:
                  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png',
                tags: ['AI & Data', 'Enterprise tech', 'Infrastructure'],
                coming: false,
              },
              {
                category: 'FinTech Data & AI',
                partner: 'Coming Q3 2026',
                description:
                  "Partner selection in progress. We're identifying the right operator for FinTech data and compliance workflows.",
                url: null,
                image: null,
                tags: ['FinTech', 'Compliance', 'Risk ops'],
                coming: true,
              },
              {
                category: 'Healthcare Tech',
                partner: 'Coming Q3 2026',
                description:
                  'Clinical workflow and health data specialist being onboarded. Selective process — timeline Q3 2026.',
                url: null,
                image: null,
                tags: ['Healthcare', 'Clinical AI', 'Health SaaS'],
                coming: true,
              },
            ].map((p, i) => (
              <motion.div
                key={p.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-[2rem] border p-6 md:p-8 ${
                  p.coming
                    ? 'border-dashed border-grey/25 bg-white/40'
                    : 'border-grey/20 bg-white'
                }`}
              >
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">{p.category}</p>
                <div className="mb-3 flex items-center gap-3">
                  {p.image && (
                    <div className="relative h-7 w-20 shrink-0">
                      <Image
                        src={p.image}
                        alt={p.partner}
                        fill
                        className="object-contain object-left"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <h3
                    className={`text-lg font-display font-semibold ${
                      p.coming ? 'text-grey/40' : 'text-navy'
                    }`}
                  >
                    {p.partner}
                  </h3>
                </div>
                <p className="mb-4 text-sm font-light leading-relaxed text-grey">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        p.coming ? 'bg-grey/8 text-grey/50' : 'bg-brand/8 text-brand'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              Book a free 30-min call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <p className="mt-5 text-sm text-grey/50">We respond to every inquiry within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
