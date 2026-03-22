import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Astana Orleu | Профессиональное обучение',
  description: 'Центр профессионального образования и развития кадров в Казахстане',
  openGraph: {
    title: 'Astana Orleu',
    description: 'Качественное образование в области закупок, бухгалтерии, управления и права',
    locale: 'ru_RU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white">{children}</body>
    </html>
  );
}
