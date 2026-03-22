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
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#3A7A62] to-[#2d6250] text-white pt-16 pb-14 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            {t.contacts.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/75 text-base md:text-lg"
          >
            Свяжитесь с нами по любым вопросам
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-[#f7fbfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2 contact info cards (no address) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
            >
              <Card className="h-full p-6 text-center hover:shadow-[0_8px_30px_rgba(58,122,98,0.12)] transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#eaf5f1] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#3A7A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#6b7a8d] uppercase tracking-wider mb-2">Телефон</h3>
                <a href={`tel:${t.contacts.phone}`} className="text-[#1a2b25] font-semibold hover:text-[#3A7A62] transition-colors">
                  {t.contacts.phone}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="h-full p-6 text-center hover:shadow-[0_8px_30px_rgba(58,122,98,0.12)] transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#eaf5f1] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#3A7A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[#6b7a8d] uppercase tracking-wider mb-2">Email</h3>
                <a href={`mailto:${t.contacts.email}`} className="text-[#1a2b25] font-semibold hover:text-[#3A7A62] transition-colors">
                  {t.contacts.email}
                </a>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-bold text-[#1a2b25] mb-6">Отправить сообщение</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2b25] mb-1.5">{t.contacts.form.name}</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-2.5 border border-[#d8e8e3] rounded-xl focus:outline-none focus:border-[#3A7A62] focus:ring-2 focus:ring-[#3A7A62]/10 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2b25] mb-1.5">{t.contacts.form.email}</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-2.5 border border-[#d8e8e3] rounded-xl focus:outline-none focus:border-[#3A7A62] focus:ring-2 focus:ring-[#3A7A62]/10 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2b25] mb-1.5">{t.contacts.form.phone}</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-[#d8e8e3] rounded-xl focus:outline-none focus:border-[#3A7A62] focus:ring-2 focus:ring-[#3A7A62]/10 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2b25] mb-1.5">{t.contacts.form.message}</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} required rows={4}
                      className="w-full px-4 py-2.5 border border-[#d8e8e3] rounded-xl focus:outline-none focus:border-[#3A7A62] focus:ring-2 focus:ring-[#3A7A62]/10 transition-all bg-white resize-none"
                    />
                  </div>
                  {formStatus === 'success' && (
                    <div className="p-4 bg-[#eaf5f1] text-[#3A7A62] rounded-xl text-sm font-medium">{t.contacts.form.success}</div>
                  )}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium">{t.contacts.form.error}</div>
                  )}
                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={formStatus === 'loading'}>
                    {formStatus === 'loading' ? 'Отправляется...' : t.contacts.form.send}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5"
            >
              <Card className="p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-bold text-[#1a2b25] mb-4">Время работы</h3>
                <div className="flex items-center gap-3 text-[#4a5568]">
                  <div className="w-10 h-10 rounded-xl bg-[#eaf5f1] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#3A7A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{t.contacts.hours}</span>
                </div>
              </Card>

              <Card className="p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-bold text-[#1a2b25] mb-5">Способы связи</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/77084250144"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#eaf5f1] transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-[#e7f9ef] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16.004 2.667C8.638 2.667 2.667 8.638 2.667 16.004c0 2.342.64 4.638 1.854 6.654L2.667 29.333l6.847-1.793A13.27 13.27 0 0016.004 29.333c7.363 0 13.325-5.972 13.325-13.337 0-3.562-1.385-6.91-3.905-9.433A13.27 13.27 0 0016.004 2.667zm6.052 16.076c-.332-.166-1.963-.968-2.267-1.078-.304-.11-.525-.166-.747.166-.22.331-.857 1.078-1.05 1.3-.194.22-.387.248-.72.082-.332-.165-1.403-.517-2.672-1.649-.986-.882-1.652-1.97-1.847-2.302-.193-.332-.02-.512.146-.677.15-.148.332-.387.498-.58.166-.194.22-.332.332-.554.11-.22.055-.414-.028-.58-.083-.165-.747-1.8-1.022-2.465-.27-.648-.544-.56-.747-.57-.193-.008-.415-.01-.636-.01-.22 0-.58.082-.883.414-.304.332-1.16 1.133-1.16 2.762s1.188 3.204 1.353 3.427c.166.22 2.338 3.57 5.664 5.005.792.342 1.41.547 1.89.7.793.252 1.516.217 2.087.132.636-.095 1.963-.803 2.24-1.578.276-.775.276-1.44.193-1.579-.082-.138-.304-.22-.636-.387z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7a8d] mb-0.5">WhatsApp</p>
                      <p className="font-semibold text-[#1a2b25] group-hover:text-[#3A7A62] transition-colors">+7 (708) 425-0144</p>
                    </div>
                  </a>

                  <a href="mailto:info@astanaorleu.kz"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#eaf5f1] transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-[#eaf5f1] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3A7A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7a8d] mb-0.5">Email</p>
                      <p className="font-semibold text-[#1a2b25] group-hover:text-[#3A7A62] transition-colors">info@astanaorleu.kz</p>
                    </div>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
