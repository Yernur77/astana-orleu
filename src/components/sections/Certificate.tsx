'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useTranslation } from '@/hooks/useTranslation';

// Dynamically import Remotion Player (client-only, no SSR)
const CertificatePlayer = dynamic(
  () => import('@/components/remotion/PlayerWrappers').then(m => m.CertificatePlayer),
  { ssr: false }
);

interface CertificateProps {
  locale: string;
}

export function Certificate({ locale }: CertificateProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Remotion Certificate Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-lg">
              <CertificatePlayer />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#3A7A62] to-[#5AAD62] rounded"/>
              <span className="text-label uppercase tracking-[1.5px] text-primary font-semibold text-[11px]">
                {locale === 'ru' ? 'Сертификация' : 'Сертификаттау'}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-semibold text-text-DEFAULT mb-6 tracking-tight">
              {t.certificate.title}
            </h2>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {t.certificate.description}
            </p>

            <div className="space-y-5">
              {[
                {
                  title: locale === 'ru' ? 'Официальное признание' : 'Ресми тану',
                  desc: locale === 'ru'
                    ? 'Сертификат признается государственными органами и частными компаниями'
                    : 'Куәлік мемлекеттік органдар және жеке компаниялар тарамнан танылады'
                },
                {
                  title: locale === 'ru' ? 'Подтверждение компетенций' : 'Құзыреттіліктерді растау',
                  desc: locale === 'ru'
                    ? 'Документ подтверждает ваши знания и готовность к профессиональной работе'
                    : 'Құжат сіздің біліміңіз және кәсіби жұмысқа дайындығыңызды растайды'
                },
                {
                  title: locale === 'ru' ? 'Долгосрочная ценность' : 'Ұзақ мерзімді құндылық',
                  desc: locale === 'ru'
                    ? 'Улучшайте свой профессиональный профиль и карьерные перспективы'
                    : 'Өз кәсіби профайлыңыз және карьера перспективаларыңызды жақсартыңыз'
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (idx + 1) }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3A7A62] to-[#5AAD62] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-DEFAULT mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
