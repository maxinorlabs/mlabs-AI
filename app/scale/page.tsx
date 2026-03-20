import Link from 'next/link';
import { TrendingUp, Target, Zap, ArrowRight } from 'lucide-react';

export default function ScalePage() {
  return (
    <div className="pt-32 pb-32 px-6 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
            <span className="text-black">Maxinor Platform</span> <span className="text-black">for</span> <span className="text-brand">Venture Scale</span>
          </h1>
          <p className="text-xl text-navy/70 max-w-3xl leading-relaxed mb-8 font-light">
            Helping founder-led ventures scale through Maxinor&apos;s Operator Platform. We don&apos;t just advise; we embed our experienced operators into your team to execute critical growth initiatives, optimize operations, and prepare your venture for Series A/B funding.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-navy/5 px-6 py-3 rounded-full border border-navy/10">
              <TrendingUp className="text-brand w-5 h-5" />
              <span className="font-medium text-navy">Accelerated Growth</span>
            </div>
            <div className="flex items-center gap-3 bg-navy/5 px-6 py-3 rounded-full border border-navy/10">
              <Target className="text-brand w-5 h-5" />
              <span className="font-medium text-navy">Milestone-based Execution</span>
            </div>
            <div className="flex items-center gap-3 bg-navy/5 px-6 py-3 rounded-full border border-navy/10">
              <Zap className="text-brand w-5 h-5" />
              <span className="font-medium text-navy">Embedded Operators</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              title: "Talent Engine",
              icon: "💼",
              items: ["Organisation & Leadership Development", "Governance & Policies", "Performance & Cultural Frameworks", "HR Operations"]
            },
            {
              title: "AI & Data Engine",
              icon: "🤖",
              items: ["Agentic AI Platform", "Data Foundational Structure", "Automation and Workflows", "Platform Builds"]
            }
          ].map((engine, idx) => (
            <div key={idx} className="group border border-navy/10 p-12 rounded-[2rem] hover:bg-navy/5 hover:border-brand/30 transition-all duration-500 bg-white">
              <h3 className="text-3xl font-display font-medium mb-8 text-navy">{engine.title}</h3>
              <ul className="space-y-3">
                {engine.items.map((item, i) => (
                  <li key={i} className="text-navy/70 flex items-start gap-2 text-base font-light">
                    <div className="w-1 h-1 rounded-full bg-brand shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-white rounded-[2rem] p-16 md:p-24 border border-navy/10 shadow-sm">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-navy">Ready to Scale?</h2>
          <p className="text-xl text-navy/70 mb-12 max-w-2xl mx-auto font-light">
            Partner with Maxinor to unlock your venture&apos;s full potential through our operator-led execution platform.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-brand/90 transition-all duration-300">
            Start Scaling Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
