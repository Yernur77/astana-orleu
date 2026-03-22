'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const { t } = useTranslation(locale);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 bg-gradient-to-br from-[#f8f9fb] to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a3a6b]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c0c8d8]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f1923] mb-6 leading-tight">
            {t.hero.title}
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#6b7a8d] mb-10 leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="primary">
              {t.hero.primaryBtn}
            </Button>
            <Button size="lg" variant="secondary">
              {t.hero.secondaryBtn}
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-[#e2e6ed]"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a3a6b]">{t.stats.experience}</div>
              <p className="text-sm text-[#6b7a8d] mt-2">{t.stats.experienceLabel}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a3a6b]">{t.stats.students}</div>
              <p className="text-sm text-[#6b7a8d] mt-2">{t.stats.studentsLabel}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1a3a6b]">{t.stats.regions}</div>
              <p className="text-sm text-[#6b7a8d] mt-2">{t.stats.regionsLabel}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
