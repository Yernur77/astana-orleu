'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const { t } = useTranslation(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const otherLocale = locale === 'ru' ? 'kz' : 'ru';
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/courses`, label: t.nav.courses },
    { href: `/${locale}/schedule`, label: t.nav.schedule },
    { href: `/${locale}/contacts`, label: t.nav.contacts },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-divider'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between" style={{ height: '72px' }}>

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group flex-shrink-0">
          {/* Inline SVG Logo */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nb-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A7A62"/>
                <stop offset="50%" stopColor="#4A9362"/>
                <stop offset="100%" stopColor="#5AAD62"/>
              </linearGradient>
              <linearGradient id="nb-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4C568F"/>
                <stop offset="100%" stopColor="#42B3E0"/>
              </linearGradient>
              <linearGradient id="nb-overlay" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#36745C"/>
                <stop offset="60%" stopColor="#449171"/>
                <stop offset="100%" stopColor="#52AE87"/>
              </linearGradient>
            </defs>
            {/* Left circle - green */}
            <circle cx="16" cy="20" r="14" fill="url(#nb-green)"/>
            {/* Right circle - blue */}
            <circle cx="26" cy="20" r="12" fill="url(#nb-blue)"/>
            {/* Overlap - darker green */}
            <path d="M21 8.5C24.5 10.5 27 14.8 27 20C27 25.2 24.5 29.5 21 31.5C17.5 29.5 15 25.2 15 20C15 14.8 17.5 10.5 21 8.5Z" fill="url(#nb-overlay)" opacity="0.9"/>
            {/* Vertical divider line */}
            <line x1="21" y1="7" x2="21" y2="33" stroke="#1A2B25" strokeWidth="0.8" opacity="0.3"/>
          </svg>
          <div className="leading-none">
            <span className="text-[17px] font-semibold tracking-tight text-text-DEFAULT">
              Astana <span className="text-primary">Orleu</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors duration-200 relative group ${
                pathname.startsWith(link.href)
                  ? 'text-primary'
                  : 'text-text-secondary hover:text-text-DEFAULT'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-200 ${
                pathname.startsWith(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}/>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center bg-bg-gradient rounded-lg p-0.5 text-[13px] font-medium">
            <span className="px-3 py-1.5 rounded-md bg-white text-text-DEFAULT shadow-sm cursor-default">
              {locale.toUpperCase()}
            </span>
            <Link
              href={otherPath}
              className="px-3 py-1.5 text-text-secondary hover:text-text-DEFAULT transition-colors"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href={`/${locale}/contacts`}
            className="px-5 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-btn hover:bg-primary-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            {t.nav.applyButton}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-lg text-text-DEFAULT hover:bg-bg-gradient transition-colors"
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current rounded transition-all duration-200 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`h-0.5 bg-current rounded transition-all duration-200 ${isMobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`h-0.5 bg-current rounded transition-all duration-200 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-divider overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`py-3 text-[15px] font-medium border-b border-divider last:border-0 transition-colors ${
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-text-DEFAULT'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex gap-2 text-[13px] font-medium">
                  <span className="px-3 py-1.5 bg-primary text-white rounded-lg">{locale.toUpperCase()}</span>
                  <Link href={otherPath} className="px-3 py-1.5 text-text-secondary border border-divider rounded-lg">
                    {otherLocale.toUpperCase()}
                  </Link>
                </div>
                <Link
                  href={`/${locale}/contacts`}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-5 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-btn"
                >
                  {t.nav.applyButton}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
