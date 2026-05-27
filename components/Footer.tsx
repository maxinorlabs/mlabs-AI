import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const logoSrc =
  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4e417db41aba4d67eb664_50861696-aac9-4ad9-988c-2bcebfeb%20(1).png';

const navColumns = [
  {
    heading: 'Domains',
    links: [
      { label: 'All Domains', href: '/domains' },
      { label: 'Media', href: '/domains/media' },
      { label: 'D2C & Consumer', href: '/domains/d2c' },
      { label: 'BFSI', href: '/domains/bfsi' },
      { label: 'Healthcare', href: '/domains/healthcare' },
      { label: 'Education', href: '/domains/education' },
      { label: 'Marketing', href: '/domains/marketing' },
      { label: 'Legal', href: '/domains/legal' },
    ],
  },
  {
    heading: 'Capabilities',
    links: [
      { label: 'All Capabilities', href: '/capabilities' },
      { label: 'AI & ML Advisory', href: '/capabilities/ai-services' },
      { label: 'Artificial Intelligence', href: '/capabilities/artificial-intelligence' },
      { label: 'Big Data', href: '/capabilities/big-data' },
      { label: 'Software Development', href: '/capabilities/software-development' },
      { label: 'UX Design Studio', href: '/capabilities/ux-design' },
      { label: 'Mobile App Development', href: '/capabilities/mobile-app' },
      { label: 'RPA', href: '/capabilities/rpa' },
      { label: 'DevOps Consulting', href: '/capabilities/devops' },
      { label: 'Digital Transformation', href: '/capabilities/digital-transformation' },
      { label: 'Platform Strategy', href: '/capabilities/platform-strategy' },
      { label: 'Cloud Services', href: '/capabilities/cloud-services' },
      { label: 'Talent & RPO', href: '/capabilities/talent-org' },
      { label: 'Global Capability Centre', href: '/capability-centre' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Startups', href: '/startups' },
      { label: 'Venture Build', href: '/build' },
      { label: 'Venture Scale', href: '/scale' },
      { label: 'Venture Investment', href: '/investment' },
      { label: 'SME', href: '/sme' },
      { label: 'Corporate', href: '/corporate' },
      { label: 'Investors', href: '/investors' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Team', href: '/team' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-grey/20 bg-warm-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top — brand + CTA */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className="text-4xl font-display font-bold tracking-tighter mb-6 flex items-center gap-3"
            >
              <Image
                src={logoSrc}
                alt="Maxinor Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-[99px] object-cover"
              />
              MAXINOR
            </Link>
            <p className="text-grey max-w-sm">
              We Scale &amp; Build, Not Just Back Startups.<br /> India&apos;s 1st Operator Led Venture Studio.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.linkedin.com/company/maxinor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-grey/50 flex items-center justify-center hover:bg-brand hover:text-warm-white hover:border-brand transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:mango@mlabs.co.in"
                className="w-10 h-10 rounded-full border border-grey/50 flex items-center justify-center hover:bg-brand hover:text-warm-white hover:border-brand transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-center gap-4">
            <Link
              href="/contact"
              className="text-2xl md:text-4xl font-display font-bold hover:text-brand transition-colors flex items-center gap-4"
            >
              Contact Us <ArrowRight className="w-8 h-8" />
            </Link>
            <p className="text-sm text-grey md:text-right">mango@mlabs.co.in</p>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-t border-grey/20">
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-grey hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-grey/20 text-sm text-grey/60 gap-4">
          <p>&copy; {new Date().getFullYear()} Maxinor Venture Studio. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
