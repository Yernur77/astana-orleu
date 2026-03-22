import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Astana Orleu</h3>
            <p className="text-white/70 text-sm">
              Центр профессионального образования и развития кадров в Казахстане.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/courses`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t.footer.courses}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/schedule`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t.footer.schedule}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contacts`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t.footer.contacts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>📍 {t.contacts.address}</p>
              <p>📞 {t.contacts.phone}</p>
              <p>📧 {t.contacts.email}</p>
              <p>🕒 {t.contacts.hours}</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex gap-4 justify-center">
            <a
              href="https://wa.me/77084250144"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title="WhatsApp"
            >
              <span className="text-lg">💬</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title="Instagram"
            >
              <span className="text-lg">📷</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title="Facebook"
            >
              <span className="text-lg">👥</span>
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© {currentYear} Astana Orleu. {t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href={`/${locale}/contacts`} className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href={`/${locale}/contacts`} className="hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
