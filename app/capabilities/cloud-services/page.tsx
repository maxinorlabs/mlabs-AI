'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Map, Cloud, Layers, BarChart3, Shield, Code2 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Map,
    title: 'Cloud Strategy and Assessment',
    body: 'Evaluate your current infrastructure, define the target architecture, and sequence the migration without disrupting operations or creating business risk.',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    body: 'From lift-and-shift to full re-architecture: migration plans that protect uptime, data integrity, and business continuity throughout the transition.',
  },
  {
    icon: Layers,
    title: 'Multi-Cloud Architecture',
    body: 'AWS, GCP, and Azure architectures designed for the right blend of capability, cost, compliance, and vendor risk management.',
  },
  {
    icon: BarChart3,
    title: 'Cloud Cost Optimisation',
    body: 'Audit your cloud spend, right-size resources, identify waste, and build the FinOps discipline that keeps cloud costs under control as you scale.',
  },
  {
    icon: Shield,
    title: 'Cloud Security',
    body: 'Identity and access management, network security, data encryption, and compliance frameworks for cloud environments that meet the requirements of regulated industries.',
  },
  {
    icon: Code2,
    title: 'Cloud-Native Development',
    body: 'Serverless, containers, and the engineering practices that make applications cloud-native from the first line of code rather than cloud-hosted as an afterthought.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Strategy Before Migration',
    body: 'We assess and architect before we migrate. Running a migration without a clear target architecture is the most common and most expensive cloud mistake.',
  },
  {
    number: '02',
    title: 'Cost as a First-Class Concern',
    body: 'Cloud economics are designed in, not optimised for after the bill arrives. Every architecture decision is made with the spend model in mind.',
  },
  {
    number: '03',
    title: 'Security Without Slowdown',
    body: 'Cloud security is embedded in every infrastructure decision. It does not slow down development when it is part of the architecture.',
  },
  {
    number: '04',
    title: 'Accountability Through Stabilisation',
    body: 'We stay engaged through go-live, stabilisation, and the first optimisation cycle. Most cloud problems surface 90 days after migration.',
  },
];

const industries = [
  { name: 'FinTech and Payments', desc: 'Secure, compliant cloud infrastructure for payment processing, core banking, and financial data workloads with high availability requirements.' },
  { name: 'HealthTech and Life Sciences', desc: 'HIPAA and HITRUST-aligned cloud architecture for health data platforms, clinical applications, and life sciences research environments.' },
  { name: 'D2C and Retail', desc: 'Scalable cloud infrastructure for commerce platforms managing seasonal traffic spikes, omnichannel data, and real-time inventory.' },
  { name: 'Media and Streaming', desc: 'Cloud-native media infrastructure for streaming platforms with CDN strategy, transcoding pipelines, and global distribution requirements.' },
  { name: 'EdTech', desc: 'Cloud architecture for education platforms handling variable load patterns, video delivery, and the data compliance requirements of student information.' },
  { name: 'Enterprise and Manufacturing', desc: 'Hybrid and multi-cloud strategy for enterprise organisations migrating from on-premise infrastructure with complex integration and governance requirements.' },
];

export default function CloudServicesPage() {
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
            Capability · Cloud Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            You are paying for cloud.{' '}
            <span className="text-brand">You are not getting cloud economics.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Cloud adoption without cloud discipline creates complexity and cost, not efficiency. The organisations that get cloud economics right approach it as a strategy, not a hosting decision. We help companies migrate, architect, and operate in the cloud in a way that compounds over time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Multi-Cloud', 'Cost-Optimised', 'Security-First', 'Migration-Ready'].map((label) => (
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
              Six cloud capabilities. One team from strategy to operation.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              From cloud strategy through cloud-native development, we cover the full cloud lifecycle with the discipline that turns cloud spend into cloud returns.
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
              Most cloud engagements optimise for speed of migration. We optimise for cost, security, and the operational maturity that makes cloud economics work at your scale.
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
              Ready to get real returns from your cloud investment?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you are planning a migration, trying to control cloud spend, or building cloud-native from the start, the conversation begins with understanding your current state and your target outcome.
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
