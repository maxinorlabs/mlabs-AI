'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Layers, Globe, GitBranch, Users, TrendingUp, BarChart3 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Layers,
    title: 'Platform Architecture',
    body: 'Design the technical and economic architecture of a platform from first principles. The structural decisions made here determine whether you build a product or a business.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Design',
    body: 'Define who participates in your platform, how value flows between participants, and what incentive structures keep supply and demand growing together.',
  },
  {
    icon: GitBranch,
    title: 'API Strategy',
    body: 'API-first design that enables the partner integrations and developer ecosystem your platform depends on. Documented, versioned, and built for third-party adoption.',
  },
  {
    icon: Users,
    title: 'Network Effect Engineering',
    body: 'Identify and engineer the specific network effects that make your platform defensible. Not all network effects are equal. We help you find the ones that compound.',
  },
  {
    icon: TrendingUp,
    title: 'Platform Monetisation',
    body: 'Design the business model, pricing architecture, take rate, and revenue streams of a platform business. Monetisation designed alongside the platform, not retrofitted.',
  },
  {
    icon: BarChart3,
    title: 'Marketplace Strategy',
    body: 'Two-sided marketplace design including supply acquisition, demand generation, liquidity strategies, and the trust and safety systems that keep the marketplace healthy.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Platform Thinking, Not Feature Thinking',
    body: 'We help companies make the strategic shift from products to ecosystems. That shift starts with how you think about who creates value for whom.',
  },
  {
    number: '02',
    title: 'Monetisation from the Start',
    body: 'Revenue architecture is designed alongside the platform. Figuring out monetisation after you have launched is the most expensive way to build a platform business.',
  },
  {
    number: '03',
    title: 'Technical and Strategic in One Engagement',
    body: 'We connect business strategy and engineering architecture. Platforms fail when strategy and technology are designed separately.',
  },
  {
    number: '04',
    title: 'Real Platform Operator Experience',
    body: 'Our operators have built and scaled platform businesses, not just studied them. That is where the useful knowledge lives.',
  },
];

const industries = [
  { name: 'FinTech and Payments', desc: 'Payment network and financial platform strategy for companies building multi-sided financial infrastructure with regulatory and trust requirements.' },
  { name: 'Media and Content', desc: 'Content platform architecture for media businesses building creator, publisher, and audience ecosystems with monetisation models that scale.' },
  { name: 'D2C and Marketplace', desc: 'Two-sided marketplace design for consumer and B2B platforms navigating supply acquisition, liquidity, and take-rate decisions.' },
  { name: 'EdTech', desc: 'Learning platform strategy for education businesses connecting instructors, learners, and employers in ways that create compounding network value.' },
  { name: 'B2B SaaS', desc: 'Platform extension strategy for SaaS companies building partner ecosystems, integration marketplaces, and developer communities.' },
  { name: 'Enterprise Technology', desc: 'Enterprise platform strategy for technology companies building internal developer platforms or externally-facing ecosystem businesses.' },
];

export default function PlatformStrategyPage() {
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
            Capability · Platform Strategy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            You have a product.{' '}
            <span className="text-brand">You do not yet have a platform.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            A platform is not a product with more users. It is a fundamentally different architecture of value creation where every participant makes every other participant more valuable. Getting from product to platform requires a different strategy, a different technical architecture, and a different go-to-market motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Ecosystem Thinking', 'Network Effects', 'API-First', 'Monetisation-Ready'].map((label) => (
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
              Six platform capabilities. One ecosystem built to compound.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              From architecture through monetisation, we cover the full platform strategy and execution cycle with operators who have done it before.
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
              Platform strategy fails when it is treated as product strategy with network effects added. We start from the platform model and work backward to the architecture and go-to-market.
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
              Ready to build a platform, not just a product?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you are starting from a product and looking to platform-ise or designing a marketplace from scratch, the conversation starts with understanding what value you can unlock for participants.
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
