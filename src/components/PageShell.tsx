


import React from 'react';
import { motion } from 'framer-motion';
import { GoldParticles } from './GoldParticles';
import { SparkleField } from './Sparkle';

interface PageShellProps {
  children: React.ReactNode;
  particleDensity?: number;
  showSparkles?: boolean;
  className?: string;
}

/**
 * Consistent full-screen luxe stage every page sits on:
 * black base, radial gold vignette, particle field + optional sparkles.
 */
export function PageShell({
  children,
  particleDensity = 60,
  showSparkles = true,
  className = ''
}: PageShellProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* radial gold vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
          'radial-gradient(circle at 50% 35%, rgba(212,175,55,0.10), rgba(0,0,0,0) 55%), radial-gradient(circle at 50% 120%, rgba(166,124,26,0.18), rgba(0,0,0,0) 60%)'
        }} />
      
      <GoldParticles density={particleDensity} />
      {showSparkles && <SparkleField count={20} />}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-5 py-24 sm:px-8 ${className}`}>
        
        {children}
      </motion.main>
    </div>);

}