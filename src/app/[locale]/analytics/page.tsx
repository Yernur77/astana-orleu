'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CallsWorkday from '@/components/analytics/CallsWorkday';

const TABS = [
  { id: 'calls', label: 'Рабочий день по звонкам', icon: '📞' },
  { id: 'efficiency', label: 'Эффективность', icon: '📈' },
  { id: 'quality', label: 'Качество', icon: '⭐' },
];

const DATE_RANGES = ['Сегодня', 'Вчера', 'Неделя', 'Месяц'];

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('calls');
  const [dateRange, setDateRange] = useState('Сегодня');

  return (
    <main className="min-h-screen bg-bg py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
              <span>ERP</span>
              <span>›</span>
              <span className="text-primary font-medium">Аналитика</span>
            </div>
            <h1 className="text-2xl font-bold text-text">Аналитика</h1>
            <p className="text-sm text-text-secondary mt-0.5">
              Мониторинг активности менеджеров в реальном времени
            </p>
          </div>

          {/* Date range picker */}
          <div className="flex items-center gap-1 bg-white border border-divider rounded-xl p-1 shadow-card shrink-0">
            {DATE_RANGES.map(d => (
              <button
                key={d}
                onClick={() => setDateRange(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  dateRange === d
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-text hover:bg-bg-gradient'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="flex gap-1 bg-white border border-divider rounded-xl p-1 shadow-card w-fit"
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-brand text-white shadow-sm'
                  : 'text-text-secondary hover:text-text hover:bg-bg-gradient'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        {activeTab === 'calls' && (
          <motion.div
            key="calls"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CallsWorkday />
          </motion.div>
        )}

        {activeTab !== 'calls' && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-divider p-16 text-center shadow-card"
          >
            <p className="text-5xl mb-4">
              {TABS.find(t => t.id === activeTab)?.icon}
            </p>
            <p className="text-lg font-semibold text-text">
              {TABS.find(t => t.id === activeTab)?.label}
            </p>
            <p className="text-text-secondary text-sm mt-2">Раздел в разработке</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
