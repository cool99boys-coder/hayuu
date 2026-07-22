
import React from 'react';
import { motion } from 'framer-motion';

interface SparkleFieldProps {
  count?: number;
  className?: string;
}

/**
 * Decorative twinkling sparkle dots layered over a section.
 */
export function SparkleField({ count = 24, className = '' }: SparkleFieldProps) {
  const sparkles = React.useMemo(
    () =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 1.5
    })),
    [count]
  );

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {sparkles.map((s) =>
      <motion.span
        key={s.id}
        className="absolute rounded-full bg-gold-glow"
        style={{
          top: `${s.top}%`,
          left: `${s.left}%`,
          width: s.size,
          height: s.size,
          boxShadow: '0 0 6px 1px rgba(245, 226, 154, 0.8)'
        }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
        transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }} />

      )}
    </div>);

}