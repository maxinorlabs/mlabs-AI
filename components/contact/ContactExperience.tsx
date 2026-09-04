import { ContactForm } from './ContactForm';

const audiences = ['Founders', 'SMEs', 'Corporates', 'Investors'];

function ContactIntro() {
  return (
    <div className="max-w-xl">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
        Contact Us
      </p>
      <h1 className="font-display text-[3rem] font-medium uppercase leading-[0.92] tracking-[-0.045em] text-navy sm:text-6xl lg:text-[4.65rem]">
        Let&apos;s build<br />
        what&apos;s <span className="text-brand">next.</span>
      </h1>
      <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-navy/65 sm:text-base">
        Whether you&apos;re building, scaling, investing, or exploring what&apos;s next, tell us where you are and where you want to go.
      </p>
      <div className="mt-7 flex max-w-md flex-wrap gap-x-5 gap-y-2.5" aria-label="Who we work with">
        {audiences.map((audience) => (
          <span
            key={audience}
            className="border-l border-navy/15 pl-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/55"
          >
            {audience}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ContactExperience() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-warm-white px-5 pb-10 pt-28 sm:px-8 lg:h-[100svh] lg:min-h-[680px] lg:px-10 lg:pb-5 lg:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-20 h-px bg-navy/10" />
      <div className="pointer-events-none absolute bottom-0 left-[35%] h-64 w-64 rounded-full bg-brand/[0.055] blur-[90px]" />
      <div className="relative mx-auto grid h-full max-w-7xl items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 xl:gap-20">
        <div className="flex items-center lg:h-[calc(100svh-7rem)] lg:min-h-[550px] lg:border-r lg:border-navy/12 lg:pr-10 xl:pr-16">
          <ContactIntro />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
