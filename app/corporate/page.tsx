'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRight,
  Theater,
  GitBranch,
  BrainCircuit,
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
    icon: Theater,
    number: '01',
    title: 'The Innovation Theatre Problem',
    body: 'Most corporate innovation is designed to produce announcements, not products. Accelerator programmes that never deploy capital. Hackathons with no follow-through. Labs that report to a function nobody cares about. The gap is not ideas. It is execution accountability and operator-level seriousness.',
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'The Build vs Buy Dilemma',
    body: 'Building internal takes too long. Acquiring is expensive and integration kills the value. Partnering with startups is hit and miss. The operator model offers a fourth option: co-build with embedded experts who are accountable to outcomes, not programmes.',
  },
  {
    icon: BrainCircuit,
    number: '03',
    title: 'The AI Adoption Gap',
    body: 'Every large corporate has an AI strategy. Few have an AI system producing real business outcomes. The distance between strategy and reality is almost always the same: wrong use cases, wrong tools, and no operator with actual AI deployment experience making the technical calls.',
  },
];

const engagementModels = [
  {
    number: '01',
    title: 'Corporate Accelerators',
    body: 'Design and run bespoke accelerator programmes aligned to your strategic goals. Source and evaluate startups solving your specific business problems. Run structured pilots with commercial intent. Deploy capital into winners with clear integration pathways.',
  },
  {
    number: '02',
    title: 'Venture Building and Spin-offs',
    body: 'Co-create new ventures using your corporate assets, IP, distribution, or market access. Maxinor brings the operator execution, technology infrastructure, and founding team assembly. You provide the strategic resource. Together we build a new business unit or spin-off.',
  },
  {
    number: '03',
    title: 'AI Transformation',
    body: 'AI strategy and use-case prioritisation aligned to business outcomes. End-to-end AI build and deployment with embedded operators. Agentic workflow automation that reduces headcount dependency. AI Centre of Excellence design and talent development.',
  },
];

const steps = [
  {
    number: '01',
    phase: 'Strategic Alignment',
    detail:
      'We start with your innovation priorities, not a generic programme template. What business problem are we solving? What does success look like in 12 months? What assets can corporate contribute?',
  },
  {
    number: '02',
    phase: 'Programme Design',
    detail:
      'We design the engagement model around your goals: accelerator, venture build, AI transformation, or a combination. Every programme has defined milestones, owner accountability, and commercial outcomes.',
  },
  {
    number: '03',
    phase: 'Embedded Execution',
    detail:
      'Maxinor operators embed inside the corporate programme team. We run the process, evaluate startups or co-build ventures, and stay accountable to outcomes rather than activities.',
  },
  {
    number: '04',
    phase: 'Commercial Outcome',
    detail:
      'Pilot integrations with portfolio startups, new venture launches, or deployed AI systems with measurable business impact. We measure against business metrics, not programme metrics.',
  },
];

const partners = [
  {
    name: 'Hygriv',
    url: 'https://www.hygriv.com/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png',
  },
  {
    name: 'Saptharushi',
    url: 'https://saptharushi.com/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg',
  },
  {
    name: 'iAccel GBI',
    url: 'https://iaccelgbi.com/',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4e70f6eb738b4cf11a6c00_logo-removebg.avif',
  },
];

const faqs = [
  {
    q: 'Do you work with Indian corporates or only MNCs?',
    a: 'Both. We work with large Indian conglomerates, family-run businesses at scale, and the India arms of global MNCs. The engagement model adapts to the organisational structure and decision-making style of each.',
  },
  {
    q: 'How is a Maxinor accelerator different from a standard corporate accelerator?',
    a: 'Most corporate accelerators are designed to produce PR. Ours are designed to produce pilots and commercial outcomes. Every startup in the programme has a defined corporate champion, a commercial problem statement, and a 90-day pilot objective.',
  },
  {
    q: 'What does venture building with Maxinor look like commercially?',
    a: 'We structure as a co-founder arrangement. The corporate contributes the assets, distribution, and strategic capital. Maxinor contributes the operator execution and technology build. Equity is split to reflect the contribution of each party.',
  },
  {
    q: 'We already have an in-house AI team. How does Maxinor add value?',
    a: 'We complement in-house teams rather than competing with them. Typically we bring the business-side operator judgment and use-case prioritisation that pure engineering teams struggle with, plus the execution speed that large internal teams cannot match.',
  },
  {
    q: 'How long does a typical corporate engagement run?',
    a: 'Our accelerator programmes run in 4 to 6 month cohorts. Venture building engagements run 6 to 12 months to first commercial milestone. AI transformation engagements range from 90-day pilots to 12-month full transformation programmes.',
  },
];

/* ─── FAQ Accordion ─── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-grey/10 overflow-hidden rounded-[2rem] border border-grey/15 bg-white">
      {faqs.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-warm-white/40"
          >
            <span className="text-base font-semibold text-navy">{item.q}</span>
            <span className="shrink-0 text-brand">
              {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
export default function CorporatePage() {
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
            For Corporates
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Large companies move slow.{' '}
            <span className="text-brand">We help you move fast without breaking what works.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Corporates have assets that startups cannot buy: distribution, brand, regulatory standing, and
            institutional trust. What they often lack is startup-speed execution, AI-native thinking, and the
            operator depth to build new revenue streams quickly. Maxinor bridges that gap.
          </motion.p>
          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Corporate Innovation', 'Venture Building', 'AI Transformation'].map((chip) => (
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
              Partner with Maxinor <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/capabilities" className={ghostBtn}>
              See our capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Corporate Problem ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Problem</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Why innovation programmes fail inside large companies.
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

      {/* ── Section 3: What Maxinor Does for Corporates ── */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Engagement Models</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three engagement models for corporate partners.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-[2rem] border border-grey/15 bg-warm-white p-8"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {model.number}
                </span>
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-4 text-xl font-display font-semibold text-navy">{model.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{model.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-28 border-t border-white/5">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">How It Works</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
              Operator-led. Outcome-accountable.
            </h2>
          </motion.div>

          {/* Desktop: horizontal steps */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col px-6 first:pl-0 last:pr-0"
              >
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-5 h-px w-1/2 translate-x-full bg-white/10" />
                )}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-xs font-bold text-brand">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
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
                  <h3 className="mb-2 text-base font-display font-semibold text-warm-white">{step.phase}</h3>
                  <p className="text-sm font-light leading-relaxed text-warm-white/50">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Partners and Ventures ── */}
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
              Partners and ventures.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {partners.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
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
                    src={partner.logo}
                    alt={partner.name}
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
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Partner With Us</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Corporates that innovate with operators, not just advisors, move faster.
            </h2>
            <p className="mb-10 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              The conversation starts with your innovation priorities and the business outcomes you need. We will
              tell you which engagement model fits best and what a 12-month success looks like.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start a partnership conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
