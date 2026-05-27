'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const logoSrc =
  'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4e417db41aba4d67eb664_50861696-aac9-4ad9-988c-2bcebfeb%20(1).png';

type SubItem = { name: string; path: string };

type DropdownItem = {
  name: string;
  path: string;
  header?: boolean;
  divider?: boolean;
  subItems?: SubItem[];
};

type NavLink = {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null);

  const isActive = (path: string) =>
    pathname === path ? 'text-brand' : 'text-grey hover:text-navy';

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Domains',
      path: '/domains',
      dropdown: [
        { name: 'All Domains', path: '/domains', header: true },
        { name: 'Media', path: '/domains/media' },
        { name: 'D2C & Consumer', path: '/domains/d2c' },
        { name: 'BFSI', path: '/domains/bfsi' },
        { name: 'Healthcare', path: '/domains/healthcare' },
        { name: 'Education', path: '/domains/education' },
        { name: 'Marketing', path: '/domains/marketing' },
        { name: 'Legal', path: '/domains/legal' },
      ],
    },
    { name: 'Capabilities', path: '/capabilities' },
    {
      name: 'Industries',
      path: '/startups',
      dropdown: [
        {
          name: 'Startups',
          path: '/startups',
          subItems: [
            { name: 'Venture Build', path: '/build' },
            { name: 'Venture Scale', path: '/scale' },
            { name: 'Venture Investment', path: '/investment' },
          ],
        },
        { name: 'SME', path: '/sme' },
        { name: 'Corporate', path: '/corporate' },
        { name: 'Investors', path: '/investors' },
        { name: 'AI GCC Centre', path: '/capability-centre', divider: true },
      ],
    },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-xl border-b border-grey/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-display font-medium tracking-tight flex items-center gap-2 relative z-50"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={logoSrc}
            alt="Maxinor Logo"
            width={32}
            height={32}
            priority
            className="w-8 h-8 rounded-[99px] object-cover"
          />
          MAXINOR
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => { setOpenDropdown(link.name); setHoveredSub(null); }}
                onMouseLeave={() => { setOpenDropdown(null); setHoveredSub(null); }}
              >
                <Link
                  href={link.path}
                  className={`transition-colors flex items-center gap-1 ${isActive(link.path)}`}
                >
                  {link.name}
                  <motion.span animate={{ rotate: openDropdown === link.name ? 180 : 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </motion.span>
                </Link>

                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-navy text-warm-white border border-grey/30 rounded-2xl shadow-2xl py-3 mt-2"
                      style={{ minWidth: '13rem' }}
                    >
                      {link.dropdown.map((sub, si) => (
                        <div key={sub.path}>
                          {/* Divider before item */}
                          {sub.header && si > 0 && <div className="mx-6 my-2 border-t border-white/10" />}
                          {sub.divider && <div className="mx-6 my-2 border-t border-white/10" />}

                          {sub.subItems ? (
                            /* Item with sub-items: hover to expand */
                            <div
                              onMouseEnter={() => setHoveredSub(sub.name)}
                              onMouseLeave={() => setHoveredSub(null)}
                            >
                              <Link
                                href={sub.path}
                                className="flex items-center justify-between px-6 py-2.5 text-warm-white/80 transition-colors hover:text-brand"
                              >
                                {sub.name}
                                <ChevronRight className="h-3.5 w-3.5 opacity-40" />
                              </Link>
                              <AnimatePresence>
                                {hoveredSub === sub.name && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="overflow-hidden"
                                  >
                                    {sub.subItems.map((si2) => (
                                      <Link
                                        key={si2.path}
                                        href={si2.path}
                                        className="block pl-10 pr-6 py-2 text-sm text-warm-white/55 transition-colors hover:text-brand"
                                      >
                                        {si2.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            /* Regular item */
                            <Link
                              href={sub.path}
                              className={`block px-6 py-2.5 transition-colors hover:text-brand ${
                                sub.header
                                  ? 'font-semibold text-warm-white text-xs uppercase tracking-[0.15em] pb-2'
                                  : 'text-warm-white/80'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          )}

                          {sub.header && <div className="mx-6 mt-1 mb-2 border-t border-white/10" />}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.path} href={link.path} className={`transition-colors ${isActive(link.path)}`}>
                {link.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide bg-white/80 text-navy hover:bg-brand hover:text-warm-white border border-grey/40 transition-all duration-300 rounded-full"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="lg:hidden relative z-50 p-2 text-navy/80 hover:text-brand transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-warm-white/95 backdrop-blur-xl border-b border-grey/30 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.path} className="flex flex-col">
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.name ? null : link.name)}
                      className={`flex items-center justify-between text-lg font-medium tracking-wide w-full ${isActive(link.path)}`}
                    >
                      {link.name}
                      <motion.span animate={{ rotate: mobileOpenDropdown === link.name ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-5 h-5" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileOpenDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 mt-3 ml-2 border-l-2 border-brand/30 pl-4">
                            {link.dropdown.map((sub) => (
                              <div key={sub.path}>
                                {sub.subItems ? (
                                  <>
                                    <button
                                      onClick={() => setMobileOpenSub(mobileOpenSub === sub.name ? null : sub.name)}
                                      className={`flex items-center justify-between w-full py-2 text-base font-medium tracking-wide ${isActive(sub.path)}`}
                                    >
                                      {sub.name}
                                      <motion.span animate={{ rotate: mobileOpenSub === sub.name ? 90 : 0 }} transition={{ duration: 0.15 }}>
                                        <ChevronRight className="w-4 h-4" />
                                      </motion.span>
                                    </button>
                                    <AnimatePresence>
                                      {mobileOpenSub === sub.name && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.15 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="flex flex-col gap-1 ml-3 pl-3 border-l border-brand/20">
                                            {sub.subItems.map((si2) => (
                                              <Link
                                                key={si2.path}
                                                href={si2.path}
                                                onClick={() => { setIsOpen(false); setMobileOpenDropdown(null); setMobileOpenSub(null); }}
                                                className={`py-1.5 text-sm font-medium tracking-wide ${isActive(si2.path)}`}
                                              >
                                                {si2.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    href={sub.path}
                                    onClick={() => { setIsOpen(false); setMobileOpenDropdown(null); }}
                                    className={`py-2 text-base font-medium tracking-wide ${isActive(sub.path)}`}
                                  >
                                    {sub.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium tracking-wide ${isActive(link.path)}`}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <div className="pt-6 border-t border-grey/40">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center px-6 py-4 text-sm font-medium tracking-wide bg-brand text-warm-white hover:bg-brand/90 transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(243,111,33,0.1)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
