'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { events } from '@/data/events';
import { useTranslation } from '@/hooks/useTranslation';
import { formatDate } from '@/lib/utils';

interface EventsProps {
  locale: string;
}

export function Events({ locale }: EventsProps) {
  const { t } = useTranslation(locale);
  const upcomingEvents = events.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-2">
              {t.schedule.upcomingEvents}
            </h2>
            <p className="text-lg text-[#6b7a8d]">
              Ближайшие даты начала курсов
            </p>
          </div>
          <Link href={`/${locale}/schedule`}>
            <Button variant="ghost">{t.courses.viewAll} →</Button>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {upcomingEvents.map((event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <Card hoverable className="h-full overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">
                      {event.format === 'online' ? t.courses.online : t.courses.offline}
                    </Badge>
                    <Badge variant="accent">{event.city}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f1923] mb-3 line-clamp-2">
                    {event.title[locale === 'kz' ? 'kz' : 'ru']}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-[#6b7a8d]">
                    <p>📅 {formatDate(event.date, locale)}</p>
                    <p>
                      👥 {event.spotsLeft} {t.schedule.spots}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#e2e6ed] bg-[#f8f9fb]">
                  <Button variant="primary" size="sm" className="w-full">
                    {t.schedule.register}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
