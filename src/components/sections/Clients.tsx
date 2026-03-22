'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

interface ClientsProps {
  locale: string;
}

const clientNames = [
  'Казахтелеком',
  'Евразийский Банк',
  'Казмунайгас',
  'КазМунайСервис',
  'АО "ЮНИК"',
  'БТА Банк',
];

export function Clients({ locale }: ClientsProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="py-16 md:py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f1923]">{t.clients.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientNames.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4 rounded-lg bg-white border border-[#e2e6ed] hover:border-[#c0c8d8] hover:shadow-md transition-all cursor-pointer"
            >
              <span className="text-center text-xs md:text-sm font-semibold text-[#6b7a8d]">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
