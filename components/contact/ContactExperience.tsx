import { ContactForm } from './ContactForm';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { configuredBasePath, withBasePath } from '@/lib/site-path';

const audiences = ['Founders', 'SMEs', 'Corporates'];

function ContactIntro() {
  return (
    <div className="max-w-xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
        Contact Us
      </p>
      <h1 className="font-display text-[3rem] font-medium uppercase leading-[0.92] tracking-[-0.045em] text-navy sm:text-6xl lg:text-[4.65rem]">
        Let’s build<br />
        what’s<br />
        <span className="text-brand">next</span>
      </h1>
      <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-navy/65 sm:text-base">
        Whether you&apos;re <strong className="font-semibold">building</strong>, <strong className="font-semibold">scaling</strong>, <strong className="font-semibold">investing</strong>, or <strong className="font-semibold">exploring</strong> what&apos;s next, tell us where you are and where you want to go.
      </p>
      <div className="mt-7 flex max-w-md flex-wrap gap-x-5 gap-y-2.5" aria-label="Who we work with">
        {audiences.map((audience) => (
          <span
            key={audience}
            className="border-l border-navy/15 pl-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy/55"
          >
            {audience}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3 border-t border-navy/10 pt-5">
        <Link
          href="https://www.linkedin.com/company/maxinor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy/65 transition-colors hover:text-brand"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          LinkedIn
        </Link>
        <Link
          href="mailto:contact@mlabs.co.in"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy/65 transition-colors hover:text-brand"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </Link>
      </div>
    </div>
  );
}

export function ContactExperience() {
  const contactEndpoint = withBasePath('/api/contact', configuredBasePath);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-warm-white px-5 pb-10 pt-28 sm:px-8 lg:h-[100svh] lg:min-h-[680px] lg:px-10 lg:pb-5 lg:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-20 h-px bg-navy/10" />
      <div className="pointer-events-none absolute bottom-0 left-[35%] h-64 w-64 rounded-full bg-brand/[0.055] blur-[90px]" />
      <div className="relative mx-auto grid h-full max-w-7xl gap-12 lg:content-center lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-12 xl:gap-20">
        <div className="lg:border-r lg:border-navy/12 lg:pt-5 lg:pr-10 xl:pt-7 xl:pr-16">
          <ContactIntro />
        </div>
        <ContactForm endpoint={contactEndpoint} />
      </div>
    </section>
  );
}
