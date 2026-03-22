import { Hero } from '@/components/sections/Hero';
import { Directions } from '@/components/sections/Directions';
import { Events } from '@/components/sections/Events';
import { Reviews } from '@/components/sections/Reviews';
import { Clients } from '@/components/sections/Clients';
import { Certificate } from '@/components/sections/Certificate';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTA } from '@/components/sections/CTA';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.locale;

  return (
    <>
      <Hero locale={locale} />
      <Directions locale={locale} />
      <Events locale={locale} />
      <Reviews locale={locale} />
      <Clients locale={locale} />
      <Certificate locale={locale} />
      <FAQSection locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
