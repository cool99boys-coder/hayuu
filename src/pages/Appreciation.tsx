



import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { SectionTitle } from '../components/SectionTitle';
import { APPRECIATION } from '../data/story';

export function Appreciation() {
  return (
    <PageShell particleDensity={55}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle eyebrow="Chapter VI" title={APPRECIATION.heading} />
        <div className="space-y-6">
          {APPRECIATION.lines.map((line, i) =>
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl font-light leading-relaxed text-gold-light/90 md:text-3xl">
            
              {line}
            </motion.p>
          )}
        </div>
      </div>
    </PageShell>);

}