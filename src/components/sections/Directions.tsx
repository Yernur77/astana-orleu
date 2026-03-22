'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { directions } from '@/data/directions';

interface DirectionsProps {
  locale: string;
}

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-4">
            Направления обучения
          </h2>
          <p className="text-lg text-[#6b7a8d]">
            Выбирайте курсы по интересующему вас направлению
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {directions.map((direction) => (
            <motion.div key={direction.id} variants={itemVariants}>
              <Card hoverable className="h-full p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 text-[#1a3a6b]">
                  <svg
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
                <h3 className="text-xl font-bold text-[#0f1923] mb-3">
                  {direction.title[locale === 'kz' ? 'kz' : 'ru']}
                </h3>
                <p className="text-[#6b7a8d] text-sm">
                  {direction.description[locale === 'kz' ? 'kz' : 'ru']}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
