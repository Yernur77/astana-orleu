'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { directions } from '@/data/directions';

interface DirectionsProps {
  locale: string;
}

const directionColors = [
  { from: '#3A7A62', to: '#5AAD62' },
  { from: '#4264A0', to: '#42B3E0' },
  { from: '#2A5A47', to: '#3A7A62' },
  { from: '#4C568F', to: '#6B7AC0' },
];

export function Directions({ locale }: DirectionsProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-0.5 bg-gradient-to-r from-[#3A7A62] to-[#5AAD62] rounded"/>
            <span className="text-label uppercase tracking-[1.5px] text-primary font-semibold text-[11px]">
              {locale === 'ru' ? 'Направления' : 'Бағыттар'}
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-DEFAULT mb-4 tracking-tight">
            {locale === 'ru' ? 'Направления обучения' : 'Оқыту бағыттары'}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {locale === 'ru'
              ? 'Выбирайте курсы по интересующему вас направлению'
              : 'Өтінігіңіз бойынша курстарды таңдаңыз'}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {directions.map((direction, idx) => (
            <motion.div key={direction.id} variants={itemVariants}>
              <Link href={`/${locale}/courses`}>
                <div className="group relative h-full p-6 rounded-card bg-white border border-divider hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center">
                  {/* Icon background */}
                  <div
                    className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${directionColors[idx % directionColors.length].from}, ${directionColors[idx % directionColors.length].to})`,
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {direction.icon}
                    </svg>
                  </div>

                  <h3 className="text-lg font-semibold text-text-DEFAULT mb-3 group-hover:text-primary transition-colors">
                    {direction.title[locale === 'kz' ? 'kz' : 'ru']}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed flex-grow mb-4">
                    {direction.description[locale === 'kz' ? 'kz' : 'ru']}
                  </p>

                  {/* Arrow */}
                  <div className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                    <span>{locale === 'ru' ? 'Подробнее' : 'Толығырақ'}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
