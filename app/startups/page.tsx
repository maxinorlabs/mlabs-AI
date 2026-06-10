'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

// ─── Shared button styles ─────────────────────────────────────────────────────

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

// ─── Data ─────────────────────────────────────────────────────────────────────

const scenarios = [
  {
    number: '01',
    title: 'You have product-market fit but growth has stalled',
    body: 'You have customers. Revenue is real. But the path from Rs 1 Cr to Rs 10 Cr looks unclear. The founder-led sales motion is maxing out and you need an operator to build the machine.',
  },
  {
    number: '02',
    title: 'You have an idea in a sector where execution is everything',
    body: 'You have deep domain expertise and a validated white space. What you need is an operator co-creator who can build the product, the GTM, and the team alongside you from day one.',
  },
  {
    number: '03',
    title: 'You are 6 to 12 months from a Series A and your data room is not ready',
    body: 'Traction exists but the metrics are not clean, the unit economics story is not tight, and your operating model does not look like a Series A company yet.',
  },
];

const whatYouGet = [
  {
    title: 'Embedded Execution',
    body: 'A Maxinor operator joins your team and owns a function. They run your pipeline, manage your team, and are accountable to weekly milestones. They are in the room, not on a monthly call.',
  },
  {
    title: 'Cross-Domain Operator Network',
    body: 'Access to the full Maxinor operator network across GTM, AI and Tech, Talent and Org Design, Operations, FinTech, Healthcare, and D2C. One engagement gives you the depth of an entire executive team.',
  },
  {
    title: 'Milestone-Linked Capital',
    body: 'The best Venture Scale engagements evolve into investment relationships. Capital is deployed in tranches tied to execution outcomes, not time-based tranches that misalign incentives.',
  },
  {
    title: 'Series A Preparation',
    body: 'Clean metrics, a tight unit economics narrative, a data room that holds up to investor scrutiny, and introductions to investors who trust the Maxinor operator network.',
  },
];

const engagementModels = [
  {
    name: 'Discovery Sprint',
    duration: '30 days',
    description:
      'A focused diagnosis. We map your constraints, identify the 2-3 highest-leverage opportunities, and build a 90-day operator-led execution plan. Fixed fee. No equity. The right start if you need clarity before committing.',
  },
  {
    name: 'Partnership',
    duration: '6 months',
    description:
      'An operator embeds in your team. They own a function, run daily operations, and are accountable to milestones. Series A preparation is built into the engagement. Equity-linked plus execution fee.',
  },
  {
    name: 'Fractional CXO',
    duration: '6-12 months',
    description:
      'A fractional CMO, CTO, CFO, or CPO joins your leadership team. Builds the function. Hires the permanent leader. Retainer model. The right model when you need executive depth without full-time cost.',
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

const faqs = [
  {
    q: 'What stage do you work with?',
    a: 'From pre-product through to pre-Series A. For Venture Build we start from idea or early prototype. For Venture Scale we need product-market fit and some revenue, typically Rs 1 Cr to Rs 20 Cr ARR.',
  },
  {
    q: 'How is this different from joining an accelerator?',
    a: 'Accelerators give you a cohort, a programme, and a network. Maxinor gives you an operator who works with you daily, builds with you, and is accountable to the same milestones you are. There is no cohort, no demo day, and no 12-week curriculum.',
  },
  {
    q: 'Do I have to give up equity?',
    a: 'The Discovery Sprint is a fixed fee with no equity. The Partnership model involves a small equity stake aligned to execution milestones. We structure to minimise dilution while creating real alignment.',
  },
  {
    q: 'How do I know if an engagement is working?',
    a: 'We set measurable milestones at the start of every engagement. If we do not hit them, we diagnose why and adjust. Operators are accountable to outcomes, not hours.',
  },
  {
    q: 'Can Maxinor help me raise my next round?',
    a: 'Yes, but not as a placement agent. We prepare you for fundraising by fixing the metrics, the narrative, and the data room. Founders who raise through us raise because they are genuinely ready.',
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-grey/10 last:border-b-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left hover:bg-warm-white/40 transition-colors duration-200"
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
            <p className="px-8 pb-6 text-sm font-light leading-relaxed text-navy/60 md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StartupsPage() {
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
            For Startups
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            You have the idea.{' '}
            <span className="text-brand">We bring the operators who have done it before.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Maxinor works with founders from pre-product through to Series A. We do not advise. We embed.
            Our operators have built and scaled real businesses and they do that again with you, accountable
            to the same milestones you are.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Seed to Series A', 'Embedded Operators', 'Milestone Accountability'].map((chip) => (
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
              Pitch to Maxinor <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/scale" className={ghostBtn}>
              See how we scale
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Is Maxinor Right For You? ────────────────────────────── */}
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
              Is Maxinor Right For You?
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              We work best with founders who have a clear problem.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {scenarios.map((scenario, i) => (
              <motion.div
                key={scenario.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] border border-grey/15 bg-white p-8"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {scenario.number}
                </span>
                <div className="mb-5 h-0.5 w-8 bg-brand" />
                <h3 className="mb-3 text-lg font-display font-semibold text-navy">{scenario.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{scenario.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: What You Get ──────────────────────────────────────────── */}
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
              What You Get
            </p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Operators, not advisors.{' '}
              <span className="text-navy/50">Execution, not advice.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] border border-grey/15 bg-white p-8 transition-all duration-300 hover:border-brand/20 hover:shadow-sm md:p-10"
              >
                <div className="mb-5 h-0.5 w-8 bg-brand" />
                <h3 className="mb-3 text-xl font-display font-semibold text-navy md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-grey md:text-base">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: The Three Engagement Models ───────────────────────────── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-28">
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
              Three ways to start.
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

      {/* ── Section 5: Portfolio Companies ───────────────────────────────────── */}
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
              Startups we have built and scaled.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
                className="group relative flex h-20 w-36 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 transition-all duration-300 hover:border-brand/25 hover:shadow-md sm:h-24 sm:w-44"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-90"
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

          <div className="divide-y divide-grey/10 overflow-hidden rounded-[2rem] border border-grey/15 bg-white">
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
              The best founders work with operators, not just advisors.
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/55 md:text-lg">
              Tell us about your startup. Where you are, where you are trying to go, and what is blocking
              you. We will tell you if there is a fit.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Pitch to Maxinor <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
