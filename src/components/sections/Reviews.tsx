'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-lg text-[#6b7a8d]">
            Что говорят наши выпускники
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
              <Card className="h-full p-6 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-[#6b7a8d] mb-6 flex-grow italic">
                  &quot;{review.text[locale === 'kz' ? 'kz' : 'ru']}&quot;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#e2e6ed]">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a6b] text-white flex items-center justify-center font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1923]">{review.name}</p>
                    <p className="text-sm text-[#6b7a8d]">
                      {review.position[locale === 'kz' ? 'kz' : 'ru']}
                    </p>
                    <p className="text-xs text-[#6b7a8d]">{review.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
