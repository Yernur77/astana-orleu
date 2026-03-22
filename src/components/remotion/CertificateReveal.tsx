'use client';

import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

/**
 * Remotion animation: Premium certificate slides and scales into view
 * with a shimmer highlight effect
 */
export const CertificateReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Card spring in
  const cardScale = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 100 },
    from: 0.75,
    to: 1,
  });

  const cardOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const cardY = interpolate(frame, [0, 30], [60, 0], { extrapolateRight: 'clamp' });

  // Shimmer sweep across the certificate (frame 40-70)
  const shimmerX = interpolate(frame, [40, 70], [-100, 200], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const shimmerOpacity = interpolate(frame, [40, 45, 65, 70], [0, 0.6, 0.6, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Badge pop in
  const badgeScale = spring({
    frame: Math.max(0, frame - 50),
    fps,
    config: { damping: 10, stiffness: 200 },
    from: 0,
    to: 1,
  });

  // Text elements fade in staggered
  const line1Opacity = interpolate(frame, [15, 35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const line2Opacity = interpolate(frame, [25, 45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const line3Opacity = interpolate(frame, [35, 55], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #EAF5F0 0%, #E8EFF8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Certificate Card */}
      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale}) translateY(${cardY}px)`,
          width: 680,
          background: 'white',
          borderRadius: 20,
          padding: '52px 60px',
          boxShadow: '0 24px 80px rgba(58,122,98,0.18)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid #D8EAE5',
        }}
      >
        {/* Gradient border top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #3A7A62, #4264A0, #42B3E0)',
          }}
        />

        {/* Shimmer overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `${shimmerX}%`,
            width: '40%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            opacity: shimmerOpacity,
            pointerEvents: 'none',
          }}
        />

        {/* Logo top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, opacity: line1Opacity }}>
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="cr-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A7A62" />
                <stop offset="100%" stopColor="#5AAD62" />
              </linearGradient>
              <linearGradient id="cr-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4C568F" />
                <stop offset="100%" stopColor="#42B3E0" />
              </linearGradient>
            </defs>
            <circle cx="16" cy="20" r="14" fill="url(#cr-green)" />
            <circle cx="26" cy="20" r="12" fill="url(#cr-blue)" />
            <path d="M21 8.5C24.5 10.5 27 14.8 27 20C27 25.2 24.5 29.5 21 31.5C17.5 29.5 15 25.2 15 20C15 14.8 17.5 10.5 21 8.5Z" fill="#449171" opacity="0.9" />
          </svg>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 18, fontWeight: 600, color: '#1A2B25' }}>
            Astana <span style={{ color: '#3A7A62' }}>Orleu</span>
          </span>
        </div>

        {/* Certificate title */}
        <div style={{ opacity: line1Opacity }}>
          <div style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#3A7A62', fontWeight: 600, fontFamily: 'sans-serif', marginBottom: 16 }}>
            Сертификат участника
          </div>
        </div>

        {/* Recipient line */}
        <div style={{ opacity: line2Opacity, marginBottom: 12 }}>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 13, color: '#567068', marginBottom: 6 }}>Настоящим подтверждается, что</div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 400, color: '#1A2B25', fontStyle: 'italic', letterSpacing: '0.5px' }}>
            Иванов Иван Иванович
          </div>
          <div style={{ height: 1, background: '#D8EAE5', marginTop: 10 }} />
        </div>

        {/* Course info */}
        <div style={{ opacity: line3Opacity, marginTop: 20 }}>
          <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#567068', marginBottom: 8 }}>успешно прошёл(а) курс</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 20, fontWeight: 600, color: '#3A7A62', lineHeight: 1.3 }}>
            Государственные закупки<br />по Закону РК №434
          </div>
          <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#567068', marginTop: 12 }}>
            16–17 апреля 2026 г. · г. Астана
          </div>
        </div>

        {/* Verified badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 50,
            transform: `scale(${badgeScale})`,
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3A7A62, #5AAD62)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(58,122,98,0.3)',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
