'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const { t } = useTranslation(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/courses`, label: t.nav.courses },
    { href: `/${locale}/schedule`, label: t.nav.schedule },
    { href: `/${locale}/contacts`, label: t.nav.contacts },
  ];


  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/80 border-b border-[#e2e6ed] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 flex-shrink-0">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-[#1a3a6b]">Astana</span>{' '}
              <span className="text-[#6b7a8d]">Orleu</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6b7a8d] hover:text-[#1a3a6b] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Language and Button */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f8f9fb]">
              <Link
                href={`/${locale}${typeof window !== 'undefined' ? window.location.pathname.replace(`/${locale}`, '') : ''}`}
                className={`text-xs font-semibold transition-colors ${
                  locale === 'kz' ? 'text-[#6b7a8d]' : 'text-[#1a3a6b]'
                }`}
              >
                RU
              </Link>
              <span className="text-[#e2e6ed]">|</span>
              <Link
                href={`/kz${typeof window !== 'undefined' ? window.location.pathname.replace(`/${locale}`, '') : ''}`}
                className={`text-xs font-semibold transition-colors ${
                  locale === 'kz' ? 'text-[#1a3a6b]' : 'text-[#6b7a8d]'
                }`}
              >
                KZ
              </Link>
            </div>

            {/* Apply button - Desktop */}
            <Button variant="primary" size="sm" className="hidden md:inline-flex">
              {t.nav.applyButton}
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#f8f9fb] transition-colors"
            >
              <svg
                className="w-6 h-6 text-[#1a3a6b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-[#e2e6ed]"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-[#6b7a8d] hover:text-[#1a3a6b] hover:bg-[#f8f9fb] rounded-lg transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="primary"
                  size="md"
                  className="w-full mt-4"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t.nav.applyButton}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
