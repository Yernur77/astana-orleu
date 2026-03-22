'use client';

import { useState, useMemo } from 'react';
import { ScheduleList } from '@/components/schedule/ScheduleList';
import { ScheduleCalendar } from '@/components/schedule/ScheduleCalendar';
import { events } from '@/data/events';
import { courses } from '@/data/courses';
import { useTranslation } from '@/hooks/useTranslation';
import { type CourseDirection, type CourseFormat } from '@/data/courses';
import { Button } from '@/components/ui/Button';
import { directions } from '@/data/directions';

interface SchedulePageProps {
  params: {
    locale: string;
  };
}

type ViewMode = 'list' | 'calendar';

export default function SchedulePage({ params }: SchedulePageProps) {
  const locale = params.locale;
  const { t } = useTranslation(locale);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedDirection, setSelectedDirection] = useState<CourseDirection | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<CourseFormat | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = Array.from(new Set(events.map((e) => e.city)));
  const directionOptions = directions.map((d) => ({
    key: d.key as CourseDirection,
    title: d.title[locale === 'kz' ? 'kz' : 'ru'],
  }));

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (selectedDirection && event.courseId.startsWith(selectedDirection)) return true;
      if (selectedDirection) return false;

      if (selectedFormat && event.format !== selectedFormat) return false;
      if (selectedCity && event.city !== selectedCity) return false;
      return true;
    });
  }, [selectedDirection, selectedFormat, selectedCity]);

  const coursesMap = Object.fromEntries(courses.map((c) => [c.id, c]));

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#3A7A62] to-[#2d6250] text-white pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.schedule.title}</h1>
          <p className="text-lg text-white/80">Выбирайте удобное для вас время и дату</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              {/* View toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  {t.schedule.listView}
                </Button>
                <Button
                  variant={viewMode === 'calendar' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setViewMode('calendar')}
                >
                  {t.schedule.calendarView}
                </Button>
              </div>

              {/* Clear filters */}
              {(selectedDirection || selectedFormat || selectedCity) && (
                <button
                  onClick={() => {
                    setSelectedDirection(null);
                    setSelectedFormat(null);
                    setSelectedCity(null);
                  }}
                  className="text-sm text-[#1a3a6b] hover:text-[#142a52] underline"
                >
                  Очистить фильтры
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg border border-[#e2e6ed]">
              {/* Direction filter */}
              <div>
                <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                  {t.courses.filterByDirection}
                </label>
                <select
                  value={selectedDirection || ''}
                  onChange={(e) =>
                    setSelectedDirection((e.target.value as CourseDirection) || null)
                  }
                  className="w-full px-3 py-2 border border-[#e2e6ed] rounded-lg bg-white text-[#0f1923] focus:outline-none focus:border-[#1a3a6b]"
                >
                  <option value="">{t.courses.allDirections}</option>
                  {directionOptions.map((dir) => (
                    <option key={dir.key} value={dir.key}>
                      {dir.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Format filter */}
              <div>
                <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                  {t.courses.filterByFormat}
                </label>
                <select
                  value={selectedFormat || ''}
                  onChange={(e) => setSelectedFormat((e.target.value as CourseFormat) || null)}
                  className="w-full px-3 py-2 border border-[#e2e6ed] rounded-lg bg-white text-[#0f1923] focus:outline-none focus:border-[#1a3a6b]"
                >
                  <option value="">Все форматы</option>
                  <option value="online">{t.courses.online}</option>
                  <option value="offline">{t.courses.offline}</option>
                </select>
              </div>

              {/* City filter */}
              <div>
                <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                  {t.courses.filterByCity}
                </label>
                <select
                  value={selectedCity || ''}
                  onChange={(e) => setSelectedCity(e.target.value || null)}
                  className="w-full px-3 py-2 border border-[#e2e6ed] rounded-lg bg-white text-[#0f1923] focus:outline-none focus:border-[#1a3a6b]"
                >
                  <option value="">{t.courses.allCities}</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Schedule view */}
          {viewMode === 'list' ? (
            <ScheduleList locale={locale} events={filteredEvents} courses={coursesMap} />
          ) : (
            <ScheduleCalendar locale={locale} events={filteredEvents} />
          )}
        </div>
      </section>
    </>
  );
}
