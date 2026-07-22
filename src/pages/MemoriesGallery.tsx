


import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { SectionTitle } from '../components/SectionTitle';
import { MemoryCard } from '../components/MemoryCard';
import { MEMORY_GROUPS } from '../data/story';

export function MemoriesGallery() {
  return (
    <PageShell particleDensity={45} className="!justify-start">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle eyebrow="Chapter III" title="Memories" subtitle="A gallery of the moments that made us, us." />

        <div className="space-y-16">
          {MEMORY_GROUPS.map((group) =>
          <section key={group.id}>
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-baseline gap-4">
              
                <h3 className="font-display text-2xl text-gold-light md:text-3xl">{group.label}</h3>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              </motion.div>
              <p className="mb-6 text-sm font-light italic text-gold-light/50">{group.caption}</p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {group.photos.map((photo, i) =>
              <MemoryCard key={i} src={photo.src} caption={photo.caption} index={i} />
              )}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageShell>);

}