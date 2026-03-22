'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Stats } from '@/components/sections/Stats';

interface AboutPageProps {
  params: {
    locale: string;
  };
}

const timelineItems = [
  {
    year: '2004',
    ru: 'Основание компании Astana Orleu',
    kz: 'Astana Orleu компаниясының құрылуы',
  },
  {
    year: '2010',
    ru: 'Расширение программ обучения, открытие филиалов',
    kz: 'Оқыту бағдарламаларының кеңеюі, филиалдарының ашылуы',
  },
  {
    year: '2015',
    ru: 'Запуск онлайн-платформы для дистанционного обучения',
    kz: 'Қашықтықтан оқыту үшін онлайн-платформасының іске қосылуы',
  },
  {
    year: '2020',
    ru: 'Достижение 20 000+ выпускников, расширение в 16 регионов',
    kz: '20 000+ түлектіге жетуі, 16 аймақтағы кеңеюі',
  },
];

export default function AboutPage({ params }: AboutPageProps) {
  const locale = params.locale;
  const { t } = useTranslation(locale);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#3A7A62] to-[#2d6250] text-white pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-lg text-white/80">Более 20 лет опыта в профессиональном образовании</p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#0f1923] mb-6">{t.about.mission}</h2>
              <p className="text-lg text-[#6b7a8d] leading-relaxed">{t.about.missionText}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <Stats locale={locale} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-4">
              {t.about.values}
            </h2>
            <p className="text-lg text-[#6b7a8d]">
              Принципы, на которых мы строим нашу работу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.about.value1,
                text: t.about.value1Text,
                icon: '✓',
              },
              {
                title: t.about.value2,
                text: t.about.value2Text,
                icon: '⚙️',
              },
              {
                title: t.about.value3,
                text: t.about.value3Text,
                icon: '🌍',
              },
              {
                title: t.about.value4,
                text: t.about.value4Text,
                icon: '💡',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-6 border border-[#e2e6ed] text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#0f1923] mb-3">{value.title}</h3>
                <p className="text-[#6b7a8d]">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923]">История развития</h2>
          </div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex gap-8 items-center"
              >
                <div className="flex-shrink-0 w-32 text-center">
                  <div className="text-3xl font-bold text-[#1a3a6b]">{item.year}</div>
                </div>
                <div className="relative flex-grow">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#1a3a6b]" />
                  <div className="pl-8 pb-8">
                    <div className="absolute left-0 top-3 w-4 h-4 bg-[#1a3a6b] rounded-full transform -translate-x-1.5" />
                    <p className="text-[#0f1923] text-lg">
                      {item[locale === 'kz' ? 'kz' : 'ru']}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-4">
              {t.about.team}
            </h2>
            <p className="text-lg text-[#6b7a8d]">{t.about.teamDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Абдулхамит Имангулов',
                position: 'Генеральный директор',
              },
              {
                name: 'Елена Петрова',
                position: 'Руководитель программ обучения',
              },
              {
                name: 'Болат Нурмаганбетов',
                position: 'Координатор студентов',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-6 text-center border border-[#e2e6ed]"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#1a3a6b] to-[#142a52] rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-[#0f1923] mb-2">{member.name}</h3>
                <p className="text-[#6b7a8d]">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
