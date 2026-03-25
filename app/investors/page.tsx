import { ArrowRight, TrendingUp, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 text-navy md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-24 lg:mb-28';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-3xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const cardClass =
  'rounded-[2rem] border border-navy/10 bg-white p-6 transition-colors duration-500 hover:bg-white sm:p-8';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

const benefits = [
  {
    icon: TrendingUp,
    title: 'High-Growth Potential',
    desc: 'Access to a curated pipeline of operator-vetted startups with strong fundamentals and clear paths to scale.',
  },
  {
    icon: ShieldCheck,
    title: 'De-risked Investments',
    desc: 'Our hands-on operator model ensures startups have the execution muscle needed to hit milestones and reduce failure rates.',
  },
  {
    icon: Users,
    title: 'Co-Investment Network',
    desc: 'Join a syndicate of top-tier angels, family offices, and institutional investors backing the next generation of founders.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Reporting',
    desc: 'Regular updates, financial transparency, and direct access to founders and our operating partners.',
  },
];

const opportunities = [
  {
    title: 'Venture Fund',
    desc: 'Participate in our core fund investing in pre-seed and seed stage startups.',
  },
  {
    title: 'Syndicate & Co-Investments',
    desc: 'Direct investment opportunities alongside Maxinor in select high-conviction deals.',
  },
  {
    title: 'Equity Crowdfunding (ECF)',
    desc: 'Access vetted early-stage deals with lower minimum ticket sizes.',
  },
];

export default function InvestorsPage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        <div className={introSpacing}>
          <h1 className={introTitle}>
            For <span className="text-brand">Investors</span>
          </h1>
          <p className={introBody}>
            Partner with Maxinor to access a proprietary deal flow of high-quality, execution-focused startups.
            We don&apos;t just invest capital; we invest operational expertise to drive outsized returns.
          </p>
        </div>

        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl font-display font-medium tracking-tight text-navy md:text-3xl">
              Why Invest With Us?
            </h2>
            <p className="max-w-4xl text-base font-light leading-relaxed text-navy/70 md:text-lg">
              Maxinor is India&apos;s 1st Operator Led Venture Studio. We bridge the gap between capital and
              execution. By embedding our experienced operators into our portfolio companies, we significantly
              increase their chances of success and accelerate their path to Series A and beyond.
            </p>
            <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2 sm:gap-6 md:pt-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className={cardClass}>
                  <benefit.icon className="mb-4 h-7 w-7 text-brand md:mb-5 md:h-8 md:w-8" />
                  <h3 className="mb-2 text-lg font-medium text-navy md:mb-3 md:text-xl">{benefit.title}</h3>
                  <p className="text-base font-light leading-relaxed text-navy/70">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute top-0 right-0 h-[260px] w-[260px] rounded-full bg-brand/10 blur-[70px] md:h-[400px] md:w-[400px] md:blur-[80px]" />
          <div className="relative z-10">
            <h3 className="mb-6 text-2xl font-display font-medium text-navy md:mb-8 md:text-3xl">
              Investment Opportunities
            </h3>
            <ul className="mb-8 grid gap-6 md:mb-10 md:grid-cols-3 md:gap-8">
              {opportunities.map((opportunity) => (
                <li key={opportunity.title} className="flex items-start gap-4">
                  <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <div>
                    <h4 className="mb-1 text-base font-medium text-navy md:text-lg">{opportunity.title}</h4>
                    <p className="text-base font-light leading-relaxed text-navy/70">{opportunity.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link href="/contact" className={primaryButtonClass}>
                Join Our Investor Network <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
