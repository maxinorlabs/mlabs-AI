'use client';

import type { ReactNode } from 'react';
import { RevealText, type TextPart } from '@/components/motion/RevealText';
import { cn } from '@/lib/utils';

/**
 * The one way a Home section opens: an eyebrow, a heading whose words rise into place, and an optional supporting
 * block on the right on desktop and below on phones.
 */
export function SectionHeader({
  eyebrow,
  parts,
  className,
  children,
}: {
  eyebrow: string;
  parts: TextPart[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn('mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10', className)}>
      <div className="min-w-0 max-w-3xl">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
        <RevealText className="text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl" parts={parts} />
      </div>
      {children && <div className="shrink-0 md:max-w-sm">{children}</div>}
    </div>
  );
}
