


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { useChime } from '../hooks/useChime';

interface RoastCardProps {
  front: string;
  back: string;
  index: number;
}

export function RoastCard({ front, back, index }: RoastCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { sparkle } = useChime();

  const toggle = () => {
    setFlipped((f) => !f);
    sparkle();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-56 [perspective:1200px]">
      
      <button
        onClick={toggle}
        aria-label={`${front}. Tap to reveal.`}
        className="relative h-full w-full cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold">
        
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          
          {/* front */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-b from-black to-[#120d02] p-6 text-center shadow-gold [backface-visibility:hidden]">
            <SparklesIcon className="mb-3 text-gold" size={26} />
            <p className="font-display text-2xl leading-tight text-gold-light">{front}</p>
            <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gold/50">Tap to reveal</span>
          </div>
          {/* back */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-gold bg-gradient-to-b from-[#1a1305] to-black p-6 text-center shadow-gold-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="font-display text-xl leading-snug text-gold-glow">{back}</p>
          </div>
        </motion.div>
      </button>
    </motion.div>);

}