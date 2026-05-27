'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Search, Bot, GitMerge, FileText, Layers, BarChart3 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Search,
    title: 'Process Discovery and Assessment',
    body: 'Identify which processes have the highest automation ROI before building anything. We map, measure, and prioritise so your automation budget goes where it creates the most value.',
  },
  {
    icon: Bot,
    title: 'Bot Development',
    body: 'Attended and unattended bots built for reliability, exception handling, and business continuity. Every bot is designed for the failure cases, not just the happy path.',
  },
  {
    icon: GitMerge,
    title: 'Workflow Automation',
    body: 'End-to-end workflow automation connecting systems, approvals, notifications, and decision points across your operational processes.',
  },
  {
    icon: FileText,
    title: 'Intelligent Document Processing',
    body: 'Automated extraction, classification, and processing of invoices, contracts, forms, and reports. Structured output from unstructured documents at scale.',
  },
  {
    icon: Layers,
    title: 'System Integration Automation',
    body: 'RPA bridges between legacy systems that do not have native APIs, connecting your older infrastructure to modern workflows without expensive re-platforming.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring and Governance',
    body: 'Bot performance dashboards, exception management, SLA tracking, and the audit trails that compliance teams and management require.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Process-First, Not Tool-First',
    body: 'We identify the right processes to automate before choosing a platform. Most RPA failures happen when the tool is chosen before the problem is understood.',
  },
  {
    number: '02',
    title: 'Exception Handling Built In',
    body: 'Every bot we build includes robust error handling and clear human escalation paths. Edge cases are designed for, not discovered in production.',
  },
  {
    number: '03',
    title: 'Compliance-Ready from Day One',
    body: 'Audit logs, access controls, and governance frameworks are embedded from the start. Retrofitting compliance into automated processes is expensive and incomplete.',
  },
  {
    number: '04',
    title: 'Change Management Included',
    body: 'We prepare your team for the transition to automation: what changes, what does not, and how to manage the bots once we hand over.',
  },
];

const industries = [
  {
    name: 'BFSI and FinTech',
    desc: 'Account processing, KYC verification, reconciliation, and the high-volume repetitive workflows that consume back-office capacity in financial services.',
  },
  {
    name: 'Healthcare and Pharma',
    desc: 'Claims processing, patient data management, regulatory reporting, and the document-heavy workflows that slow clinical and administrative operations.',
  },
  {
    name: 'Manufacturing and Logistics',
    desc: 'Purchase orders, inventory updates, supplier communications, and the operational data flows that connect production to delivery.',
  },
  {
    name: 'HR and Finance Operations',
    desc: 'Payroll processing, onboarding workflows, invoice management, and the routine tasks that consume high-value team capacity in shared services functions.',
  },
  {
    name: 'Legal Operations',
    desc: 'Contract extraction, compliance monitoring, document review, and the structured-data tasks buried inside unstructured legal documents.',
  },
  {
    name: 'Government and Public Sector',
    desc: 'Citizen-facing form processing, inter-department data transfers, and the high-volume administrative workflows that benefit most from reliable automation.',
  },
];

export default function RPAPage() {
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
            Capability · Robotic Process Automation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Your team is doing the same task every day.{' '}
            <span className="text-brand">A machine should be doing it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            RPA is not about replacing people. It is about redirecting your best people away from repetitive, error-prone work toward the decisions only humans can make. The companies that automate intelligently scale their output without scaling their headcount proportionally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Process-First', 'Audit-Ready', 'Exception-Handled', 'Scalable'].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-warm-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {label}
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className={primaryBtn}>
              Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/capabilities" className={ghostBtn}>
              All capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What We Do</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Six RPA capabilities. Zero guesswork.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              From process discovery through governance, we run the full automation lifecycle with the operator discipline that separates successful RPA programmes from expensive shelf projects.
            </p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-[2rem] border border-grey/15 bg-white p-7 transition-all duration-300 hover:border-brand/25 hover:shadow-md"
              >
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

      {/* Why Maxinor */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Why Maxinor</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              What makes our approach different.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              RPA projects fail when they start with the wrong process, skip exception handling, or ignore change management. We address all three before writing a single automation script.
            </p>
          </motion.div>
          <div className="grid gap-5 md:gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative grid gap-5 rounded-[2rem] border border-grey/15 bg-warm-white p-7 transition-all duration-500 hover:border-brand/25 hover:shadow-md md:grid-cols-[auto_1fr] md:items-start md:gap-8 md:p-9"
              >
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

      {/* Industries */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Industries We Serve</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Built for every sector we work in.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((v, i) => (
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

      {/* CTA */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Get Started</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Ready to automate the work your team should not be doing?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you are starting your first automation programme or trying to rescue one that stalled, the conversation starts with understanding which processes are costing you the most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>
                Start the conversation <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5"
              >
                All capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
