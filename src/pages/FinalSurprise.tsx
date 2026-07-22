




import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { Fireworks } from '../components/Fireworks';
import { GlowButton } from '../components/GlowButton';
import { FINALE } from '../data/story';

interface Props {
  onReplay: () => void;
}

export function FinalSurprise({ onReplay }: Props) {
  return (
    <PageShell particleDensity={80}>
      <Fireworks />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center">
          
          <HeartIcon className="text-gold" size={44} fill="currentColor" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-light leading-tight text-gold-gradient animate-shimmer sm:text-6xl">
          
          {FINALE.message} <span className="text-red-400">❤️</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-gold-light/70 md:text-lg">
          
          {FINALE.closing}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10">
          
          <p className="font-display text-lg text-gold-light/60">{FINALE.signoff}</p>
          <p className="font-display text-2xl text-gold-gradient animate-shimmer">{FINALE.signature}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12">
          
          <GlowButton onClick={onReplay} ariaLabel="Watch again">
            Watch Again ✦
          </GlowButton>
        </motion.div>
      </div>
    </PageShell>);

}