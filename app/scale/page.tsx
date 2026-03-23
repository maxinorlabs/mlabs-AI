import Link from 'next/link';
import { TrendingUp, Target, Zap, ArrowRight } from 'lucide-react';

export default function ScalePage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 px-6 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tight mb-4 md:mb-6">
            <span className="text-black">Maxinor Platform</span> <span className="text-black">for</span> <span className="text-brand">Venture Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-navy/70 max-w-3xl leading-relaxed mb-8 font-light">
            Helping founder-led ventures scale through Maxinor&apos;s Operator Platform. We don&apos;t just advise; we embed our experienced operators into your team to execute critical growth initiatives, optimize operations, and prepare your venture for Series A/B funding.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 bg-navy/5 px-4 md:px-6 py-2 md:py-3 rounded-full border border-navy/10">
              <TrendingUp className="text-brand w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-navy text-sm md:text-base">Accelerated Growth</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-navy/5 px-4 md:px-6 py-2 md:py-3 rounded-full border border-navy/10">
              <Target className="text-brand w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-navy text-sm md:text-base">Milestone-based Execution</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-navy/5 px-4 md:px-6 py-2 md:py-3 rounded-full border border-navy/10">
              <Zap className="text-brand w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-navy text-sm md:text-base">Embedded Operators</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Revenue Engine",
              icon: "🚀",
              items: ["GTM & Growth", "Brand & Performance Marketing", "Business Development", "Pricing Strategy"]
            },
            {
              title: "Operations Engine",
              icon: "⚙️",
              items: ["Supply Chain", "Business Operations", "Financial Operations", "Marketing Operations"]
            },
            {
              title: "Product & Design Engine",
              icon: "💼",
              items: ["Product Strategy & Roadmap", "User Experience & Systems", "Growth, Retention & AI", "Product Operations & Build Rhythm"]
            },
            {
              title: "AI & Data Engine",
              icon: "🤖",
              items: ["Agentic AI Platform", "Data Foundational Structure", "Automation and Workflows", "Platform Builds"]
            }
          ].map((engine, idx) => (
            <div key={idx} className="group border border-navy/10 p-8 md:p-12 rounded-[2rem] hover:bg-navy/5 hover:border-brand/30 transition-all duration-500 bg-white">
              <h3 className="text-2xl md:text-3xl font-display font-medium mb-6 md:mb-8 text-navy">{engine.title}</h3>
              <ul className="space-y-3">
                {engine.items.map((item, i) => (
                  <li key={i} className="text-navy/70 flex items-start gap-2 text-sm md:text-base font-light">
                    <div className="w-1 h-1 rounded-full bg-brand shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-32 text-center bg-white rounded-[2rem] p-8 md:p-16 lg:p-24 border border-navy/10 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4 md:mb-6 text-navy">Ready to Scale?</h2>
          <p className="text-base md:text-xl text-navy/70 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Partner with Maxinor to unlock your venture&apos;s full potential through our operator-led execution platform.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand text-warm-white font-semibold tracking-wide rounded-full px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg hover:bg-brand/90 transition-all duration-300 whitespace-nowrap hover:-translate-y-1 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]">
            Start Scaling Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
