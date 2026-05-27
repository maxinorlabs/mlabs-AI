'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Code2, Globe, GitBranch, Layers, RefreshCw, CheckCircle2 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    body: 'Bespoke software built to your exact business logic. We build what you need, not a modified version of a template that costs more to adapt than to rebuild.',
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    body: 'Scalable, performant web applications from MVP to enterprise grade. React, Next.js, and the full modern stack, built for the load your product will eventually see.',
  },
  {
    icon: GitBranch,
    title: 'API Design and Development',
    body: 'Clean, documented, versioned APIs that power your product and enable the integrations your customers will eventually demand.',
  },
  {
    icon: Layers,
    title: 'SaaS Platform Engineering',
    body: 'Multi-tenant architecture, billing integration, usage metering, and the operational backbone of B2B software built for the compliance requirements of enterprise buyers.',
  },
  {
    icon: RefreshCw,
    title: 'Legacy Modernisation',
    body: 'Migrate from outdated systems without losing data, functionality, or uptime. We have run migrations that kept operations running throughout.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance and Testing',
    body: 'Test automation, performance testing, and the QA discipline that catches problems before your users do. Coverage that actually reflects how the product is used.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Architecture Thinking from Day One',
    body: 'We design for the product you are building toward, not just the one you need today. That decision at the start saves six months of refactoring at Series B.',
  },
  {
    number: '02',
    title: 'Code Your Team Can Own',
    body: 'Every engagement produces documented, tested, handover-ready code. We do not create dependencies on us.',
  },
  {
    number: '03',
    title: 'No Orphaned Work',
    body: 'We stay accountable through deployment and stabilisation, not just delivery of a repository.',
  },
  {
    number: '04',
    title: 'Operator Context in Every Build',
    body: 'Our engineers understand the business problem they are solving, not just the ticket they are implementing.',
  },
];

const industries = [
  {
    name: 'FinTech and Payments',
    desc: 'Payment infrastructure, lending platforms, compliance-aware software, and financial product engineering built to the standards of regulated markets.',
  },
  {
    name: 'HealthTech',
    desc: 'Clinical software, patient-facing applications, EHR integrations, and health data platforms built to meet the regulatory and reliability requirements of healthcare.',
  },
  {
    name: 'D2C and Retail',
    desc: 'Commerce platforms, inventory systems, order management, and customer experience applications for consumer businesses scaling across channels.',
  },
  {
    name: 'EdTech',
    desc: 'Learning management systems, assessment platforms, content delivery infrastructure, and learner-facing applications for education businesses.',
  },
  {
    name: 'B2B SaaS',
    desc: 'Multi-tenant platforms, enterprise integrations, self-serve product infrastructure, and the full technical stack of B2B software businesses.',
  },
  {
    name: 'Enterprise and Corporates',
    desc: 'Internal tooling, workflow automation, legacy modernisation, and the custom software that large organisations need but cannot source off the shelf.',
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="font-sans">

      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Capability · Software Development
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl">
            Your product vision is clear.{' '}
            <span className="text-brand">The team that can execute it is the question.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            Software development is not a commodity. The teams that build maintainable, scalable products think differently from the ones that ship fast and create debt. We build software that your business can depend on at Series A and at Series C.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mb-10 flex flex-wrap gap-3">
            {['Product-Led', 'Scalable Architecture', 'Full-Stack', 'Quality-First'].map((label) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-warm-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {label}
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap gap-4">
            <Link href="/contact" className={primaryBtn}>Start the conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            <Link href="/capabilities" className={ghostBtn}>All capabilities</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What We Do</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">Six development capabilities. One team accountable.</h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">From custom builds to legacy migration, we cover the full software delivery cycle with operator accountability at every stage.</p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="group rounded-[2rem] border border-grey/15 bg-white p-7 transition-all duration-300 hover:border-brand/25 hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 transition-colors group-hover:bg-brand/15">
                  <o.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-2 text-base font-display font-semibold text-navy">{o.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{o.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Why Maxinor</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">What makes our approach different.</h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">Most development engagements deliver code. We deliver working software that your business can depend on. The difference is who is accountable for what happens after deployment.</p>
          </motion.div>
          <div className="grid gap-5 md:gap-6">
            {differentiators.map((d, i) => (
              <motion.div key={d.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative grid gap-5 rounded-[2rem] border border-grey/15 bg-warm-white p-7 transition-all duration-500 hover:border-brand/25 hover:shadow-md md:grid-cols-[auto_1fr] md:items-start md:gap-8 md:p-9">
                <span className="text-4xl font-display font-bold text-brand/15 md:text-5xl">{d.number}</span>
                <div>
                  <h3 className="mb-3 text-lg font-display font-semibold text-navy">{d.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-grey md:text-base">{d.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Industries We Serve</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">Built for every sector we work in.</h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((v, i) => (
              <motion.div key={v.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="rounded-[1.5rem] border border-grey/15 bg-white p-6">
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-2 text-base font-display font-semibold text-navy">{v.name}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Get Started</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">Ready to build software that actually scales?</h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">Whether you are starting from scratch or inheriting a codebase that is slowing you down, the conversation starts with understanding what you are building toward.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>Start the conversation <ArrowRight className="h-4 w-4 shrink-0" /></Link>
              <Link href="/capabilities" className="inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5">All capabilities</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
