'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const { t } = useTranslation(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: 'Главная' },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/courses`, label: t.nav.courses },
    { href: `/${locale}/schedule`, label: t.nav.schedule },
    { href: `/${locale}/contacts`, label: t.nav.contacts },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/90 border-b border-[#e2e6ed] shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - original SVG file */}
          <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Astana Orleu"
              width={160}
              height={40}
              priority
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors pb-1 ${
                  isActive(link.href)
                    ? 'text-[#3A7A62]'
                    : 'text-[#4a5568] hover:text-[#3A7A62]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#3A7A62] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#f4f6f9] border border-[#e2e6ed]">
              <Link
                href={`/ru${pathname.replace(`/${locale}`, '')}`}
                className={`text-xs font-semibold px-1.5 py-0.5 rounded transition-all ${
                  locale === 'ru'
                    ? 'text-white bg-[#3A7A62]'
                    : 'text-[#6b7a8d] hover:text-[#3A7A62]'
                }`}
              >
                RU
              </Link>
              <Link
                href={`/kz${pathname.replace(`/${locale}`, '')}`}
                className={`text-xs font-semibold px-1.5 py-0.5 rounded transition-all ${
                  locale === 'kz'
                    ? 'text-white bg-[#3A7A62]'
                    : 'text-[#6b7a8d] hover:text-[#3A7A62]'
                }`}
              >
                KZ
              </Link>
            </div>

            {/* Apply button */}
            <Button variant="primary" size="sm" className="hidden md:inline-flex">
              {t.nav.applyButton}
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#f4f6f9] transition-colors"
            >
              <svg className="w-5 h-5 text-[#1a3a6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
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
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-[#3A7A62] bg-[#f0f7f4]'
                        : 'text-[#4a5568] hover:text-[#3A7A62] hover:bg-[#f4f6f9]'
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button variant="primary" size="md" className="w-full" onClick={() => setIsMobileOpen(false)}>
                    {t.nav.applyButton}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
