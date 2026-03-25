import { ArrowRight, Building2, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 text-navy md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-24 lg:mb-28';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-3xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const cardClass =
  'rounded-[2rem] border border-navy/10 bg-white p-6 transition-all duration-500 hover:border-brand/30 hover:bg-white sm:p-8 md:p-10';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

const offerings = [
  {
    title: 'Corporate Accelerators',
    description:
      'We design and run bespoke accelerator programs tailored to your strategic goals. Source, evaluate, and pilot with the best startups in your industry to solve specific business challenges.',
    icon: Building2,
  },
  {
    title: 'Venture Building',
    description:
      'Leverage our "Build" engine to co-create new ventures. We take your corporate assets, IP, or market access and combine it with our entrepreneurial execution to launch spin-offs.',
    icon: Lightbulb,
  },
  {
    title: 'Strategic Partnerships',
    description:
      'Get early access to emerging technologies and business models. We facilitate strategic investments, M&A opportunities, and commercial partnerships with our portfolio companies.',
    icon: Rocket,
  },
];

export default function CorporatePage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        <div className={introSpacing}>
          <h1 className={introTitle}>
            Corporate <span className="text-brand">Innovation</span>
          </h1>
          <p className={introBody}>
            Future-proof your business by partnering with Maxinor. We help forward-thinking corporates innovate
            like startups, discover new revenue streams, and stay ahead of disruption.
          </p>
        </div>

        <div className="mb-16 grid gap-5 sm:gap-6 md:mb-24 md:grid-cols-3 md:gap-8">
          {offerings.map((offering) => (
            <div key={offering.title} className={cardClass}>
              <offering.icon className="mb-5 h-8 w-8 text-brand md:mb-6 md:h-12 md:w-12" />
              <h3 className="mb-3 text-xl font-display font-medium text-navy md:mb-4 md:text-2xl">
                {offering.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-navy/70">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-8 text-center md:p-12 lg:p-16">
          <div className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-brand/10 blur-[70px] md:h-[300px] md:w-[600px] md:blur-[80px]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:mb-6 md:text-5xl">
              Ready to innovate?
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-navy/70 md:mb-10 md:text-xl">
              Let&apos;s discuss how Maxinor can help your organization harness the speed and agility of the
              startup ecosystem.
            </p>
            <Link href="/contact" className={primaryButtonClass}>
              Partner With Us <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
