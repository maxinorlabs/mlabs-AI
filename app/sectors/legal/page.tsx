'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, FileWarning, Scale, Users } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: FileWarning,
    number: '01',
    title: 'The Agreement Time Bomb',
    body: 'Most early-stage companies are running on agreements downloaded from the internet, verbal understandings, or documents that have never seen a lawyer. These work fine until they do not. Co-founder exits, investor due diligence, and regulatory audits all surface the gaps at exactly the wrong moment.',
  },
  {
    icon: Scale,
    number: '02',
    title: 'Regulatory Blindspots',
    body: 'Entering a regulated sector without understanding the licensing landscape is one of the most expensive mistakes a founder can make. SEBI, RBI, IRDAI, CDSCO, and MCA all have specific requirements that vary by product, geography, and business model. Discovering this 12 months in costs multiples of what getting it right early would have.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Scaling Without a Legal Framework',
    body: 'Going from 5 to 50 people without compliant employment contracts, ESOP documentation, IP assignment clauses, and HR policies is a liability that compounds. Investors at Series A will find every gap in due diligence. Getting ahead of it is not defensive. It is smart.',
  },
];

const architecture = [
  {
    tier: 'Corporate Layer',
    description: 'How the company is structured and governed',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Structuring',
        items: ['Company Incorporation', 'Shareholding Structure', 'Co-founder Agreements', 'Shareholder Agreements', 'Board Constitution'],
      },
      {
        label: 'Governance',
        items: ['Board Resolutions', 'Statutory Filings', 'Annual Compliance', 'MCA Compliance', 'Company Secretary'],
      },
    ],
  },
  {
    tier: 'Commercial Layer',
    description: 'How you transact and protect value',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Contracts',
        items: ['Client Agreements', 'Vendor Contracts', 'NDAs', 'SLAs', 'Partnership Agreements'],
      },
      {
        label: 'IP Protection',
        items: ['Trademark Registration', 'Patent Filing', 'Copyright Protection', 'Trade Secret Management', 'IP Assignment Clauses'],
      },
    ],
  },
  {
    tier: 'Employment Layer',
    description: 'How you hire, manage, and retain compliantly',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'People Contracts',
        items: ['Employment Agreements', 'Contractor Agreements', 'ESOP Documentation', 'Non-compete Clauses', 'Confidentiality Agreements'],
      },
      {
        label: 'HR Compliance',
        items: ['PF & ESI', 'Gratuity', 'POSH Compliance', 'Labour Law Filings', 'Payroll Structuring'],
      },
    ],
  },
  {
    tier: 'Regulatory Layer',
    description: 'How you navigate sector-specific compliance',
    accent: 'border-purple-400',
    labelColor: 'text-purple-500',
    groups: [
      {
        label: 'Financial Services',
        items: ['RBI Licensing', 'SEBI Registration', 'IRDAI Compliance', 'FEMA Compliance', 'AML & KYC Frameworks'],
      },
      {
        label: 'Other Sectors',
        items: ['CDSCO (HealthTech)', 'DPDP Act', 'IT Act Compliance', 'GST & Tax Structuring', 'Foreign Investment (FEMA)'],
      },
    ],
  },
  {
    tier: 'Transactions Layer',
    description: 'How you raise capital and exit cleanly',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Fundraising',
        items: ['Term Sheet Review', 'SHA & SSA Negotiation', 'SAFE & Convertible Notes', 'Due Diligence Management', 'Closing Documentation'],
      },
      {
        label: 'M&A & Exit',
        items: ['Acquisition Structuring', 'Asset vs Share Sale', 'Merger Documentation', 'Indemnity Frameworks', 'Earn-out Agreements'],
      },
    ],
  },
];

const verticals = [
  {
    name: 'Startup Legal Setup',
    desc: 'First-time founders incorporating, structuring co-founder agreements, and building the legal foundation before their first raise.',
  },
  {
    name: 'FinTech Compliance',
    desc: 'Payment, lending, and investment platforms navigating RBI, SEBI, and IRDAI licensing and ongoing compliance requirements.',
  },
  {
    name: 'HealthTech Regulation',
    desc: 'Digital health and medical device companies managing CDSCO compliance, data privacy, and clinical regulatory requirements.',
  },
  {
    name: 'Employment & ESOP',
    desc: 'Growing companies building compliant HR frameworks, structuring ESOP pools, and managing multi-state labour law compliance.',
  },
  {
    name: 'Fundraising Legal',
    desc: 'Founders preparing for and closing investment rounds, including term sheet negotiation, SHA drafting, and due diligence.',
  },
  {
    name: 'M&A & Restructuring',
    desc: 'Acquisitions, mergers, and business restructuring for startups and SMEs navigating growth through inorganic paths.',
  },
];

const operators = [
  {
    name: 'Manik Sood',
    role: 'Legal & Compliance Lead',
    bg: 'Founder, Law Grammar | ex-Paytm, ex-Zee, ex-Healthkart',
    depth:
      'Manik brings 20+ years of cross-industry legal expertise spanning FinTech, real estate, e-commerce, and media. He advises founders on corporate structuring, regulatory licensing, and employment frameworks. Manik also runs Law Grammar, a law firm offering direct incorporation and legal services to startups and SMEs.',
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

export default function LegalPage() {
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
            Domain · Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Most founders treat legal as a cost.{' '}
            <span className="text-brand">It is actually your earliest moat.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            The companies that scale cleanly are the ones that get the legal foundation right before they need it.
            Co-founder agreements, IP assignment, regulatory compliance, and employment frameworks are not paperwork.
            They are infrastructure.
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
            <Link href="/sectors" className={ghostBtn}>
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
              The three legal gaps that compound over time.
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

      {/* Capability Stack */}
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
              The full legal capability stack.
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

      {/* Sub-verticals */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Legal Sub-Verticals</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Who we work with in Legal and Compliance.
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
              Operators who have been inside Legal and Compliance, not just advised it.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 max-w-xl">
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
              Building in Legal and Compliance?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-grey md:text-lg">
              Whether you are setting up your first company, navigating a licensing requirement, preparing for a raise, or trying to get your employment framework in order before you hire your next 20 people, start here.
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
