import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2B25] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Company info with real logo */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-4">
              {/* White-tinted logo using CSS filter */}
              <Image
                src="/logo.svg"
                alt="Astana Orleu"
                width={140}
                height={36}
                className="h-8 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Центр профессионального образования и развития кадров в Казахстане.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}`} className="text-white/65 hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-white/65 hover:text-white transition-colors">{t.footer.about}</Link>
              </li>
              <li>
                <Link href={`/${locale}/courses`} className="text-white/65 hover:text-white transition-colors">{t.footer.courses}</Link>
              </li>
              <li>
                <Link href={`/${locale}/schedule`} className="text-white/65 hover:text-white transition-colors">{t.footer.schedule}</Link>
              </li>
              <li>
                <Link href={`/${locale}/contacts`} className="text-white/65 hover:text-white transition-colors">{t.footer.contacts}</Link>
              </li>
            </ul>
          </div>

          {/* Contact info — no address */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-white/65">
              <a href={`tel:${t.contacts.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-[#5AAD62] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {t.contacts.phone}
              </a>
              <a href={`mailto:${t.contacts.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-[#5AAD62] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {t.contacts.email}
              </a>
              <p className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#5AAD62] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {t.contacts.hours}
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-6">
              <a href="https://wa.me/77084250144" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-[#25D366] flex items-center justify-center transition-all group"
                title="WhatsApp">
                <svg className="w-4 h-4 text-white/60 group-hover:text-white" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.004 2.667C8.638 2.667 2.667 8.638 2.667 16.004c0 2.342.64 4.638 1.854 6.654L2.667 29.333l6.847-1.793A13.27 13.27 0 0016.004 29.333c7.363 0 13.325-5.972 13.325-13.337 0-3.562-1.385-6.91-3.905-9.433A13.27 13.27 0 0016.004 2.667zm6.052 16.076c-.332-.166-1.963-.968-2.267-1.078-.304-.11-.525-.166-.747.166-.22.331-.857 1.078-1.05 1.3-.194.22-.387.248-.72.082-.332-.165-1.403-.517-2.672-1.649-.986-.882-1.652-1.97-1.847-2.302-.193-.332-.02-.512.146-.677.15-.148.332-.387.498-.58.166-.194.22-.332.332-.554.11-.22.055-.414-.028-.58-.083-.165-.747-1.8-1.022-2.465-.27-.648-.544-.56-.747-.57-.193-.008-.415-.01-.636-.01-.22 0-.58.082-.883.414-.304.332-1.16 1.133-1.16 2.762s1.188 3.204 1.353 3.427c.166.22 2.338 3.57 5.664 5.005.792.342 1.41.547 1.89.7.793.252 1.516.217 2.087.132.636-.095 1.963-.803 2.24-1.578.276-.775.276-1.44.193-1.579-.082-.138-.304-.22-.636-.387z"/>
                </svg>
              </a>
              <a href="https://instagram.com/astana_orleu" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888] flex items-center justify-center transition-all group"
                title="Instagram">
                <svg className="w-4 h-4 text-white/60 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {currentYear} Astana Orleu. {t.footer.copyright}</p>
          <div className="flex gap-5">
            <Link href={`/${locale}/contacts`} className="hover:text-white/70 transition-colors">{t.footer.privacy}</Link>
            <Link href={`/${locale}/contacts`} className="hover:text-white/70 transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
