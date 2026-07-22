
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center md:mb-14">
      {eyebrow &&
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold/70">
        
          {eyebrow}
        </motion.p>
      }
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl font-light leading-tight text-gold-gradient animate-shimmer md:text-6xl">
        
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mx-auto mt-6 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {subtitle &&
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-gold-light/60 md:text-base">
        
          {subtitle}
        </motion.p>
      }
    </div>);

}