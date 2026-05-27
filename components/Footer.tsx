import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

const logoSrc =
  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4e417db41aba4d67eb664_50861696-aac9-4ad9-988c-2bcebfeb%20(1).png';

const navLinks = [
  { label: 'Domains', href: '/domains' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Industries', href: '/startups' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-grey/20 bg-warm-white px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Main row — logo + nav + socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-display font-bold tracking-tight shrink-0"
          >
            <Image
              src={logoSrc}
              alt="Maxinor Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-[99px] object-cover"
            />
            MAXINOR
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-grey hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="https://www.linkedin.com/company/maxinor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-grey/40 flex items-center justify-center hover:bg-brand hover:text-warm-white hover:border-brand transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:mango@mlabs.co.in"
              className="w-9 h-9 rounded-full border border-grey/40 flex items-center justify-center hover:bg-brand hover:text-warm-white hover:border-brand transition-colors"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-grey/20 text-xs text-grey/50 gap-3">
          <p>&copy; {new Date().getFullYear()} Maxinor Venture Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
