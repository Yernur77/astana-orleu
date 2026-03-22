import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingContacts } from '@/components/layout/FloatingContacts';
import { getLocale } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: 'Astana Orleu | Профессиональное обучение',
  description: 'Центр профессионального образования и развития кадров в Казахстане',
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = getLocale(params.locale);

  return (
    <html lang={locale}>
      <body className="bg-white">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <FloatingContacts />
      </body>
    </html>
  );
}
