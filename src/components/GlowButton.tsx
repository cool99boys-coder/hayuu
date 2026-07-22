

import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export function GlowButton({ children, onClick, className = '', ariaLabel }: GlowButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-black/40 px-9 py-4 font-display text-lg tracking-wide text-gold-light shadow-gold backdrop-blur-sm transition-colors hover:border-gold ${className}`}>
      
      {/* rotating glow ring */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-full opacity-60 blur-md"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(212,175,55,0.8), transparent 40%)'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
      
      {/* sweeping shine */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </motion.button>);

}