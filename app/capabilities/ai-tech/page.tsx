'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Rocket, Database, Brain, ChevronDown } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: Rocket,
    number: '01',
    title: 'The Pilot That Never Ships',
    body: 'Most Indian startups have done an AI pilot. Most of those pilots are still running 12 months later, producing dashboards nobody uses and models nobody trusts. The gap is almost always the same: AI built without understanding the business workflow, evaluated on the wrong metrics, and handed to a team that was never set up to use it. We build AI that ships and moves a business number.',
  },
  {
    icon: Database,
    number: '02',
    title: 'Tech Debt That Caps Scale',
    body: 'Early architecture decisions that seemed fine at Rs 1 Cr ARR become ceilings at Rs 10 Cr ARR. Monoliths that cannot be broken apart. Databases that cannot handle concurrent load. Third-party dependencies that own your product\'s performance. Founders who ignore this hit a wall -- not because the market dried up but because the system cannot handle the growth.',
  },
  {
    icon: Brain,
    number: '03',
    title: 'AI Strategy Without AI Reality',
    body: 'Every founder in 2026 has an AI strategy. Very few have an AI system producing real business outcomes. The distance between strategy and reality is almost always execution: the wrong use cases prioritised, the wrong tools chosen, and no operator who has actually built and shipped AI products making the technical calls.',
  },
];

const architecture = [
  {
    tier: 'Intelligence Layer',
    description: 'How you build and deploy AI that produces real outcomes',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'AI Systems',
        items: ['LLM Integration', 'RAG Systems', 'Agentic Workflows', 'Fine-tuning and Evaluation', 'Computer Vision', 'NLP and Classification'],
      },
    ],
  },
  {
    tier: 'Data Layer',
    description: 'The foundation that every AI system depends on',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'Data Infrastructure',
        items: ['Data Platform Design', 'ETL and Pipeline Architecture', 'Data Warehouse', 'Feature Engineering', 'Real-time Streaming', 'BI and Analytics'],
      },
    ],
  },
  {
    tier: 'Infrastructure Layer',
    description: 'How you build and run systems that scale',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'Engineering Infrastructure',
        items: ['Cloud Architecture', 'DevOps and CI/CD', 'API Design', 'Security and Compliance', 'Monitoring and Observability', 'Mobile and Full-Stack Engineering'],
      },
    ],
  },
];

const engagements = [
  {
    number: '01',
    title: 'AI Strategy and Use-Case Prioritisation',
    body: 'We map your business operations, identify the 2-3 AI use cases with the highest ROI, and build an execution plan that sequences by impact, not by what is technically interesting.',
  },
  {
    number: '02',
    title: 'AI Product Build and MVP',
    body: 'From scoping to working system. We design, build, and deploy AI products -- not proofs of concept. The output is a system running in production, not a deck.',
  },
  {
    number: '03',
    title: 'Agentic Automation and Workflow AI',
    body: 'Agentic systems that automate multi-step workflows, reduce manual operations, and compound over time. We design agents that are reliable, auditable, and built around your actual business processes.',
  },
  {
    number: '04',
    title: 'Tech Architecture and Debt Remediation',
    body: 'Architecture review, bottleneck identification, and a phased remediation plan that lets you grow without bringing down the house.',
  },
];

const faqs = [
  {
    q: 'We are not a tech company. Can Maxinor still help with AI?',
    a: 'Yes. Most of our AI engagements are with non-tech founders who need AI built into their business without building an internal AI team. We bring the technical capability, you bring the domain knowledge.',
  },
  {
    q: 'How is this different from hiring an AI agency?',
    a: 'Agencies build what you specify. Our operators diagnose what you actually need, build it, and stay accountable to business outcomes. We also bring senior engineering judgment, not just execution.',
  },
  {
    q: 'What AI tools and models do you work with?',
    a: 'We are model-agnostic. We use OpenAI, Anthropic, Google, and open-source models depending on the use case, cost profile, and compliance requirements. We also build custom fine-tuned models where the use case justifies it.',
  },
  {
    q: 'How long to go from strategy to working system?',
    a: 'Typically 60-90 days for a first production deployment. Complex agentic systems take longer. We set realistic timelines at the start and hold to them.',
  },
  {
    q: 'What about data privacy and security in AI systems?',
    a: 'All our AI builds include data handling, access control, and compliance architecture from the start. We do not bolt security on after the fact.',
  },
];

const operators = [
  {
    name: 'Alok Kumar',
    role: 'Entrepreneur in Residence, AI and Tech',
    bg: 'ex-Zee, StanChart, Fidelity, Oracle',
    depth: 'Technology and AI operator with a career spanning enterprise software, global financial services, and large-scale media. Alok brings the judgment to know which AI use case to build first, how to architect for scale, and how to get from lab to production with real business impact.',
    slug: 'alok-kumar',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b29541adceb2f4cf8144ad_79c886e0-fd1f-49a4-bfed-f481d5bb1f38.jpg',
  },
  {
    name: 'Amar Daing',
    role: 'Entrepreneur in Residence, Product and GTM',
    bg: 'ex-Google x Tata, OYO, Grofers',
    depth: 'Product and growth operator with deep experience scaling consumer and B2B platforms across India. Amar brings rare fluency in both what to build and how to take it to market at speed.',
    slug: 'amar-daing',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f17573e0fcd4ec3c1_1663569415671.jpeg',
  },
];

function ArchitectureExplorer() {
  const [active, setActive] = useState(0);
  const tier = architecture[active];
  const totalCaps = tier.groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="mt-12 overflow-hidden rounded-[2rem] border border-grey/15 bg-white shadow-sm">
      {/* Mobile: horizontal tab strip */}
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

      <div className="flex min-h-[400px]">
        {/* Desktop: left sidebar */}
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

        {/* Right: detail panel */}
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
              {/* Panel header */}
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

              {/* Capability groups */}
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

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-[1.5rem] border border-grey/15 bg-white"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-warm-white/50"
            >
              <span className="text-sm font-semibold text-navy md:text-base">{faq.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 text-brand"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <p className="px-7 pb-6 text-sm font-light leading-relaxed text-grey">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function AITechPage() {
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
            Capability · AI and Tech
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            Most AI pilots never ship.{' '}
            <span className="text-brand">Ours do.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Most Indian startups have done an AI pilot. Most of those pilots are still running 12 months later. Maxinor AI operators embed inside your team, build AI that ships, and stay accountable to business outcomes -- not dashboards.
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
              All Capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Where AI and Tech Founders Get Stuck</p>
            <h2 className="max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Three patterns that keep AI stuck at pilot stage.
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

      {/* Architecture Stack */}
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
              The full AI and tech capability stack.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              Three layers. Every capability mapped. Select a layer to explore what sits inside it and where the complexity lives.
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

      {/* Engagement Deliverables */}
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
              What we actually build with you.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {engagements.map((e, i) => (
              <motion.div
                key={e.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative rounded-[1.5rem] border border-grey/15 bg-white p-7"
              >
                <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-display font-bold leading-none text-brand/5">
                  {e.number}
                </span>
                <div className="mb-3 h-0.5 w-8 bg-brand" />
                <h3 className="mb-2 text-base font-display font-semibold text-navy">{e.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{e.body}</p>
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
              Operators who have built and shipped AI, not just advised on it.
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

      {/* FAQ */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Common Questions</p>
            <h2 className="max-w-xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
              Questions founders usually ask first.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FAQAccordion />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy px-6 py-20 text-center md:py-28 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/5 blur-[100px]" />
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Work With Us</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Ready to ship AI that moves the number?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you are stuck at the pilot stage, hitting a tech scaling wall, or need a senior operator to make the technical calls, start here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={primaryBtn}>
                Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/capabilities" className={ghostBtn}>
                All Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
