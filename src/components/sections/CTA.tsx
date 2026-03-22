'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

interface CTAProps {
  locale: string;
}

export function CTA({ locale }: CTAProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a3a6b] to-[#142a52] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <Link href={`/${locale}/courses`}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#1a3a6b] border-white hover:bg-white/90"
            >
              {t.cta.button}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
