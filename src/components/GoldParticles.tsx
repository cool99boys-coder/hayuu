
import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  alpha: number;
  tw: number;
};

interface GoldParticlesProps {
  density?: number;
  className?: string;
}

/**
 * Lightweight canvas gold particle field. Floats upward, twinkles softly.
 * DPR-aware and pauses when tab is hidden for performance.
 */
export function GoldParticles({ density = 70, className = '' }: GoldParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(width * height / 22000 + density * 0.3);
      particles = Array.from({ length: count }, () => spawn());
    };

    const spawn = (fromBottom = false): Particle => ({
      x: Math.random() * width,
      y: fromBottom ? height + Math.random() * 40 : Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vy: -(Math.random() * 0.35 + 0.08),
      vx: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      tw: Math.random() * Math.PI * 2
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.tw += 0.03;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.tw));
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(255, 240, 190, ${a})`);
        grad.addColorStop(0.4, `rgba(212, 175, 55, ${a * 0.6})`);
        grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
        if (p.y < -10) Object.assign(p, spawn(true));
      }
      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />);


}