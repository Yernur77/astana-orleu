'use client';

import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Event } from '@/data/events';
import { formatDate } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface ScheduleCalendarProps {
  locale: string;
  events: Event[];
}

export function ScheduleCalendar({ locale, events }: ScheduleCalendarProps) {
  const { t } = useTranslation(locale);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2)); // March 2026
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const eventsByDate = useMemo(() => {
    const map: { [key: string]: Event[] } = {};
    events.forEach((event) => {
      const dateStr = event.date;
      if (!map[dateStr]) {
        map[dateStr] = [];
      }
      map[dateStr].push(event);
    });
    return map;
  }, [events]);

  const monthDays = [];
  const totalDays = daysInMonth(currentDate);
  const firstDay = firstDayOfMonth(currentDate);

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    monthDays.push(null);
  }

  // Days of the month
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    monthDays.push(date);
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const monthName = currentDate.toLocaleDateString(locale === 'kz' ? 'kk-KZ' : 'ru-RU', {
    month: 'long',
    year: 'numeric',
  });

  const selectedEvents = selectedDate ? eventsByDate[selectedDate] || [] : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Calendar */}
      <div className="lg:col-span-2">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0f1923]">{monthName}</h3>
            <div className="flex gap-2">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-[#f8f9fb] rounded-lg transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-[#f8f9fb] rounded-lg transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
              <div key={day} className="text-center font-semibold text-[#6b7a8d] text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {monthDays.map((date, index) => {
              const dateStr = date ? date.toISOString().split('T')[0] : '';
              const hasEvents = dateStr && eventsByDate[dateStr];
              const isSelected = dateStr === selectedDate;

              return (
                <button
                  key={index}
                  onClick={() => dateStr && setSelectedDate(isSelected ? null : dateStr)}
                  className={`
                    aspect-square rounded-lg font-semibold text-sm transition-all
                    ${
                      !date
                        ? 'bg-transparent'
                        : isSelected
                        ? 'bg-[#1a3a6b] text-white'
                        : hasEvents
                        ? 'bg-[#e2e6ed] text-[#1a3a6b] hover:bg-[#c0c8d8]'
                        : 'hover:bg-[#f8f9fb] text-[#0f1923]'
                    }
                  `}
                  disabled={!date}
                >
                  {date?.getDate()}
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Selected date events */}
      <div>
        <Card className="p-6">
          <h4 className="font-bold text-[#0f1923] mb-4">
            {selectedDate ? formatDate(selectedDate, locale) : 'Выберите дату'}
          </h4>

          {selectedEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-[#e2e6ed] rounded-lg hover:border-[#c0c8d8] transition-colors"
                >
                  <p className="font-semibold text-[#0f1923] mb-2 text-sm">
                    {event.title[locale === 'kz' ? 'kz' : 'ru']}
                  </p>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {event.format === 'online' ? t.courses.online : t.courses.offline}
                    </Badge>
                    <Badge variant="accent" className="text-xs">
                      {event.city}
                    </Badge>
                  </div>
                  <p className="text-xs text-[#6b7a8d] mb-3">
                    👥 {event.spotsLeft} {t.schedule.spots}
                  </p>
                  <Button variant="primary" size="sm" className="w-full">
                    {t.schedule.register}
                  </Button>
                </div>
              ))}
            </div>
          ) : selectedDate ? (
            <p className="text-[#6b7a8d] text-sm">Нет мероприятий на эту дату</p>
          ) : (
            <p className="text-[#6b7a8d] text-sm">Нажмите на дату для просмотра мероприятий</p>
          )}
        </Card>
      </div>
    </div>
  );
}
