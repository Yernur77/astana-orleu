export const locales = ['ru', 'kz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}
