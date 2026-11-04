import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const groups = [
  { name: 'Work with us', links: [{ name: 'Build', href: '/build' }, { name: 'Scale', href: '/scale' }, { name: 'Invest', href: '/invest' }] },
  { name: 'Explore', links: [{ name: 'Sectors', href: '/sectors' }, { name: 'Capabilities', href: '/capabilities' }, { name: 'Operator Team', href: '/team' }, { name: 'Insights', href: '/blog' }] },
  { name: 'Get in touch', links: [{ name: 'Contact', href: '/contact' }, { name: 'FAQ', href: '/faq' }, { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maxinor' }] },
];

export function Footer() {
  return (
    <footer className="border-t border-navy/15 bg-warm-white px-6 pb-7 pt-12 text-navy md:px-12 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <Link href="/" aria-label="Maxinor home" className="inline-flex items-center gap-3 font-display text-3xl font-medium tracking-tight focus-visible:outline-2 focus-visible:outline-brand">
              <Image src="/images/true-north-v1.webp" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />MAXINOR
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-grey">Operators backing Entrepreneurs</p>
            <Link href="mailto:mango@mlabs.co.in" className="mt-3 inline-flex min-h-11 items-center text-sm underline decoration-navy/25 underline-offset-4 hover:decoration-brand">mango@mlabs.co.in</Link>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.name} className="border-l border-navy/20 pl-4 sm:pl-5">
                <h2 className="text-sm font-semibold">{group.name}</h2>
                <ul className="mt-3">
                  {group.links.map((link) => {
                    const external = link.href.startsWith('https:');
                    return <li key={link.href}><Link href={link.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="inline-flex min-h-10 items-center gap-1.5 text-sm text-grey underline decoration-transparent underline-offset-4 transition-colors hover:text-navy hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">{link.name}{external && <><ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /><span className="sr-only"> (opens in a new tab)</span></>}</Link></li>;
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-navy/20 pt-5 text-xs text-grey sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Maxinor Venture Studio. All rights reserved.</p>
          <div className="flex gap-6"><Link href="/privacy" className="inline-flex min-h-10 items-center hover:underline">Privacy</Link><Link href="/terms" className="inline-flex min-h-10 items-center hover:underline">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
