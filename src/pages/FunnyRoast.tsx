



import React from 'react';
import { PageShell } from '../components/PageShell';
import { SectionTitle } from '../components/SectionTitle';
import { RoastCard } from '../components/RoastCard';
import { ROASTS } from '../data/story';

export function FunnyRoast() {
  return (
    <PageShell particleDensity={45} className="!justify-start">
      <div className="mx-auto w-full max-w-5xl">
        <SectionTitle
          eyebrow="Chapter IV"
          title="The Loving Roast"
          subtitle="Tap each card. It's all love… mostly. 😏" />
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROASTS.map((r, i) =>
          <RoastCard key={i} front={r.front} back={r.back} index={i} />
          )}
        </div>
      </div>
    </PageShell>);

}