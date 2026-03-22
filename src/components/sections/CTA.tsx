'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAProps {
  locale: string;
}

export function CTA({ locale }: CTAProps) {

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background using logo colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A7A62] via-[#4264A0] to-[#42B3E0]"/>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}/>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-white/70 text-[11px] uppercase tracking-[2px] font-semibold mb-6">
            {locale === 'ru' ? 'Начните сейчас' : 'Қазір бастаңыз'}
          </span>
          <h2 className="text-[40px] lg:text-[52px] font-semibold text-white leading-[1.1] tracking-tight mb-6">
            {locale === 'ru' ? 'Готовы начать обучение?' : 'Оқуды бастауға дайынсыз ба?'}
          </h2>
          <p className="text-white/75 text-[18px] mb-10 max-w-lg mx-auto leading-relaxed">
            {locale === 'ru'
              ? 'Присоединяйтесь к 28 000 специалистам, которые уже прошли обучение в Astana Orleu.'
              : 'Astana Orleu-да оқыған 28 000 маманға қосылыңыз.'}
          </p>
          <Link
            href={`/${locale}/contacts`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-btn hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-[16px]"
          >
            {locale === 'ru' ? 'Подать заявку' : 'Өтінім беру'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
