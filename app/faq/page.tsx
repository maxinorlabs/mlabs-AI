'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    id: '01',
    title: 'WHAT IS A VENTURE STUDIO AS PER US?',
    detail:
      'VCs write cheques. Accelerators move on after demo day. Incubators are not designed for scale. Maxinor runs the entire spectrum with you & stays accountable to outcomes.',
  },
  {
    id: '02',
    title: 'WHAT STAGE DO YOU WORK WITH?',
    detail:
      'We work with founders from idea through to scale. For Venture Build, you need a validated white space or early prototype. For Venture Scale, you need product-market fit, revenue & positive cash flow.',
  },
  {
    id: '03',
    title: 'DO I HAVE TO GIVE UP EQUITY?',
    detail:
      'It depends on the engagement model. The Discovery Sprint is a fixed fee with no equity. The Partnership model is custom designed and would range from equity, retainer, revenue share or hybrid. The Fractional model is a retainer with no equity. We structure every deal to ensure incentives are real, not symbolic.',
  },
  {
    id: '04',
    title: 'HOW LONG BEFORE WE SEE RESULTS?',
    detail:
      'Most ventures see a clear diagnosis roadmap within 30 days. Measurable impact typically shows within 90 days of operator embedding.',
  },
  {
    id: '05',
    title: 'WHO ARE THE OPERATORS AT MAXINOR?',
    detail:
      'Former founders and executives (with min 15+ years experience) who have built and scaled real businesses. Our team has operated at Paytm, Google, Zee, ITC, Accenture, World Bank, HealthKart, EcomXpress and more. Every operator has a functional track record in the area they lead.',
  },
  {
    id: '06',
    title: 'CAN MAXINOR HELP WITH FUNDRAISING?',
    detail:
      'Yes, but not as a placement agent. We prepare you for fundraising by fixing the metrics, the narrative, and the data room that investors actually scrutinise. Founders who raise through us raise because they are genuinely ready, not because they have been coached to pitch.',
  },
  {
    id: '07',
    title: 'THE SCALE GAP',
    detail:
      '90% of Indian startups fail within 5 years. The problem is often not the idea itself or only capital, BUT the lack of consistent execution, operator depth, and scale discipline.',
  },
  {
    id: '08',
    title: 'OPERATORS OVER ADVISORS',
    detail:
      'Studio startups reach Series A in 25 months versus 56 months traditionally. We bring embedded operators who build with you from inside the business, not consultants who leave after a deck.',
  },
  {
    id: '09',
    title: 'FOUR ENGINES, NOT ONE FIX',
    detail:
      'Revenue, Operations, Talent, and AI & Data work together as one system, with each engine led by someone who has scaled before.',
  },
  {
    id: '10',
    title: 'MILESTONE-FIRST CAPITAL',
    detail:
      'We prove value through embedded execution before deploying capital. Our model puts real skin in the game long before a term sheet enters the conversation.',
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <div className="font-sans">
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Common Questions
          </p>
          <h1 className="mb-6 text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl">
            Frequently Asked <span className="text-brand">Questions</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            Everything founders usually ask before working with Maxinor.
          </p>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 w-full grid gap-4 md:mb-16">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-brand/20 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-8"
                >
                  <div className="flex min-w-0 items-center gap-4 md:gap-6">
                    <span className="shrink-0 text-3xl font-display font-medium text-navy/20 md:text-4xl">{item.id}</span>
                    <span className="text-base font-bold tracking-wide text-navy md:text-lg">{item.title}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openId === item.id ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 md:px-8 md:pb-8"
                    >
                      <p className="border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-navy/80 md:pt-6 md:text-lg">
                        {item.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-12 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
