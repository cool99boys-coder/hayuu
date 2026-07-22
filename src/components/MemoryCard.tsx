


import React from 'react';
import { motion } from 'framer-motion';

interface MemoryCardProps {
  src: string;
  caption: string;
  index: number;
}

export function MemoryCard({ src, caption, index }: MemoryCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-black/40 shadow-gold">
      
      {/* gold corner frame */}
      <span className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-gold/70" />
      <span className="pointer-events-none absolute bottom-3 right-3 z-20 h-5 w-5 border-b border-r border-gold/70" />

      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-lg text-gold-light">{caption}</p>
      </figcaption>

      {/* shine on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-glow/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </motion.figure>);

}