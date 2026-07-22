




import React, { useEffect, useRef } from 'react';

type Spark = {x: number;y: number;vx: number;vy: number;life: number;max: number;hue: number;};

/**
 * Gold fireworks bursts on a transparent canvas overlay.
 */
export function Fireworks() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let sparks: Spark[] = [];
    let raf = 0;
    let last = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const burst = () => {
      const cx = width * (0.2 + Math.random() * 0.6);
      const cy = height * (0.15 + Math.random() * 0.4);
      const n = 60 + Math.floor(Math.random() * 40);
      const hue = 40 + Math.random() * 15;
      for (let i = 0; i < n; i++) {
        const angle = Math.PI * 2 * i / n;
        const speed = Math.random() * 3.5 + 1.5;
        sparks.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          max: Math.random() * 60 + 50,
          hue
        });
      }
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (t - last > 900) {
        burst();
        last = t;
      }
      sparks = sparks.filter((s) => s.life < s.max);
      for (const s of sparks) {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.03;
        s.vx *= 0.99;
        const a = 1 - s.life / s.max;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, ${60 + a * 20}%, ${a})`;
        ctx.arc(s.x, s.y, 2.2 * a + 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    burst();
    raf = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}