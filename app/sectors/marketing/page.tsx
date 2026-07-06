'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Target, BarChart2, Megaphone } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: Target,
    number: '01',
    title: 'No Brand, Just Spend',
    body: 'Running ads without a positioning strategy is expensive noise. Most startups confuse marketing activity with marketing strategy. Without a clear brand narrative, defined ICP, and channel logic, every rupee spent on performance marketing is fighting diminishing returns.',
  },
  {
    icon: BarChart2,
    number: '02',
    title: 'Zero Organic Growth',
    body: 'If you switched off paid tomorrow, would anyone notice? Most startup marketing engines are entirely dependent on paid acquisition. Nothing compounds. No SEO, no community, no content flywheel. That is not a marketing strategy. That is a subscription to growth you cannot own.',
  },
  {
    icon: Megaphone,
    number: '03',
    title: 'Agencies That Do Not Get It',
    body: 'Most agencies optimise for deliverables, not outcomes. They report on impressions and reach, not revenue and retention. Founders who outsource marketing to a generalist agency without an internal operator holding accountability almost always end up rebuilding from scratch 18 months later.',
  },
];

const architecture = [
  {
    tier: 'Brand Layer',
    description: 'Who you are and how you are perceived',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Brand Foundation',
        items: ['Positioning Statement', 'Brand Personality', 'Visual Identity', 'Tone of Voice', 'Brand Architecture'],
      },
      {
        label: 'Audience',
        items: ['ICP Definition', 'Persona Development', 'Customer Research', 'Competitive Positioning', 'Category Design'],
      },
    ],
  },
  {
    tier: 'Content Layer',
    description: 'What you say and how you say it',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Content Strategy',
        items: ['Content Pillars', 'Editorial Calendar', 'SEO Content', 'Thought Leadership', 'Founder Brand'],
      },
      {
        label: 'Content Production',
        items: ['Long-form Writing', 'Short-form & Social', 'Video & Reels', 'Email Newsletters', 'Case Studies & Whitepapers'],
      },
    ],
  },
  {
    tier: 'Channel Layer',
    description: 'Where and how you reach your audience',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Organic Channels',
        items: ['SEO & Blog', 'LinkedIn', 'Instagram', 'YouTube', 'Community Platforms', 'Referral Programmes'],
      },
      {
        label: 'Paid Channels',
        items: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'Influencer Marketing', 'Programmatic', 'Offline & Events'],
      },
    ],
  },
  {
    tier: 'Growth Layer',
    description: 'How you acquire, convert, and retain',
    accent: 'border-purple-400',
    labelColor: 'text-purple-500',
    groups: [
      {
        label: 'Acquisition',
        items: ['Lead Generation', 'Inbound Marketing', 'Outbound Sequences', 'Partnership GTM', 'Affiliate & Referral'],
      },
      {
        label: 'Retention & Loyalty',
        items: ['Email & WhatsApp Flows', 'Loyalty Programmes', 'Community Building', 'NPS & Feedback Loops', 'Advocacy Programmes'],
      },
    ],
  },
  {
    tier: 'Intelligence Layer',
    description: 'How you measure and optimise',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Analytics',
        items: ['CAC & LTV Tracking', 'Channel Attribution', 'Funnel Analytics', 'Brand Health Metrics', 'Cohort Analysis'],
      },
      {
        label: 'Tools & Ops',
        items: ['Marketing Automation', 'CRM Integration', 'A/B Testing', 'UTM & Tracking', 'Reporting Dashboards'],
      },
    ],
  },
];

const verticals = [
  {
    name: 'Venture Brand Building',
    desc: 'Early-stage companies that need a brand foundation, positioning, and channel strategy before scaling spend.',
  },
  {
    name: 'SME Marketing',
    desc: 'Established SMEs with no dedicated marketing function, needing operator-level marketing execution.',
  },
  {
    name: 'D2C Brand Marketing',
    desc: 'Consumer brands building the organic and community channels that reduce dependency on paid acquisition.',
  },
  {
    name: 'B2B Marketing',
    desc: 'SaaS and services companies building content, thought leadership, and inbound pipelines for enterprise sales.',
  },
  {
    name: 'Founder Personal Brand',
    desc: 'Operators and founders building their professional presence to drive deal flow, hiring, and business credibility.',
  },
  {
    name: 'Event & Community Marketing',
    desc: 'Brands using offline events, communities, and activations as primary growth and retention channels.',
  },
];

const operators = [
  {
    name: 'Aditi Agrawal',
    role: 'Entrepreneur in Residence, Marketing',
    bg: 'Founder, StickyPins & Avyu India',
    depth: 'Brand strategist and founder with deep experience building consumer brands from zero, with a track record across D2C, community marketing, and founder-led growth.',
    slug: 'aditi-agrawal',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce6dd742f13761925d7_WhatsApp%20Image%202026-05-25%20at%203.23.59%20PM.avif',
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

export default function MarketingPage() {
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
            Sector · Marketing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Your brand is visible.{' '}
            <span className="text-brand">The conversion rate tells a different story.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Marketing for startups and SMEs in India is too often confused with advertising spend. The brands that build
            durable equity combine sharp positioning, channel discipline, and community built before campaigns, not after.
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
              All Sectors
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
              The three traps every marketing founder falls into.
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
              The full marketing capability stack.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              Five layers. Every capability mapped. Select a layer to explore what sits inside it and where the leverage lives.
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Marketing Sub-Verticals</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Who we work with in Marketing.
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
              Operators who have built brands, not just advised them.
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
              Building your brand?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-grey md:text-lg">
              Whether you are starting from zero, rebuilding after a failed agency relationship, or trying to reduce
              CAC dependency with organic channels, start here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>
                Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
