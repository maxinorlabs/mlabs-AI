import Link from 'next/link';
import { Hammer, Lightbulb, Rocket, ArrowRight } from 'lucide-react';

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-24 lg:mb-28';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-3xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const chipClass =
  'flex items-center gap-2 rounded-full border border-navy/10 bg-navy/5 px-4 py-2 text-sm font-medium text-navy md:gap-3 md:px-6 md:py-3 md:text-base';
const cardClass =
  'rounded-[2rem] border border-navy/10 bg-white p-6 transition-all duration-500 hover:border-brand/30 hover:bg-navy/5 sm:p-8 md:p-10 lg:p-12';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

const highlights = [
  { icon: Lightbulb, label: 'Idea Validation' },
  { icon: Hammer, label: 'Co-Creation' },
  { icon: Rocket, label: 'Rapid Launch' },
];

const engines = [
  {
    title: 'Ideation & Validation',
    items: ['Market Research & Sizing', 'Customer Discovery', 'Prototyping & MVP Definition', 'Business Model Design'],
  },
  {
    title: 'Product & Engineering',
    items: ['UI/UX Design', 'Full-Stack Development', 'Architecture & Infrastructure', 'Product Management'],
  },
  {
    title: 'Go-To-Market',
    items: ['Brand Identity & Positioning', 'Early Customer Acquisition', 'Sales Playbook Creation', 'Launch Strategy'],
  },
  {
    title: 'Founding Team Assembly',
    items: ['Co-founder Matching', 'Key Executive Hiring', 'Advisory Board Setup', 'Culture & Values Definition'],
  },
];

export default function BuildPage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        <div className={introSpacing}>
          <h1 className={introTitle}>
            <span className="text-navy">Maxinor Platform</span> <span className="text-navy">for</span>{' '}
            <span className="text-brand">Venture Build</span>
          </h1>
          <p className={`${introBody} mb-8 md:mb-10`}>
            Maxinor&apos;s Venture Build engine creates AI-Native Companies from validated white spaces
            identified by operating with other founders, operating partners, and resident domain experts.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {highlights.map((highlight) => (
              <div key={highlight.label} className={chipClass}>
                <highlight.icon className="h-4 w-4 text-brand md:h-5 md:w-5" />
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          {engines.map((engine) => (
            <div key={engine.title} className={cardClass}>
              <h3 className="mb-5 text-2xl font-display font-medium text-navy md:mb-6 md:text-3xl">
                {engine.title}
              </h3>
              <ul className="space-y-3">
                {engine.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-light text-navy/70 md:text-base">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-navy/10 bg-white p-8 text-center shadow-sm md:mt-24 md:p-12 lg:mt-32 lg:p-16">
          <h2 className="mb-5 text-3xl font-display font-medium text-navy md:mb-6 md:text-5xl">
            Ready to Build?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-navy/70 md:mb-10 md:text-xl">
            Let&apos;s turn your vision into a category-defining business. Partner with Maxinor to build your
            next venture.
          </p>
          <Link href="/contact" className={primaryButtonClass}>
            Start Building Now <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
