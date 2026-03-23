import Link from 'next/link';
import { Hammer, Lightbulb, Rocket, ArrowRight } from 'lucide-react';

export default function BuildPage() {
  return (
    <div className="pt-32 pb-32 px-6 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
            <span className="text-black">Maxinor Platform</span> <span className="text-black">for</span> <span className="text-brand">Venture Build</span>
          </h1>
          <p className="text-xl text-navy/70 max-w-3xl leading-relaxed mb-8 font-light">
            Maxinor&apos;s Venture Build engine creates AI-Native Companies from validated white spaces identified by operating with other founders, operating partners, and resident domain experts.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-navy/5 px-6 py-3 rounded-full border border-navy/10">
              <Lightbulb className="text-brand w-5 h-5" />
              <span className="font-medium text-navy">Idea Validation</span>
            </div>
            <div className="flex items-center gap-3 bg-navy/5 px-6 py-3 rounded-full border border-navy/10">
              <Hammer className="text-brand w-5 h-5" />
              <span className="font-medium text-navy">Co-Creation</span>
            </div>
            <div className="flex items-center gap-3 bg-navy/5 px-6 py-3 rounded-full border border-navy/10">
              <Rocket className="text-brand w-5 h-5" />
              <span className="font-medium text-navy">Rapid Launch</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Ideation & Validation",
              icon: "💡",
              items: ["Market Research & Sizing", "Customer Discovery", "Prototyping & MVP Definition", "Business Model Design"]
            },
            {
              title: "Product & Engineering",
              icon: "🛠️",
              items: ["UI/UX Design", "Full-Stack Development", "Architecture & Infrastructure", "Product Management"]
            },
            {
              title: "Go-To-Market",
              icon: "🎯",
              items: ["Brand Identity & Positioning", "Early Customer Acquisition", "Sales Playbook Creation", "Launch Strategy"]
            },
            {
              title: "Founding Team Assembly",
              icon: "🤝",
              items: ["Co-founder Matching", "Key Executive Hiring", "Advisory Board Setup", "Culture & Values Definition"]
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
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-navy">Ready to Build?</h2>
          <p className="text-xl text-navy/70 mb-12 max-w-2xl mx-auto font-light">
            Let&apos;s turn your vision into a category-defining business. Partner with Maxinor to build your next venture.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-brand/90 transition-all duration-300">
            Start Building Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
