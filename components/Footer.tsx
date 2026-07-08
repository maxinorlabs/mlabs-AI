import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const logoSrc =
  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a2a827cc0fcbfdb0121f0b0_true-north-v1.avif';

export function Footer() {
  return (
    <footer className="border-t border-grey/20 bg-warm-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
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
              We Scale &amp; Build, Not Just Back Ventures.<br /> India&apos;s 1st Operator Led AI Venture Studio.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center gap-6">
            <Link
              href="/contact"
              className="text-2xl md:text-4xl font-display font-bold hover:text-brand transition-colors flex items-center gap-4"
            >
              Contact Us <ArrowRight className="w-8 h-8" />
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/maxinor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-grey/50 flex items-center justify-center hover:bg-brand hover:text-warm-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:mango@mlabs.co.in"
                className="w-12 h-12 rounded-full border border-grey/50 flex items-center justify-center hover:bg-brand hover:text-warm-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-grey/20 text-sm text-grey/60 gap-4">
          <p>&copy; {new Date().getFullYear()} Maxinor Venture Studio. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/team" className="hover:text-brand transition-colors">
              Team
            </Link>
            <Link href="/faq" className="hover:text-brand transition-colors">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-brand transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-brand transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
