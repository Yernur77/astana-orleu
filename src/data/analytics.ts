export interface HourlyData {
  hour: number;
  incoming: number;
  outgoing: number;
  missed: number;
  avgDuration: number; // seconds
}

export interface Manager {
  id: string;
  name: string;
  initials: string;
  department: string;
  color: string;
  totalCalls: number;
  incoming: number;
  outgoing: number;
  missed: number;
  avgDuration: number; // seconds
  talkTime: number; // minutes
  answerRate: number; // percent
  hourlyData: HourlyData[];
}

function genHourly(seed: number): HourlyData[] {
  const hours: HourlyData[] = [];
  for (let h = 8; h <= 18; h++) {
    const base = Math.floor(Math.abs(Math.sin(seed + h) * 8) + 1);
    const incoming = base + Math.floor(Math.abs(Math.cos(seed * h) * 4));
    const outgoing = Math.floor(base * 0.7) + Math.floor(Math.abs(Math.sin(seed * h + 1) * 3));
    const missed = Math.floor(Math.abs(Math.sin(seed * h + 2) * 2));
    hours.push({
      hour: h,
      incoming,
      outgoing,
      missed,
      avgDuration: 60 + Math.floor(Math.abs(Math.sin(seed + h) * 180)),
    });
  }
  return hours;
}

export const managers: Manager[] = [
  {
    id: '1',
    name: 'Айгерим Бекова',
    initials: 'АБ',
    department: 'Отдел продаж',
    color: '#3A7A62',
    totalCalls: 147,
    incoming: 89,
    outgoing: 42,
    missed: 16,
    avgDuration: 185,
    talkTime: 453,
    answerRate: 89,
    hourlyData: genHourly(1.2),
  },
  {
    id: '2',
    name: 'Данияр Сейтов',
    initials: 'ДС',
    department: 'Техподдержка',
    color: '#4264A0',
    totalCalls: 203,
    incoming: 124,
    outgoing: 61,
    missed: 18,
    avgDuration: 142,
    talkTime: 479,
    answerRate: 91,
    hourlyData: genHourly(2.5),
  },
  {
    id: '3',
    name: 'Мадина Нурланова',
    initials: 'МН',
    department: 'Отдел продаж',
    color: '#9B6BC3',
    totalCalls: 98,
    incoming: 67,
    outgoing: 22,
    missed: 9,
    avgDuration: 224,
    talkTime: 365,
    answerRate: 91,
    hourlyData: genHourly(3.7),
  },
  {
    id: '4',
    name: 'Арман Жаксыбеков',
    initials: 'АЖ',
    department: 'Клиентский сервис',
    color: '#E07B42',
    totalCalls: 175,
    incoming: 110,
    outgoing: 48,
    missed: 17,
    avgDuration: 168,
    talkTime: 490,
    answerRate: 90,
    hourlyData: genHourly(4.1),
  },
  {
    id: '5',
    name: 'Жанна Сарсенова',
    initials: 'ЖС',
    department: 'Клиентский сервис',
    color: '#42B3A0',
    totalCalls: 132,
    incoming: 78,
    outgoing: 39,
    missed: 15,
    avgDuration: 198,
    talkTime: 436,
    answerRate: 89,
    hourlyData: genHourly(5.3),
  },
  {
    id: '6',
    name: 'Серик Омаров',
    initials: 'СО',
    department: 'Техподдержка',
    color: '#D4466B',
    totalCalls: 88,
    incoming: 52,
    outgoing: 28,
    missed: 8,
    avgDuration: 155,
    talkTime: 227,
    answerRate: 91,
    hourlyData: genHourly(6.8),
  },
];

export function fmtDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}м ${s}с`;
}

export function fmtHour(h: number): string {
  return `${String(h).padStart(2, '0')}:00`;
}
