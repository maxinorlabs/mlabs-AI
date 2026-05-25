'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ShieldCheck, GitBranch, Layers } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'The Regulatory Maze',
    body: 'RBI, SEBI, IRDAI, PFRDA -- each regulator has its own framework, reporting cadence, and compliance logic. Most FinTech founders hit the wall 6 months in when they discover their product architecture conflicts with the compliance layer they did not design for.',
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'The Bank Sales Cycle',
    body: 'Selling to banks and NBFCs is a 12 to 18 month process that most product founders are completely unprepared for. Procurement committees, IT security reviews, legal indemnity negotiations, and risk committee sign-offs are not problems a great product can shortcut. They require relationship capital and institutional knowledge.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Integration Depth',
    body: 'Core banking systems (Finacle, Flexcube, BaNCS), CBS APIs, NACH, NPCI rails, account aggregators -- integrating with the Indian banking stack is not a sprint. Founders who underestimate it either blow the timeline or build workarounds that become tech debt that kills Series A due diligence.',
  },
];

const architecture = [
  {
    tier: 'Customer Layer',
    description: 'Who you serve and how they reach you',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Segments',
        items: ['Retail', 'Commercial', 'Mass Affluent', 'High Net Worth', 'Small & Medium Business'],
      },
      {
        label: 'Channels',
        items: ['Web / App', 'Bank Branch', 'ATM', 'Call Centre', 'Kiosk', 'IVR'],
      },
    ],
  },
  {
    tier: 'Product Layer',
    description: 'What you offer',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Products',
        items: ['Deposits', 'Loans', 'Fixed Income & Payments', 'Digital & Transaction Banking', 'Investments', 'Insurance'],
      },
      {
        label: 'Deposit Types',
        items: ['Savings', 'Salary', 'Fixed Deposit', 'Recurring Deposit', 'Current Account', 'NRO / NRE / FCNR'],
      },
    ],
  },
  {
    tier: 'Operations Layer',
    description: 'How you run the core business',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Account Management',
        items: ['Origination', 'Opening', 'Configuration', 'Mandates', 'Interest', 'BillPay', 'Withdrawal', 'Closure'],
      },
      {
        label: 'Account Servicing',
        items: ['Transaction Management', 'Payments', 'Utility & Bill Pay', 'Fund Transfers', 'Cash & Instrument Services', 'Doorstep Services'],
      },
      {
        label: 'Customer Data',
        items: ['Entity & Relationships', 'Contact Details', 'Preferences', 'Demographics', 'Customer Persona', 'Risk Profile'],
      },
      {
        label: 'Marketing & Sales',
        items: ['CRM', 'Campaigns', 'Cross & Upsell', 'Prospect Conversion', 'Partnerships'],
      },
    ],
  },
  {
    tier: 'Intelligence Layer',
    description: 'How you see, analyse and communicate',
    accent: 'border-purple-400',
    labelColor: 'text-purple-500',
    groups: [
      {
        label: 'Transactions',
        items: ['Billing', 'Cheque Management', 'Batch Processing', 'Electronic Transactions', 'Loan Transaction Management', 'RTP Processing'],
      },
      {
        label: 'Statement Generation',
        items: ['Definition & Categorisation', 'Configuration', 'Online', 'On-Demand', 'Archive'],
      },
      {
        label: 'Data & Analytics',
        items: ['Analytics', 'CIF Changes Processing', 'Reporting', 'Data Warehousing'],
      },
      {
        label: 'Communications',
        items: ['RCS Alerts', 'Email', 'SMS', 'WhatsApp Integration'],
      },
    ],
  },
  {
    tier: 'Governance Layer',
    description: 'How you stay safe, compliant and in control',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Risk & Compliance',
        items: ['AML & Fraud', 'Compliance Management', 'Risk Management', 'Regulatory Oversight', 'Quality Oversight'],
      },
      {
        label: 'Operations',
        items: ['Cash Management', 'Infrastructure Management'],
      },
    ],
  },
];

const verticals = [
  {
    name: 'Lending',
    desc: 'NBFC, P2P, BNPL, embedded credit. Risk model design, portfolio calibration, regulatory licensing.',
  },
  {
    name: 'Payments',
    desc: 'UPI products, payment gateways, wallet infrastructure, merchant acquiring.',
  },
  {
    name: 'Insurtech',
    desc: 'Digital distribution, claims automation, embedded insurance, IRDAI compliance architecture.',
  },
  {
    name: 'Wealthtech',
    desc: 'Demat, investment platforms, robo-advisory, SEBI-registered product architecture.',
  },
  {
    name: 'Embedded Finance',
    desc: 'Banking-as-a-service, credit-in-checkout, embedded accounts for non-financial platforms.',
  },
  {
    name: 'Core Banking SaaS',
    desc: 'B2B technology for banks and NBFCs: CBS modernisation, API banking, digital transformation.',
  },
];

const operators = [
  {
    name: 'Rajesh Ramanathan',
    role: 'BFSI Domain Lead',
    bg: 'ex-Accenture, ex-Wipro, ex-Mastek',
    depth: '20+ years across banking transformation, insurance tech, and BFSI consulting at global scale.',
    slug: 'rajesh-ramanathan',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b299cedd0e417ecb1e2533_WhatsApp%20Image%202026-03-12%20at%204.11.45%20PM.jpeg',
  },
  {
    name: 'Manik Sood',
    role: 'Legal & Compliance',
    bg: 'ex-Paytm, ex-Zee, ex-Healthkart',
    depth: '20+ years cross-industry legal expertise spanning FinTech, real estate, e-commerce and media.',
    slug: 'manik-sood',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce51a9da04ec8dc7a9a_manik.avif',
  },
];

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

      <div className="flex min-h-[520px]">
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

export default function BFSIPage() {
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
            Domain · BFSI
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Banking is the most complex domain to build in.{' '}
            <span className="text-brand">We know it from the inside.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            FinTech founders who move fast in BFSI without domain depth hit the same walls: regulatory non-compliance,
            failed bank partnerships, and integration nightmares that kill timelines. We have been inside these systems.
            We know where the walls are.
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
            <Link href="/domains" className={ghostBtn}>
              All domains
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where Founders Get Stuck</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              The three walls every BFSI founder hits.
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

      {/* Domain Architecture */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Domain Architecture</p>
            <h2 className="mb-3 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              The full banking capability stack.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              Five layers. Every capability mapped. Select a layer to explore what sits inside it and where the complexity lives.
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

      {/* Who We Work With */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">FinTech Sub-Verticals</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Who we work with in BFSI.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-[1.5rem] border border-grey/15 bg-white p-6"
              >
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-2 text-base font-display font-semibold text-navy">{v.name}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operators */}
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
              Operators who have been inside BFSI, not just advised it.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
            {operators.map((op, i) => (
              <motion.div
                key={op.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-brand/40">
                    <Image
                      src={op.image}
                      alt={op.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/team/${op.slug}`}
                      className="text-base font-semibold text-warm-white transition-colors hover:text-brand"
                    >
                      {op.name}
                    </Link>
                    <p className="text-xs font-medium text-brand/80">{op.role}</p>
                    <p className="text-xs text-warm-white/40">{op.bg}</p>
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed text-warm-white/60">{op.depth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-white px-6 py-20 text-center md:py-28 border-t border-grey/15">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Work With Us</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Building in BFSI?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-grey md:text-lg">
              Whether you are navigating your first regulatory approval, trying to crack a bank partnership, or scaling a loan book past the point where your current risk model holds -- start here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>
                Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/scale"
                className="inline-flex items-center justify-center rounded-full border border-navy/20 px-8 py-4 text-base font-semibold tracking-wide text-navy transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand sm:px-10 sm:py-5"
              >
                How we engage
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
