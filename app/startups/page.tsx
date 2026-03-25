import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pagePadding = 'px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:pb-32';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-3xl text-base font-light leading-relaxed text-grey md:text-xl';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold whitespace-nowrap text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';

export default function StartupsPage() {
  const startups = [
    { name: "IZF", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png", url: "https://izfworld.com/" },
    { name: "Nattier", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png", url: "https://nattier.co.in/" },
    { name: "Kachs", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif", url: "https://responcibleai.com/" },
    { name: "Adaapt", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg", url: "https://www.adaapt.ai/" },
    { name: "Startup 5", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b70ff7ee3292c3baa5a9_Gemini_Generated_Image_2c1xpu2c1xpu2c1x.png" },
    { name: "Startup 6", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png", url: "https://aseedinternational.org/" },
  ];

  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-24 lg:mb-28">
          <h1 className={introTitle}>
            The Startups <br />We <span className="text-brand">Work With</span>
          </h1>
          <p className={introBody}>
            We partner with visionary founders to build category-defining companies. From pre-seed to Series A, our operator-led approach accelerates growth and unlocks scale.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {startups.map((startup, idx) => (
            <Link 
              key={idx} 
              href={startup.url || "#"} 
              target={startup.url ? "_blank" : undefined}
              rel={startup.url ? "noopener noreferrer" : undefined}
              className="group relative flex h-52 flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-grey/30 bg-white p-8 transition-all duration-500 hover:border-brand/30 hover:bg-white/80 sm:h-56 sm:p-10 md:h-60 lg:h-64 lg:p-12"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={startup.image} 
                  alt={startup.name} 
                  fill 
                  className="object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-grey/30 bg-white p-8 text-center md:mt-24 md:p-12 lg:mt-32 lg:p-16">
          <div className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-brand/10 blur-[70px] md:h-[300px] md:w-[600px] md:blur-[80px]" />
          <div className="relative z-10">
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight md:mb-6 md:text-5xl">Are you the next big thing?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-grey md:text-xl">
              We are constantly looking for ambitious founders building in high-growth sectors. Pitch us your idea or startup.
            </p>
            <Link href="/contact" className={primaryButtonClass}>
              Pitch to Maxinor <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
