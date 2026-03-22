'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

interface ContactsPageProps {
  params: {
    locale: string;
  };
}

export default function ContactsPage({ params }: ContactsPageProps) {
  const locale = params.locale;
  const { t } = useTranslation(locale);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#142a52] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contacts.title}</h1>
          <p className="text-lg text-white/80">Свяжитесь с нами по любым вопросам</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
            >
              <Card className="h-full p-6 text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-lg font-bold text-[#0f1923] mb-2">Адрес</h3>
                <p className="text-[#6b7a8d]">{t.contacts.address}</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="h-full p-6 text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-lg font-bold text-[#0f1923] mb-2">Телефон</h3>
                <a href={`tel:${t.contacts.phone}`} className="text-[#1a3a6b] hover:underline">
                  {t.contacts.phone}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full p-6 text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-[#0f1923] mb-2">Email</h3>
                <a href={`mailto:${t.contacts.email}`} className="text-[#1a3a6b] hover:underline">
                  {t.contacts.email}
                </a>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#0f1923] mb-6">Отправить сообщение</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                      {t.contacts.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#e2e6ed] rounded-lg focus:outline-none focus:border-[#1a3a6b]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                      {t.contacts.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#e2e6ed] rounded-lg focus:outline-none focus:border-[#1a3a6b]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                      {t.contacts.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#e2e6ed] rounded-lg focus:outline-none focus:border-[#1a3a6b]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f1923] mb-2">
                      {t.contacts.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-[#e2e6ed] rounded-lg focus:outline-none focus:border-[#1a3a6b] resize-none"
                    />
                  </div>

                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-100 text-green-800 rounded-lg text-sm">
                      {t.contacts.form.success}
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-100 text-red-800 rounded-lg text-sm">
                      {t.contacts.form.error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? 'Отправляется...' : t.contacts.form.send}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <Card className="p-8 mb-6">
                <h3 className="text-2xl font-bold text-[#0f1923] mb-6">Время работы</h3>
                <p className="text-[#6b7a8d] text-lg mb-8">{t.contacts.hours}</p>

                <h4 className="font-bold text-[#0f1923] mb-4">Способы связи</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-sm text-[#6b7a8d]">WhatsApp & Telegram</p>
                      <a
                        href="https://wa.me/77084250144"
                        className="font-bold text-[#1a3a6b] hover:underline"
                      >
                        +7 (708) 425-0144
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-sm text-[#6b7a8d]">Email</p>
                      <a
                        href="mailto:info@astanaorleu.kz"
                        className="font-bold text-[#1a3a6b] hover:underline"
                      >
                        info@astanaorleu.kz
                      </a>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="h-96 md:h-[500px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-[#f8f9fb]">
          <div className="text-center">
            <p className="text-[#6b7a8d] text-lg">
              📍 Астана, пр. Нурсултана Назарбаева, д. 54
            </p>
            <p className="text-[#6b7a8d] text-sm mt-2">
              Карта доступна по запросу
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
