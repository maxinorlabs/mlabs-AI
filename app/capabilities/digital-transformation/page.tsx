'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Map, RefreshCw, Layers, Users, Building2, BarChart3 } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const offerings = [
  {
    icon: Map,
    title: 'Transformation Strategy',
    body: 'Define the business outcomes, sequence the initiatives, and build the case for change that gets leadership alignment before any technology decision is made.',
  },
  {
    icon: RefreshCw,
    title: 'Process Re-engineering',
    body: 'Redesign the processes that technology will automate or augment. Automating a broken process makes it faster and more expensive. We fix it first.',
  },
  {
    icon: Layers,
    title: 'Technology Modernisation',
    body: 'Migrate from legacy systems without disrupting operations or losing the institutional knowledge embedded in your current processes.',
  },
  {
    icon: Users,
    title: 'Change Management',
    body: 'The people side of transformation: stakeholder alignment, capability building, communication planning, and the adoption work that determines whether the technology actually gets used.',
  },
  {
    icon: Building2,
    title: 'Operating Model Design',
    body: 'Redesign how your organisation is structured to work in a digital-first way. Roles, decision rights, and operating rhythms aligned to how work actually flows.',
  },
  {
    icon: BarChart3,
    title: 'Programme Management',
    body: 'End-to-end PMO for multi-workstream transformations with milestone accountability, risk management, and the reporting that keeps leadership informed without surprises.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Operators, Not Consultants',
    body: 'We are accountable to the outcome, not the recommendation. That changes who we hire, how we work, and what we measure.',
  },
  {
    number: '02',
    title: 'Business Outcomes Before Technology',
    body: 'Every initiative is tied to a measurable business result before it begins. Technology is chosen to serve the outcome, not the other way around.',
  },
  {
    number: '03',
    title: 'Transformation Without Disruption',
    body: 'We sequence transformation to protect operational continuity throughout. The business keeps running while it changes.',
  },
  {
    number: '04',
    title: 'Embedded, Not External',
    body: 'Our operators work inside your organisation, not from a consulting firm office. That gives them context that no discovery workshop can replicate.',
  },
];

const industries = [
  { name: 'BFSI and Financial Services', desc: 'Regulatory-compliant digital transformation for banks, insurers, and financial institutions with legacy core systems and complex governance requirements.' },
  { name: 'Healthcare and Life Sciences', desc: 'Patient-centred transformation programmes that modernise clinical and operational systems without disrupting care delivery.' },
  { name: 'Manufacturing', desc: 'Industry 4.0 adoption for manufacturers moving from manual processes to connected, data-driven operations.' },
  { name: 'Retail and Consumer', desc: 'Omnichannel transformation for retailers building integrated customer experiences across physical and digital channels.' },
  { name: 'Education', desc: 'Digital learning transformation for institutions modernising how they deliver, assess, and administer education.' },
  { name: 'Government and Public Sector', desc: 'Citizen-service transformation programmes that modernise public services within the constraints of public sector procurement and governance.' },
];

export default function DigitalTransformationPage() {
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
            Capability · Digital Transformation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            You have the transformation budget.{' '}
            <span className="text-brand">No one is accountable for the outcome.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg"
          >
            Digital transformation fails when it is treated as a technology project. It succeeds when it is treated as a business change programme with technology as the enabler. We run transformations where operators, not consultants, are accountable for results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {['Outcome-Accountable', 'Operator-Led', 'Phased Execution', 'Business-Aligned'].map((label) => (
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
              Six transformation capabilities. One accountable team.
            </h2>
            <p className="max-w-xl text-base font-light leading-relaxed text-grey">
              From strategy through programme management, we cover the full transformation lifecycle with operator-led execution at every stage.
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
              Digital transformation has a failure rate because it is treated as an IT project. We treat it as a business change programme and hold ourselves to business outcomes.
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
              Ready to run a transformation that actually delivers?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Whether you are starting a new transformation or trying to rescue one that has lost momentum, the conversation starts with understanding what outcome you are actually accountable for.
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
