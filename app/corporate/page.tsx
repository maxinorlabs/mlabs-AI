import { ArrowRight, Building2, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function CorporatePage() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
            Corporate <span className="text-brand">Innovation</span>
          </h1>
          <p className="text-xl text-grey max-w-3xl leading-relaxed mb-8 font-light">
            Future-proof your business by partnering with Maxinor. We help forward-thinking corporates innovate like startups, discover new revenue streams, and stay ahead of disruption.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-10 bg-white border border-grey/30 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500">
            <Building2 className="w-12 h-12 text-brand mb-6" />
            <h3 className="text-2xl font-display font-medium mb-4">Corporate Accelerators</h3>
            <p className="text-grey leading-relaxed font-light">
              We design and run bespoke accelerator programs tailored to your strategic goals. Source, evaluate, and pilot with the best startups in your industry to solve specific business challenges.
            </p>
          </div>
          <div className="p-10 bg-white border border-grey/30 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500">
            <Lightbulb className="w-12 h-12 text-brand mb-6" />
            <h3 className="text-2xl font-display font-medium mb-4">Venture Building</h3>
            <p className="text-grey leading-relaxed font-light">
              Leverage our &quot;Build&quot; engine to co-create new ventures. We take your corporate assets, IP, or market access and combine it with our entrepreneurial execution to launch spin-offs.
            </p>
          </div>
          <div className="p-10 bg-white border border-grey/30 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500">
            <Rocket className="w-12 h-12 text-brand mb-6" />
            <h3 className="text-2xl font-display font-medium mb-4">Strategic Partnerships</h3>
            <p className="text-grey leading-relaxed font-light">
              Get early access to emerging technologies and business models. We facilitate strategic investments, M&A opportunities, and commercial partnerships with our portfolio companies.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-grey/30 bg-white p-12 md:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6">Ready to innovate?</h2>
            <p className="text-xl text-grey mb-10 font-light">
              Let&apos;s discuss how Maxinor can help your organization harness the speed and agility of the startup ecosystem.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-brand-dark transition-all duration-300">
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
