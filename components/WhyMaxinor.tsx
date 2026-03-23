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
];

export default function WhyMaxinor() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section className="py-32 px-6 bg-warm-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-navy">
          Why <span className="text-brand">Maxinor</span>
        </h2>
        <h2 className="text-xl font-light text-navy text-center mb-20 max-w-2xl leading-relaxed">
          &ldquo;Building startups is hard, but scaling with the right operators is easier&rdquo;
        </h2>

        <div className="w-full space-y-4 mb-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-brand/20 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-display font-medium text-navy/20">{item.id}</span>
                  <span className="text-lg font-bold text-navy tracking-wide">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openId === item.id ? 45 : 0 }}
                  className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand"
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-navy/80 font-light leading-relaxed pt-6 border-t border-navy/10">
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
          className="inline-flex items-center gap-2 bg-brand text-white px-12 py-5 rounded-full text-lg font-semibold tracking-wide hover:bg-brand/90 transition-all duration-300 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] hover:-translate-y-1"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
