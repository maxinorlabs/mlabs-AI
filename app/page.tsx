'use client';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Hospital,
  Landmark,
  MonitorPlay,
  Shield,
  Store,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhyMaxinor from '../components/WhyMaxinor';

const sectionPadding = 'px-6 py-20 md:py-28 lg:py-32';
const sectionIntro = 'mb-14 text-center md:mb-20';
const sectionTitle = 'text-3xl md:text-5xl font-display font-medium tracking-tight mb-5 md:mb-6';
const sectionBody = 'text-base md:text-xl font-light leading-relaxed';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:px-12 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';
const secondaryButtonClass =
  'inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full border border-grey/40 bg-white/80 px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-warm-white sm:px-12 sm:py-5 sm:text-lg';

const domainGroups = [
  {
    category: 'CONSUMER & RETAIL',
    domains: [
      {
        name: 'Media',
        description: 'Broadcasting & Digital Media',
        icon: MonitorPlay,
      },
      {
        name: 'D2C & B2C',
        description: 'Consumer Brands & Retail',
        icon: Store,
      },
    ],
  },
  {
    category: 'TECH & INFRASTRUCTURE',
    domains: [
      {
        name: 'AI & Data',
        description: 'AI Products & Data Platforms',
        icon: Bot,
      },
      {
        name: 'FinTech',
        description: 'Financial Service & Deep Tech',
        icon: Landmark,
      },
    ],
  },
  {
    category: 'SPECIALIZED SECTORS',
    domains: [
      {
        name: 'Healthcare',
        description: 'Health Tech & Clinical Tools',
        icon: Hospital,
      },
      {
        name: 'Defence',
        description: 'Defence Tech & Deep Tech',
        icon: Shield,
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <div className="font-sans">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-12 md:min-h-[90vh] md:py-16">
          {/* Background image */}
          <Image
            src="https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4de10bf5c464cee859085_adrian-cuj-o_9YmCY0bag-unsplash-2.webp"
            alt="Maxinor studio workspace"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy/70 pointer-events-none" />
          {/* Bottom fade to page */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(247,247,245,1)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="mx-auto mb-6 max-w-4xl text-[40px] leading-[1.05] font-display font-medium tracking-tight text-warm-white sm:text-5xl md:mb-8 md:text-7xl lg:text-[84px]">
                India&apos;s 1st <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-brand/80">Operator Led AI Venture Studio</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mb-10 max-w-2xl text-lg font-semibold leading-relaxed text-warm-white sm:text-xl md:mb-12 md:text-2xl lg:text-3xl"
            >
              Operator&apos;s backing Entrepreneurs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <Link href="/scale" className={primaryButtonClass}>
                Venture Scale
              </Link>
              <Link href="/build" className={secondaryButtonClass}>
                Venture Build
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className={`${sectionPadding} bg-navy border-y border-grey/20`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={`${sectionTitle} text-warm-white`}>
                What We <span className="text-brand">Do</span>
              </h2>
              <p className={`${sectionBody} mx-auto max-w-3xl text-warm-white/80`}>
                Maxinor assists founders to scale their ventures, SMEs to unlock growth, corporates to craft
                innovation, and investors to seek returns via the &ldquo;Maxinor Operator Platform&rdquo;
              </p>
            </div>

            {/* Four pillar cards */}
            <div className="grid gap-0 grid-cols-1 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/10">
              {/* Venture Build — blue */}
              <div className="group border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white/10">
                <h3 className="mb-1 text-xl font-display font-bold text-warm-white md:text-2xl">
                  Venture Build
                </h3>
                <p className="mb-4 text-sm font-semibold text-teal">Startup Creation Engine</p>
                <p className="text-sm font-light leading-relaxed text-warm-white/75">
                  Creation of New AI-Native companies from &ldquo;Scratch&rdquo; across domains.
                </p>
              </div>

              {/* Venture Scale — white */}
              <div className="group bg-warm-white border-r border-grey/20 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white border-t-4 border-t-brand">
                <h3 className="mb-1 text-xl font-display font-bold text-navy md:text-2xl">
                  Venture Scale
                </h3>
                <p className="mb-4 text-sm font-semibold text-brand">Execution Led Engine</p>
                <p className="text-sm font-light leading-relaxed text-grey">
                  Operator capabilities that <strong className="font-semibold text-navy">deliver measurable business outcomes</strong> for existing startups, SMEs, and companies.
                </p>
              </div>

              {/* Venture Investment — blue */}
              <div className="group border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white/10">
                <h3 className="mb-1 text-xl font-display font-bold text-warm-white md:text-2xl">
                  Venture Investment
                </h3>
                <p className="mb-4 text-sm font-semibold text-teal">Investment Engine</p>
                <p className="text-sm font-light leading-relaxed text-warm-white/75">
                  Milestone-linked capital deployment into vetted startups, aligned with operator execution outcomes.
                </p>
              </div>

              {/* Shared AI Capability Centre — white */}
              <div className="group bg-warm-white border-l border-grey/20 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white border-t-4 border-t-teal">
                <h3 className="mb-1 text-xl font-display font-bold text-navy md:text-2xl">
                  Shared AI Capability
                </h3>
                <p className="mb-4 text-sm font-semibold text-teal">Capability Centre</p>
                <p className="text-sm font-light leading-relaxed text-grey">
                  Technology, Product, HR, Supply Chain, Marketing &amp; Operations powering{' '}
                  <strong className="font-semibold text-navy">Build, Scale, and Invest.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Startups We Work With */}
        <section className="overflow-hidden border-y border-grey/10 bg-white px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
            <h2 className={`${sectionTitle} mb-4`}>
              The Startups We <span className="text-brand">Work With</span>
            </h2>
            <p className="text-base text-grey md:text-lg">
              Partnering with visionary founders to build category-defining companies.
            </p>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 px-4 items-center">
                  {[
                    { url: "https://izfworld.com/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png" },
                    { url: "https://nattier.co.in/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png" },
                    { url: "https://responcibleai.com/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif" },
                    { url: "https://www.adaapt.ai/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg" },
                    { url: "", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b70ff7ee3292c3baa5a9_Gemini_Generated_Image_2c1xpu2c1xpu2c1x.png" },
                    { url: "https://aseedinternational.org/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png" }
                  ].map((item, idx) => (
                    <Link 
                      key={`${i}-${idx}`} 
                      href={item.url || "#"}
                      target={item.url ? "_blank" : undefined}
                      rel={item.url ? "noopener noreferrer" : undefined}
                      className="relative flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-grey/30 bg-white p-3 transition-all duration-500 hover:border-brand/50 hover:bg-white/90 md:h-24 md:w-48 md:p-4"
                    >
                      <Image 
                        src={item.logo} 
                        alt={`Startup Partner ${idx + 1}`} 
                        fill 
                        className="object-contain p-3 opacity-70 transition-opacity duration-300 hover:opacity-100 md:p-4"
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none md:w-32" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none md:w-32" />
          </div>
        </section>

        <WhyMaxinor />

        {/* Domains We Work In */}
        <section className={`${sectionPadding} bg-white border-y border-grey/10`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={sectionTitle}>
                Domains We <span className="text-brand">Work In</span>
              </h2>
              <p className={`${sectionBody} text-navy/70`}>
                Deep operator expertise across high-growth sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-y-0">
              {domainGroups.map((group) => (
                <div key={group.category}>
                  <p className="mt-4 mb-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand md:mt-0 md:mb-4 md:text-sm">
                    {group.category}
                  </p>
                  <div className="flex flex-col gap-4">
                    {group.domains.map((domain) => (
                      <div
                        key={domain.name}
                        className="group flex min-h-[148px] cursor-default items-center gap-4 rounded-2xl border border-grey/20 bg-warm-white p-4 transition-all duration-300 hover:border-brand/50 hover:bg-white md:min-h-[156px] md:p-5"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-grey/15 bg-grey/8 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/5 md:h-14 md:w-14">
                          <domain.icon className="h-5 w-5 text-grey/60 transition-colors duration-300 group-hover:text-brand md:h-6 md:w-6" />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <h3 className="text-sm font-bold uppercase leading-tight tracking-[0.16em] text-navy transition-colors duration-300 group-hover:text-brand md:text-[15px]">
                            {domain.name}
                          </h3>
                          <p className="mt-2 max-w-[15rem] text-sm font-light leading-[1.45] text-grey md:text-[15px]">
                            {domain.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className={`${sectionPadding} bg-white border-y border-grey/30`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={sectionTitle}>
                We Scale, Not Just <span className="text-brand">Back Startups!</span>
              </h2>
              <p className={`${sectionBody} mx-auto max-w-3xl text-grey`}>
                Maxinor accelerates startup growth with embedded operators and milestone-based funding, shortening the path to scale and Series A.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-grey/20 bg-warm-white p-8 shadow-sm transition-all duration-500 hover:border-brand/30 hover:shadow-md md:p-10">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-display font-medium md:text-2xl">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm">01</span> Venture Sprint
                </h3>
                <p className="text-base font-light leading-relaxed text-grey md:text-lg">
                  30-day hands-on diagnostic and tailored execution roadmap
                </p>
              </div>
              <div className="rounded-[2rem] border border-grey/20 bg-warm-white p-8 shadow-sm transition-all duration-500 hover:border-brand/30 hover:shadow-md md:p-10">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-display font-medium md:text-2xl">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm">02</span> Venture Partner
                </h3>
                <p className="text-base font-light leading-relaxed text-grey md:text-lg">
                  6-month embedded execution + Equity Investment &amp; Series A prep
                </p>
              </div>
              <div className="rounded-[2rem] border border-grey/20 bg-warm-white p-8 shadow-sm transition-all duration-500 hover:border-brand/30 hover:shadow-md md:p-10">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-display font-medium md:text-2xl">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm">03</span> Venture CXO
                </h3>
                <p className="text-base font-light leading-relaxed text-grey md:text-lg">
                  6-12 month Fractional C-level leadership for critical functional gaps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="border-y border-grey/30 bg-warm-white px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center md:mb-16">
              <h2 className={`${sectionTitle} mb-4`}>
                Our <span className="text-brand">Partners</span>
              </h2>
              <p className="text-base text-grey md:text-lg">
                Collaborating with industry leaders to unlock scale and build enduring ventures.
              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 md:gap-8">
              {[
                { name: "Hygriv", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png", url: "https://www.hygriv.com/" },
                { name: "Saptharushi", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg", url: "https://saptharushi.com/" },
              ].map((partner, idx) => (
                <Link 
                  key={idx} 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-28 w-full items-center justify-center rounded-[2rem] border border-grey/30 bg-white p-5 transition-all duration-500 hover:border-brand/30 hover:bg-white sm:w-[300px] md:h-32 md:p-6"
                >
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill 
                    className="object-contain p-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${sectionPadding} bg-navy text-center text-warm-white`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-4xl font-display font-medium tracking-tight md:mb-8 md:text-6xl">
              Ready to <span className="text-brand">Scale</span> Your Vision?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-warm-white/80 md:mb-12 md:text-xl">
              Join India&apos;s first operator-led AI venture studio. Whether you&apos;re a founder looking to scale or an investor seeking high-growth opportunities, let&apos;s build the future together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/contact" className={primaryButtonClass}>
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/startups" className={secondaryButtonClass}>
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
