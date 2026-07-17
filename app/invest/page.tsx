'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus, Minus, Landmark, Handshake } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    number: '01',
    title: 'The Information Asymmetry Problem',
    body: 'You see a 20-slide deck and a 30-minute pitch. The founder has been living in the business for two years. Without an operator inside the business before the term sheet, capital allocation is a bet on conviction, not evidence.',
  },
  {
    number: '02',
    title: 'The Post-Investment Execution Gap',
    body: 'Capital is easy. Execution after capital is where most early-stage investments fail. Investors find out 18 months later when the runway is gone and the business has not moved.',
  },
  {
    number: '03',
    title: 'The Deal Quality Problem',
    body: 'Whether it is a fresh investment or an acquisition, finding counterparties with real traction, real teams, and real operator depth is the hardest part -- and the part most diligence processes get wrong.',
  },
];

const engines = [
  {
    icon: Landmark,
    title: 'Venture Capital',
    href: '/capabilities/venture-capital',
    items: [
      'Operator-validated deal sourcing and diligence',
      'Milestone-linked capital structuring',
      'Post-investment operator support',
      'Portfolio governance and reporting',
      'Co-investment and syndicate access',
      'Follow-on strategy',
    ],
  },
  {
    icon: Handshake,
    title: 'M&A',
    href: '/capabilities/mergers-acquisitions',
    items: [
      'Buy-side and sell-side advisory',
      'Valuation and deal structuring',
      'Term sheet review and negotiation',
      'Due diligence coordination',
      'Post-merger integration planning',
      'Cap table and governance structuring',
    ],
  },
];

const investmentFormats = [
  {
    name: 'LP in the Maxinor Fund',
    duration: 'Fund lifecycle',
    description:
      'Participate in our core vehicle investing in pre-seed and seed stage startups across our portfolio. Quarterly reporting and annual LP meeting.',
  },
  {
    name: 'Syndicate and Co-Investment',
    duration: 'Per deal',
    description:
      'Direct co-invest alongside Maxinor in specific high-conviction deals. All co-invest opportunities are operator-validated and IC-approved before reaching the syndicate.',
  },
  {
    name: 'M&A Advisory',
    duration: '3-9 months',
    description:
      'Buy-side or sell-side advisory for founders and corporates navigating a transaction -- from valuation through to post-merger integration.',
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
    q: 'Is this Maxinor investing its own capital, or advising others who invest?',
    a: 'Both. Maxinor deploys capital directly into ventures we have operated inside, and we structure co-investment and syndicate opportunities for external investors who want the same operator-validated diligence.',
  },
  {
    q: 'How is this different from a traditional VC fund?',
    a: 'A traditional VC evaluates from the outside. We evaluate from the inside -- an operator has already been embedded in the business before the investment decision is made.',
  },
  {
    q: 'Do you also advise on M&A transactions?',
    a: 'Yes. Buy-side and sell-side advisory, valuation, term sheet negotiation, and post-merger integration -- run by operators who have sat on both sides of the table.',
  },
  {
    q: 'What stage and sectors do you focus on?',
    a: 'Primarily pre-seed to Series A for venture capital, across D2C, Media, Healthcare, Education, BFSI, and Defence Tech -- sectors where our operators have genuine domain depth. M&A engagements span a wider range of stages.',
  },
  {
    q: 'What is the typical holding period for investments?',
    a: 'We target exits in 4 to 7 years. Portfolio companies are typically preparing for Series A within 18 months of our investment and subsequent rounds within 3 to 4 years.',
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

export default function InvestPage() {
  return (
    <div className="font-sans">

      {/* ── Section 1: Hero ── */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-28 md:pt-44 md:pb-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand/3 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            Venture Invest
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Deal flow where we already know{' '}
            <span className="text-brand">the business works.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Maxinor deploys capital and structures transactions with something most deal flow does not have: an operator already inside the business. Venture Capital and M&A, backed by evidence, not just conviction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Operator-Validated', 'Co-Investment Access', 'M&A Advisory'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-warm-white/15 bg-warm-white/5 px-5 py-2 text-sm font-medium text-warm-white/80 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className={primaryBtn}>
              Join our investor network <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/scale" className={ghostBtn}>
              See Venture Scale
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Problem</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Why most capital decisions are flying blind.
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

      {/* ── Section 3: What You Get ── */}
      <section className="border-t border-grey/10 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What You Get</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Two engines.{' '}
              <span className="text-navy/50">One accountable team.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
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

      {/* ── Section 4: Investment Formats ── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-28">
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
              Three ways to work with us on capital.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {investmentFormats.map((model, i) => (
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

      {/* Section 5: Portfolio, hidden, set to true to re-enable */}
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Portfolio</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Companies in the Maxinor portfolio.
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
      )}

      {/* ── Section 6: FAQ ── */}
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
              The deal flow you have been looking for is inside the business, not on the pitch deck.
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/55 md:text-lg">
              Tell us about your investment mandate or transaction. We will tell you if there is a fit.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Join our investor network <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
