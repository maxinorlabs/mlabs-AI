import Link from 'next/link';
import { Bot, Layers, Megaphone, Users, ArrowRight, CheckCircle2, Cpu, Workflow, Database, BarChart3 } from 'lucide-react';

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-24 lg:mb-28';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-3xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const chipClass =
  'flex items-center gap-2 rounded-full border border-navy/10 bg-navy/5 px-4 py-2 text-sm font-medium text-navy md:gap-3 md:px-6 md:py-3 md:text-base';
const cardClass =
  'rounded-[2rem] border border-navy/10 bg-white p-6 transition-all duration-500 hover:border-teal/40 hover:bg-navy/5 sm:p-8 md:p-10 lg:p-12';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

const highlights = [
  { icon: Cpu, label: 'AI-Native Infrastructure' },
  { icon: Layers, label: 'Shared Across Portfolio' },
  { icon: Workflow, label: 'Plug-In, Not Rebuild' },
];

const capabilities = [
  {
    icon: Bot,
    title: 'AI & Automation Platform',
    items: [
      'Agentic AI workflows for sales, support, and operations',
      'LLM integration and fine-tuning for domain-specific tasks',
      'Data pipelines, feature stores, and analytics infrastructure',
      'Automation of repetitive back-office and ops functions',
      'AI-native product architecture for portfolio companies',
      'Internal tooling, dashboards, and intelligence layers',
    ],
  },
  {
    icon: Layers,
    title: 'Product Engineering & Design',
    items: [
      'Full-stack development and architecture reviews',
      'UI/UX design systems built for growth and retention',
      'DevOps, CI/CD pipelines, and release management',
      'API and integration layer across portfolio tools',
      'Product management support: roadmap, backlog, sprint cadence',
      'QA, performance audits, and security baseline checks',
    ],
  },
  {
    icon: Megaphone,
    title: 'Revenue & Marketing Operations',
    items: [
      'Performance marketing stack: Meta, Google, programmatic',
      'SEO and content infrastructure with AI-assisted production',
      'CRM setup, pipeline management, and sales automation',
      'Brand design system and creative production capacity',
      'Email, lifecycle, and retention marketing infrastructure',
      'Analytics, attribution, and growth experimentation tooling',
    ],
  },
  {
    icon: Users,
    title: 'People, Finance & Business Operations',
    items: [
      'Talent acquisition, onboarding, and culture infrastructure',
      'OKR systems, performance management, and HR ops',
      'MIS, financial reporting, and cash flow dashboards',
      'Payroll, compliance, and statutory filings',
      'Vendor management and procurement operations',
      'Supply chain setup for D2C and physical product companies',
    ],
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Plugged In on Day One',
    description:
      'Every company under the Maxinor umbrella (Build, Scale, or Invest) gets access to the shared platform from the moment engagement begins.',
  },
  {
    step: '02',
    title: 'Dedicated Slice, Not Shared Queue',
    description:
      'You get dedicated operator hours and platform resources scoped to your stage and priorities, not a generic shared inbox.',
  },
  {
    step: '03',
    title: 'Scales With You',
    description:
      'The platform grows as your business grows. Early-stage companies start with lean tooling. Series A-ready companies graduate to full-stack capability.',
  },
  {
    step: '04',
    title: 'Transfers Ownership to You',
    description:
      'Nothing is black-boxed. Processes, playbooks, and platforms are built to be handed over to your internal team as you hire.',
  },
];

const stats = [
  { label: 'Capability Functions', value: '4 Core Areas' },
  { label: 'Access Model', value: 'Shared + Dedicated' },
  { label: 'Designed For', value: 'Build, Scale & Invest' },
];

export default function CapabilityCentrePage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className={introSpacing}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-teal">AI Capability Centre</p>
          <h1 className={introTitle}>
            <span className="text-navy">The Operating System</span>{' '}
            <span className="text-brand">Behind Every Venture</span>
          </h1>
          <p className={`${introBody} mb-8 md:mb-10`}>
            The Maxinor AI Capability Centre is the shared infrastructure that powers every company we touch.
            Instead of every portfolio startup rebuilding the same tech stack, marketing operations, finance
            systems, and people infrastructure from scratch, they plug into a battle-tested, AI-native platform
            from day one. This is the unfair advantage built into the Maxinor model.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {highlights.map((h) => (
              <div key={h.label} className={chipClass}>
                <h.icon className="h-4 w-4 text-teal md:h-5 md:w-5" />
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What the Centre Powers */}
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">What It Powers</p>
          <h2 className="mb-3 text-2xl font-display font-medium text-navy md:text-4xl">
            One platform. Three engines. Every portfolio company.
          </h2>
          <p className="mb-10 max-w-2xl text-sm font-light leading-relaxed text-navy/60 md:text-base">
            The Capability Centre exists so that Venture Build companies launch faster, Venture Scale companies
            execute better, and Venture Investment companies de-risk faster. It is not a service. It is the
            backbone.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: 'Venture Build',
                detail: 'New companies inherit the full stack from launch: AI infra, product, ops, and hiring.',
                href: '/build',
              },
              {
                label: 'Venture Scale',
                detail: 'Embedded operators plug into the Centre to accelerate execution for existing startups.',
                href: '/scale',
              },
              {
                label: 'Venture Investment',
                detail: 'Portfolio companies post-investment access the Centre to compound capital with execution.',
                href: '/investment',
              },
            ].map((arm) => (
              <Link
                key={arm.label}
                href={arm.href}
                className="group rounded-[1.5rem] border border-teal/20 bg-navy p-6 transition-all duration-300 hover:border-teal/50 hover:bg-navy/90 sm:p-8"
              >
                <h3 className="mb-2 text-base font-semibold text-warm-white group-hover:text-teal transition-colors">
                  {arm.label}
                </h3>
                <p className="text-sm font-light leading-relaxed text-warm-white/60">{arm.detail}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Four Capability Engines */}
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Capability Engines</p>
          <h2 className="mb-10 text-2xl font-display font-medium text-navy md:text-4xl">
            Four engines. One integrated platform.
          </h2>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className={cardClass}>
                <div className="mb-5 flex items-center gap-3 md:mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal/20 bg-teal/5">
                    <cap.icon className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-navy md:text-2xl">{cap.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-light text-navy/70 md:text-base">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">How It Works</p>
          <h2 className="mb-10 text-2xl font-display font-medium text-navy md:text-4xl">
            Plug in. Execute. Own it.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 transition-all duration-500 hover:border-teal/40 hover:bg-navy/5"
              >
                <p className="mb-3 text-3xl font-display font-medium text-teal/40">{step.step}</p>
                <h3 className="mb-2 text-base font-semibold text-navy">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-navy/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid gap-4 rounded-[2rem] border border-teal/20 bg-navy p-8 sm:grid-cols-3 md:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-1 text-2xl font-display font-semibold text-warm-white md:text-3xl">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] border border-navy/10 bg-white p-8 text-center shadow-sm md:mt-24 md:p-12 lg:mt-32 lg:p-16">
          <h2 className="mb-5 text-3xl font-display font-medium text-navy md:mb-6 md:text-5xl">
            Access the Platform
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-navy/70 md:mb-10 md:text-xl">
            Whether you are a founder building from scratch or scaling an existing venture, the Maxinor
            Capability Centre is available to every company we engage with. Start the conversation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact" className={primaryButtonClass}>
              Get Started <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-navy/15 bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              See Our Capabilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
