import { ArrowRight, Building2, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function CorporatePage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tight mb-4 md:mb-6">
            Corporate <span className="text-brand">Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-grey max-w-3xl leading-relaxed mb-8 font-light">
            Future-proof your business by partnering with Maxinor. We help forward-thinking corporates innovate like startups, discover new revenue streams, and stay ahead of disruption.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="p-8 md:p-10 bg-white border border-grey/30 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500">
            <Building2 className="w-8 h-8 md:w-12 md:h-12 text-brand mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-display font-medium mb-3 md:mb-4">Corporate Accelerators</h3>
            <p className="text-sm md:text-base text-grey leading-relaxed font-light">
              We design and run bespoke accelerator programs tailored to your strategic goals. Source, evaluate, and pilot with the best startups in your industry to solve specific business challenges.
            </p>
          </div>
          <div className="p-8 md:p-10 bg-white border border-grey/30 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500">
            <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-brand mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-display font-medium mb-3 md:mb-4">Venture Building</h3>
            <p className="text-sm md:text-base text-grey leading-relaxed font-light">
              Leverage our &quot;Build&quot; engine to co-create new ventures. We take your corporate assets, IP, or market access and combine it with our entrepreneurial execution to launch spin-offs.
            </p>
          </div>
          <div className="p-8 md:p-10 bg-white border border-grey/30 rounded-[2rem] hover:bg-white hover:border-brand/30 transition-all duration-500">
            <Rocket className="w-8 h-8 md:w-12 md:h-12 text-brand mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl font-display font-medium mb-3 md:mb-4">Strategic Partnerships</h3>
            <p className="text-sm md:text-base text-grey leading-relaxed font-light">
              Get early access to emerging technologies and business models. We facilitate strategic investments, M&A opportunities, and commercial partnerships with our portfolio companies.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-grey/30 bg-white p-8 md:p-16 lg:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 md:mb-6">Ready to innovate?</h2>
            <p className="text-base md:text-xl text-grey mb-8 md:mb-10 font-light">
              Let&apos;s discuss how Maxinor can help your organization harness the speed and agility of the startup ecosystem.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand text-warm-white font-semibold tracking-wide rounded-full px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg hover:bg-brand/90 transition-all duration-300 whitespace-nowrap hover:-translate-y-1 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]">
              Partner With Us <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
