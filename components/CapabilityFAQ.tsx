'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

type FAQItem = { name: string; acceptedAnswer: { text: string } };

export function CapabilityFAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-grey/10 overflow-hidden rounded-[2rem] border border-grey/15 bg-white">
      {items.map((item, i) => (
        <div key={item.name}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-warm-white/40"
          >
            <span className="text-base font-semibold text-navy">{item.name}</span>
            <span className="shrink-0 text-brand">
              {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="px-8 pb-6 text-sm font-light leading-relaxed text-grey">
                  {item.acceptedAnswer.text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
