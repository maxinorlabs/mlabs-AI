'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  FileQuestion,
  Users,
  TrendingDown,
  Lightbulb,
  Code2,
  Megaphone,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import {
  Eyebrow,
  HoverRule,
  PaperSection,
  PhotoMoment,
  RouteCompass,
  RuledFaq,
  RuledList,
  panelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from '@/components/page/Paper';
import { EASE_OUT } from '@/lib/motion';

/* ─── Data ─── */
const painPoints = [
  {
    icon: FileQuestion,
    number: '01',
    title: 'The Blank Page Problem',
    body: 'Most founders have conviction but no structure. Without a validated business model, customer discovery framework, and product scope, the first 6 months are wasted on building the wrong thing.',
  },
  {
    icon: Users,
    number: '02',
    title: 'The Co-Founder Gap',
    body: 'Solo founders need technical or commercial co-founders. Finding and evaluating them alone is slow, expensive, and high-risk without a framework.',
  },
  {
    icon: TrendingDown,
    number: '03',
    title: 'The GTM Graveyard',
    body: 'Building the product is the easy part. Most early-stage startups die because they cannot crack their first 100 customers. GTM is not a phase after launch - it is built in from day one.',
  },
];

const engines = [
  {
    icon: Code2,
    title: 'AI & Tech',
    href: '/capabilities/ai-tech',
    items: [
      'AI product architecture and MVP build',
      'Agentic automation and workflow AI',
      'Data platform and AI infrastructure buildout',
      'Tech architecture built for scale from day one',
      'DevOps, cloud, and full-stack engineering',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Product & Design',
    href: '/capabilities/product-research',
    items: [
      'Market sizing and opportunity validation',
      'Customer discovery and ICP definition',
      'UX/UI design and design systems',
      'MVP scoping and prioritisation',
      'Product development from prototype to shipped release',
    ],
  },
  {
    icon: Megaphone,
    title: 'Brand & Marketing',
    href: '/capabilities/brand-marketing',
    items: [
      'Brand positioning and identity development',
      'First customer acquisition playbook',
      'D2C performance marketing and CAC optimisation',
      'Launch strategy and competitive positioning',
      'Community and content-led growth',
    ],
  },
];

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    timeline: 'Week 1-2',
    detail:
      'Market and customer research, opportunity sizing, initial business model.',
  },
  {
    number: '02',
    phase: 'Validate',
    timeline: 'Week 2-4',
    detail:
      'Customer interviews, prototype testing, pivot or proceed decision.',
  },
  {
    number: '03',
    phase: 'Build',
    timeline: 'Month 2-3',
    detail:
      'Product development, brand, and GTM infrastructure.',
  },
  {
    number: '04',
    phase: 'Launch',
    timeline: 'Month 3',
    detail:
      'First customer acquisition, channel testing, revenue model validation.',
  },
  {
    number: '05',
    phase: 'Scale',
    timeline: 'Month 4+',
    detail:
      'Handover to Venture Scale or independent operation.',
  },
];

const ventures = [
  {
    name: 'IZF',
    url: 'https://izfworld.com/',
    logo: '/images/izf-fill-logo.png',
  },
  {
    name: 'Nattier',
    url: 'https://nattier.co.in/',
    logo: '/images/screenshot-2026-01-07-at-9-02-56-pm.png',
  },
  {
    name: 'Kachs',
    url: 'https://responcibleai.com/',
    logo: '/images/kachslogo-djobqbobxjiekpjl.webp',
  },
  {
    name: 'Adaapt',
    url: 'https://www.adaapt.ai/',
    logo: '/images/adaapt.svg',
  },
  {
    name: 'Aseed',
    url: 'https://aseedinternational.org/',
    logo: '/images/screenshot-2026-01-07-at-9-08-21-pm.png',
  },
];

const faqs = [
  {
    q: 'Who is Venture Build for?',
    a: 'Founders with a validated white space or early prototype who need an execution partner to build fast. Also corporates wanting to spin out a new venture, and domain experts who want to build an AI-native company in their field.',
  },
  {
    q: 'How is this different from an accelerator?',
    a: 'Accelerators give you a programme and a network. We give you an operator who works with you daily, builds with you, and is accountable to the same outcomes you are. There is no cohort, no demo day, and no generic curriculum.',
  },
  {
    q: 'What does Maxinor get from Venture Build?',
    a: 'We take a small equity stake aligned to the build milestones, similar to a co-founder arrangement. The exact structure depends on how much of the build Maxinor contributes.',
  },
  {
    q: 'Do I need to have a product already?',
    a: 'No. Many Venture Build engagements start from a validated market insight or an early customer conversation. We help you build the product and the business model together.',
  },
  {
    q: 'Can Venture Build lead to Venture Scale?',
    a: 'Yes. Most companies that go through Venture Build transition into Venture Scale at the growth stage. The operator relationship deepens as the company scales.',
  },
];

/* ─── The build process, drawn as a course: a line that plots itself through each phase ─── */
function BuildCourse() {
  return (
    <>
      {/* Desktop: across the page */}
      <div className="relative hidden lg:block">
        <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] h-px border-t border-dashed border-navy/20" />
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
          className="absolute left-0 right-0 top-[7px] h-px origin-left bg-brand"
        />
        <ol className="relative grid grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <li key={step.phase}>
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0.4, backgroundColor: 'rgb(255 255 255)' }}
                whileInView={{ scale: 1, backgroundColor: 'rgb(243 111 33)' }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.15 + i * 0.27, duration: 0.3 }}
                className="mb-6 block h-[15px] w-[15px] rounded-full border-2 border-brand"
              />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.25 + i * 0.27, duration: 0.5, ease: EASE_OUT }}
              >
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50">{step.timeline}</p>
                <h3 className="mb-2 text-xl font-display font-medium text-navy">{step.phase}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{step.detail}</p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>

      {/* Phones and tablets: down a spine */}
      <ol className="relative space-y-8 border-l border-dashed border-navy/20 pl-8 lg:hidden">
        {steps.map((step) => (
          <li key={step.phase} className="relative">
            <span aria-hidden="true" className="absolute -left-[40px] top-1 h-[15px] w-[15px] rounded-full border-2 border-brand bg-brand" />
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50">{step.timeline}</p>
            <h3 className="mb-1 text-lg font-display font-medium text-navy">{step.phase}</h3>
            <p className="text-sm font-light leading-relaxed text-grey">{step.detail}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

/* ─── Page ─── */
export default function BuildPage() {
  return (
    <div className="pt-16 font-sans">

      {/* ── Section 1: Hero — words on the left, the compass pointing at Build on the right ── */}
      <PaperSection fill className="border-t-0 py-16 md:py-[clamp(24px,5svh,64px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <Eyebrow>Venture Build</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="mb-[clamp(16px,3svh,28px)] text-[clamp(36px,min(5.4vw,7.6svh),76px)] font-display font-medium leading-[1.02] tracking-[-0.03em]"
            >
              We don&apos;t just back founders.{' '}
              <span className="text-brand">We build companies with them.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-[clamp(20px,3.5svh,32px)] max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg"
            >
              Maxinor&apos;s Venture Build engine co-creates AI-native startups from validated white spaces. We bring the operators, the technology infrastructure, and the market expertise. You bring the domain insight and founder commitment.
            </motion.p>
            {/* The three promises, as a ruled strip */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-[clamp(24px,4svh,40px)] flex w-fit flex-wrap divide-x divide-navy/10 rounded-full border border-navy/10 bg-white/60 font-mono text-[11px] uppercase tracking-[0.16em] text-navy/70"
            >
              {['AI-Native', '90 Days to Launch', 'Operator Co-Creation'].map((chip) => (
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
                Start a conversation <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/scale" className={secondaryButtonClass}>
                See how we scale
              </Link>
            </motion.div>
          </div>
          <div className="hidden justify-center md:flex">
            <RouteCompass here="Build" className="w-[min(78%,58svh,440px)] animate-fade [animation-delay:200ms]" />
          </div>
        </div>
      </PaperSection>

      {/* ── A photo band between the hero and the detail ── */}
      <PhotoMoment src="/images/photos/build-team.webp" position="50% 45%" line={<>The conversation starts with an operator, <span className="text-brand">not a pitch deck.</span></>} />

      {/* ── Section 2: The Problem We Solve ── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>The Problem We Solve</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Most startups fail before they ' }, { text: 'find their model.', className: 'text-brand' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {painPoints.map((p) => (
            <StaggerItem key={p.title} className="group relative px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <p.icon aria-hidden="true" className="mb-6 h-5 w-5 text-navy/40 transition-colors duration-300 group-hover:text-brand" strokeWidth={1.5} />
              <h3 className="mb-3 text-xl font-display font-medium text-navy">{p.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-grey">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PaperSection>

      {/* ── Section 3: What Venture Build Covers ── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-12 md:mb-14">
          <Eyebrow>What We Cover</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'Three engines. ' }, { text: 'One integrated build.', className: 'text-brand' }]}
          />
        </Reveal>
        <Stagger className={`${panelClass} md:grid-cols-3`}>
          {engines.map((engine) => (
            <StaggerItem key={engine.title} className="group relative flex flex-col px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8">
              <HoverRule />
              <div className="mb-5 flex items-center gap-3">
                <engine.icon aria-hidden="true" className="h-5 w-5 text-navy/40 transition-colors duration-300 group-hover:text-brand" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-medium text-navy">{engine.title}</h3>
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

      {/* ── Section 4: How It Works ── */}
      <PaperSection className="py-20 md:py-28">
        <Reveal className="mb-14 md:mb-20">
          <Eyebrow>The Build Process</Eyebrow>
          <RevealText
            className="max-w-2xl text-3xl font-display font-medium tracking-tight md:text-5xl"
            parts={[{ text: 'From white space to ' }, { text: 'working business.', className: 'text-brand' }]}
          />
        </Reveal>
        <BuildCourse />
      </PaperSection>

      {/* ── Section 5: Companies Built — hidden, set to true to re-enable ── */}
      {false && (
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-6">
            {ventures.map((v) => (
              <a
                key={v.name}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-2xl border border-grey/15 bg-white p-5 sm:p-6"
              >
                <div className="relative h-10 w-full sm:h-12">
                  <Image src={v.logo} alt={v.name} fill className="object-contain" referrerPolicy="no-referrer" />
                </div>
              </a>
            ))}
          </div>
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
              parts={[{ text: 'Everything you ' }, { text: 'need to know.', className: 'text-brand' }]}
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
              className="mb-6 text-4xl font-display font-medium leading-[1.05] tracking-tight md:text-[clamp(36px,min(5vw,7.4svh),64px)]"
              parts={[{ text: 'Have a white space? ' }, { text: 'Let us build it with you.', className: 'text-brand' }]}
            />
            <p className="mb-10 max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg">
              The conversation starts with an operator, not a pitch deck. Tell us about the opportunity and we will tell you if Venture Build is the right fit.
            </p>
            <Link href="/contact" className={primaryButtonClass}>
              Start a conversation <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="hidden justify-center md:flex">
            <RouteCompass here="Build" className="w-[min(70%,52svh,400px)]" />
          </div>
        </div>
      </PaperSection>

    </div>
  );
}
