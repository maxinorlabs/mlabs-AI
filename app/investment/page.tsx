import Link from 'next/link';
import { TrendingUp, ShieldCheck, Users, ArrowRight, CheckCircle2, BadgeIndianRupee, Handshake, LineChart } from 'lucide-react';

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
  { icon: ShieldCheck, label: 'Operator Validated' },
  { icon: LineChart, label: 'Milestone-Linked Capital' },
  { icon: Handshake, label: 'Founder Aligned' },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Operator-Validated Deal Flow',
    items: [
      'Capital deployed only after operator due diligence',
      'Insider visibility into team, traction, and execution capacity',
      'No cold deals. Every investment follows operator engagement',
      'Significantly lower information asymmetry vs. traditional VC',
    ],
  },
  {
    icon: BadgeIndianRupee,
    title: 'Milestone-Linked Capital Tranches',
    items: [
      'Capital released in tranches tied to performance milestones',
      'Ticket size: 25L to 3Cr at pre-seed to pre-Series A',
      'Staged deployment reduces dilution for founders',
      'Keeps execution accountability aligned with funding',
    ],
  },
  {
    icon: TrendingUp,
    title: 'What We Back',
    items: [
      'Founders between 1Cr and 20Cr ARR with PMF evidence',
      'D2C, Media, Healthcare, Education and AI-native sectors',
      'Companies already engaged with Maxinor operators',
      'Teams with a clear path to Series A within 18 months',
    ],
  },
  {
    icon: Users,
    title: 'LP & Co-Invest Program',
    items: [
      'Curated co-invest access for HNIs and family offices',
      'All LP opportunities are operator-vetted before syndication',
      'Quarterly deal summaries and portfolio updates',
      'Access to the Maxinor Operator Network as a strategic LP',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Operator Engagement',
    description:
      'Before capital enters the picture, a Maxinor operator embeds with the founding team to validate execution capacity.',
  },
  {
    step: '02',
    title: 'Traction Validation',
    description:
      'We review cohort data, unit economics, and 90-day execution against milestones set during the operator engagement.',
  },
  {
    step: '03',
    title: 'Investment Committee',
    description:
      'Our IC reviews operator notes, domain context, and capital efficiency before approving a milestone-linked term sheet.',
  },
  {
    step: '04',
    title: 'Capital + Continued Execution',
    description:
      'Capital is deployed in tranches. The operator remains embedded, ensuring the investment compounds with execution.',
  },
];

export default function InvestmentPage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className={introSpacing}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-teal">Venture Investment</p>
          <h1 className={introTitle}>
            <span className="text-navy">Capital That Follows</span>{' '}
            <span className="text-brand">Conviction</span>
          </h1>
          <p className={`${introBody} mb-8 md:mb-10`}>
            Maxinor does not write cheques based on pitch decks. Every investment is preceded by operator
            engagement, which gives us real execution data, not projected numbers. Capital is milestone-linked,
            founder-aligned, and deployed alongside the operators who have already validated the business.
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

        {/* How We Invest — Process */}
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">How We Invest</p>
          <h2 className="mb-10 text-2xl font-display font-medium text-navy md:text-4xl">
            Operator first. Capital follows.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 transition-all duration-500 hover:border-teal/40 hover:bg-navy/5"
              >
                <p className="mb-3 text-3xl font-display font-medium text-teal/40">{p.step}</p>
                <h3 className="mb-2 text-base font-semibold text-navy">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-navy/60">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Four Pillars */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className={cardClass}>
              <div className="mb-5 flex items-center gap-3 md:mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal/20 bg-teal/5">
                  <pillar.icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="text-xl font-display font-medium text-navy md:text-2xl">{pillar.title}</h3>
              </div>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-light text-navy/70 md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Differentiator strip */}
        <div className="mt-16 grid gap-4 rounded-[2rem] border border-teal/20 bg-navy p-8 sm:grid-cols-3 md:mt-24 md:p-12">
          {[
            { label: 'Investment Stage', value: 'Pre-seed to Pre-Series A' },
            { label: 'Ticket Size', value: '25L to 3Cr INR' },
            { label: 'Capital Type', value: 'Equity + Milestone Tranches' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-1 text-2xl font-display font-semibold text-warm-white md:text-3xl">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] border border-navy/10 bg-white p-8 text-center shadow-sm md:mt-24 md:p-12 lg:mt-32 lg:p-16">
          <h2 className="mb-5 text-3xl font-display font-medium text-navy md:mb-6 md:text-5xl">
            Ready to Raise from Operators?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-navy/70 md:mb-10 md:text-xl">
            If you are a founder who has worked with or is considering Maxinor, the next step is an operator
            conversation, not a pitch deck.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact" className={primaryButtonClass}>
              Start a Conversation <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/scale"
              className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-navy/15 bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              View Venture Scale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
