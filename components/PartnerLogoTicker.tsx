import Image from 'next/image';
import Link from 'next/link';
import { partnerLogos } from '@/lib/partner-logos';

export function PartnerLogoTicker() {
  const items = [...partnerLogos, ...partnerLogos];

  return (
    <div className="relative overflow-hidden border-y border-navy/10 bg-white py-5" aria-label="Partnerships and ecosystem entities">
      <div className="flex w-max animate-[marquee_34s_linear_infinite] items-center gap-4 pr-4 motion-reduce:animate-none">
        {items.map((partner, index) => (
          <Link
            key={`${partner.name}-${index}`}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-36 shrink-0 items-center justify-center border border-navy/10 bg-warm-white px-5 transition-colors duration-200 hover:border-brand/50 hover:bg-white sm:h-20 sm:w-44"
            aria-label={`Visit ${partner.name}`}
          >
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              sizes="176px"
              className="object-contain p-2 sm:p-4 sm:opacity-65 sm:grayscale transition-[filter,opacity] duration-200 group-hover:grayscale-0 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          </Link>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
    </div>
  );
}
