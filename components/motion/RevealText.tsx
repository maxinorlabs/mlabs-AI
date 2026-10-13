'use client';

import { motion, type Variants } from 'motion/react';
import { EASE_OUT, revealViewport } from '@/lib/motion';

export type TextPart = { text: string; className?: string };

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const word: Variants = {
  hidden: { y: '105%' },
  visible: { y: '0%', transition: { duration: 0.6, ease: EASE_OUT } },
};

/**
 * A heading whose words slide up out of a mask one after another when it scrolls into view.
 * The words stay ordinary text in the DOM, so the heading reads normally for search engines and screen readers.
 */
export function RevealText({
  as = 'h2',
  parts,
  className = '',
}: {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  parts: TextPart[];
  className?: string;
}) {
  const Tag = motion[as];
  return (
    <Tag initial="hidden" whileInView="visible" viewport={revealViewport} variants={parent} className={className}>
      {parts.map((part, p) =>
        part.text.split(/(\s+)/).map((token, i) =>
          /^\s+$/.test(token) || token === '' ? (
            token
          ) : (
            // Padding + negative margin give descenders room inside the mask.
            <span key={`${p}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
              <motion.span variants={word} className={`inline-block ${part.className ?? ''}`}>
                {token}
              </motion.span>
            </span>
          ),
        ),
      )}
    </Tag>
  );
}
