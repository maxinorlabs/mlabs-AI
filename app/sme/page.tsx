'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

// ─── Shared button styles ────────────────────────────────────────────────────

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

// ─── Data ────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    number: '01',
    title: 'Speed vs Stability',
    body: 'SMEs are built on relationships, trust, and domain expertise accumulated over decades. Venture move fast and break things. The challenge is acquiring startup-level execution speed without breaking what makes the SME valuable: client trust, operational discipline, and institutional knowledge.',
  },
  {
    number: '02',
    title: 'The Digital Infrastructure Gap',
    body: 'Most Indian SMEs run on Excel, WhatsApp, and informal relationships. This works at ₹5 Cr revenue. It becomes a ceiling at ₹20 Cr. Without the right data infrastructure, CRM, and operational systems, growth creates chaos rather than compounding.',
  },
  {
    number: '03',
    title: 'The Talent Access Problem',
    body: 'Attracting senior talent is hard for SMEs. The perception gap is real. A 200-person SME with ₹30 Cr revenue cannot easily hire a strong CMO or COO. Fractional operator access changes this calculus entirely.',
  },
];

const services = [
  {
    accent: 'brand',
    badge: 'bg-brand/10 text-brand',
    dot: 'bg-brand',
    title: 'GTM and Revenue Growth',
    items: [
      'Sales playbook design and pipeline systems',
      'Performance and brand marketing buildout',
      'Distribution channel expansion',
      'Pricing architecture and margin improvement',
      'Customer acquisition and retention frameworks',
      'B2B and B2C go-to-market strategy',
    ],
  },
  {
    accent: 'indigo',
    badge: 'bg-indigo-50 text-indigo-600',
    dot: 'bg-indigo-400',
    title: 'Digital Transformation and AI',
    items: [
      'Legacy system modernisation',
      'CRM and operational infrastructure',
      'AI-powered workflow automation',
      'Data infrastructure and analytics',
      'ERP and supply chain digitalisation',
      'AI use-case identification and deployment',
    ],
  },
  {
    accent: 'teal',
    badge: 'bg-teal-50 text-teal-600',
    dot: 'bg-teal-500',
    title: 'Talent as a Service',
    items: [
      'Fractional CXO access without full-time cost',
      'Key leadership hiring and onboarding',
      'Org design for the next growth stage',
      'Performance frameworks and accountability systems',
      'ESOP and compensation design',
      'Culture building for scaling teams',
    ],
  },
  {
    accent: 'purple',
    badge: 'bg-purple-50 text-purple-600',
    dot: 'bg-purple-400',
    title: 'Operations and Risk',
    items: [
      'Supply chain and vendor optimisation',
      'Financial operations and cost discipline',
      'Compliance and regulatory frameworks',
      'Risk identification and mitigation',
      'Process design and workflow standardisation',
      'Reporting infrastructure and dashboards',
    ],
  },
];

const stages = [
  {
    range: '₹0 Cr–₹10 Cr',
    focus: 'Operational infrastructure and first repeatable sales motion.',
    body: 'Establishing systems, hiring the first real team, and building the foundation for growth.',
  },
  {
    range: '₹10 Cr–₹50 Cr',
    focus: 'GTM, talent, and digital transformation.',
    body: 'Breaking through the plateau, competing with better-funded Venture, and building the management depth to run without the founder in every room.',
  },
  {
    range: '₹50 Cr–₹100 Cr and Beyond',
    focus: 'AI, operations excellence, and market expansion.',
    body: 'Preparing for institutional capital, building a board-ready company, and unlocking the next stage of scale.',
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
];

const portfolioLogos = [
  {
    name: 'Nattier',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png',
    url: 'https://nattier.co.in/',
  },
  {
    name: 'Adaapt',
    src: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg',
    url: 'https://www.adaapt.ai/',
  },
];

const faqs = [
  {
    q: 'Is Maxinor only for Venture or do you work with traditional businesses too?',
    a: 'We work with both. SMEs are actually often better positioned than Venture: you have real revenue, real customers, and real operations. The challenge is adding the execution speed and digital infrastructure that Venture are built around.',
  },
  {
    q: 'We are profitable. Why do we need Maxinor?',
    a: 'Profitability at ₹10 Cr does not mean efficiency. Most profitable SMEs are leaving significant revenue on the table through underperforming channels, poor pricing architecture, and slow adoption of tools that would reduce cost and increase margin.',
  },
  {
    q: 'How is fractional CXO access different from hiring a consultant?',
    a: 'A consultant delivers a report. A fractional CXO operates as part of your leadership team. They manage people, run meetings, own KPIs, and are accountable to the same outcomes you are. It costs a fraction of a full-time hire.',
  },
  {
    q: 'Do you work across India or only in metros?',
    a: 'We work across India. Many of our SME engagements are with businesses in Tier 2 and Tier 3 cities who need operator-level expertise that is not locally available.',
  },
  {
    q: 'What does the engagement look like practically?',
    a: 'It starts with a 30-day diagnosis that maps your business, identifies the 2-3 highest-leverage opportunities, and assigns the right operator. From there, it is a 6 to 12 month embedded engagement with clear milestones and measurable outcomes.',
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-grey/10 rounded-[2rem] border border-grey/15 bg-white overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-warm-white/40"
          >
            <span className="text-base font-semibold text-navy">{faq.q}</span>
            <span className="shrink-0 text-brand">
              {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="px-8 pb-6 text-sm font-light leading-relaxed text-grey">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SMEPage() {
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
            For SMEs
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            You built a real business.{' '}
            <span className="text-brand">Now let&apos;s make it compete like a startup.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Indian SMEs generate 30% of GDP and employ 110 million people. Most have products, customers,
            and cash flow that most Venture would die for. What they lack is execution speed, digital
            infrastructure, and the operator depth to compete in a world moving fast.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Operator-Led', 'AI-Native', '₹0 Cr–₹100 Cr Revenue'].map((chip) => (
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
              Talk to an operator <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/scale" className={ghostBtn}>
              See how we scale
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The SME Problem ───────────────────────────────────────── */}
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
              The SME Problem
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              The three things holding most Indian SMEs back.
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

      {/* ── Section 3: What Maxinor Does ─────────────────────────────────────── */}
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
              What We Do
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Four ways we make SMEs compete.
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] border border-grey/15 bg-white p-8 transition-all duration-300 hover:border-brand/20 hover:shadow-sm md:p-10"
              >
                <div className={`mb-5 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${svc.badge}`}>
                  0{i + 1}
                </div>
                <h3 className="mb-5 text-xl font-display font-semibold text-navy md:text-2xl">
                  {svc.title}
                </h3>
                <ul className="space-y-3">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-navy/60 md:text-base"
                    >
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${svc.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Who This Is For ───────────────────────────────────────── */}
      <section className="bg-navy px-6 py-20 md:py-28">
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
              Who This Is For
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl lg:text-5xl">
              Maxinor works with SMEs at every stage of growth.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.range}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:bg-white/8 md:p-10"
              >
                <span className="mb-4 inline-block self-start rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand">
                  {stage.range}
                </span>
                <p className="mb-3 flex-1 text-sm font-light leading-relaxed text-warm-white/55 md:text-base">
                  {stage.body}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-warm-white/30">
                  Focus: {stage.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Companies and Partners ───────────────────────────────── */}
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
              Our Work
            </p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Businesses we have worked with.
            </h2>
          </motion.div>

          {/* Partner logos */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-navy/30"
          >
            Partners
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-6 md:gap-8"
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

          {/* Portfolio label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-navy/30"
          >
            Portfolio Companies
          </motion.p>

          {/* Portfolio logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
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
        </div>
      </section>

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

          <FaqAccordion />
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
              India&apos;s best SMEs are choosing operators over advisors.
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/55 md:text-lg">
              The conversation starts with understanding your business. Tell us about your revenue, your
              constraints, and where you are trying to go. We will tell you if there is a fit.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start a conversation <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
