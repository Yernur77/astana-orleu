'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  locale: string;
}

// Animated counter component
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 120 });
  const display = useTransform(springValue, (v) => Math.round(v).toLocaleString('ru-RU'));
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero({ locale }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4faf7] via-white to-[#eef4fb] pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3A7A62]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#42B3E0]/6 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
              <div className="w-8 h-0.5 bg-[#3A7A62]" />
              <span className="text-xs font-semibold text-[#3A7A62] uppercase tracking-widest">
                Казахстан · 10+ лет опыта
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0f1923] mb-5 leading-[1.12]"
            >
              Профессиональное{' '}
              <span className="text-[#3A7A62]">обучение</span> для<br className="hidden sm:block" />
              специалистов
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-[#5a6779] mb-8 leading-relaxed max-w-lg">
              Качественное образование в области государственных закупок, бухгалтерии, управления и права. Больше 10 лет подготовки специалистов Казахстана.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href={`/${locale}/courses`}>
                <Button size="lg" variant="primary" className="gap-2">
                  Смотреть курсы
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href={`/${locale}/contacts`}>
                <Button size="lg" variant="secondary">Связаться с нами</Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#dceee8]"
            >
              {[
                { value: 10, suffix: '+', label: 'лет на рынке' },
                { value: 28000, suffix: '+', label: 'слушателей' },
                { value: 20, suffix: '', label: 'регионов охвата' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#3A7A62] mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-[#6b7a8d]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Профессиональное обучение"
                width={680}
                height={480}
                className="w-full h-[420px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/15 to-transparent" />
            </div>

            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-4 -left-5 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f1923]">4.9 / 5.0</div>
                <div className="text-xs text-[#6b7a8d]">1200+ отзывов</div>
              </div>
            </motion.div>

            {/* Certificate badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-5 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#eaf5f1] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#3A7A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f1923]">Именной сертификат</div>
                <div className="text-xs text-[#6b7a8d]">каждому участнику</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
