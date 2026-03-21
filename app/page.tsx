'use client';

import { motion } from 'motion/react';
import { MonitorPlay, Cpu, ShoppingCart, Cloud, Pill, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhyMaxinor from '../components/WhyMaxinor';

export default function Home() {
  return (
    <div className="font-sans">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
          {/* Upward/North lighting effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(247,247,245,1)_0%,transparent_100%)] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[9vw] md:text-[5.5vw] leading-[1.1] font-display font-medium tracking-tight mb-8">
                India&apos;s 1st <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-navy to-navy/70">Operator Led AI Venture Studio</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-grey max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            >
              Our operating partners deliver execution depth for growth &amp; fund raise
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link 
                href="/scale"
                className="w-full sm:w-auto px-8 py-4 bg-brand text-warm-white font-medium tracking-wide rounded-full hover:bg-brand/90 transition-all duration-300 flex items-center justify-center shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] hover:-translate-y-1"
              >
                Venture Scale
              </Link>
              <Link 
                href="/build"
                className="w-full sm:w-auto px-8 py-4 bg-white/80 text-navy hover:bg-brand hover:text-warm-white border border-grey/40 transition-all duration-300 rounded-full flex items-center justify-center hover:-translate-y-1"
              >
                Venture Build
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-32 px-6 bg-navy border-y border-grey/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-warm-white">
                What We <span className="text-brand">Do</span>
              </h2>
              <p className="text-xl text-warm-white/80 max-w-3xl mx-auto font-light">
                Maxinor is a Venture Studio that assists in Venture Scale &amp;/or Venture Build via its Maxinor Operator Platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group shadow-sm">
                <h3 className="text-3xl font-display font-medium mb-4 flex items-center gap-3 text-warm-white">
                  <span className="text-white">Venture</span> <span className="text-brand">Scale</span>
                </h3>
                <p className="text-warm-white/80 leading-relaxed text-lg font-light mb-8">
                  Scale existing founder-led ventures with embedded execution, Maxinor Platform and investments.
                </p>
                <Link href="/scale" className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all duration-300">
                  Learn about Venture Scale <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group shadow-sm">
                <h3 className="text-3xl font-display font-medium mb-4 flex items-center gap-3 text-warm-white">
                  <span className="text-white">Venture</span> <span className="text-brand">Build</span>
                </h3>
                <p className="text-warm-white/80 leading-relaxed text-lg font-light mb-8">
                  Identify white spaces, design &amp; launch MVP, install founding teams &amp; invest.
                </p>
                <Link href="/build" className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all duration-300">
                  Learn about Venture Build <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Startups We Work With */}
        <section className="py-24 px-6 overflow-hidden bg-white border-y border-grey/10">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-4">
              The Startups We <span className="text-brand">Work With</span>
            </h2>
            <p className="text-lg text-grey">
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
                    { url: "", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif" },
                    { url: "https://www.adaapt.ai/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg" },
                    { url: "", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b70ff7ee3292c3baa5a9_Gemini_Generated_Image_2c1xpu2c1xpu2c1x.png" },
                    { url: "", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png" }
                  ].map((item, idx) => (
                    <Link 
                      key={`${i}-${idx}`} 
                      href={item.url || "#"}
                      target={item.url ? "_blank" : undefined}
                      rel={item.url ? "noopener noreferrer" : undefined}
                      className="w-48 h-24 bg-white border border-grey/30 rounded-2xl flex items-center justify-center hover:border-brand/50 hover:bg-white/90 transition-all duration-500 shrink-0 relative overflow-hidden p-4"
                    >
                      <Image 
                        src={item.logo} 
                        alt={`Startup Partner ${idx + 1}`} 
                        fill 
                        className="object-contain p-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </section>

        <WhyMaxinor />

        {/* Domains We Work In */}
        <section className="py-32 px-6 bg-white border-y border-grey/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6">
                Domains We Work In
              </h2>
              <p className="text-xl text-brand font-medium">
                Deep operator expertise across high-growth sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                { name: "Media", icon: MonitorPlay },
                { name: "AI & Data", icon: Cpu },
                { name: "D2C & B2C", icon: ShoppingCart },
                { name: "SaaS", icon: Cloud },
                { name: "Healthcare", icon: Pill },
                { name: "Defence", icon: Shield },
              ].map((domain, idx) => (
                <div key={idx} className="p-10 border border-grey/30 rounded-[2rem] bg-warm-white hover:bg-white hover:border-brand/30 transition-all duration-500 flex flex-col items-center justify-center gap-6 group">
                  <domain.icon className="w-10 h-10 text-grey/80 transition-colors duration-500 group-hover:text-brand" />
                  <h3 className="text-lg font-medium tracking-wide group-hover:text-brand transition-colors duration-500">{domain.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-32 px-6 bg-white border-y border-grey/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6">
                We Scale, Not Just Back Startups!
              </h2>
              <p className="text-xl text-grey max-w-3xl mx-auto font-light">
                Maxinor accelerates startup growth with embedded operators and milestone-based funding, shortening the path to scale and Series A.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-warm-white border border-grey/20 p-10 rounded-[2rem] shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-500">
                <h3 className="text-2xl font-display font-medium mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm">01</span> Venture Sprint
                </h3>
                <p className="text-grey leading-relaxed font-light">
                  30-day hands-on diagnostic and tailored execution roadmap
                </p>
              </div>
              <div className="bg-warm-white border border-grey/20 p-10 rounded-[2rem] shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-500">
                <h3 className="text-2xl font-display font-medium mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm">02</span> Venture Partner
                </h3>
                <p className="text-grey leading-relaxed font-light">
                  6-month embedded execution + Equity Investment &amp; Series A prep
                </p>
              </div>
              <div className="bg-warm-white border border-grey/20 p-10 rounded-[2rem] shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-500">
                <h3 className="text-2xl font-display font-medium mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm">03</span> Venture CXO
                </h3>
                <p className="text-grey leading-relaxed font-light">
                  6-12 month Fractional C-level leadership for critical functional gaps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-24 px-6 bg-warm-white border-y border-grey/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-4">
                Our <span className="text-brand">Partners</span>
              </h2>
              <p className="text-lg text-grey">
                Collaborating with industry leaders to unlock scale and build enduring ventures.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {[
                { name: "Hygriv", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png", url: "https://www.hygriv.com/" },
                { name: "Saptharushi", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg", url: "https://saptharushi.com/" },
              ].map((partner, idx) => (
                <Link 
                  key={idx} 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full md:w-[300px] h-32 bg-white rounded-[2rem] border border-grey/30 flex items-center justify-center p-6 group hover:border-brand/30 hover:bg-white transition-all duration-500"
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
        <section className="py-32 px-6 bg-navy text-warm-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
              Ready to <span className="text-brand">Scale</span> Your Vision?
            </h2>
            <p className="text-xl text-warm-white/80 font-light mb-12 leading-relaxed">
              Join India&apos;s first operator-led AI venture studio. Whether you&apos;re a founder looking to scale or an investor seeking high-growth opportunities, let&apos;s build the future together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-brand text-warm-white font-medium tracking-wide rounded-full hover:bg-brand/90 transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(243,111,33,0.2)]"
              >
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/startups"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-warm-white font-medium tracking-wide rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
