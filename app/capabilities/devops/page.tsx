'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, GitMerge, Cloud, Server, Code2, BarChart3, Shield } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: GitMerge,
    title: 'CI/CD Pipeline Design',
    body: 'Automated build, test, and deployment pipelines that remove human bottlenecks from your release process. Ship on demand, not on a schedule.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    body: 'AWS, GCP, and Azure infrastructure designed for reliability, scale, and cost efficiency. Right-sized for where you are today and adaptable for where you are going.',
  },
  {
    icon: Server,
    title: 'Kubernetes and Containerisation',
    body: 'Container orchestration for teams that need to run microservices at scale without managing server complexity or suffering from environment inconsistency.',
  },
  {
    icon: Code2,
    title: 'Infrastructure as Code',
    body: 'Terraform, Pulumi, and the tooling that makes your infrastructure reproducible, version-controlled, peer-reviewed, and auditable.',
  },
  {
    icon: BarChart3,
    title: 'Observability and Monitoring',
    body: 'Logging, metrics, distributed tracing, and the alerting systems that surface problems before your users encounter them.',
  },
  {
    icon: Shield,
    title: 'DevSecOps',
    body: 'Security integrated into every stage of the pipeline: vulnerability scanning, secret management, and compliance checks that do not slow down delivery.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Culture and Toolchain Together',
    body: 'We do not just install tools. We work with your engineering team to change how they think about delivery cadence and ownership.',
  },
  {
    number: '02',
    title: 'Cost Efficiency as a First-Class Deliverable',
    body: 'Every infrastructure decision is made with cloud spend in mind. We do not build for scale you do not have yet.',
  },
  {
    number: '03',
    title: 'Security Without Slowdown',
    body: 'DevSecOps practices that add protection without adding friction to the release cycle or creating a bottleneck at compliance review.',
  },
  {
    number: '04',
    title: 'Accountability Through Stabilisation',
    body: 'We stay engaged until the pipeline is working in production and your team can own and extend it independently.',
  },
];

const industries = [
  { name: 'FinTech and Payments', desc: 'High-compliance, high-availability pipelines with security controls built for regulated financial services environments.' },
  { name: 'B2B SaaS', desc: 'Continuous delivery infrastructure that lets product teams ship features without waiting on engineering operations.' },
  { name: 'HealthTech', desc: 'HIPAA-aligned DevOps practices with audit trails and access controls designed for health data environments.' },
  { name: 'D2C and Retail', desc: 'Release automation and observability for teams managing high-traffic commerce infrastructure.' },
  { name: 'Media and Streaming', desc: 'Platform reliability engineering for media workloads with unpredictable traffic spikes and zero-downtime requirements.' },
  { name: 'Enterprise Engineering', desc: 'DevOps transformation for large engineering organisations with legacy processes and multi-team coordination challenges.' },
];

export default function DevOpsPage() {
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
            Capability · DevOps
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Releases take a week. Deployments are manual.{' '}
            <span className="text-brand">You are operating at 2010 speed.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            DevOps is not a team. It is an operating philosophy. The organisations shipping multiple times a day without weekend war rooms have invested in the pipeline, culture, and toolchain that makes it possible. We build the engineering infrastructure that changes how your team operates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['CI/CD', 'Cloud-Native', 'Security-First', 'Cost-Optimised'].map((label) => (
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
              Six DevOps capabilities. One faster engineering team.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              From CI/CD through observability, we build the infrastructure layer that lets your engineers focus on product, not operations.
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
              Most DevOps engagements install a tool and declare success. We measure success by how your team ships six months later.
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
              Ready to ship faster without breaking things?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you are starting with manual deployments or trying to fix a pipeline that has become too fragile to trust, the conversation starts with understanding where your bottleneck actually is.
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
