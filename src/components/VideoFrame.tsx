import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlayIcon, PauseIcon } from "lucide-react";
import type { VideoItem } from "../data/story";

interface VideoFrameProps {
  video: VideoItem;
  index: number;
}

export function VideoFrame({ video, index }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState<string>();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const hasVideo = Boolean(video.src);

  const getPreferredWidth = () => {
    try {
      const connection = (navigator as any).connection;

      switch (connection?.effectiveType) {
        case "slow-2g":
        case "2g":
          return 360;

        case "3g":
          return 480;

        case "4g":
        default:
          return 720;
      }
    } catch {
      return 720;
    }
  };

  const optimizeCloudinaryUrl = (src: string | undefined, width: number) => {
    if (!src) return src;

    if (!src.includes("res.cloudinary.com")) {
      return src;
    }

    return src.replace(
      "/upload/",
      `/upload/f_auto,q_auto:eco,vc_auto,c_limit,w_${width}/`,
    );
  };

  useEffect(() => {
    if (!video.src) return;

    const width = getPreferredWidth();
    setOptimizedSrc(optimizeCloudinaryUrl(video.src, width));
  }, [video.src]);

  const toggle = async () => {
    if (!videoRef.current) return;

    const el = videoRef.current;

    try {
      if (el.paused) {
        if (!videoLoaded) {
          el.load();
          setVideoLoaded(true);
        }

        await el.play();
        setPlaying(true);
      } else {
        el.pause();
        setPlaying(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-full"
    >
      <div className="relative rounded-2xl bg-gradient-to-b from-gold via-gold-deep to-gold p-[2px] shadow-gold-lg">
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <div className="relative aspect-video">
            {hasVideo ? (
              <video
                ref={videoRef}
                poster={video.poster}
                src={optimizedSrc}
                className="h-full w-full object-cover"
                playsInline
                preload="none"
                controls={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onError={() => console.error("Video failed to load")}
              />
            ) : (
              <img
                src={video.poster}
                alt={video.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {hasVideo && (
              <button
                onClick={toggle}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-black/50 text-gold-light shadow-gold backdrop-blur-sm"
                >
                  {playing ? (
                    <PauseIcon size={26} />
                  ) : (
                    <PlayIcon size={26} className="ml-1" />
                  )}
                </motion.span>
              </button>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
            <p className="font-display text-lg text-gold-light">
              {video.title}
            </p>

            {!hasVideo && (
              <span className="rounded-full border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold/60">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
