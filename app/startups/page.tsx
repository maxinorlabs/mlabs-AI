import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StartupsPage() {
  const startups = [
    { name: "IZF", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png", url: "https://izfworld.com/" },
    { name: "Nattier", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png", url: "https://nattier.co.in/" },
    { name: "Kachs", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b537ff9642970327a58b_kachslogo-dJobQBobXJiEKPjL.avif" },
    { name: "Adaapt", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg", url: "https://www.adaapt.ai/" },
    { name: "Startup 5", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b70ff7ee3292c3baa5a9_Gemini_Generated_Image_2c1xpu2c1xpu2c1x.png" },
    { name: "Startup 6", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png" },
  ];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
            The Startups <br />We <span className="text-brand">Work With</span>
          </h1>
          <p className="text-xl text-grey max-w-3xl leading-relaxed mb-8 font-light">
            We partner with visionary founders to build category-defining companies. From pre-seed to Series A, our operator-led approach accelerates growth and unlocks scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, idx) => (
            <Link 
              key={idx} 
              href={startup.url || "#"} 
              target={startup.url ? "_blank" : undefined}
              rel={startup.url ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-[2rem] border border-grey/30 bg-white hover:bg-white/80 hover:border-brand/30 transition-all duration-500 flex flex-col items-center justify-center p-12 h-64"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={startup.image} 
                  alt={startup.name} 
                  fill 
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 p-12 bg-white border border-grey/30 rounded-[2rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6">Are you the next big thing?</h2>
            <p className="text-xl text-grey mb-8 max-w-2xl mx-auto font-light">
              We are constantly looking for ambitious founders building in high-growth sectors. Pitch us your idea or startup.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-brand-dark transition-all duration-300">
              Pitch to Maxinor <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
