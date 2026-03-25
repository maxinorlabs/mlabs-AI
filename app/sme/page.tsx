import Link from 'next/link';
import { Zap, BarChart, Users, Shield, ArrowRight } from 'lucide-react';

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 text-navy md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-24 lg:mb-28';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-3xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const cardClass =
  'rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm transition-all duration-500 hover:border-brand/30 hover:bg-white sm:p-8 md:p-10 lg:p-12';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

const offerings = [
  {
    title: 'Digital Transformation',
    description: 'Modernize your legacy systems with cutting-edge AI and cloud solutions tailored for growth.',
    icon: Zap,
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline your workflows and reduce overhead through operator-led process optimization.',
    icon: BarChart,
  },
  {
    title: 'Talent as a Service',
    description: 'Access high-quality operational talent and CXO-level expertise without the full-time overhead.',
    icon: Users,
  },
  {
    title: 'Risk Management',
    description: 'Future-proof your business with robust compliance frameworks and strategic risk assessment.',
    icon: Shield,
  },
];

export default function SMEPage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        <div className={introSpacing}>
          <h1 className={introTitle}>
            Empowering <span className="text-brand">SMEs</span> to Scale
          </h1>
          <p className={introBody}>
            We bring venture-grade execution and operator expertise to Small and Medium Enterprises. Transform
            your business with the same rigor and technology used by high-growth startups.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-5 sm:gap-6 md:mb-24 md:grid-cols-2 md:gap-8 lg:mb-32">
          {offerings.map((card) => (
            <div key={card.title} className={cardClass}>
              <card.icon className="mb-5 h-8 w-8 text-brand md:mb-6 md:h-10 md:w-10" />
              <h3 className="mb-3 text-2xl font-display font-medium text-navy md:mb-4 md:text-3xl">
                {card.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-navy/70 md:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-navy/10 bg-white p-8 text-center shadow-sm md:p-12 lg:p-16">
          <h2 className="mb-5 text-3xl font-display font-medium text-navy md:mb-6 md:text-5xl">
            Ready to modernize your business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-navy/70 md:mb-10 md:text-xl">
            Join the Maxinor platform and leverage our operator network to unlock new growth trajectories for
            your enterprise.
          </p>
          <Link href="/contact" className={primaryButtonClass}>
            Get Started <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
