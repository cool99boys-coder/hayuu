

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MysteryOpening } from './pages/MysteryOpening';
import { Introduction } from './pages/Introduction';
import { MemoriesGallery } from './pages/MemoriesGallery';
import { FunnyRoast } from './pages/FunnyRoast';
import { VideoSurprise } from './pages/VideoSurprise';
import { Appreciation } from './pages/Appreciation';
import { FinalSurprise } from './pages/FinalSurprise';
import { StoryNav } from './components/StoryNav';

const PAGE_LABELS = [
'The Opening',
'Introduction',
'Memories',
'The Roast',
'Video Surprise',
'Appreciation',
'The Finale'];


export function App() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = PAGE_LABELS.length;

  const go = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(total - 1, next));
      setDirection(target >= page ? 1 : -1);
      setPage(target);
    },
    [page, total]
  );

  const next = useCallback(() => go(page + 1), [go, page]);
  const prev = useCallback(() => go(page - 1), [go, page]);

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const renderPage = () => {
    switch (page) {
      case 0:
        return <MysteryOpening onStart={next} />;
      case 1:
        return <Introduction />;
      case 2:
        return <MemoriesGallery />;
      case 3:
        return <FunnyRoast />;
      case 4:
        return <VideoSurprise />;
      case 5:
        return <Appreciation />;
      case 6:
        return <FinalSurprise onReplay={() => go(0)} />;
      default:
        return null;
    }
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 0.98, x: dir > 0 ? -60 : 60 })
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      {page > 0 &&
      <StoryNav
        total={total}
        current={page}
        onGo={go}
        onPrev={prev}
        onNext={next}
        labels={PAGE_LABELS} />

      }

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>);

}