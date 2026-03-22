'use client';

import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: '+', label: 'лет на рынке' },
  { value: 28000, suffix: '+', label: 'слушателей' },
  { value: 16, suffix: '', label: 'регионов' },
];

/**
 * Remotion animation: Stats count up with spring bounce
 * Each stat animates in sequence with a stagger delay
 */
const SingleStat: React.FC<{ stat: StatItem; delay: number }> = ({ stat, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 18, stiffness: 80 },
    from: 0,
    to: 1,
  });

  const countedValue = Math.round(interpolate(progress, [0, 1], [0, stat.value]));

  const slideY = interpolate(Math.max(0, frame - delay), [0, 20], [40, 0], {
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(Math.max(0, frame - delay), [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const formatted =
    stat.value >= 1000
      ? `${Math.floor(countedValue / 1000)} ${String(countedValue % 1000).padStart(3, '0')}`
      : String(countedValue);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${slideY}px)`,
        textAlign: 'center',
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
          fontSize: 64,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #3A7A62, #42B3E0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: 12,
        }}
      >
        {formatted}
        {stat.suffix}
      </div>
      <div
        style={{
          fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
          fontSize: 18,
          color: '#567068',
          fontWeight: 400,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

export const StatsCounter: React.FC = () => {
  const frame = useCurrentFrame();

  // Background fade in
  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  // Divider line grow
  const dividerWidth = interpolate(frame, [5, 35], [0, 100], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: '#F7FBFA',
        opacity: bgOpacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
      }}
    >
      {/* Top label */}
      <div
        style={{
          fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
          fontSize: 11,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#3A7A62',
          fontWeight: 600,
          marginBottom: 48,
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' }),
        }}
      >
        Astana Orleu в цифрах
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          gap: 0,
          width: '100%',
          maxWidth: 900,
          position: 'relative',
        }}
      >
        {stats.map((stat, i) => (
          <SingleStat key={i} stat={stat} delay={i * 15} />
        ))}
      </div>

      {/* Bottom divider growing */}
      <div
        style={{
          height: 2,
          width: `${dividerWidth}%`,
          maxWidth: 600,
          background: 'linear-gradient(90deg, #3A7A62, #42B3E0)',
          borderRadius: 2,
          marginTop: 48,
        }}
      />
    </AbsoluteFill>
  );
};
