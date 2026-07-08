'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Scale, Search, GitMerge, Plus, Minus } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: Scale,
    number: '01',
    title: 'Valuation Detached From Reality',
    body: 'Most first-time sellers anchor on a number they read somewhere, not a valuation grounded in comparable transactions and defensible financial projections. That gap kills deals in the negotiation room.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Due Diligence Surprises',
    body: 'Deals fall apart in diligence when founders have not done the internal audit first -- undisclosed liabilities, weak contracts, or cap table issues that surface at the worst possible moment.',
  },
  {
    icon: GitMerge,
    number: '03',
    title: 'Integration Treated as an Afterthought',
    body: 'The deal closing is the easy part. Most M&A value is lost in the first 100 days of integration when nobody owned the plan for combining teams, systems, and customers.',
  },
];

const architecture = [
  {
    tier: 'Deal Origination Layer',
    description: 'Finding and evaluating the right counterparties',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Origination',
        items: ['Buy-Side Target Identification', 'Sell-Side Positioning', 'Strategic Fit Assessment', 'Initial Valuation'],
      },
    ],
  },
  {
    tier: 'Transaction Layer',
    description: 'Structuring and negotiating the deal',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Transaction',
        items: ['Valuation and Deal Structuring', 'Term Sheet Negotiation', 'Due Diligence Coordination', 'Definitive Agreement Support'],
      },
    ],
  },
  {
    tier: 'Integration Layer',
    description: 'Making the combined entity actually work',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Integration',
        items: ['Post-Merger Integration Planning', 'Team and Culture Integration', 'Systems Consolidation', 'Synergy Realisation Tracking'],
      },
    ],
  },
];

const engagements = [
  {
    number: '01',
    title: 'Buy-Side Advisory',
    body: 'Target identification, strategic fit assessment, and valuation support for founders and corporates looking to acquire.',
  },
  {
    number: '02',
    title: 'Sell-Side Advisory',
    body: 'Positioning your business for the strongest possible outcome -- valuation defence, buyer identification, and negotiation support through to close.',
  },
  {
    number: '03',
    title: 'Due Diligence Coordination',
    body: 'Managing the diligence process end to end -- financial, legal, and operational -- so nothing surfaces late that could have been caught early.',
  },
  {
    number: '04',
    title: 'Post-Merger Integration',
    body: 'A structured 100-day integration plan covering team, systems, and customers -- because the deal closing is the start of the value creation, not the end.',
  },
];

const faqs = [
  {
    q: 'Do you work on both sides of a transaction?',
    a: 'Yes -- buy-side and sell-side, though never on the same deal at the same time. We structure engagements to avoid any conflict of interest.',
  },
  {
    q: 'What size of transactions do you support?',
    a: 'Primarily early to growth-stage transactions where founders need operator-level M&A support without the overhead of a bulge-bracket advisory retainer.',
  },
  {
    q: 'How does this connect to the Legal capability?',
    a: 'M&A handles the deal strategy, valuation, and negotiation. Legal handles the definitive agreements, term sheet review, and contract execution. Every M&A engagement draws on both.',
  },
  {
    q: 'Can you help with post-merger integration if you did not run the deal?',
    a: "Yes. Integration planning is often the most underinvested part of M&A, and we take on standalone integration engagements even when we weren't the deal advisor.",
  },
];

const operator = {
  name: 'Manik Sood',
  role: 'Partner, M&A',
  bg: 'ex-Paytm, ex-Zee Entertainment, ex-Healthkart. Founder, Law Grammar.',
  depth: "Corporate lawyer with deep experience inside some of India's most complex high-growth businesses -- navigating commercial, regulatory, and transactional legal complexity at scale, including M&A structuring, term sheet negotiation, and post-merger legal integration.",
  slug: 'manik-sood',
  image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce51a9da04ec8dc7a9a_manik.avif',
};

function ArchitectureExplorer() {
  const [active, setActive] = useState(0);
  const tier = architecture[active];
  const totalCaps = tier.groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="mt-12 overflow-hidden rounded-[2rem] border border-grey/15 bg-white shadow-sm">
      <div className="flex overflow-x-auto border-b border-grey/10 md:hidden">
        {architecture.map((t, i) => (
          <button
            key={t.tier}
            onClick={() => setActive(i)}
            className={`shrink-0 px-5 py-3.5 text-xs font-semibold transition-colors ${
              active === i ? 'border-b-2 border-brand text-brand' : 'text-grey/50 hover:text-navy'
            }`}
          >
            {t.tier.replace(' Layer', '')}
          </button>
        ))}
      </div>

      <div className="flex min-h-[380px]">
        <div className="hidden w-64 shrink-0 flex-col border-r border-grey/10 bg-warm-white/50 md:flex">
          {architecture.map((t, i) => (
            <button
              key={t.tier}
              onClick={() => setActive(i)}
              className={`group relative flex flex-col gap-1 px-6 py-5 text-left transition-all duration-200 ${
                active === i ? 'bg-white' : 'hover:bg-white/60'
              }`}
            >
              {active === i && (
                <span className={`absolute left-0 top-0 h-full w-0.5 ${tier.accent.replace('border-', 'bg-')}`} />
              )}
              <span className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                active === i ? t.labelColor : 'text-grey/40 group-hover:text-grey/60'
              }`}>
                0{i + 1}
              </span>
              <span className={`text-sm font-semibold transition-colors ${
                active === i ? 'text-navy' : 'text-grey/60 group-hover:text-navy/70'
              }`}>
                {t.tier}
              </span>
              <span className="text-[11px] font-light text-grey/40">
                {t.groups.reduce((s, g) => s + g.items.length, 0)} capabilities
              </span>
            </button>
          ))}
        </div>

        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="h-full p-8 md:p-10"
            >
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] ${tier.labelColor}`}>
                    {tier.tier}
                  </span>
                  <p className="text-base font-light text-grey/70">{tier.description}</p>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tier.labelColor} border-current opacity-60`}>
                  {totalCaps} capabilities
                </span>
              </div>

              <div className="space-y-7">
                {tier.groups.map((group, gi) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: gi * 0.06 }}
                  >
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-navy/40">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-grey/15 bg-warm-white px-3.5 py-1.5 text-xs font-light text-navy/70 transition-colors hover:border-brand/30 hover:text-navy"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-10 divide-y divide-grey/10 rounded-[2rem] border border-grey/15 bg-white overflow-hidden">
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

export default function MergersAcquisitionsPage() {
  return (
    <div className="font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            Capability · M&A
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            The deal closing is the easy part.{' '}
            <span className="text-brand">Integration is where value is won or lost.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Most founders go through an M&A process once or twice in their careers. Maxinor M&A operators have sat on both sides of the table -- bringing the valuation discipline, negotiation experience, and integration planning that most first-time sellers and buyers do not have in-house.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className={primaryBtn}>
              Talk to the team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/capabilities" className={ghostBtn}>
              All Capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where Deals Break Down</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three patterns that kill transactions or waste the value in them.
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

      {/* Architecture */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Capability Stack</p>
            <h2 className="mb-3 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              The full M&A capability stack.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              Three layers. Every capability mapped. Select a layer to explore what sits inside it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ArchitectureExplorer />
          </motion.div>
        </div>
      </section>

      {/* Engagement Deliverables */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">How We Engage</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Four engagement types. All operator-led.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {engagements.map((e, i) => (
              <motion.div
                key={e.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative rounded-[1.5rem] border border-grey/15 bg-white p-7"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {e.number}
                </span>
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-2 text-base font-display font-semibold text-navy">{e.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator */}
      <section className="bg-navy px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Team Behind This</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
              An operator who has structured deals from both sides of the table.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-brand/40">
                <Image
                  src={operator.image}
                  alt={operator.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <Link
                  href={`/team/${operator.slug}`}
                  className="text-base font-semibold text-warm-white transition-colors hover:text-brand"
                >
                  {operator.name}
                </Link>
                <p className="text-xs font-medium text-brand/80">{operator.role}</p>
                <p className="text-xs text-warm-white/40">{operator.bg}</p>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed text-warm-white/60">{operator.depth}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Common Questions</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              What founders usually ask first.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FAQAccordion />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 text-center md:py-28 border-t border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Work With Us</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Ready to navigate a transaction the right way?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you&apos;re evaluating an acquisition, preparing to sell, or planning integration after a deal has closed -- start here.
            </p>
            <p className="mb-8 max-w-xl mx-auto text-sm font-light leading-relaxed text-warm-white/50">
              Every engagement ends with the system running without us. We build it, we embed until it works, and we hand it over to your team -- fully documented, fully owned by you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>
                Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/capabilities" className={ghostBtn}>
                All Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
