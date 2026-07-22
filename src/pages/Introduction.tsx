


import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { FRIEND_NAME, INTRO } from '../data/story';

export function Introduction() {
  return (
    <PageShell particleDensity={55}>
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-gold/60">
          
          {INTRO.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl font-medium text-gold-gradient animate-shimmer sm:text-8xl md:text-9xl">
          
          {FRIEND_NAME}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-gold-light/70 md:text-lg">
          
          {INTRO.message}
        </motion.p>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {INTRO.hints.map((h, i) =>
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gold/20 bg-black/40 p-6 text-left shadow-gold backdrop-blur-sm">
            
              <motion.span
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              className="mb-3 inline-block text-3xl">
              
                {h.emoji}
              </motion.span>
              <h3 className="font-display text-xl text-gold-light">{h.title}</h3>
              <p className="mt-1 text-sm font-light leading-relaxed text-gold-light/60">{h.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </PageShell>);

}