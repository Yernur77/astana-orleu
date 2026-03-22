import { type Locale } from '@/lib/i18n';
import ru from '@/locales/ru.json';
import kz from '@/locales/kz.json';

type Messages = typeof ru;

const messages: Record<Locale, Messages> = {
  ru,
  kz,
};

export function useTranslation(locale: string) {
  const currentLocale = (locale === 'kz' ? 'kz' : 'ru') as Locale;
  const t = messages[currentLocale];

  return {
    t,
    locale: currentLocale,
  };
}
