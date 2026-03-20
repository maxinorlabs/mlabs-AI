import { ArrowRight, TrendingUp, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function InvestorsPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-brand" />,
      title: "High-Growth Potential",
      desc: "Access to a curated pipeline of operator-vetted startups with strong fundamentals and clear paths to scale."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand" />,
      title: "De-risked Investments",
      desc: "Our hands-on operator model ensures startups have the execution muscle needed to hit milestones and reduce failure rates."
    },
    {
      icon: <Users className="w-8 h-8 text-brand" />,
      title: "Co-Investment Network",
      desc: "Join a syndicate of top-tier angels, family offices, and institutional investors backing the next generation of founders."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand" />,
      title: "Transparent Reporting",
      desc: "Regular updates, financial transparency, and direct access to founders and our operating partners."
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
            For <span className="text-brand">Investors</span>
          </h1>
          <p className="text-xl text-grey max-w-3xl leading-relaxed mb-8 font-light">
            Partner with Maxinor to access a proprietary deal flow of high-quality, execution-focused startups. We don&apos;t just invest capital; we invest operational expertise to drive outsized returns.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 mb-32 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-medium tracking-tight">Why Invest With Us?</h2>
            <p className="text-grey text-lg leading-relaxed font-light">
              Maxinor is India&apos;s 1st Operator Led Venture Studio. We bridge the gap between capital and execution. By embedding our experienced operators into our portfolio companies, we significantly increase their chances of success and accelerate their path to Series A and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 bg-white border border-grey/30 rounded-[2rem] hover:bg-white transition-colors duration-500">
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-sm text-grey font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-grey/30 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-medium mb-8">Investment Opportunities</h3>
            <ul className="grid md:grid-cols-3 gap-8 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Venture Fund</h4>
                  <p className="text-grey text-sm font-light leading-relaxed">Participate in our core fund investing in pre-seed and seed stage startups.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Syndicate & Co-Investments</h4>
                  <p className="text-grey text-sm font-light leading-relaxed">Direct investment opportunities alongside Maxinor in select high-conviction deals.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Equity Crowdfunding (ECF)</h4>
                  <p className="text-grey text-sm font-light leading-relaxed">Access vetted early-stage deals with lower minimum ticket sizes.</p>
                </div>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-warm-white font-medium tracking-wide rounded-full hover:bg-brand hover:text-warm-white transition-all duration-300 shadow-[0_0_20px_rgba(243,111,33,0.1)] hover:shadow-[0_0_30px_rgba(243,111,33,0.2)] hover:-translate-y-1">
                Join Our Investor Network <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
