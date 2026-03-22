import { CourseFormat } from './courses';

export interface Event {
  id: string;
  courseId: string;
  title: {
    ru: string;
    kz: string;
  };
  date: string; // ISO date string
  endDate: string; // ISO date string
  format: CourseFormat;
  city: string;
  spotsLeft: number;
  totalSpots: number;
}

export const events: Event[] = [
  {
    id: 'event-1',
    courseId: 'procurement-1',
    title: {
      ru: 'Госзакупки по Закону РК №434',
      kz: 'РК №434 Заңы бойынша мемлекеттік сатып алу',
    },
    date: '2026-03-23',
    endDate: '2026-03-24',
    format: 'offline',
    city: 'Астана',
    spotsLeft: 8,
    totalSpots: 20,
  },
  {
    id: 'event-2',
    courseId: 'accounting-1',
    title: {
      ru: 'МСФО: основы и практика',
      kz: 'МСБЕ: негіздері және іс-тәжірибесі',
    },
    date: '2026-03-25',
    endDate: '2026-03-27',
    format: 'online',
    city: 'Астана',
    spotsLeft: 15,
    totalSpots: 30,
  },
  {
    id: 'event-3',
    courseId: 'management-1',
    title: {
      ru: 'Управление персоналом и HR',
      kz: 'Персоналды басқару және HR',
    },
    date: '2026-04-01',
    endDate: '2026-04-02',
    format: 'offline',
    city: 'Алматы',
    spotsLeft: 5,
    totalSpots: 18,
  },
  {
    id: 'event-4',
    courseId: 'legal-1',
    title: {
      ru: 'Трудовое право и compliance',
      kz: 'Еңбек құқығы және compliance',
    },
    date: '2026-04-05',
    endDate: '2026-04-05',
    format: 'online',
    city: 'Астана',
    spotsLeft: 22,
    totalSpots: 25,
  },
  {
    id: 'event-5',
    courseId: 'procurement-2',
    title: {
      ru: 'Госзакупки: обжалование и споры',
      kz: 'Мемлекеттік сатып алу: аппелляция және дау-дамайлар',
    },
    date: '2026-04-08',
    endDate: '2026-04-08',
    format: 'offline',
    city: 'Алматы',
    spotsLeft: 12,
    totalSpots: 20,
  },
  {
    id: 'event-6',
    courseId: 'accounting-2',
    title: {
      ru: 'МСФО для банков',
      kz: 'Банктар үшін МСБЕ',
    },
    date: '2026-04-15',
    endDate: '2026-04-17',
    format: 'online',
    city: 'Астана',
    spotsLeft: 10,
    totalSpots: 25,
  },
  {
    id: 'event-7',
    courseId: 'management-2',
    title: {
      ru: 'KPI и системы мотивации',
      kz: 'KPI және ынамдау жүйелері',
    },
    date: '2026-04-20',
    endDate: '2026-04-20',
    format: 'online',
    city: 'Астана',
    spotsLeft: 18,
    totalSpots: 30,
  },
  {
    id: 'event-8',
    courseId: 'legal-2',
    title: {
      ru: 'Корпоративное право',
      kz: 'Корпоративтік құқық',
    },
    date: '2026-05-10',
    endDate: '2026-05-11',
    format: 'offline',
    city: 'Алматы',
    spotsLeft: 7,
    totalSpots: 20,
  },
];
