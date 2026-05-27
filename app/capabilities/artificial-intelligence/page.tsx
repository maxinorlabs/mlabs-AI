'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Map, Cpu, MessageSquare, Eye, GitBranch, Zap } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Map,
    title: 'AI Strategy and Roadmap',
    body: 'Define where AI adds the most value in your business before writing a single line of code. Use-case prioritisation, ROI modelling, and a sequenced roadmap tied to your business milestones.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    body: 'Custom ML models built for your specific data, domain, and decision requirements. Classification, regression, clustering, and forecasting systems that run in production.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    body: 'Language models, text classification, sentiment analysis, and conversational AI built for real business workflows, not demos.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    body: 'Image and video intelligence for quality control, document processing, facial recognition, and operational automation across physical and digital environments.',
  },
  {
    icon: GitBranch,
    title: 'Generative AI and LLMs',
    body: 'LLM integration, fine-tuning, RAG systems, and prompt engineering for business applications that need language intelligence embedded in their core workflows.',
  },
  {
    icon: Zap,
    title: 'AI in Production',
    body: 'MLOps, model monitoring, retraining pipelines, and the infrastructure that keeps AI systems working reliably after go-live.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Strategy Before Stack',
    body: 'We define the use case and the ROI model before recommending a model or a tool. Most AI engagements fail because they start with the technology.',
  },
  {
    number: '02',
    title: 'Domain-Trained, Not Generic',
    body: 'Our AI builds are aligned to specific industry contexts: FinTech risk models, healthcare NLP, D2C recommendation engines. Not general-purpose prototypes.',
  },
  {
    number: '03',
    title: 'Operator Ownership of Deployment',
    body: 'We do not stop at the model. We own the path to production including integration, testing, monitoring, and the first 90 days of operation.',
  },
  {
    number: '04',
    title: 'Accountability to Business Outcomes',
    body: 'Every engagement is measured against business metrics: cost reduction, revenue lift, decision speed. Not model accuracy scores.',
  },
];

const industries = [
  {
    name: 'FinTech',
    desc: 'Risk scoring, fraud detection, credit decisioning, and regulatory automation for financial services businesses operating at scale.',
  },
  {
    name: 'Healthcare',
    desc: 'Clinical NLP, diagnostic imaging AI, patient pathway optimisation, and compliance-aware ML for healthcare providers and platforms.',
  },
  {
    name: 'D2C and Retail',
    desc: 'Recommendation engines, demand forecasting, churn prediction, and personalisation systems for consumer businesses.',
  },
  {
    name: 'Media and Publishing',
    desc: 'Content intelligence, audience segmentation, automated tagging, and editorial AI for media companies managing large content libraries.',
  },
  {
    name: 'EdTech',
    desc: 'Adaptive learning systems, assessment automation, learner analytics, and content personalisation for education platforms.',
  },
  {
    name: 'Legal and Compliance',
    desc: 'Contract analysis, regulatory monitoring, document classification, and due diligence automation for legal and compliance-heavy businesses.',
  },
];

export default function ArtificialIntelligencePage() {
  return (
    <div className="font-sans">

      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Capability · Artificial Intelligence
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl">
            Everyone is exploring AI.{' '}
            <span className="text-brand">Your competitors are already deploying it.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            Artificial intelligence is no longer a competitive advantage. It is a competitive requirement. The difference between companies winning with AI and those stuck in pilot mode is not the technology. It is operator ownership of the full build, deployment, and iteration cycle.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mb-10 flex flex-wrap gap-3">
            {['Strategy-First', 'Production-Grade', 'Domain-Specific', 'Operator-Led'].map((label) => (
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
            <h2 className="mb-4 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">Six AI capabilities. One accountable team.</h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">From strategy through production, we cover the full AI build cycle. No handoffs between strategy consultants and implementation teams.</p>
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
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">Most AI vendors sell you a capability. We sell you an outcome. That changes everything about how we approach the engagement.</p>
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
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">Ready to move from AI exploration to AI execution?</h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">Whether you are building your first AI product or scaling a system that already exists, the conversation starts with an operator who has done it before.</p>
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
