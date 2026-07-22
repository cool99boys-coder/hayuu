


import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { GlowButton } from '../components/GlowButton';
import { OPENING } from '../data/story';

interface Props {
  onStart: () => void;
}

export function MysteryOpening({ onStart }: Props) {
  const words = OPENING.teaser.split(' ');

  return (
    <PageShell particleDensity={90} showSparkles>
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-8 text-xs uppercase tracking-[0.5em] text-gold/60">
          
          {OPENING.hint}
        </motion.p>

        <h1 className="font-display text-4xl font-light leading-[1.2] text-gold-gradient animate-shimmer sm:text-6xl md:text-7xl">
          {words.map((w, i) =>
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.8 + i * 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mr-3 inline-block">
            
              {w}
            </motion.span>
          )}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + words.length * 0.28 + 0.4, duration: 0.9 }}
          className="mt-14">
          
          <GlowButton onClick={onStart}>{OPENING.button}</GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3, duration: 2.5, repeat: Infinity }}
          className="mt-10 text-xs tracking-widest text-gold/40">
          
          ✦
        </motion.div>
      </div>
    </PageShell>);

}