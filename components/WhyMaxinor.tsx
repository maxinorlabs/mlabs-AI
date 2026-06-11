'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    id: '01',
    title: 'THE SCALE GAP',
    detail:
      '90% of Indian startups fail within 5 years. The problem is usually not the idea itself, but the lack of consistent execution, operator depth, and scale discipline.',
  },
  {
    id: '02',
    title: 'OPERATORS OVER ADVISORS',
    detail:
      'Studio startups reach Series A in 25 months versus 56 months traditionally. We bring embedded operators who build with you from inside the business, not consultants who leave after a deck.',
  },
  {
    id: '03',
    title: 'FOUR ENGINES, NOT ONE FIX',
    detail:
      'Revenue, Operations, Talent, and AI & Data work together as one system, with each engine led by someone who has scaled before.',
  },
  {
    id: '04',
    title: 'MILESTONE-FIRST CAPITAL',
    detail:
      'We prove value through embedded execution before deploying capital. Our model puts real skin in the game long before a term sheet enters the conversation.',
  },
  {
    id: '05',
    title: 'HOW IS MAXINOR DIFFERENT FROM A VC OR ACCELERATOR?',
    detail:
      'VCs write cheques and advise from a distance. Accelerators run programmes and move on after demo day. Maxinor embeds operators inside your business and stays accountable to outcomes. We do not just fund startups. We build and scale them.',
  },
  {
    id: '06',
    title: 'WHAT STAGE DO YOU WORK WITH?',
    detail:
      'We work with founders from pre-product through to Series A. For Venture Build, you need a validated white space or early prototype. For Venture Scale, you need product-market fit and at least some revenue. We are not the right partner for pre-idea or post-Series B.',
  },
  {
    id: '07',
    title: 'DO I HAVE TO GIVE UP EQUITY?',
    detail:
      'It depends on the engagement model. The Discovery Sprint is a fixed fee with no equity. The Partnership model involves a small equity stake aligned to execution milestones. The Fractional CXO is a retainer with no equity. We structure every deal to ensure incentives are real, not symbolic.',
  },
  {
    id: '08',
    title: 'HOW LONG BEFORE WE SEE RESULTS?',
    detail:
      'Most founders see a clear diagnosis and prioritised roadmap within 30 days. Measurable business impact typically shows within 60 to 90 days of operator embedding. Series A readiness is a 6 to 9 month build depending on where you start.',
  },
  {
    id: '09',
    title: 'WHO ARE THE OPERATORS AT MAXINOR?',
    detail:
      'Former founders and executives who have built and scaled real businesses, not MBAs or management consultants. Our team has operated at Paytm, Google, OYO, ITC, Accenture, and more. Every operator has a functional track record in the area they lead.',
  },
  {
    id: '10',
    title: 'CAN MAXINOR HELP WITH FUNDRAISING?',
    detail:
      'Yes, but not as a placement agent. We prepare you for fundraising by fixing the metrics, the narrative, and the data room that investors actually scrutinise. Founders who raise through us raise because they are genuinely ready, not because they have been coached to pitch.',
  },
];

export default function WhyMaxinor() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section className="bg-warm-white px-6 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:mb-6 md:text-5xl">
            Why <span className="text-brand">Maxinor</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-navy/70 md:text-xl">
            &ldquo;Building startups is hard, but scaling with the right operators is easier&rdquo;
          </p>
        </div>

        <div className="mb-12 w-full grid gap-4 md:grid-cols-2 md:items-start md:mb-16">
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

        <Link
          href="/contact"
          className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide whitespace-nowrap text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-12 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
