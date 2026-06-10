'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

/* ── Button helpers ─────────────────────────────────────────────────────── */
const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

/* ── Data ───────────────────────────────────────────────────────────────── */
const painPoints = [
  {
    number: '01',
    title: 'The Information Asymmetry Problem',
    body: 'You see a 20-slide deck and a 30-minute pitch. The founder has been living in this business for 2 years. The gap between what is presented and what is real is almost always significant. Without an operator inside the business before the term sheet, you are betting on conviction, not evidence.',
  },
  {
    number: '02',
    title: 'The Post-Investment Execution Gap',
    body: 'Capital is easy. Execution after capital is where most early-stage investments fail. Founders who raised too early, burned too fast, or hired the wrong people. The investor finds out 18 months later when the runway is gone and the business has not moved.',
  },
  {
    number: '03',
    title: 'The Deal Flow Quality Problem',
    body: 'Volume of deal flow is not the problem. Quality is. Most early-stage deal flow is undifferentiated. The signal-to-noise ratio is low. Finding companies that have real traction, real teams, and real operator depth is the hardest part of early-stage investing.',
  },
];

const advantages = [
  {
    number: '01',
    title: 'Operator-Validated Deal Flow',
    body: 'Every company we bring to investors has had a Maxinor operator inside the business. We see the real unit economics, the real team capacity, and the real execution speed before we write our own cheque. You benefit from that insight without doing the diligence yourself.',
  },
  {
    number: '02',
    title: 'Milestone-Linked Structure',
    body: 'Capital is released in tranches tied to execution milestones. This means lower risk at each stage, maintained accountability, and a natural exit ramp if milestones are not met. Founders are incentivised to deliver, not just raise.',
  },
  {
    number: '03',
    title: 'Continued Operator Support',
    body: 'After investment, the Maxinor operator stays inside the business. This means the execution risk does not spike after capital enters. You are not betting on a founder figuring it out alone. You are betting on a founder plus an operator who has done it before.',
  },
  {
    number: '04',
    title: 'Network and Co-Invest Access',
    body: 'Access to all Maxinor deal flow before external syndication. Priority co-invest rights on follow-on rounds. Quarterly portfolio updates and direct founder access. Introduction to the Maxinor operator network as a strategic resource.',
  },
];

const investmentFormats = [
  {
    title: 'LP in the Maxinor Fund',
    body: 'Participate in our core vehicle investing in pre-seed and seed stage startups across our portfolio. Minimum ticket and structure available on request. Quarterly reporting and annual LP meeting.',
  },
  {
    title: 'Syndicate and Co-Investment',
    body: 'Direct co-invest alongside Maxinor in specific high-conviction deals. Minimum ticket: Rs 10 Lakh per deal. All co-invest opportunities are operator-validated and IC-approved before reaching the syndicate.',
  },
  {
    title: 'Strategic LP Partnership',
    body: 'For family offices and institutional investors seeking deeper access to the Maxinor operator network, priority deal flow, and portfolio support engagement. Structure and terms by discussion.',
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
];

const faqs = [
  {
    q: 'What types of investors does Maxinor work with?',
    a: 'We work with HNIs, family offices, angels, and institutional investors. The engagement depth varies: angels and HNIs typically co-invest in individual deals, while family offices and institutions often take LP positions or strategic partnerships.',
  },
  {
    q: 'How is Maxinor different from a traditional angel network or syndicator?',
    a: 'Most syndicators pass on deals they have evaluated from the outside. We only bring deals where a Maxinor operator has been inside the business. The diligence is real, not performed.',
  },
  {
    q: 'What sectors does Maxinor invest in?',
    a: 'D2C, Media, Healthcare, Education, BFSI, AI-native platforms, and Defence Tech. We back sectors where our operators have genuine domain depth.',
  },
  {
    q: 'What is the typical holding period?',
    a: 'We target exits in 4 to 7 years. Portfolio companies are typically preparing for Series A within 18 months of our investment and subsequent rounds within 3 to 4 years. Liquidity pathways include secondary sales, strategic acquisitions, and IPO.',
  },
  {
    q: 'How do I stay informed about portfolio performance?',
    a: 'All investors receive quarterly portfolio updates including financial performance, milestone achievement, and operator notes. Strategic LPs receive monthly updates and direct access to founders on request.',
  },
];

/* ── FAQ Accordion ──────────────────────────────────────────────────────── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-grey/10 overflow-hidden rounded-[2rem] border border-grey/15 bg-white">
      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-warm-white/40"
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

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function InvestorsPage() {
  return (
    <div className="font-sans">

      {/* ── Section 1: Hero (navy) ───────────────────────────────────────── */}
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
        {/* Glows */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-teal/5 blur-[100px]" />
        {/* Fade to next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            For Investors
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
            Every investment opportunity from Maxinor comes with something most deal flow does not: an operator who has been inside the business, seen the real unit economics, and validated the execution capacity of the founding team. That is the Maxinor edge.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Operator-Validated', 'Co-Investment Access', 'Pre-seed to Series A'].map((chip) => (
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
              Join our investor network <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/investment" className={ghostBtn}>
              See our investment thesis
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Investor Problem (warm-white) ─────────────────── */}
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
              Why most early-stage investing is flying blind.
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

      {/* ── Section 3: The Maxinor Advantage (white) ─────────────────────── */}
      <section className="border-t border-grey/10 bg-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Maxinor Advantage</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Why investing alongside Maxinor is different.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-[2rem] border border-grey/15 bg-warm-white p-8 transition-all duration-300 hover:border-teal/30 hover:bg-white md:p-10"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {adv.number}
                </span>
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-3 text-lg font-display font-semibold text-navy">{adv.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{adv.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Investment Formats (navy) ─────────────────────────── */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Investment Formats</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
              How to invest alongside Maxinor.
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {investmentFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-teal/20 hover:bg-white/8 md:p-10"
              >
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-3 text-lg font-display font-semibold text-warm-white">{format.title}</h3>
                <p className="text-sm font-light leading-relaxed text-warm-white/60">{format.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Portfolio Companies (warm-white) ───────────────────── */}
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
              Companies in the Maxinor portfolio.
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
                  className="group flex h-20 w-40 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 transition-all duration-300 hover:border-brand/20 hover:shadow-md md:h-24 md:w-48"
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
                  className="group flex h-20 w-40 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 transition-all duration-300 hover:border-brand/20 hover:shadow-md md:h-24 md:w-48"
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

      {/* ── Section 6: FAQ (warm-white) ───────────────────────────────────── */}
      <section className="border-t border-grey/10 bg-warm-white px-6 py-20 md:py-28">
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
              Questions from investors.
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

      {/* ── Section 7: CTA (navy) ─────────────────────────────────────────── */}
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
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Join the Network</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              The deal flow you have been looking for is inside the business, not on the pitch deck.
            </h2>
            <p className="mb-10 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Tell us about your investment mandate and we will tell you if Maxinor deal flow matches. The conversation is with an operator, not a fund manager.
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
