

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface StoryNavProps {
  total: number;
  current: number;
  onGo: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  labels: string[];
}

export function StoryNav({ total, current, onGo, onPrev, onNext, labels }: StoryNavProps) {
  return (
    <>
      {/* progress dots */}
      <nav
        aria-label="Story progress"
        className="fixed left-1/2 top-5 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold/20 bg-black/50 px-3 py-2 backdrop-blur-md sm:top-6 sm:gap-3 sm:px-4">
        
        {Array.from({ length: total }).map((_, i) =>
        <button
          key={i}
          onClick={() => onGo(i)}
          aria-label={`Go to ${labels[i]}`}
          aria-current={i === current}
          className="group relative flex items-center">
          
            <span
            className={`block h-1.5 rounded-full transition-all duration-500 ${
            i === current ? 'w-6 bg-gold' : 'w-1.5 bg-gold/30 group-hover:bg-gold/60'}`
            } />
          
          </button>
        )}
      </nav>

      {/* prev / next arrows */}
      {current > 0 &&
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onPrev}
        aria-label="Previous page"
        className="fixed left-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-black/40 text-gold backdrop-blur-md transition-colors hover:border-gold hover:text-gold-light sm:left-6">
        
          <ChevronLeftIcon size={22} />
        </motion.button>
      }
      {current < total - 1 &&
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onNext}
        aria-label="Next page"
        className="fixed right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-black/40 text-gold backdrop-blur-md transition-colors hover:border-gold hover:text-gold-light sm:right-6">
        
          <ChevronRightIcon size={22} />
        </motion.button>
      }
    </>);

}