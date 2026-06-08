import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Map,
  Layers,
  Building2,
  Users,
  BarChart3,
  ShieldCheck,
  Zap,
  TrendingUp,
} from 'lucide-react';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Global Capability Centre (GCC)?',
      acceptedAnswer: { '@type': 'Answer', text: 'A Global Capability Centre (GCC) is a dedicated offshore or nearshore unit set up by a company to deliver specific business functions such as technology, operations, finance, or analytics. India is the top destination for GCCs globally due to its deep talent pool and cost advantage.' },
    },
    {
      '@type': 'Question',
      name: 'What does Maxinor offer for AI GCC setup in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Maxinor provides end-to-end AI GCC setup including strategy and roadmap, entity setup and legal compliance, talent acquisition, Centre of Excellence enablement, delivery management, AI technology integration, and ongoing optimisation. All engagements are operator-led, not consulting-led.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up a GCC with Maxinor?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most Maxinor GCC engagements reach first delivery within 90 days of kickoff using tested playbooks, governance models, and operational accelerators that compress setup timelines and reduce execution risk.' },
    },
    {
      '@type': 'Question',
      name: 'Which sectors does Maxinor support for GCC setup?',
      acceptedAnswer: { '@type': 'Answer', text: 'Maxinor supports GCC setup across BFSI, Healthcare, D2C and Consumer, Media and Content, SaaS, and more. Each operating model is tailored to the sector rather than using a generic off-the-shelf playbook.' },
    },
    {
      '@type': 'Question',
      name: 'Who should consider an AI GCC in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Global enterprises looking to reduce costs and access deep AI and engineering talent, growth-stage startups building tech or operations capability without full entity overhead, and Indian SMEs wanting to scale business functions through a structured GCC model.' },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Global Capability Centre | Build Your India Tech Hub',
  description: 'Set up and operate your Global Capability Centre in India. End-to-end GCC setup, talent acquisition, infrastructure, and ongoing management by experienced operators.',
};

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const services = [
  {
    icon: Map,
    title: 'AI GCC Strategy & Transformation Roadmap',
    body: 'We define your AI GCC vision, assess readiness, identify high-impact use cases, and create a phased execution plan. Every engagement starts with a strategy that maps capability directly to business outcome.',
  },
  {
    icon: Layers,
    title: 'Centre of Excellence (CoE) Enablement',
    body: 'We help you build CoEs that drive AI innovation, enable knowledge reuse, and accelerate capability sharing across global teams. From applied AI research to engineering delivery, your CoE becomes a strategic competitive asset.',
  },
  {
    icon: Building2,
    title: 'Entity Setup, Legal & Compliance',
    body: 'End-to-end entity setup, regulatory compliance, infrastructure readiness, and operational governance to launch your AI GCC in India with full legal standing and no loose ends.',
  },
  {
    icon: Users,
    title: 'Talent Acquisition & Capability Building',
    body: 'We recruit, onboard, and develop high-performing AI, engineering, and operations teams aligned to your business goals. Talent is not just placed. It is built, retained, and held to outcomes.',
  },
  {
    icon: BarChart3,
    title: 'Delivery Management & Performance Governance',
    body: 'KPI tracking, SLA governance, and performance dashboards that ensure accountability and continuous improvement across your GCC operations from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk, Security & Regulatory Compliance',
    body: 'Standardised risk frameworks, data security protocols, and AI governance structures embedded across all GCC operations. Compliance is built in from the start, not retrofitted later.',
  },
  {
    icon: Zap,
    title: 'AI Technology & Process Automation',
    body: 'From DevOps and cloud enablement to agentic AI workflows and LLM integration, we equip your GCC with scalable, AI-native technology foundations that compound over time.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Optimisation & Strategic Scaling',
    body: 'Continuous performance monitoring, identification of optimisation opportunities, and structured support for capability expansion and geographic scale-up as your GCC matures.',
  },
];

const differentiators = [
  {
    number: '01',
    title: 'Operator-Led, Not Consulting-Led',
    body: 'Every GCC engagement is led by operators who have built and run functions inside real businesses. Not consultants who have only advised. Accountability is embedded from day one, not added as a contractual footnote.',
  },
  {
    number: '02',
    title: 'AI-Native from the Ground Up',
    body: 'We do not bolt AI onto existing operations. Every GCC we design is architected with AI at the core: intelligent workflows, automated reporting, agentic process layers, and AI-assisted talent functions from the start.',
  },
  {
    number: '03',
    title: 'Full-Lifecycle GCC Management',
    body: 'From location strategy and entity setup through talent, operations, governance, and scale-up, we manage the complete GCC lifecycle. One partner accountable from day one to steady state.',
  },
  {
    number: '04',
    title: 'Domain-Aligned Operating Models',
    body: 'Our GCC frameworks are tailored for BFSI, Healthcare, D2C, Media, SaaS, and more. Each model aligns talent, compliance, and operating rhythm to your sector, not a generic off-the-shelf playbook.',
  },
  {
    number: '05',
    title: '90 Days to First Delivery',
    body: 'Using tested playbooks, governance models, and operational accelerators, we compress GCC setup timelines and reduce execution risk. Most engagements reach first delivery within 90 days of kickoff.',
  },
];

const stats = [
  { value: '90 Days', label: 'To First Delivery' },
  { value: '7 Domains', label: 'Sector Coverage' },
  { value: 'Operator-Led', label: 'Execution Model' },
];

export default function CapabilityCentrePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="font-sans">

      {/* ── Section 1: Hero ── */}
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
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            AI Global Capability Centre
          </p>
          <h1 className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl">
            India&apos;s first operator-led{' '}
            <span className="text-brand">AI Global Capability Centre.</span>
          </h1>
          <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            Launch, scale, and operate your AI GCC with operator-led execution and AI-native
            infrastructure. We give global enterprises and ambitious Indian businesses a single
            partner to design and run a high-performance Global Capability Centre, built for
            how business moves today.
          </p>
          <div className="mb-10 flex flex-wrap gap-3 md:gap-4">
            {['Operator-Led', 'AI-Native', 'End-to-End', '90 Days to First Delivery'].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-warm-white/80 md:px-5 md:py-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className={primaryBtn}>
              Build your AI GCC <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/capabilities" className={ghostBtn}>
              Our capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: Value Prop ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What We Build</p>
          <h2 className="mb-6 max-w-3xl text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
            Building AI GCCs with operator precision and execution excellence.
          </h2>
          <p className="mb-14 max-w-3xl text-base font-light leading-relaxed text-navy/70 md:text-lg md:mb-20">
            At Maxinor, our AI GCC offering helps global organisations design, launch, and scale
            high-performance Global Capability Centres. We integrate legal setup, talent acquisition,
            managed operations, compliance, and AI technology enablement into a single operator-led
            engagement, so you can focus on outcomes, not administration. With on-ground expertise
            and a 7-domain operator network, we help businesses build future-ready GCCs that deliver
            operational excellence, AI-led innovation, and measurable ROI.
          </p>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                label: 'For Global Enterprises',
                detail: 'Establish a fully operational AI GCC in India. Reduce cost, access deep talent, and accelerate delivery without sacrificing quality or control.',
                href: '/corporate',
              },
              {
                label: 'For Growth-Stage Startups',
                detail: 'Build your engineering, AI, or ops capability in India with operator oversight, without the overhead of setting up a full entity from scratch.',
                href: '/startups',
              },
              {
                label: 'For Indian SMEs',
                detail: 'Scale your business functions, AI capabilities, and execution bandwidth through a structured GCC model designed for your stage.',
                href: '/sme',
              },
            ].map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="group rounded-[1.5rem] border border-navy/10 bg-white p-7 transition-all duration-300 hover:border-brand/30 hover:shadow-lg"
              >
                <h3 className="mb-3 text-base font-semibold text-navy group-hover:text-brand transition-colors">
                  {card.label} <ArrowRight className="inline h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm font-light leading-relaxed text-grey">{card.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2 continued: GCC Services ── */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">GCC Services</p>
          <h2 className="mb-3 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
            Eight capabilities. One integrated engagement.
          </h2>
          <p className="mb-14 max-w-xl text-base font-light leading-relaxed text-grey md:mb-16">
            Every GCC engagement covers the full lifecycle. Below is what that looks like in practice.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group rounded-[2rem] border border-grey/15 bg-warm-white p-7 transition-all duration-500 hover:border-brand/25 hover:bg-white hover:shadow-md md:p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 transition-colors group-hover:bg-brand/15">
                  <svc.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-3 text-base font-display font-semibold text-navy md:text-lg">{svc.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Maxinor ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Why Maxinor</p>
          <h2 className="mb-3 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
            What makes our GCC model different.
          </h2>
          <p className="mb-14 max-w-xl text-base font-light leading-relaxed text-grey md:mb-16">
            Most GCC providers are consultants who hand over a report. We are operators who stay and deliver.
          </p>
          <div className="grid gap-5 md:gap-6">
            {differentiators.map((d) => (
              <div
                key={d.number}
                className="relative grid gap-5 rounded-[2rem] border border-grey/15 bg-white p-7 transition-all duration-500 hover:border-brand/25 hover:shadow-md md:grid-cols-[auto_1fr] md:items-start md:gap-8 md:p-9"
              >
                <span className="text-4xl font-display font-bold text-brand/15 md:text-5xl">{d.number}</span>
                <div>
                  <h3 className="mb-3 text-lg font-display font-semibold text-navy">{d.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-grey md:text-base">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-navy px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="mb-1 text-3xl font-display font-semibold text-warm-white md:text-4xl">{s.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Get Started</p>
          <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
            Ready to build your AI GCC?
          </h2>
          <p className="mb-10 text-base font-light leading-relaxed text-grey md:text-lg">
            Whether you are setting up from scratch or optimising an existing capability centre,
            the conversation starts with an operator, not a sales deck.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={primaryBtn}>
              Start the conversation <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-8 py-4 text-base font-semibold tracking-wide text-navy transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand sm:px-10 sm:py-5"
            >
              Our full capabilities
            </Link>
          </div>
        </div>
      </section>

    </div>

    <section className="bg-warm-white px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-8 text-2xl font-display font-medium text-navy md:text-3xl">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqSchema.mainEntity.map((item) => (
            <div key={item.name} className="rounded-[1.5rem] border border-navy/10 bg-white p-6">
              <h3 className="mb-2 text-base font-semibold text-navy">{item.name}</h3>
              <p className="text-sm font-light leading-relaxed text-grey">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
