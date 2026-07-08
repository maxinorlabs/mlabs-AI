'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

/* ── Button helpers ─────────────────────────────────────────── */
const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

/* ── Data ───────────────────────────────────────────────────── */
const painPoints = [
  {
    number: '01',
    title: 'The Information Asymmetry Problem',
    body: 'VCs see curated decks and 30-minute pitches. They have no way to assess execution capacity, team depth, or operational reality. This leads to overvalued early rounds, misaligned expectations, and founders who raise capital before they are ready to deploy it.',
  },
  {
    number: '02',
    title: 'The Milestone Mismatch',
    body: 'Time-based capital tranches create perverse incentives. Founders spend money on schedule rather than on results. Milestones get negotiated rather than achieved. Maxinor links every tranche to real execution outcomes.',
  },
  {
    number: '03',
    title: 'The Advisory Vacuum',
    body: 'Most investors show up for board meetings and introductions. When operations break, when key people leave, when growth stalls, there is no operator in the room who can actually fix the problem. Capital without execution support is just pressure without relief.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Operator Engagement',
    body: 'Before capital enters the picture, a Maxinor operator works with the founding team. We see the business from the inside: real unit economics, real team capacity, real execution speed.',
  },
  {
    step: '02',
    title: 'Execution Validation',
    body: 'We review cohort data, CAC/LTV, burn rate, and 90-day milestone performance. The investment thesis is built on operational evidence, not projected numbers.',
  },
  {
    step: '03',
    title: 'Investment Committee',
    body: 'Our IC reviews operator notes, domain context, capital efficiency, and milestone roadmap. Approval happens within 2 weeks of IC submission.',
  },
  {
    step: '04',
    title: 'Capital and Continued Execution',
    body: 'Capital is released in tranches tied to milestones. The operator stays embedded, ensuring the investment compounds with execution.',
  },
];

const parameters = [
  {
    title: 'Investment Stage',
    body: 'Pre-seed, Seed, and Pre-Series A. Venture between ₹1 Cr–₹20 Cr ARR with clear product-market fit evidence.',
  },
  {
    title: 'Ticket Size',
    body: '₹25 Lakh to ₹3 Cr. Deployed in milestone-linked tranches. Staged deployment reduces founder dilution and maintains execution accountability.',
  },
  {
    title: 'Sectors',
    body: 'D2C, Media, Healthcare, Education, BFSI, AI-native platforms, and Defence Tech. We back sectors where our operators have domain depth.',
  },
  {
    title: 'Capital Structure',
    body: 'Equity with milestone-linked tranches. SAFE notes for pre-revenue. Convertible structures for bridge rounds. Co-invest available for HNIs and family offices.',
  },
];

const portfolioCompanies = [
  {
    name: 'IZF',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png',
    url: 'https://izfworld.com/',
  },
  {
    name: 'Nattier',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png',
    url: 'https://nattier.co.in/',
  },
  {
    name: 'Kachs',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif',
    url: 'https://responcibleai.com/',
  },
  {
    name: 'Adaapt',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg',
    url: 'https://www.adaapt.ai/',
  },
  {
    name: 'Aseed',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png',
    url: 'https://aseedinternational.org/',
  },
];

const partners = [
  {
    name: 'Hygriv',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png',
    url: 'https://www.hygriv.com/',
  },
  {
    name: 'Saptharushi',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg',
    url: 'https://saptharushi.com/',
  },
  {
    name: 'iAccel GBI',
    logo: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4e70f6eb738b4cf11a6c00_logo-removebg.avif',
    url: 'https://iaccelgbi.com/',
  },
];

const faqs = [
  {
    q: 'Do I need to be a Maxinor portfolio company to raise?',
    a: 'Yes. We only invest in companies where we have had prior operator engagement. This ensures our conviction is real and our terms are genuinely founder-aligned.',
  },
  {
    q: 'How long does the investment process take?',
    a: 'From IC submission to term sheet is typically 2 weeks. From first operator engagement to investment decision is typically 2 to 4 months depending on engagement depth.',
  },
  {
    q: 'What is the typical equity stake?',
    a: 'Between 3% and 8% depending on the stage, ticket size, and depth of operator engagement. We structure to minimise dilution while maintaining alignment.',
  },
  {
    q: 'Can I raise from other investors alongside Maxinor?',
    a: 'Yes. We encourage founders to build a cap table with strategic angels and domain experts alongside Maxinor. We often help with introductions.',
  },
  {
    q: 'What happens if I miss a milestone?',
    a: 'We work with you to diagnose why and reset. Milestones are not trip wires. They are alignment tools. A missed milestone triggers an operator-led diagnostic, not a punitive clause.',
  },
];

/* ── FAQ Accordion ──────────────────────────────────────────── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-grey/15 rounded-[2rem] border border-grey/15 bg-white overflow-hidden">
      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-warm-white/60 md:px-10 md:py-7"
            aria-expanded={open === i}
          >
            <span className="text-base font-semibold text-navy md:text-lg">{item.q}</span>
            <span className="shrink-0 rounded-full border border-grey/20 p-1.5 text-navy/50 transition-colors">
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
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-8 pb-7 text-sm font-light leading-relaxed text-grey md:px-10 md:text-base">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function InvestmentPage() {
  return (
    <div className="font-sans">

      {/* ── Section 1: Hero ──────────────────────────────────── */}
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
        <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-teal/5 blur-[100px]" />
        {/* Gradient fade to next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            Venture Investment
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Capital that follows conviction.{' '}
            <span className="text-brand">Not pitch decks.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Maxinor does not write cheques based on slides. Every investment is preceded by operator engagement.
            We see the business from the inside before capital enters the room. That is why our conviction is real
            and our terms are founder-aligned.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Operator-Validated', 'Milestone-Linked', 'Pre-seed to Pre-Series A'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-warm-white/15 bg-warm-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-warm-white/70 backdrop-blur-sm md:px-5 md:py-2.5 md:text-sm"
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
              Apply for Investment <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/scale" className={ghostBtn}>
              Start with Venture Scale
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Investment Problem ────────────────── */}
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
              Traditional VC is broken for most Indian founders.
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
                <h3 className="mb-3 text-lg font-display font-semibold text-navy">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How We Invest ──────────────────────────── */}
      <section className="border-t border-grey/10 bg-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">How We Invest</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Operator first. Capital follows.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-[2rem] border border-grey/15 bg-warm-white p-7 transition-all duration-300 hover:border-teal/30 hover:bg-white"
              >
                {/* Connector line for desktop */}
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-2.5 top-10 hidden h-px w-5 bg-teal/20 lg:block" />
                )}
                <p className="mb-4 text-4xl font-display font-bold text-teal/20">{step.step}</p>
                <h3 className="mb-3 text-base font-semibold text-navy">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Investment Parameters ─────────────────── */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Investment Parameters</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
              What we back and how we structure it.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {parameters.map((param, i) => (
              <motion.div
                key={param.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-teal/20 md:p-10"
              >
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-3 text-lg font-display font-semibold text-warm-white">{param.title}</h3>
                <p className="text-sm font-light leading-relaxed text-warm-white/60">{param.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Portfolio Companies ───────────────────── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
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
              Companies in our portfolio.
            </h2>
          </motion.div>

          {/* Portfolio logo grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {portfolioCompanies.map((company, i) => (
                <motion.a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group flex h-20 w-40 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 grayscale transition-all duration-300 hover:border-brand/20 hover:grayscale-0 hover:shadow-md md:h-24 md:w-48"
                  title={company.name}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                      unoptimized
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Partners row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-navy/40">
              Partners and co-investors
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {partners.map((partner, i) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group flex h-20 w-40 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 grayscale transition-all duration-300 hover:border-brand/20 hover:grayscale-0 hover:shadow-md md:h-24 md:w-48"
                  title={partner.name}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                      unoptimized
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Co-invest and LP Program ──────────────── */}
      <section className="border-t border-grey/10 bg-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">LP and Co-invest</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Invest alongside Maxinor.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: 'For HNIs and Family Offices',
                body: 'Co-invest in operator-vetted deals. All LP opportunities are reviewed by the Maxinor IC before syndication. Minimum ticket: ₹10 Lakh per deal. Quarterly portfolio updates.',
              },
              {
                label: 'For Institutional Investors',
                body: 'Strategic LP access to the Maxinor Operator Network, priority co-invest rights, and deal flow visibility across sectors. Reach out to discuss LP terms.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] border border-grey/15 bg-warm-white p-8 transition-all duration-300 hover:border-teal/30 hover:bg-white md:p-10"
              >
                <div className="mb-3 h-0.5 w-8 bg-teal" />
                <h3 className="mb-3 text-xl font-display font-semibold text-navy">{card.label}</h3>
                <p className="text-sm font-light leading-relaxed text-grey md:text-base">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: FAQ ────────────────────────────────────── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-14"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">FAQ</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Questions from founders.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <FaqAccordion />
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: CTA ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 text-center md:py-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/5 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Get Started</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Operator engagement comes before capital.
            </h2>
            <p className="mb-10 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              If you are a founder considering Maxinor investment, the first step is an operator conversation.
              Tell us about your business and we will tell you if there is a fit.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start an operator conversation <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
