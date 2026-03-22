'use client';

import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

/**
 * Remotion animation: Astana Orleu logo circles animate into view
 * Uses spring() for physical bounce, interpolate() for opacity/scale
 */
export const LogoAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Green circle — comes in from left with spring
  const greenScale = spring({ frame, fps, config: { damping: 14, stiffness: 120 }, from: 0, to: 1 });
  const greenX = interpolate(frame, [0, 30], [-80, 0], { extrapolateRight: 'clamp' });

  // Blue circle — comes in from right, delayed
  const blueScale = spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 14, stiffness: 120 }, from: 0, to: 1 });
  const blueX = interpolate(frame, [10, 40], [80, 0], { extrapolateRight: 'clamp' });

  // Text fade in
  const textOpacity = interpolate(frame, [30, 55], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const textY = interpolate(frame, [30, 55], [20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Overlap region opacity
  const overlapOpacity = interpolate(frame, [20, 45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #EAF5F0 0%, #E8EFF8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* SVG Logo Animation */}
      <svg
        width="240"
        height="160"
        viewBox="0 0 240 160"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="la-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A7A62" />
            <stop offset="50%" stopColor="#4A9362" />
            <stop offset="100%" stopColor="#5AAD62" />
          </linearGradient>
          <linearGradient id="la-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4C568F" />
            <stop offset="100%" stopColor="#42B3E0" />
          </linearGradient>
          <linearGradient id="la-overlay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36745C" />
            <stop offset="60%" stopColor="#449171" />
            <stop offset="100%" stopColor="#52AE87" />
          </linearGradient>
        </defs>

        {/* Green circle */}
        <g transform={`translate(${greenX}, 0) scale(${greenScale})`} style={{ transformOrigin: '85px 80px' }}>
          <circle cx="85" cy="80" r="68" fill="url(#la-green)" />
        </g>

        {/* Blue circle */}
        <g transform={`translate(${blueX}, 0) scale(${blueScale})`} style={{ transformOrigin: '155px 80px' }}>
          <circle cx="155" cy="80" r="58" fill="url(#la-blue)" />
        </g>

        {/* Overlap */}
        <g opacity={overlapOpacity}>
          <path
            d="M120 18C138 28 150 52 150 80C150 108 138 132 120 142C102 132 90 108 90 80C90 52 102 28 120 18Z"
            fill="url(#la-overlay)"
          />
        </g>

        {/* Vertical line */}
        <line
          x1="120" y1="14" x2="120" y2="146"
          stroke="#1A2B25"
          strokeWidth="1.5"
          opacity={overlapOpacity * 0.3}
        />
      </svg>

      {/* Text */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
          fontSize: 42,
          fontWeight: 600,
          color: '#1A2B25',
          letterSpacing: '-0.5px',
          marginTop: 24,
        }}
      >
        astana <span style={{ color: '#3A7A62' }}>orleu</span>
      </div>
    </AbsoluteFill>
  );
};
