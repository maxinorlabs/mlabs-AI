'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, BookOpen, Building2, TrendingDown } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: TrendingDown,
    number: '01',
    title: 'The Completion Rate Problem',
    body: 'Most EdTech companies track enrolments and revenue, not outcomes. Completion rates below 20% are the norm, not the exception. When employers and institutions start asking for outcome data, companies that never measured learning effectiveness have nothing to show.',
  },
  {
    icon: Building2,
    number: '02',
    title: 'The Institutional Sales Trap',
    body: 'Selling to schools, colleges, corporates, and government bodies is a completely different motion from consumer acquisition. Most EdTech founders who pivot from B2C to B2B institutional discover too late that they have no relationships, no procurement understanding, and no product that fits the buying context.',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Credentials Without Credibility',
    body: 'A certificate from your platform means nothing if employers do not recognise it. Building credentialing that carries weight requires employer partnerships, industry validation, and sometimes regulatory alignment. Founders who skip this step discover that learner churn accelerates once the market figures out the credential has no currency.',
  },
];

const clientProblems = [
  '"We have 50K+ learners but completion rates are below 15% and employers don\'t recognise our certification."',
  '"We\'ve signed 10 institutional clients but every deployment is bespoke. Customisation is eating our margins."',
  '"Our B2C revenue is plateauing. We need a B2B institutional sales motion but have no relationships or playbook."',
  '"We\'re growing enrolments but not outcomes. Employers are starting to question the ROI of our programmes."',
];

const howWeEngage = [
  'Learning outcome and completion improvement',
  'Employer linkage and credential recognition',
  'B2B institutional sales and government GTM',
];

const architecture = [
  {
    tier: 'Learner Layer',
    description: 'Who you serve and how you reach them',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Segments',
        items: ['Students', 'Working Professionals', 'School Teachers', 'Corporate Employees', 'Government Trainees', 'Self-Learners'],
      },
      {
        label: 'Acquisition Channels',
        items: ['SEO & Content', 'Performance Marketing', 'Institutional Partnerships', 'Government Schemes', 'Referral & Community', 'Offline Channels'],
      },
    ],
  },
  {
    tier: 'Content & Curriculum Layer',
    description: 'What you teach and how it is structured',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Content Formats',
        items: ['Video Modules', 'Live Sessions', 'Assessments & Quizzes', 'Project-Based Learning', 'Case Studies', 'Simulations'],
      },
      {
        label: 'Curriculum Design',
        items: ['Learning Outcome Mapping', 'Competency Frameworks', 'Skill Taxonomy', 'Industry Alignment', 'Adaptive Paths', 'Multilingual Content'],
      },
    ],
  },
  {
    tier: 'Technology Layer',
    description: 'How you deliver and track learning',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Platform Capabilities',
        items: ['LMS / LXP', 'Mobile Learning', 'Offline Access', 'Live Class Infrastructure', 'AI Tutoring', 'Gamification'],
      },
      {
        label: 'Data & Analytics',
        items: ['Learning Analytics', 'Completion Tracking', 'Engagement Metrics', 'Assessment Intelligence', 'Cohort Analysis', 'Employer Dashboards'],
      },
    ],
  },
  {
    tier: 'Credentialing Layer',
    description: 'How you make outcomes verifiable and recognised',
    accent: 'border-purple-400',
    labelColor: 'text-purple-500',
    groups: [
      {
        label: 'Credential Types',
        items: ['Certificates', 'Micro-credentials', 'Badges', 'Degrees & Diplomas', 'Industry Certifications', 'Government Accreditation'],
      },
      {
        label: 'Recognition',
        items: ['Employer Partnerships', 'Industry Body Alignment', 'UGC / AICTE Approval', 'NSDC & Skill India', 'International Recognition', 'Blockchain Verification'],
      },
    ],
  },
  {
    tier: 'Enterprise & B2B Layer',
    description: 'How you grow beyond direct-to-consumer',
    accent: 'border-rose-400',
    labelColor: 'text-rose-500',
    groups: [
      {
        label: 'Institutional Sales',
        items: ['Corporate L&D', 'School & College Sales', 'Government Skilling Contracts', 'CSR Training', 'White-label Solutions', 'Franchise / Reseller'],
      },
      {
        label: 'GTM Motion',
        items: ['RFP & Tender Response', 'Procurement Navigation', 'Pilot to Scale Model', 'Success Manager Model', 'Partnership & Alliance', 'Channel Sales'],
      },
    ],
  },
];

const verticals = [
  {
    name: 'K-12 EdTech',
    desc: 'Products for schools, students, and parents. Requires deep curriculum alignment and institutional sales capability.',
  },
  {
    name: 'Higher Education',
    desc: 'Degree programmes, college partnerships, and campus-linked skilling that requires UGC and AICTE navigation.',
  },
  {
    name: 'Corporate L&D',
    desc: 'Enterprise learning platforms and skilling programmes sold to HR and L&D teams inside large organisations.',
  },
  {
    name: 'Government Skilling',
    desc: 'NSDC, Skill India, and state government skilling mandates. High volume, compliance-heavy, long sales cycles.',
  },
  {
    name: 'Professional Upskilling',
    desc: 'Working professionals seeking certifications, career transitions, or sector depth. Outcome and placement-linked.',
  },
  {
    name: 'Vernacular & Rural EdTech',
    desc: 'Multilingual, offline-first learning platforms targeting Tier 2 and Tier 3 markets with accessible pricing models.',
  },
];

const operators = [
  {
    name: 'Maxinor Leadership Team',
    role: 'Multi-Sector Operator Team',
    bg: 'Cross-sector operators with execution experience across edtech, skilling, and institutional sales',
    depth: 'The education sector at Maxinor draws on operators who have built and scaled businesses in adjacent sectors: government sales, B2B institutional, content operations, and workforce development. We bring a practitioner lens to the sector, not just an investor lens.',
    slug: '',
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
            {t.tier.replace(' Layer', '')}
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

export default function EducationPage() {
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
            Sector · Education
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            You have learners.{' '}
            <span className="text-brand">Employers do not recognise your outcomes yet.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            The EdTech gold rush left a graveyard of consumer apps with great content and poor outcomes.
            The real opportunity now is in institutional transformation, employer-linked skilling, and
            credentialing that actually moves the needle.
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

      {/* Coming Soon */}
      <section className="bg-warm-white px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Full Blueprint</p>
          <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
            Coming soon.
          </h2>
          <p className="mb-8 text-base font-light leading-relaxed text-grey md:text-lg">
            We&apos;re building out the full Education sector page. In the meantime, talk to the team directly.
          </p>
          <Link href="/contact" className={primaryBtn}>
            Talk to the team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Rest of page hidden until blueprint is ready — set to true to re-enable ── */}
      {false && (
      <>
      {/* Founder Quotes */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What Clients Come to Us For</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Founder quotes we hear every week.
            </h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {clientProblems.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-2xl border border-grey/15 bg-white px-5 py-4"
              >
                <span className="shrink-0 text-sm font-bold text-brand/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm font-light leading-relaxed text-grey">{quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where EdTech Founders Get Stuck</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three walls every education founder hits.
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
                className="relative rounded-[2rem] border border-grey/15 bg-warm-white p-8"
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

      {/* How We Engage */}
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
              What we do in Education.
            </h2>
          </motion.div>
          <div className="grid gap-3 md:grid-cols-3">
            {howWeEngage.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-grey/15 bg-white px-4 py-3.5"
              >
                <span className="text-brand">→</span>
                <span className="text-sm font-light text-grey">{item}</span>
              </div>
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
              The full education capability stack.
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Education Sub-Verticals</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Who we work with in Education.
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
              Operators with execution experience across education, skilling, and institutional sales.
            </h2>
          </motion.div>
          <div className="max-w-2xl">
            {operators.map((op, i) => (
              <motion.div
                key={op.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <p className="text-base font-semibold text-warm-white">{op.name}</p>
                  <p className="text-xs font-medium text-brand/80">{op.role}</p>
                  <p className="text-xs text-warm-white/40">{op.bg}</p>
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
              Building in education?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-grey md:text-lg">
              Whether you are trying to fix completion rates, break into institutional sales, or build a
              credentialing model that employers actually recognise, start here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>
                Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </>
      )}

    </div>
  );
}
