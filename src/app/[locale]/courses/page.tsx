'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { courses, type CourseDirection, type CourseFormat } from '@/data/courses';
import { useTranslation } from '@/hooks/useTranslation';
import { directions } from '@/data/directions';

interface CoursesPageProps {
  params: {
    locale: string;
  };
}

export default function CoursesPage({ params }: CoursesPageProps) {
  const locale = params.locale;
  const { t } = useTranslation(locale);

  const [selectedDirection, setSelectedDirection] = useState<CourseDirection | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<CourseFormat | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = Array.from(new Set(courses.map((c) => c.city)));
  const directionOptions = directions.map((d) => ({
    key: d.key as CourseDirection,
    title: d.title[locale === 'kz' ? 'kz' : 'ru'],
  }));

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (selectedDirection && course.direction !== selectedDirection) return false;
      if (selectedFormat && course.format !== selectedFormat) return false;
      if (selectedCity && course.city !== selectedCity) return false;
      return true;
    });
  }, [selectedDirection, selectedFormat, selectedCity]);

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
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#3A7A62] to-[#2d6250] text-white pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.courses.title}</h1>
          <p className="text-lg text-white/80">Выберите курс, который вас интересует</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-[#0f1923] mb-4">Фильтры</h3>

                {/* Direction filter */}
                <div className="mb-6">
                  <p className="font-semibold text-[#0f1923] mb-3 text-sm">
                    {t.courses.filterByDirection}
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedDirection(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedDirection === null
                          ? 'bg-[#1a3a6b] text-white'
                          : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                      }`}
                    >
                      {t.courses.allDirections}
                    </button>
                    {directionOptions.map((dir) => (
                      <button
                        key={dir.key}
                        onClick={() => setSelectedDirection(dir.key)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedDirection === dir.key
                            ? 'bg-[#1a3a6b] text-white'
                            : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                        }`}
                      >
                        {dir.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format filter */}
                <div className="mb-6">
                  <p className="font-semibold text-[#0f1923] mb-3 text-sm">
                    {t.courses.filterByFormat}
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedFormat(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedFormat === null
                          ? 'bg-[#1a3a6b] text-white'
                          : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                      }`}
                    >
                      Все форматы
                    </button>
                    <button
                      onClick={() => setSelectedFormat('online')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedFormat === 'online'
                          ? 'bg-[#1a3a6b] text-white'
                          : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                      }`}
                    >
                      {t.courses.online}
                    </button>
                    <button
                      onClick={() => setSelectedFormat('offline')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedFormat === 'offline'
                          ? 'bg-[#1a3a6b] text-white'
                          : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                      }`}
                    >
                      {t.courses.offline}
                    </button>
                  </div>
                </div>

                {/* City filter */}
                <div>
                  <p className="font-semibold text-[#0f1923] mb-3 text-sm">
                    {t.courses.filterByCity}
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCity(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedCity === null
                          ? 'bg-[#1a3a6b] text-white'
                          : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                      }`}
                    >
                      {t.courses.allCities}
                    </button>
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedCity === city
                            ? 'bg-[#1a3a6b] text-white'
                            : 'hover:bg-[#f8f9fb] text-[#6b7a8d]'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {filteredCourses.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredCourses.map((course) => (
                    <motion.div key={course.id} variants={itemVariants}>
                      <Card hoverable className="h-full p-6 flex flex-col">
                        <div className="flex gap-2 mb-4">
                          <Badge variant="secondary">
                            {course.direction === 'procurement'
                              ? t.directions.procurement
                              : course.direction === 'accounting'
                              ? t.directions.accounting
                              : course.direction === 'management'
                              ? t.directions.management
                              : t.directions.legal}
                          </Badge>
                          <Badge variant="accent">
                            {course.format === 'online' ? t.courses.online : t.courses.offline}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-bold text-[#0f1923] mb-3 line-clamp-2">
                          {course.title[locale === 'kz' ? 'kz' : 'ru']}
                        </h3>

                        <p className="text-[#6b7a8d] text-sm mb-6 flex-grow line-clamp-3">
                          {course.description[locale === 'kz' ? 'kz' : 'ru']}
                        </p>

                        <div className="space-y-3 mb-4 text-sm text-[#6b7a8d]">
                          <p>📍 {course.city}</p>
                          <p>⏱️ {course.duration} {t.courses.duration}</p>
                          <p className="font-bold text-[#0f1923]">
                            {course.price.toLocaleString()} {t.courses.price}
                          </p>
                        </div>

                        <Button variant="primary" size="md" className="w-full">
                          {t.courses.enroll}
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#6b7a8d] text-lg">{t.courses.noResults}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
