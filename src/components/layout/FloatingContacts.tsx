'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingContacts() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 right-5 z-50 flex flex-col gap-2.5"
        >
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/77084250144"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-[#25D366] shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] transition-shadow"
            title="WhatsApp"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.004 2.667C8.638 2.667 2.667 8.638 2.667 16.004c0 2.342.64 4.638 1.854 6.654L2.667 29.333l6.847-1.793a13.27 13.27 0 006.49 1.693h.004c7.363 0 13.325-5.972 13.325-13.337 0-3.562-1.385-6.91-3.905-9.433A13.27 13.27 0 0016.004 2.667zm0 24.33a11.02 11.02 0 01-5.624-1.545l-.403-.24-4.17 1.093 1.116-4.062-.264-.418a11.005 11.005 0 01-1.687-5.821c0-6.086 4.954-11.038 11.036-11.038a10.96 10.96 0 017.805 3.237 10.968 10.968 0 013.23 7.81c-.003 6.086-4.955 10.984-11.039 10.984zm6.052-8.254c-.332-.166-1.963-.968-2.267-1.078-.304-.11-.525-.166-.747.166-.22.331-.857 1.078-1.05 1.3-.194.22-.387.248-.72.082-.332-.165-1.403-.517-2.672-1.649-.986-.882-1.652-1.97-1.847-2.302-.193-.332-.02-.512.146-.677.15-.148.332-.387.498-.58.166-.194.22-.332.332-.554.11-.22.055-.414-.028-.58-.083-.165-.747-1.8-1.022-2.465-.27-.648-.544-.56-.747-.57-.193-.008-.415-.01-.636-.01-.22 0-.58.082-.883.414-.304.332-1.16 1.133-1.16 2.762s1.188 3.204 1.353 3.427c.166.22 2.338 3.57 5.664 5.005.792.342 1.41.547 1.89.7.793.252 1.516.217 2.087.132.636-.095 1.963-.803 2.24-1.578.276-.775.276-1.44.193-1.579-.082-.138-.304-.22-.636-.387z"/>
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/astana_orleu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-2xl shadow-[0_4px_16px_rgba(225,48,108,0.35)] hover:shadow-[0_6px_20px_rgba(225,48,108,0.5)] transition-shadow"
            style={{
              background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            }}
            title="Instagram"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
