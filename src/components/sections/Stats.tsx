import { useTranslation } from '@/hooks/useTranslation';

interface StatsProps {
  locale: string;
}

export function Stats({ locale }: StatsProps) {
  const { t } = useTranslation(locale);

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-[#1a3a6b]">{t.stats.experience}</div>
        <p className="text-sm text-[#6b7a8d] mt-2">{t.stats.experienceLabel}</p>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-[#1a3a6b]">{t.stats.students}</div>
        <p className="text-sm text-[#6b7a8d] mt-2">{t.stats.studentsLabel}</p>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-[#1a3a6b]">{t.stats.regions}</div>
        <p className="text-sm text-[#6b7a8d] mt-2">{t.stats.regionsLabel}</p>
      </div>
    </div>
  );
}
