'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { managers, Manager } from '@/data/analytics';
import ManagerRow from './ManagerRow';

type SortKey = 'totalCalls' | 'talkTime' | 'avgDuration' | 'answerRate' | 'missed';
type Department = 'all' | string;

function KpiCard({
  label,
  value,
  sub,
  icon,
  color,
  delay,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl border border-divider p-4 flex items-start gap-3 shadow-card"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
        style={{ background: `${color}18` }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-text-secondary font-medium">{label}</p>
        <p className="text-xl font-bold text-text leading-tight">{value}</p>
        {sub && <p className="text-xs text-text-muted mt-0.5">{sub}</p>}
      </div>
    </motion.div>
  );
}

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'totalCalls', label: 'Всего звонков' },
  { key: 'talkTime', label: 'Время разговора' },
  { key: 'avgDuration', label: 'Ср. длительность' },
  { key: 'answerRate', label: 'Ответы %' },
  { key: 'missed', label: 'Пропущенные' },
];

export default function CallsWorkday() {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('totalCalls');
  const [sortDesc, setSortDesc] = useState(true);
  const [department, setDepartment] = useState<Department>('all');

  const departments = useMemo(() => {
    const set = new Set(managers.map(m => m.department));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    let list = managers.filter(m => {
      const matchSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.department.toLowerCase().includes(search.toLowerCase());
      const matchDept = department === 'all' || m.department === department;
      return matchSearch && matchDept;
    });

    list = [...list].sort((a, b) => {
      const diff = a[sortKey] - b[sortKey];
      return sortDesc ? -diff : diff;
    });

    return list;
  }, [search, sortKey, sortDesc, department]);

  const totals = useMemo(() => {
    const total = managers.reduce(
      (acc, m) => ({
        calls: acc.calls + m.totalCalls,
        missed: acc.missed + m.missed,
        talkTime: acc.talkTime + m.talkTime,
      }),
      { calls: 0, missed: 0, talkTime: 0 }
    );
    const best = managers.reduce((a, b) => (a.totalCalls > b.totalCalls ? a : b));
    return { ...total, best };
  }, []);

  function handleSort(key: SortKey) {
    if (key === sortKey) setSortDesc(!sortDesc);
    else {
      setSortKey(key);
      setSortDesc(true);
    }
  }

  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          label="Всего звонков"
          value={totals.calls.toString()}
          sub="за сегодня"
          icon="📞"
          color="#3A7A62"
          delay={0}
        />
        <KpiCard
          label="Время разговора"
          value={`${Math.round(totals.talkTime / 60)}ч ${totals.talkTime % 60}м`}
          sub="суммарно"
          icon="🕐"
          color="#4264A0"
          delay={0.08}
        />
        <KpiCard
          label="Пропущенные"
          value={totals.missed.toString()}
          sub={`${Math.round((totals.missed / totals.calls) * 100)}% от общего`}
          icon="⚠️"
          color="#EF4444"
          delay={0.14}
        />
        <KpiCard
          label="Лучший менеджер"
          value={totals.best.name.split(' ')[0]}
          sub={`${totals.best.totalCalls} звонков`}
          icon="🏆"
          color="#E07B42"
          delay={0.2}
        />
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.25 }}
        className="bg-white rounded-xl border border-divider p-4 flex flex-wrap gap-3 items-center shadow-card"
      >
        {/* Search */}
        <div className="relative flex-1 min-w-[180px]">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Поиск менеджера..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-divider rounded-lg bg-bg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
          />
        </div>

        {/* Department filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setDepartment('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              department === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-bg text-text-secondary hover:bg-bg-gradient'
            }`}
          >
            Все отделы
          </button>
          {departments.map(d => (
            <button
              key={d}
              onClick={() => setDepartment(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                department === d
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-bg text-text-secondary hover:bg-bg-gradient'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-text-muted shrink-0">Сортировка:</span>
          <select
            value={sortKey}
            onChange={e => setSortKey(e.target.value as SortKey)}
            className="text-xs border border-divider rounded-lg px-2 py-2 bg-bg text-text focus:outline-none focus:border-primary/50 cursor-pointer"
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setSortDesc(!sortDesc)}
            className="w-8 h-8 rounded-lg border border-divider bg-bg flex items-center justify-center text-text-secondary hover:bg-bg-gradient hover:border-primary/30 transition-all"
            title={sortDesc ? 'По убыванию' : 'По возрастанию'}
          >
            <motion.svg
              animate={{ rotate: sortDesc ? 0 : 180 }}
              transition={{ duration: 0.2 }}
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </motion.svg>
          </button>
        </div>
      </motion.div>

      {/* Column headers */}
      <div className="px-5 flex items-center gap-4 text-xs text-text-muted font-medium uppercase tracking-wider">
        <span className="w-5 text-center">#</span>
        <span className="w-10" />
        <span className="w-36 shrink-0">Менеджер</span>
        <span className="flex-1 hidden md:block">Структура звонков</span>
        <div className="flex gap-6 shrink-0 items-center">
          {SORT_OPTIONS.slice(0, 4).map(o => (
            <button
              key={o.key}
              onClick={() => handleSort(o.key)}
              className={`hidden lg:flex items-center gap-1 transition-colors hover:text-primary ${
                sortKey === o.key ? 'text-primary' : ''
              }`}
            >
              {o.label}
              {sortKey === o.key && (
                <svg
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                  style={{ transform: sortDesc ? 'none' : 'rotate(180deg)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          ))}
        </div>
        <span className="w-7" />
      </div>

      {/* Manager rows */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-text-secondary"
          >
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-medium">Менеджеры не найдены</p>
            <p className="text-sm mt-1">Попробуйте изменить фильтры</p>
          </motion.div>
        ) : (
          filtered.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ManagerRow manager={m} rank={i + 1} />
            </motion.div>
          ))
        )}
      </div>

      {filtered.length > 0 && (
        <p className="text-xs text-text-muted text-center pb-2">
          Показано {filtered.length} из {managers.length} менеджеров
        </p>
      )}
    </div>
  );
}
