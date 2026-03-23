import Link from 'next/link';
import { Zap, BarChart, Users, Shield, ArrowRight } from 'lucide-react';

export default function SMEPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 px-6 bg-warm-white text-navy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tight mb-4 md:mb-6 text-navy">
            Empowering <span className="text-brand">SMEs</span> to Scale
          </h1>
          <p className="text-lg md:text-xl text-navy/70 max-w-3xl leading-relaxed font-light">
            We bring venture-grade execution and operator expertise to Small and Medium Enterprises. Transform your business with the same rigor and technology used by high-growth startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-32">
          {[
            {
              title: "Digital Transformation",
              description: "Modernize your legacy systems with cutting-edge AI and cloud solutions tailored for growth.",
              icon: Zap
            },
            {
              title: "Operational Efficiency",
              description: "Streamline your workflows and reduce overhead through operator-led process optimization.",
              icon: BarChart
            },
            {
              title: "Talent as a Service",
              description: "Access high-quality operational talent and CXO-level expertise without the full-time overhead.",
              icon: Users
            },
            {
              title: "Risk Management",
              description: "Future-proof your business with robust compliance frameworks and strategic risk assessment.",
              icon: Shield
            }
          ].map((card, idx) => (
            <div key={idx} className="group border border-navy/10 p-8 md:p-12 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500 bg-white shadow-sm">
              <card.icon className="text-brand w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8" />
              <h3 className="text-2xl md:text-3xl font-display font-medium mb-3 md:mb-4 text-navy">{card.title}</h3>
              <p className="text-sm md:text-lg text-navy/70 font-light">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-[2rem] p-8 md:p-16 lg:p-24 border border-navy/10 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4 md:mb-6 text-navy">Ready to modernize your business?</h2>
          <p className="text-base md:text-xl text-navy/70 mb-8 md:mb-10 max-w-2xl mx-auto font-light">
            Join the Maxinor platform and leverage our operator network to unlock new growth trajectories for your enterprise.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand text-warm-white font-semibold tracking-wide rounded-full px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg hover:bg-brand/90 transition-all duration-300 whitespace-nowrap hover:-translate-y-1 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]">
            Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
