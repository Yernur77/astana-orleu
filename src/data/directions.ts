export type DirectionKey = 'procurement' | 'accounting' | 'management' | 'legal';

export interface Direction {
  id: string;
  key: DirectionKey;
  icon: string; // SVG path string
  title: {
    ru: string;
    kz: string;
  };
  description: {
    ru: string;
    kz: string;
  };
}

export const directions: Direction[] = [
  {
    id: 'dir-1',
    key: 'procurement',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
      <path d="M7 2v20"/>
      <path d="M17 2v20"/>
      <path d="M2 7h20"/>
      <path d="M2 12h20"/>
      <path d="M2 17h20"/>
    </svg>`,
    title: {
      ru: 'Госзакупки',
      kz: 'Мемлекеттік сатып алу',
    },
    description: {
      ru: 'Полное руководство по государственным закупкам, законодательству РК №434 и процедурам обжалования.',
      kz: 'Мемлекеттік сатып алу, РК №434 заңнамасы және аппелляция процедураларының толық нұсқаулығы.',
    },
  },
  {
    id: 'dir-2',
    key: 'accounting',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"/>
      <path d="M2 12h20"/>
      <path d="M4 4h16v16H4z"/>
    </svg>`,
    title: {
      ru: 'Бухгалтерия',
      kz: 'Бухгалтерлік есеп',
    },
    description: {
      ru: 'МСФО, налоговое планирование, бюджетирование и финансовый контроль в организациях.',
      kz: 'МСБЕ, салық жоспарлау, бюджеттеу және ұйымдарда қаржылық бақылау.',
    },
  },
  {
    id: 'dir-3',
    key: 'management',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
    </svg>`,
    title: {
      ru: 'Управление',
      kz: 'Басқару',
    },
    description: {
      ru: 'Управление персоналом, KPI, системы мотивации и лидерство в современных организациях.',
      kz: 'Персоналды басқару, KPI, ынамдау жүйелері және заманауи ұйымдарда көшбасшылық.',
    },
  },
  {
    id: 'dir-4',
    key: 'legal',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v14H4z"/>
      <path d="M12 5v14M4 8h16M4 12h16"/>
    </svg>`,
    title: {
      ru: 'Право',
      kz: 'Құқық',
    },
    description: {
      ru: 'Трудовое право, корпоративное право, compliance и защита прав в бизнесе.',
      kz: 'Еңбек құқығы, корпоративтік құқық, compliance және бизнесте құқықтарды қорғау.',
    },
  },
];
