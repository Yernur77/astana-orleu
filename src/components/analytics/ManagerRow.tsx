'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Manager, fmtDuration, fmtHour } from '@/data/analytics';

interface Props {
  manager: Manager;
  rank: number;
}

function CallBar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <div className="h-1.5 bg-divider rounded-full overflow-hidden flex-1">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  );
}

function HourlyChart({ data, managerColor }: { data: Manager['hourlyData']; managerColor: string }) {
  const maxTotal = Math.max(...data.map(d => d.incoming + d.outgoing + d.missed));
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
        Распределение по часам
      </p>
      <div className="flex items-end gap-1.5 h-28">
        {data.map((d) => {
          const total = d.incoming + d.outgoing + d.missed;
          const heightPct = maxTotal > 0 ? (total / maxTotal) * 100 : 0;
          const isHov = hovered === d.hour;
          return (
            <div
              key={d.hour}
              className="flex-1 flex flex-col items-center gap-1 cursor-pointer group"
              onMouseEnter={() => setHovered(d.hour)}
              onMouseLeave={() => setHovered(null)}
            >
              {isHov && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -mt-16 bg-text text-white text-xs rounded-lg px-2 py-1.5 whitespace-nowrap shadow-lg z-10 pointer-events-none"
                  style={{ transform: 'translateY(-100%)' }}
                >
                  <div className="font-semibold">{fmtHour(d.hour)}</div>
                  <div className="flex gap-2 mt-0.5">
                    <span className="text-green-300">↓{d.incoming}</span>
                    <span className="text-blue-300">↑{d.outgoing}</span>
                    <span className="text-red-300">✗{d.missed}</span>
                  </div>
                  <div className="text-text-muted mt-0.5">~{fmtDuration(d.avgDuration)}</div>
                </motion.div>
              )}
              <div className="w-full relative flex flex-col justify-end" style={{ height: '96px' }}>
                <motion.div
                  className="w-full rounded-t-sm overflow-hidden flex flex-col-reverse gap-px"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: (d.hour - 8) * 0.04, ease: 'easeOut' }}
                  style={{
                    transformOrigin: 'bottom',
                    height: `${Math.max(heightPct, 4)}%`,
                  }}
                >
                  <div
                    className="w-full transition-all"
                    style={{
                      flex: d.incoming,
                      background: managerColor,
                      opacity: isHov ? 1 : 0.85,
                    }}
                  />
                  <div
                    className="w-full transition-all"
                    style={{
                      flex: d.outgoing,
                      background: '#4264A0',
                      opacity: isHov ? 1 : 0.75,
                    }}
                  />
                  {d.missed > 0 && (
                    <div
                      className="w-full transition-all"
                      style={{
                        flex: d.missed,
                        background: '#EF4444',
                        opacity: isHov ? 1 : 0.7,
                      }}
                    />
                  )}
                </motion.div>
              </div>
              <span className={`text-[9px] font-medium transition-colors ${isHov ? 'text-text' : 'text-text-muted'}`}>
                {d.hour}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 pt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: managerColor }} />
          <span className="text-xs text-text-secondary">Входящие</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-secondary" />
          <span className="text-xs text-text-secondary">Исходящие</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />
          <span className="text-xs text-text-secondary">Пропущенные</span>
        </div>
      </div>
    </div>
  );
}

function PeakHour({ data }: { data: Manager['hourlyData'] }) {
  const peak = data.reduce((a, b) =>
    a.incoming + a.outgoing > b.incoming + b.outgoing ? a : b
  );
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-base">⚡</div>
      <div>
        <p className="text-xs text-text-secondary">Пик активности</p>
        <p className="text-sm font-semibold text-text">{fmtHour(peak.hour)}</p>
      </div>
    </div>
  );
}

export default function ManagerRow({ manager, rank }: Props) {
  const [open, setOpen] = useState(false);
  const maxCalls = manager.totalCalls;

  const quietHours = manager.hourlyData.filter(
    d => d.incoming + d.outgoing + d.missed === 0
  ).length;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${
        open
          ? 'border-primary/20 shadow-card-hover bg-white'
          : 'border-divider bg-white hover:border-primary/20 hover:shadow-card'
      }`}
    >
      {/* Main row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center gap-4 group"
      >
        {/* Rank */}
        <span className="text-xs font-bold text-text-muted w-5 shrink-0 text-center">
          {rank}
        </span>

        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
          style={{ background: manager.color }}
        >
          {manager.initials}
        </div>

        {/* Name + dept */}
        <div className="min-w-0 w-36 shrink-0">
          <p className="text-sm font-semibold text-text truncate">{manager.name}</p>
          <p className="text-xs text-text-secondary truncate">{manager.department}</p>
        </div>

        {/* Call stats bars */}
        <div className="flex-1 hidden md:flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted w-20 shrink-0">Входящие {manager.incoming}</span>
            <CallBar value={manager.incoming} max={maxCalls} color={manager.color} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted w-20 shrink-0">Исходящие {manager.outgoing}</span>
            <CallBar value={manager.outgoing} max={maxCalls} color="#4264A0" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted w-20 shrink-0">Пропущ. {manager.missed}</span>
            <CallBar value={manager.missed} max={maxCalls} color="#EF4444" />
          </div>
        </div>

        {/* KPIs */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="text-right hidden lg:block">
            <p className="text-lg font-bold text-text">{manager.totalCalls}</p>
            <p className="text-xs text-text-secondary">звонков</p>
          </div>
          <div className="text-right hidden lg:block">
            <p className="text-sm font-semibold text-text">{fmtDuration(manager.avgDuration)}</p>
            <p className="text-xs text-text-secondary">ср. длит.</p>
          </div>
          <div className="text-right hidden xl:block">
            <p className="text-sm font-semibold text-text">{manager.talkTime}м</p>
            <p className="text-xs text-text-secondary">разговор</p>
          </div>
          <div className="text-right">
            <p
              className="text-sm font-bold"
              style={{ color: manager.answerRate >= 90 ? '#3A7A62' : '#E07B42' }}
            >
              {manager.answerRate}%
            </p>
            <p className="text-xs text-text-secondary">ответы</p>
          </div>
        </div>

        {/* Expand chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 ml-2 w-7 h-7 rounded-full flex items-center justify-center bg-bg-gradient text-text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors"
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Expanded detail */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-divider pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Hourly chart — takes 2 cols */}
                <div className="lg:col-span-2 relative">
                  <HourlyChart data={manager.hourlyData} managerColor={manager.color} />
                </div>

                {/* Stats panel */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Детали за день
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-bg-gradient rounded-lg p-3">
                      <p className="text-xs text-text-secondary">Входящие</p>
                      <p className="text-xl font-bold" style={{ color: manager.color }}>
                        {manager.incoming}
                      </p>
                    </div>
                    <div className="bg-bg-gradient rounded-lg p-3">
                      <p className="text-xs text-text-secondary">Исходящие</p>
                      <p className="text-xl font-bold text-secondary">{manager.outgoing}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-xs text-text-secondary">Пропущенные</p>
                      <p className="text-xl font-bold text-red-500">{manager.missed}</p>
                    </div>
                    <div className="bg-bg-gradient rounded-lg p-3">
                      <p className="text-xs text-text-secondary">Ответы</p>
                      <p
                        className="text-xl font-bold"
                        style={{ color: manager.answerRate >= 90 ? '#3A7A62' : '#E07B42' }}
                      >
                        {manager.answerRate}%
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-1">
                    <div className="flex justify-between items-center py-2 border-b border-divider">
                      <span className="text-xs text-text-secondary">Среднее время</span>
                      <span className="text-sm font-semibold text-text">{fmtDuration(manager.avgDuration)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-divider">
                      <span className="text-xs text-text-secondary">Время разговора</span>
                      <span className="text-sm font-semibold text-text">{manager.talkTime} мин</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-xs text-text-secondary">Тихих часов</span>
                      <span className="text-sm font-semibold text-text">{quietHours}</span>
                    </div>
                  </div>

                  <PeakHour data={manager.hourlyData} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
