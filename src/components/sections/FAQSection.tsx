'use client';

import { motion } from 'framer-motion';
import { FAQ } from '@/components/ui/FAQ';
import { useTranslation } from '@/hooks/useTranslation';

interface FAQSectionProps {
  locale: string;
}

export function FAQSection({ locale }: FAQSectionProps) {
  const { t } = useTranslation(locale);

  const faqItems = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-[#6b7a8d]">
            Ответы на популярные вопросы о наших курсах
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FAQ items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
