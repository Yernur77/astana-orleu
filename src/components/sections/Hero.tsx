'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Remotion: animated stats counter (SSR disabled — browser only)
const StatsPlayer = dynamic(
  () => import('@/components/remotion/PlayerWrappers').then(m => m.StatsPlayer),
  { ssr: false, loading: () => (
    <div className="flex items-center gap-8 pt-8 border-t border-divider">
      {[{ v: '20+', l: 'лет' }, { v: '28 000+', l: 'слушателей' }, { v: '16', l: 'регионов' }].map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-[28px] font-bold text-primary">{s.v}</div>
          <div className="text-[12px] text-text-secondary">{s.l}</div>
        </div>
      ))}
    </div>
  )}
);

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EAF5F0] via-[#F0F5FB] to-[#E8EFF8] -z-10"/>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#5AAD62]/10 to-[#42B3E0]/10 blur-3xl -z-10"/>
      <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#3A7A62]/8 to-[#4264A0]/8 blur-3xl -z-10"/>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Text content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#3A7A62] to-[#5AAD62] rounded"/>
              <span className="text-label uppercase tracking-[1.5px] text-primary font-semibold text-[11px]">
                {locale === 'ru' ? 'Казахстан · 20+ лет опыта' : 'Қазақстан · 20+ жыл тәжірибе'}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[44px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-text-DEFAULT mb-6"
            >
              {locale === 'ru' ? (
                <>
                  Профессиональное<br/>
                  <span className="bg-gradient-to-r from-[#3A7A62] to-[#42B3E0] bg-clip-text text-transparent">
                    обучение
                  </span>{' '}
                  для специалистов
                </>
              ) : (
                <>
                  Мамандарға арналған<br/>
                  <span className="bg-gradient-to-r from-[#3A7A62] to-[#42B3E0] bg-clip-text text-transparent">
                    кәсіби оқыту
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] text-text-secondary leading-relaxed mb-10 max-w-xl"
            >
              {locale === 'ru'
                ? 'Качественное образование в области государственных закупок, бухгалтерии, управления и права. Больше 20 лет подготовки специалистов Казахстана.'
                : 'Мемлекеттік сатып алу, бухгалтерия, басқару және құқық саласындағы сапалы білім. Қазақстан мамандарын дайындаудың 20+ жылы.'}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                href={`/${locale}/courses`}
                className="group px-7 py-3.5 bg-primary text-white font-semibold rounded-btn transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                {locale === 'ru' ? 'Смотреть курсы' : 'Курстарды қарау'}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link
                href={`/${locale}/contacts`}
                className="px-7 py-3.5 border-2 border-primary/30 text-primary font-semibold rounded-btn transition-all duration-200 hover:border-primary hover:bg-primary/5"
              >
                {locale === 'ru' ? 'Связаться с нами' : 'Байланысу'}
              </Link>
            </motion.div>

            {/* Stats */}
            {/* Remotion animated stats counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-divider"
            >
              <StatsPlayer />
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
                alt="Professional training seminar"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B25]/20 to-transparent"/>
            </div>

            {/* Floating card - achievement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card border border-divider"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3A7A62] to-[#5AAD62] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-text-DEFAULT">{locale === 'ru' ? 'Именной сертификат' : 'Жеке куәлік'}</div>
                  <div className="text-[11px] text-text-secondary">{locale === 'ru' ? 'каждому участнику' : 'әр қатысушыға'}</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card - rating */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-card border border-divider"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] font-semibold">4.9</span>
              </div>
              <div className="text-[11px] text-text-secondary mt-0.5">{locale === 'ru' ? '1200+ отзывов' : '1200+ пікір'}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
