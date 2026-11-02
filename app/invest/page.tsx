'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Landmark, Handshake } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import {
  Eyebrow,
  HoverRule,
  PaperSection,
  RouteCompass,
  RuledFaq,
  RuledList,
  panelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page/Paper';
import { EASE_OUT } from '@/lib/motion';

const painPoints = [
  {
    number: '01',
    title: 'The Information Asymmetry Problem',
    body: 'You see a 20-slide deck and a 30-minute pitch. The founder has been living in the business for two years. Without an operator inside the business before the term sheet, capital allocation is a bet on conviction, not evidence.',
  },
  {
    number: '02',
    title: 'The Post-Investment Execution Gap',
    body: 'Capital is easy. Execution after capital is where most early-stage investments fail. Investors find out 18 months later when the runway is gone and the business has not moved.',
  },
  {
    number: '03',
    title: 'The Deal Quality Problem',
    body: 'Whether it is a fresh investment or an acquisition, finding counterparties with real traction, real teams, and real operator depth is the hardest part -- and the part most diligence processes get wrong.',
  },
];

const engines = [
  {
    icon: Landmark,
    title: 'Venture Capital',
    href: '/capabilities/venture-capital',
    items: [
      'Operator-validated deal sourcing and diligence',
      'Milestone-linked capital structuring',
      'Post-investment operator support',
      'Portfolio governance and reporting',
      'Co-investment and syndicate access',
      'Follow-on strategy',
    ],
  },
  {
    icon: Handshake,
    title: 'M&A',
    href: '/capabilities/mergers-acquisitions',
    items: [
      'Buy-side and sell-side advisory',
      'Valuation and deal structuring',
      'Term sheet review and negotiation',
      'Due diligence coordination',
      'Post-merger integration planning',
      'Cap table and governance structuring',
    ],
  },
];

const investmentFormats = [
  {
    name: 'LP in the Maxinor Fund',
    duration: 'Fund lifecycle',
    description:
      'Participate in our core vehicle investing in pre-seed and seed stage startups across our portfolio. Quarterly reporting and annual LP meeting.',
  },
  {
    name: 'Syndicate and Co-Investment',
    duration: 'Per deal',
    description:
      'Direct co-invest alongside Maxinor in specific high-conviction deals. All co-invest opportunities are operator-validated and IC-approved before reaching the syndicate.',
  },
  {
    name: 'M&A Advisory',
    duration: '3-9 months',
    description:
      'Buy-side or sell-side advisory for founders and corporates navigating a transaction -- from valuation through to post-merger integration.',
  },
];

const portfolioLogos = [
  {
    name: 'IZF',
    src: '/images/izf-fill-logo.png',
    url: 'https://izfworld.com/',
  },
  {
    name: 'Nattier',
    src: '/images/screenshot-2026-01-07-at-9-02-56-pm.png',
    url: 'https://nattier.co.in/',
  },
  {
    name: 'Kachs',
    src: '/images/kachslogo-djobqbobxjiekpjl.webp',
    url: 'https://responcibleai.com/',
  },
  {
    name: 'Adaapt',
    src: '/images/adaapt.svg',
    url: 'https://www.adaapt.ai/',
  },
  {
    name: 'Aseed',
    src: '/images/screenshot-2026-01-07-at-9-08-21-pm.png',
    url: 'https://aseedinternational.org/',
  },
];

const faqs = [
  {
    q: 'Is this Maxinor investing its own capital, or advising others who invest?',
    a: 'Both. Maxinor deploys capital directly into ventures we have operated inside, and we structure co-investment and syndicate opportunities for external investors who want the same operator-validated diligence.',
  },
  {
    q: 'How is this different from a traditional VC fund?',
    a: 'A traditional VC evaluates from the outside. We evaluate from the inside -- an operator has already been embedded in the business before the investment decision is made.',
  },
  {
    q: 'Do you also advise on M&A transactions?',
    a: 'Yes. Buy-side and sell-side advisory, valuation, term sheet negotiation, and post-merger integration -- run by operators who have sat on both sides of the table.',
  },
  {
    q: 'What stage and sectors do you focus on?',
    a: 'Primarily pre-seed to Series A for venture capital, across D2C, Media, Healthcare, Education, BFSI, and Defence Tech -- sectors where our operators have genuine domain depth. M&A engagements span a wider range of stages.',
  },
  {
    q: 'What is the typical holding period for investments?',
    a: 'We target exits in 4 to 7 years. Portfolio companies are typically preparing for Series A within 18 months of our investment and subsequent rounds within 3 to 4 years.',
  },
];

export default function InvestPage() {
  return (
    <div className="pt-16 font-sans">

      {/* ── Section 1: Hero — words on the left, the compass pointing at Invest on the right ── */}
      <PaperSection fill className="border-t-0 py-16 md:py-[clamp(24px,5svh,64px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <Eyebrow>Venture Invest</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="mb-[clamp(16px,3svh,28px)] text-[clamp(36px,min(5.4vw,7.6svh),76px)] font-display font-medium leading-[1.02] tracking-[-0.03em]"
            >
              Deal flow where we already know{' '}
              <span className="text-brand">the business works.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-[clamp(20px,3.5svh,32px)] max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg"
            >
              Maxinor deploys capital and structures transactions with something most deal flow does not have: an operator already inside the business. Venture Capital and M&A, backed by evidence, not just conviction.
            </motion.p>
            {/* The three promises, as a ruled strip */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-[clamp(24px,4svh,40px)] flex w-fit flex-wrap divide-x divide-navy/10 rounded-full border border-navy/10 bg-white/60 font-mono text-[11px] uppercase tracking-[0.16em] text-navy/70"
            >
              {['Operator-Validated', 'Co-Investment Access', 'M&A Advisory'].map((chip) => (
                <li key={chip} className="px-4 py-2">{chip}</li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className={primaryButtonClass}>
                Join our investor network <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/scale" className={secondaryButtonClass}>
                See Venture Scale
              </Link>
            </motion.div>
          </div>
          <div className="hidden justify-center md:flex">
            <RouteCompass here="Invest" className="w-[min(78%,58svh,440px)] animate-fade [animation-delay:200ms]" />
          </div>
        </div>
      </PaperSection>

      {/* ── Section 2: The Problem ── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>The Problem</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Why most capital decisions are ' }, { text: 'flying blind.', className: 'text-brand' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {painPoints.map((p) => (
            <StaggerItem key={p.title} className="group relative px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <span aria-hidden="true" className="mb-6 block h-0.5 w-8 bg-brand" />
              <h3 className="mb-3 text-xl font-display font-medium text-navy">{p.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-grey">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* ── Section 3: What You Get ── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>What You Get</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Two engines. ' }, { text: 'One accountable team.', className: 'text-navy/50' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-2`}>
          {engines.map((engine) => (
            <StaggerItem key={engine.title} className="group relative flex flex-col px-6 py-8 transition-colors duration-300 hover:bg-white md:px-10">
              <HoverRule />
              <div className="mb-5 flex items-center gap-3">
                <engine.icon aria-hidden="true" className="h-5 w-5 text-navy/40 transition-colors duration-300 group-hover:text-brand" strokeWidth={1.5} />
                <h3 className="text-2xl font-display font-medium text-navy">{engine.title}</h3>
              </div>
              <RuledList items={engine.items} className="mb-6 flex-1" />
              <Link
                href={engine.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-all duration-200 hover:gap-2.5 hover:text-brand"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* ── Section 4: Investment Formats ── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>Engagement Models</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Three ways to work with us ' }, { text: 'on capital.', className: 'text-brand' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {investmentFormats.map((model) => (
            <StaggerItem key={model.name} className="group relative flex flex-col px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50">{model.duration}</p>
              <h3 className="mb-4 text-2xl font-display font-medium text-navy">{model.name}</h3>
              <p className="flex-1 border-t border-navy/10 pt-4 text-[15px] font-light leading-relaxed text-grey">{model.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* Section 5: Portfolio, hidden, set to true to re-enable */}
      {false && (
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center md:mb-16"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Portfolio</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-4xl lg:text-5xl">
              Companies in the Maxinor portfolio.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {portfolioLogos.map((logo, i) => (
              <motion.a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative flex h-20 w-36 items-center justify-center rounded-2xl border border-grey/15 bg-white p-4 transition-all duration-300 hover:border-brand/25 hover:shadow-md sm:h-24 sm:w-44"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* ── Section 6: FAQ ── */}
      <PaperSection className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <Reveal>
            <Eyebrow>Common Questions</Eyebrow>
            <RevealText
              className="text-3xl font-display font-medium tracking-tight md:text-5xl"
              parts={[{ text: 'Frequently asked ' }, { text: 'questions.', className: 'text-brand' }]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <RuledFaq items={faqs} />
          </Reveal>
        </div>
      </PaperSection>

      {/* ── Section 7: CTA — laid out like the hero, so the page ends where it began ── */}
      <PaperSection fill className="py-20 md:py-[clamp(28px,6svh,128px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <Eyebrow>Get Started</Eyebrow>
            <RevealText
              className="mb-6 text-4xl font-display font-medium leading-[1.05] tracking-tight md:text-[clamp(32px,min(4.2vw,6.4svh),54px)]"
              parts={[{ text: 'The deal flow you have been looking for is ' }, { text: 'inside the business, not on the pitch deck.', className: 'text-brand' }]}
            />
            <p className="mb-10 max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg">
              Tell us about your investment mandate or transaction. We will tell you if there is a fit.
            </p>
            <Link href="/contact" className={primaryButtonClass}>
              Join our investor network <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="hidden justify-center md:flex">
            <RouteCompass here="Invest" className="w-[min(70%,52svh,400px)]" />
          </div>
        </div>
      </PaperSection>

    </div>
  );
}
