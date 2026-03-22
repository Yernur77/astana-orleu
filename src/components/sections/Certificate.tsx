'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

interface CertificateProps {
  locale: string;
}

export function Certificate({ locale }: CertificateProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Certificate preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Certificate mock */}
              <div className="bg-gradient-to-br from-[#f5e6d3] to-[#e8d4ba] rounded-xl p-8 shadow-xl border-4 border-[#1a3a6b]">
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h3 className="text-2xl font-bold text-[#1a3a6b] mb-2">Сертификат</h3>
                  <p className="text-sm text-[#6b7a8d] mb-4">об окончании обучения</p>
                  <p className="text-xs text-[#6b7a8d] italic">
                    Astana Orleu Professional Education Center
                  </p>
                  <div className="mt-8 pt-8 border-t-2 border-[#1a3a6b]">
                    <p className="text-[10px] text-[#6b7a8d]">Выпускник программы обучения</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1923] mb-6">
              {t.certificate.title}
            </h2>

            <p className="text-lg text-[#6b7a8d] mb-6 leading-relaxed">
              {t.certificate.description}
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-[#0f1923] mb-1">Официальное признание</h4>
                  <p className="text-[#6b7a8d]">Сертификат признается государственными органами и частными компаниями</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-[#0f1923] mb-1">Подтверждение компетенций</h4>
                  <p className="text-[#6b7a8d]">Документ подтверждает ваши знания и готовность к профессиональной работе</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-[#0f1923] mb-1">Долгосрочная ценность</h4>
                  <p className="text-[#6b7a8d]">Улучшайте свой профессиональный профиль и карьерные перспективы</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
