'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Search, GitCommit, PenTool, Plus, Minus } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: Search,
    number: '01',
    title: 'Building Without Signal',
    body: 'Most founders know what their best customers say. Very few know what their churned customers decided. Features get built for the loudest voice in the room, not the behaviour pattern that moves retention.',
  },
  {
    icon: GitCommit,
    number: '02',
    title: 'The Gap Between Decision and Delivery',
    body: 'A roadmap decision is not a shipped product. Most teams lose fidelity between what was decided and what actually ships. Design gets rushed, scope creeps, and the product that launches is a compromise nobody signed off on.',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Untested Market Assumptions',
    body: 'Most product strategies rest on assumptions that were never tested. By the time they prove wrong, the product is two years into the wrong direction, and the market position has gone to competitors who moved on better information.',
  },
];

const architecture = [
  {
    tier: 'Research Layer',
    description: 'The signal every product decision depends on',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Discovery',
        items: ['User Research', 'Customer Interviews', 'Jobs-to-be-Done', 'Usability Testing', 'Market Research', 'TAM Sizing', 'Competitive Intelligence'],
      },
    ],
  },
  {
    tier: 'Strategy Layer',
    description: 'The decisions that shape what gets built and how it functions',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Product & Design Strategy',
        items: ['UX Strategy', 'Roadmap Design', 'Prioritisation Frameworks', 'Opportunity Sizing', 'North Star Metric'],
      },
    ],
  },
  {
    tier: 'Design and Build Layer',
    description: 'Turning a validated decision into a real, usable product',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Design and Development',
        items: ['UX Design', 'UI Design and Design Systems', 'Prototyping', 'Accessibility (WCAG 2.2 AA)', 'Product Development and Release Management'],
      },
    ],
  },
  {
    tier: 'Product Operations Layer',
    description: 'The infrastructure that makes product work ship and stick',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Product Ops',
        items: ['Sprint Design', 'Backlog Governance', 'Stakeholder Alignment', 'Product Analytics'],
      },
    ],
  },
];

const engagements = [
  {
    number: '01',
    title: 'Product Strategy and Roadmap',
    body: 'We audit your current product direction, identify misalignment with user behaviour or market reality, and build a prioritised product and design roadmap with clear ownership.',
  },
  {
    number: '02',
    title: 'UX Strategy and Design',
    body: 'We map your user journeys, identify the most impactful UX/UI improvements, and design intuitive interfaces before a single line of code is written.',
  },
  {
    number: '03',
    title: 'User and Market Research',
    body: 'Customer interviews, usability testing, and jobs-to-be-done analysis, paired with market sizing and competitive intelligence, the evidence base for every decision that follows.',
  },
  {
    number: '04',
    title: 'Product Design and Development',
    body: 'Comprehensive UX/UI design, scalable design systems, and high-fidelity prototyping, carried through to a shipped, working product. The same team that designs it is accountable for what actually ships.',
  },
  {
    number: '05',
    title: 'Product Operations Build',
    body: 'The operating cadence that keeps a product team focused: sprint structure, backlog governance, and stakeholder alignment.',
  },
];

const faqs = [
  {
    q: 'Do you only advise on product, or do you actually build and design it?',
    a: 'We do both. Discovery and strategy set the direction; our Design and Build layer takes it through UX/UI design and into a shipped product. The same operator is accountable end to end, not a handoff between strategy and execution.',
  },
  {
    q: 'We already have a product team. How does this work?',
    a: 'Our operator works alongside your team. Most engagements start by diagnosing where the current process breaks: discovery, design, or execution, and rebuilding from there.',
  },
  {
    q: 'How does UX Strategy differ from the AI & Tech capability?',
    a: 'Product & Design scopes what to build and how it looks, including the design work to make it usable. AI & Tech builds and ships the underlying AI system. The two work in sequence.',
  },
  {
    q: 'What if we need heavy visual design or a full design system?',
    a: 'We deliver this directly for most engagements. For design-system-heavy or brand-identity-intensive work beyond our standing bandwidth, we bring in vetted design partners from our network, accountability stays with Maxinor.',
  },
  {
    q: 'Is this only for tech companies?',
    a: "No. Product thinking applies to any business with a customer experience to design. We've applied this to consumer brands, service businesses, and SaaS equally.",
  },
];

const operator = {
  name: 'Amar Daing',
  role: 'Partner, Product & Design',
  bg: 'ex-Google x Tata Trusts, ex-OYO, ex-Grofers',
  depth: 'Product and design operator with experience building and scaling consumer and B2B platforms across India. At OYO, operated at the intersection of product and growth. At Google x Tata Trusts, designed product for the next billion users. At Grofers and Dineout, owned CX end-to-end. For design-system-heavy or visual-design-intensive engagements, Amar draws on Maxinor\'s design network to extend delivery bandwidth.',
  slug: 'amar-daing',
  image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f17573e0fcd4ec3c1_1663569415671.jpeg',
};

function ArchitectureExplorer() {
  const [active, setActive] = useState(0);
  const tier = architecture[active];
  const totalCaps = tier.groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="mt-12 overflow-hidden rounded-[2rem] border border-grey/15 bg-white shadow-sm">
      {/* Mobile: horizontal tab strip */}
      <div className="flex overflow-x-auto border-b border-grey/10 md:hidden">
        {architecture.map((t, i) => (
          <button
            key={t.tier}
            onClick={() => setActive(i)}
            className={`shrink-0 px-5 py-3.5 text-xs font-semibold transition-colors ${
              active === i
                ? 'border-b-2 border-brand text-brand'
                : 'text-grey/50 hover:text-navy'
            }`}
          >
            {t.tier.replace(' Layer', '')}
          </button>
        ))}
      </div>

      <div className="flex min-h-[420px]">
        {/* Desktop: left sidebar */}
        <div className="hidden w-64 shrink-0 flex-col border-r border-grey/10 bg-warm-white/50 md:flex">
          {architecture.map((t, i) => (
            <button
              key={t.tier}
              onClick={() => setActive(i)}
              className={`group relative flex flex-col gap-1 px-6 py-5 text-left transition-all duration-200 ${
                active === i
                  ? 'bg-white'
                  : 'hover:bg-white/60'
              }`}
            >
              {active === i && (
                <span className={`absolute left-0 top-0 h-full w-0.5 ${t.accent.replace('border-', 'bg-')}`} />
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

        {/* Right: detail panel */}
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
              {/* Panel header */}
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

              {/* Capability groups */}
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
                <p className="px-8 pb-6 text-sm font-light leading-relaxed text-grey">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ProductResearchPage() {
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
            Capability · Product & Design
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Most products fail{' '}
            <span className="text-brand">between the decision and the build.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Knowing what to build is half the job. Designing it well and shipping it without losing the original intent is the other half, and it&apos;s where most teams lose momentum. Maxinor Product & Design operators embed inside your team across the full arc: discovery, strategy, design, and the build itself.
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where Product Stalls</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three patterns that stall product growth.
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
              The full product and design capability stack.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              Four layers. Every capability mapped. Select a layer to explore what sits inside it.
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
              Five engagement types. All operator-led.
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
              An operator who has built, designed, and shipped products, not just managed them.
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
              Ready to go from signal to shipped product?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you&apos;re scoping a new product direction, need it designed and built, or identifying which AI use cases to build first, start here.
            </p>
            <p className="mb-8 max-w-xl mx-auto text-sm font-light leading-relaxed text-warm-white/50">
              Every engagement ends with the system running without us. We build it, we embed until it works, and we hand it over to your team, fully documented, fully owned by you.
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
