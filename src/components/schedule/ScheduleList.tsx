'use client';

import { useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Event } from '@/data/events';
import { Course } from '@/data/courses';
import { formatDate, getMonthName } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface ScheduleListProps {
  locale: string;
  events: Event[];
  courses?: Record<string, Course>;
}

export function ScheduleList({ locale, events }: ScheduleListProps) {
  const { t } = useTranslation(locale);

  const groupedByMonth = useMemo(() => {
    const groups: { [key: string]: Event[] } = {};

    events.forEach((event) => {
      const date = new Date(event.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
      if (!groups[monthKey]) {
        groups[monthKey] = [];
      }
      groups[monthKey].push(event);
    });

    return groups;
  }, [events]);

  return (
    <div className="space-y-8">
      {Object.entries(groupedByMonth).map(([monthKey, monthEvents]) => {
        const [year, month] = monthKey.split('-');
        const date = new Date(parseInt(year), parseInt(month));

        return (
          <div key={monthKey}>
            <h3 className="text-xl font-bold text-[#0f1923] mb-4 pb-4 border-b-2 border-[#e2e6ed]">
              {getMonthName(date, locale)} {year}
            </h3>

            <div className="space-y-4">
              {monthEvents
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <Card key={event.id} hoverable className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                      <div>
                        <p className="text-sm text-[#6b7a8d] mb-1">Курс</p>
                        <h4 className="font-bold text-[#0f1923]">
                          {event.title[locale === 'kz' ? 'kz' : 'ru']}
                        </h4>
                      </div>

                      <div>
                        <p className="text-sm text-[#6b7a8d] mb-1">Дата</p>
                        <p className="font-semibold text-[#0f1923]">
                          {formatDate(event.date, locale)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-[#6b7a8d] mb-2">Статус</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">
                            {event.format === 'online' ? t.courses.online : t.courses.offline}
                          </Badge>
                          <Badge variant="accent">{event.city}</Badge>
                        </div>
                      </div>

                      <div className="flex items-end justify-between md:justify-end gap-4">
                        <div>
                          <p className="text-sm text-[#6b7a8d] mb-1">Мест</p>
                          <p className="font-semibold text-[#0f1923]">
                            {event.spotsLeft}/{event.totalSpots}
                          </p>
                        </div>
                        <Button variant="primary" size="sm">
                          {t.schedule.register}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
