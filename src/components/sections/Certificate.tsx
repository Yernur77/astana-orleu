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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border-2 border-gradient-to-br from-[#3A7A62] to-[#42B3E0] overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3A7A62] via-[#5AAD62] to-[#42B3E0]"/>

                <div className="text-center">
                  <div className="text-5xl mb-6 inline-block p-3 bg-gradient-to-br from-[#3A7A62]/10 to-[#42B3E0]/10 rounded-xl">
                    📜
                  </div>
                  <h3 className="text-2xl font-bold text-text-DEFAULT mb-2">
                    {locale === 'ru' ? 'Сертификат' : 'Куәлік'}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6">
                    {locale === 'ru' ? 'об окончании обучения' : 'оқытуды аяқтау туралы'}
                  </p>
                  <p className="text-xs text-text-secondary/70 italic">
                    Astana Orleu Professional Education Center
                  </p>

                  {/* Signature area */}
                  <div className="mt-12 pt-8 border-t-2 border-primary/30">
                    <p className="text-[10px] text-text-secondary/60">
                      {locale === 'ru' ? 'Выпускник программы обучения' : 'Оқыту бағдарламасының түлегі'}
                    </p>
                    <div className="mt-4 flex items-center justify-around">
                      <div className="w-24 text-center">
                        <div className="h-0.5 bg-text-secondary/30 mb-1"/>
                        <p className="text-[9px] text-text-secondary/60">{locale === 'ru' ? 'Подпись' : 'Қол сызы'}</p>
                      </div>
                      <div className="w-24 text-center">
                        <div className="h-0.5 bg-text-secondary/30 mb-1"/>
                        <p className="text-[9px] text-text-secondary/60">{locale === 'ru' ? 'Печать' : 'Мөр'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#5AAD62] to-[#3A7A62] text-white rounded-full p-4 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </motion.div>
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
