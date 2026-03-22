'use client';

import { motion } from 'framer-motion';
import { reviews } from '@/data/reviews';
import { useTranslation } from '@/hooks/useTranslation';

interface ReviewsProps {
  locale: string;
}

export function Reviews({ locale }: ReviewsProps) {
  const { t } = useTranslation(locale);

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
              {locale === 'ru' ? 'Отзывы' : 'Пікірлер'}
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-DEFAULT mb-4 tracking-tight">
            {t.reviews.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {locale === 'ru' ? 'Что говорят наши выпускники' : 'Біздің түлектерінің айтары'}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={itemVariants}>
              <div className="h-full p-6 rounded-card bg-white border border-divider hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-text-secondary mb-6 flex-grow italic leading-relaxed">
                  &quot;{review.text[locale === 'kz' ? 'kz' : 'ru']}&quot;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-divider">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A7A62] to-[#5AAD62] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-text-DEFAULT">{review.name}</p>
                    <p className="text-sm text-text-secondary">
                      {review.position[locale === 'kz' ? 'kz' : 'ru']}
                    </p>
                    <p className="text-xs text-text-secondary/70">{review.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
