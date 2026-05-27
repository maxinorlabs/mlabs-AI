'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Users, GitBranch, BarChart3 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: Users,
    number: '01',
    title: 'Wrong Team for the Stage',
    body: 'The skills that build a 10-person company are different from what runs a 50-person one. Founders who hold on to loyalty hires past the point they are operating effectively create org debt that is expensive and emotionally complex to fix.',
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'Culture Breaking at Scale',
    body: 'Culture is not a values poster. It is the operating system of your organisation. When you go from 15 to 60 people without intentional culture design, the values that made you great dilute and disappear. By the time you notice, it has already affected retention and performance.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'No Performance Infrastructure',
    body: 'High performers leave when there is no framework to recognise them. Low performers stay when there is no framework to manage them. Most early-stage companies operate without OKRs, career frameworks, or performance management systems until a key hire leaves.',
  },
];

const architecture = [
  {
    tier: 'Org Design Layer',
    description: 'How you structure the company for the next stage',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Structure',
        items: ['Org Chart Design', 'Role Definition', 'Span of Control', 'Reporting Lines', 'Functional vs Product Structure', 'Matrix Design'],
      },
      {
        label: 'Team Architecture',
        items: ['Founding Team Audit', 'Gap Analysis', 'Succession Planning', 'Leadership Layers', 'Hiring Roadmap', 'Headcount Planning'],
      },
    ],
  },
  {
    tier: 'Talent Acquisition',
    description: 'How you hire the right people',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Hiring Systems',
        items: ['JD Design', 'Sourcing Strategy', 'Interview Frameworks', 'Assessment Design', 'Offer Structuring', 'Onboarding Playbook'],
      },
      {
        label: 'Talent Brand',
        items: ['Employer Positioning', 'Talent Marketing', 'Campus Strategy', 'Referral Systems', 'LinkedIn Presence', 'Candidate Experience'],
      },
    ],
  },
  {
    tier: 'Culture Design',
    description: 'The operating system of your organisation',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Culture',
        items: ['Values Definition', 'Rituals & Norms', 'Communication Cadence', 'Decision-making Frameworks', 'Culture Audits', 'Integration Design'],
      },
      {
        label: 'Engagement',
        items: ['Engagement Surveys', 'Pulse Checks', 'Recognition Systems', 'Internal Comms', 'Town Halls', 'Manager Enablement'],
      },
    ],
  },
  {
    tier: 'Performance Systems',
    description: 'How you develop and retain people',
    accent: 'border-purple-400',
    labelColor: 'text-purple-500',
    groups: [
      {
        label: 'Performance',
        items: ['OKR Design', 'Goal Frameworks', 'Review Cycles', 'Calibration Process', 'Performance Improvement Plans', '360 Feedback'],
      },
      {
        label: 'Development',
        items: ['Career Frameworks', 'L&D Strategy', 'Mentoring Programmes', 'Stretch Assignments', 'Leadership Pathways', 'Skills Mapping'],
      },
    ],
  },
  {
    tier: 'Compensation & Legal',
    description: 'The commercial infrastructure of your people function',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Compensation',
        items: ['Benchmarking', 'Band Design', 'ESOP Structure', 'Variable Pay', 'Incentive Design', 'Pay Equity'],
      },
      {
        label: 'Compliance',
        items: ['Employment Contracts', 'HR Compliance', 'Statutory Filings', 'Policy Design', 'Grievance Frameworks', 'Exit Management'],
      },
    ],
  },
];

const verticals = [
  {
    name: 'Pre-Series A Startups',
    desc: 'Founding team audit, hiring roadmap, and org design for companies preparing for institutional funding.',
  },
  {
    name: 'Series A to B Scale-ups',
    desc: 'Professionalising the people function, performance infrastructure, and culture systems for rapid headcount growth.',
  },
  {
    name: 'D2C & Consumer Brands',
    desc: 'Sales team design, distributor network hiring, and brand culture for consumer-facing organisations.',
  },
  {
    name: 'FinTech & Regulated Sectors',
    desc: 'Compliance-aware HR infrastructure, regulated role hiring, and governance frameworks for financial services companies.',
  },
  {
    name: 'Family Businesses',
    desc: 'Professionalising leadership, transitioning from founder-run to process-run, and installing performance management systems.',
  },
  {
    name: 'Corporate Ventures',
    desc: 'Org design for new business units, talent strategy for internal startups, and culture integration post-acquisition.',
  },
];

const operators = [
  {
    name: 'Parool Duggal',
    role: 'Entrepreneur in Residence, People & Org',
    bg: 'ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
    depth: 'People and culture operator with hands-on experience building HR infrastructure, talent architecture, and high-performing teams inside high-growth startups.',
    slug: 'parool-duggal',
    image: null,
  },
  {
    name: 'Samir Gupta',
    role: 'Entrepreneur in Residence, Revenue & People',
    bg: 'ex-Paytm, ex-Bzinga, ex-Solv',
    depth: 'Operator and business leader who has built and scaled cross-functional teams across media, fintech, and enterprise. Samir brings a founder lens to people and org challenges.',
    slug: 'samir-gupta',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH4Sd0hME4cQA/profile-displayphoto-shrink_400_400/B4DZPi3yxWHcAg-/0/1734698610773?e=1753920000&v=beta&t=X6dVaIrPZPT7SdwEq-IJ1MONPxzVzrjuUFHKicVBiYo',
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
            {t.tier.replace(' Layer', '').replace(' Systems', '').replace(' Design', '').replace(' Acquisition', '')}
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

export default function TalentOrgPage() {
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
            Capability · People & Org Building
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Your founding team built a great product.{' '}
            <span className="text-brand">It cannot run a 50-person company.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Most founders realise 18 months too late that the team that got them to Series A is not the team that will get them to Series B. Maxinor people operators embed inside your organisation and build the architecture, systems, and culture your business needs at the next stage.
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where Org Design Breaks</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three org problems that compound silently.
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
              The full people and org capability stack.
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">People Contexts</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Who we build org capability for.
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
              Operators who have built and scaled teams, not just advised on it.
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
                      PD
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
              Building your team for the next stage?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-grey md:text-lg">
              Whether you are designing your org structure for Series A, rebuilding culture at scale, or need performance systems that actually work, start here.
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
