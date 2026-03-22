'use client';

/**
 * Remotion Player wrappers — embed Remotion animations into the Next.js website.
 * Uses @remotion/player which runs in the browser without rendering to video.
 */

import { Player } from '@remotion/player';
import { LogoAnimation } from './LogoAnimation';
import { StatsCounter } from './StatsCounter';
import { CertificateReveal } from './CertificateReveal';

/** Hero logo animation — 90 frames @ 30fps = 3 seconds */
export function LogoPlayer() {
  return (
    <Player
      component={LogoAnimation}
      durationInFrames={90}
      fps={30}
      compositionWidth={480}
      compositionHeight={320}
      style={{ width: '100%', height: '100%', borderRadius: '16px' }}
      autoPlay
      loop
      controls={false}
      clickToPlay={false}
    />
  );
}

/** Stats counter animation — 120 frames @ 30fps = 4 seconds */
export function StatsPlayer({ className }: { className?: string }) {
  return (
    <Player
      component={StatsCounter}
      durationInFrames={120}
      fps={30}
      compositionWidth={1200}
      compositionHeight={300}
      style={{ width: '100%', borderRadius: '12px' }}
      className={className}
      autoPlay
      loop
      controls={false}
      clickToPlay={false}
    />
  );
}

/** Certificate reveal animation — 100 frames @ 30fps = ~3.3 seconds */
export function CertificatePlayer() {
  return (
    <Player
      component={CertificateReveal}
      durationInFrames={100}
      fps={30}
      compositionWidth={900}
      compositionHeight={520}
      style={{ width: '100%', borderRadius: '16px' }}
      autoPlay
      loop
      controls={false}
      clickToPlay={false}
    />
  );
}
