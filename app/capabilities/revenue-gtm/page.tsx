'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, TrendingDown, Target, BarChart2 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: TrendingDown,
    number: '01',
    title: 'No Repeatable Sales Process',
    body: 'If every deal still runs on founder effort, you do not have a sales function. You have a founder dependency. Scaling revenue without a repeatable, documented sales motion means every new hire resets the clock.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Marketing Spend Without Signal',
    body: 'Spending on paid acquisition without cohort data, CAC benchmarks, or attribution clarity is renting growth you cannot own. Most startups discover this when performance marketing stops scaling and they have no organic engine to fall back on.',
  },
  {
    icon: BarChart2,
    number: '03',
    title: 'Product and Revenue Misaligned',
    body: 'When the product roadmap is disconnected from revenue priorities, you end up building features no customer asked for while the pipeline stalls. Operator alignment between product and GTM is the difference between a roadmap and a revenue plan.',
  },
];

const architecture = [
  {
    tier: 'GTM Layer',
    description: 'How you take product to market',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Go-To-Market',
        items: ['ICP Definition', 'Channel Strategy', 'Pricing Architecture', 'Positioning', 'Launch Playbook', 'Competitive Mapping'],
      },
      {
        label: 'Sales Motion',
        items: ['Pipeline Design', 'Sales Playbook', 'CRM Setup', 'Qualification Frameworks', 'Proposal Templates', 'Deal Velocity'],
      },
    ],
  },
  {
    tier: 'Revenue Operations',
    description: 'The systems behind the number',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'RevOps',
        items: ['Forecast Models', 'Revenue Analytics', 'Cohort Analysis', 'ARR Dashboards', 'Churn Modelling', 'Expansion Revenue'],
      },
      {
        label: 'Sales Ops',
        items: ['Territory Design', 'Commission Structure', 'Sales Tooling', 'Lead Scoring', 'Pipeline Reviews', 'Win/Loss Analysis'],
      },
    ],
  },
  {
    tier: 'Marketing Layer',
    description: 'How you build demand',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Performance Marketing',
        items: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'Programmatic', 'Attribution Setup', 'CAC Optimisation'],
      },
      {
        label: 'Organic & Content',
        items: ['SEO Strategy', 'Content Engine', 'Founder Brand', 'LinkedIn GTM', 'PR & Earned Media', 'Email Marketing'],
      },
    ],
  },
  {
    tier: 'Product-Led Growth',
    description: 'When the product drives acquisition',
    accent: 'border-purple-400',
    labelColor: 'text-purple-500',
    groups: [
      {
        label: 'PLG Motion',
        items: ['Freemium Design', 'Activation Funnel', 'Onboarding Flows', 'In-product Nudges', 'Viral Loops', 'Usage Analytics'],
      },
      {
        label: 'Retention',
        items: ['Churn Prevention', 'Engagement Scoring', 'Re-engagement Flows', 'NPS Systems', 'Feature Adoption', 'Expansion Triggers'],
      },
    ],
  },
  {
    tier: 'Brand & D2C',
    description: 'Consumer and offline growth',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Consumer Brand',
        items: ['Brand Architecture', 'Visual Identity', 'Packaging', 'Community Building', 'Influencer GTM', 'D2C Positioning'],
      },
      {
        label: 'Offline & Omnichannel',
        items: ['Distributor Relationships', 'Modern Trade', 'General Trade', 'BTL Activation', 'Kirana Network', 'Retail Audit'],
      },
    ],
  },
];

const verticals = [
  {
    name: 'B2B SaaS',
    desc: 'Pipeline design, outbound sequences, sales playbooks, and RevOps systems for SaaS companies targeting SME and enterprise.',
  },
  {
    name: 'D2C Brands',
    desc: 'CAC reduction, performance marketing, retention engine design, and omnichannel expansion for consumer brands.',
  },
  {
    name: 'FinTech',
    desc: 'B2B financial product sales, enterprise procurement navigation, and revenue model design for lending and payments companies.',
  },
  {
    name: 'Healthcare',
    desc: 'Hospital and institutional sales motions, procurement GTM, and patient acquisition systems for health-tech companies.',
  },
  {
    name: 'Media & Content',
    desc: 'Audience monetisation, B2B syndication, subscription revenue, and brand partnership GTM for media businesses.',
  },
  {
    name: 'SME & Services',
    desc: 'Sales system buildout, channel design, and brand positioning for established SMEs looking to grow.',
  },
];

const operators = [
  {
    name: 'Samir Gupta',
    role: 'Entrepreneur in Residence, Revenue & GTM',
    bg: 'ex-Paytm, ex-Bzinga, ex-Solv',
    depth: 'Revenue and business development leader with a track record across B2B SaaS, media, and fintech. Samir brings operator-level GTM execution to every engagement.',
    slug: 'samir-gupta',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH4Sd0hME4cQA/profile-displayphoto-shrink_400_400/B4DZPi3yxWHcAg-/0/1734698610773?e=1753920000&v=beta&t=X6dVaIrPZPT7SdwEq-IJ1MONPxzVzrjuUFHKicVBiYo',
  },
  {
    name: 'Amar Daing',
    role: 'Entrepreneur in Residence, Product & Growth',
    bg: 'ex-Meesho, ex-GoKwik, ex-Khatabook',
    depth: 'Product and growth operator with deep experience scaling consumer and B2B platforms across India.',
    slug: 'amar-daing',
    image: null,
  },
  {
    name: 'Priyabrata Padhi',
    role: 'Entrepreneur in Residence, D2C & Consumer',
    bg: 'ex-United Breweries, ex-ITC, ex-Britannia',
    depth: 'Consumer goods and D2C operator with 15+ years of brand, channel, and distribution experience across FMCG and consumer companies.',
    slug: 'priyabrata-padhi',
    image: null,
  },
];

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
              active === i
                ? 'border-b-2 border-brand text-brand'
                : 'text-grey/50 hover:text-navy'
            }`}
          >
            {t.tier.replace(' Layer', '').replace(' Operations', ' Ops').replace('-Led Growth', ' PLG').replace(' & D2C', '')}
          </button>
        ))}
      </div>

      <div className="flex min-h-[520px]">
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

export default function RevenueGTMPage() {
  return (
    <div className="font-sans">

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
            Capability · Revenue, GTM & Marketing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Your ARR has been stuck for 8 months.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 max-w-2xl text-lg font-semibold text-brand md:text-xl"
          >
            Operators who own the revenue number, not just advise on it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Most GTM engagements produce a strategy document. Maxinor revenue operators embed inside your team, own the pipeline, run the campaigns, and are accountable to the same revenue milestones you are.
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
              All capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where Revenue Growth Breaks</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three patterns that keep founders stuck.
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
              The full revenue capability stack.
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

      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Revenue Contexts</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Who we drive revenue for.
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
              Operators who have owned the revenue number, not just advised on it.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
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
                  {op.image ? (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-brand/40">
                      <Image
                        src={op.image}
                        alt={op.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center text-brand font-semibold text-lg shrink-0">
                      {op.name.charAt(0)}
                    </div>
                  )}
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
              Ready to move the revenue number?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-grey md:text-lg">
              Whether you are stuck at the same ARR, scaling spend without results, or need a repeatable sales motion, start here.
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
