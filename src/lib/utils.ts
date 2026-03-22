import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, locale: string = 'ru'): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (locale === 'kz') {
    return d.toLocaleDateString('kk-KZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return d.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getMonthName(date: Date | string, locale: string = 'ru'): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (locale === 'kz') {
    return d.toLocaleDateString('kk-KZ', { month: 'long' });
  }

  return d.toLocaleDateString('ru-RU', { month: 'long' });
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
