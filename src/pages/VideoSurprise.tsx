



import React from 'react';
import { PageShell } from '../components/PageShell';
import { SectionTitle } from '../components/SectionTitle';
import { VideoFrame } from '../components/VideoFrame';
import { VIDEOS } from '../data/story';

export function VideoSurprise() {
  return (
    // VideoSurprise.tsx
<PageShell particleDensity={12} showSparkles={false} className="!justify-start">
      <div className="mx-auto w-full max-w-4xl">
        <SectionTitle
          eyebrow="Chapter V"
          title="Now Showing"
          subtitle="Lights down. A few scenes from the film of our friendship." />
        
        <div className="space-y-10">
          {VIDEOS.map((v, i) =>
          <VideoFrame key={i} video={v} index={i} />
          )}
        </div>
      </div>
    </PageShell>);

}
