'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Layers, GitMerge, Database, Zap, BarChart3, Shield } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Layers,
    title: 'Data Architecture Design',
    body: 'Cloud-native data architectures designed for scale, reliability, and business accessibility. We design before we build, and we build for what the business needs in three years, not three months.',
  },
  {
    icon: GitMerge,
    title: 'ETL and Data Pipelines',
    body: 'Automated ingestion, transformation, and loading pipelines that keep your data fresh, reliable, and consistent across every downstream system.',
  },
  {
    icon: Database,
    title: 'Data Warehouse and Lakehouse',
    body: 'Unified storage and querying infrastructure that connects your operational and analytical systems without the cost and complexity of legacy warehouse architectures.',
  },
  {
    icon: Zap,
    title: 'Real-time Analytics',
    body: 'Streaming data infrastructure for businesses that need to act on data as it happens: fraud detection, live personalisation, operational monitoring.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    body: 'Dashboards, self-serve reports, and embedded analytics that bring data to every decision-maker without requiring them to know SQL.',
  },
  {
    icon: Shield,
    title: 'Data Governance',
    body: 'Data cataloguing, quality management, lineage tracking, and access control that make your data trustworthy, auditable, and compliant.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Architecture Before Tools',
    body: 'We design the right data architecture before choosing platforms or cloud providers. The tool follows the requirement, not the reverse.',
  },
  {
    number: '02',
    title: 'Governance Embedded, Not Added',
    body: 'Data quality controls, access frameworks, and lineage tracking are built in from day one. Retrofitting governance is expensive. We do not let you get there.',
  },
  {
    number: '03',
    title: 'Business Outcome Focused',
    body: 'We measure success by the decisions your teams make with the data, not the volume of data stored or the number of pipelines running.',
  },
  {
    number: '04',
    title: 'Operator-Led Delivery',
    body: 'Experienced data engineers who have built production systems at scale, not analysts who have built dashboards.',
  },
];

const industries = [
  {
    name: 'BFSI and FinTech',
    desc: 'Real-time transaction data, regulatory reporting pipelines, risk analytics infrastructure, and audit-ready data governance for financial services businesses.',
  },
  {
    name: 'Healthcare and Life Sciences',
    desc: 'Clinical data platforms, patient data interoperability, research analytics, and HIPAA-compliant data architecture for healthcare providers and life sciences companies.',
  },
  {
    name: 'D2C and Retail',
    desc: 'Customer data platforms, inventory analytics, demand forecasting infrastructure, and unified commerce data for consumer businesses operating across channels.',
  },
  {
    name: 'Media and Content',
    desc: 'Content performance analytics, audience data platforms, programmatic data infrastructure, and first-party data strategy for media businesses.',
  },
  {
    name: 'Enterprise and B2B',
    desc: 'Enterprise data integration, cross-system reporting, operational analytics, and data mesh architecture for complex B2B organisations.',
  },
  {
    name: 'Government and Public Sector',
    desc: 'Open data infrastructure, citizen analytics, programme performance reporting, and compliance-grade data governance for public sector organisations.',
  },
];

export default function BigDataPage() {
  return (
    <div className="font-sans">

      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Capability · Big Data
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl">
            Your data exists.{' '}
            <span className="text-brand">It is not yet working for you.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            Most companies have more data than they can process and less insight than they need. The gap between raw data and actionable intelligence is almost always an architecture problem, not a volume problem. We build the infrastructure that turns data into a decision-making asset.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mb-10 flex flex-wrap gap-3">
            {['Architecture-First', 'Real-time Ready', 'Governance-Built-In', 'Scalable'].map((label) => (
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
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">Six data capabilities. Built for production.</h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">From architecture through governance, we cover the full data engineering stack. Every layer is designed to compound over time, not create debt.</p>
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
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">Data projects fail for one of three reasons: wrong architecture, no governance, or no business ownership of the outcome. We address all three from day one.</p>
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
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">Ready to turn your data into a business asset?</h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">Whether you are starting from a spreadsheet or trying to fix a broken data platform, the conversation starts with understanding what decisions you need to make.</p>
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
