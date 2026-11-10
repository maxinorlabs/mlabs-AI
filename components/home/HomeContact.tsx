'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CompassRing } from '@/components/Compass';
import { SectionHeader } from '@/components/home/SectionHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Reveal } from '@/components/motion/Reveal';
import { getEngagement, type EngagementId } from '@/lib/engagements';
import { configuredBasePath, withBasePath } from '@/lib/site-path';

const REACH = [
  { label: 'Email', value: 'mango@mlabs.co.in', href: 'mailto:mango@mlabs.co.in' },
  { label: 'Meet', value: 'The operator team', href: '/team' },
];

/**
 * The page's close, on the hero's paper: the invitation on the left and a short enquiry on the right, so a
 * visitor can start the conversation without leaving. An engagement picked higher up arrives in the form.
 */
export function HomeContact({ engagement }: { engagement: EngagementId | null }) {
  const interest = getEngagement(engagement)?.name;

  return (
    <section id="get-started" aria-label="Get in touch" className="relative scroll-mt-16 overflow-clip bg-warm-white px-6 py-16 text-navy md:px-12 md:py-20">
      {/* The compass ring turns slowly behind the form, so the page ends where it began */}
      <CompassRing
        spin
        className="absolute left-1/2 top-1/2 w-[min(140vw,760px)] -translate-x-1/2 -translate-y-1/2 text-navy opacity-15 lg:left-auto lg:right-[-4%] lg:w-[min(52vw,90svh,760px)] lg:translate-x-0 lg:opacity-40"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeader
            eyebrow="Next step"
            parts={[{ text: 'Ready to ' }, { text: 'Scale', className: 'text-brand' }, { text: ' Your Vision?' }]}
            className="mb-5"
          />
          <p className="max-w-xl text-pretty text-base font-light leading-relaxed text-grey">
            Join India&apos;s first operator-led AI venture studio. Whether you&apos;re a founder looking to scale or an investor
            seeking high-growth opportunities, let&apos;s build the future together.
          </p>
          {/* Other ways to reach us, ruled like the panels above */}
          <div className="mt-8 grid max-w-xl grid-cols-1 divide-y divide-navy/10 border-y border-navy/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {REACH.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="press group/row flex items-center justify-between gap-3 py-3 transition duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-4 sm:first:pl-0"
              >
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-navy/60">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-navy/40 transition duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-brand"
                />
              </Link>
            ))}
          </div>
        </Reveal>

        {/* The enquiry, on a white sheet that lifts off the paper */}
        <div className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_12px_24px_-16px_rgba(11,31,59,0.35)] transition-colors duration-300 focus-within:border-brand/40 sm:p-8">
          <ContactForm endpoint={withBasePath('/api/contact', configuredBasePath)} compact interest={interest} />
        </div>
      </div>
    </section>
  );
}
