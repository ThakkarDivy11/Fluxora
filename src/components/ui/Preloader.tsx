'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Deterministic particle data to prevent SSR/hydration mismatch
const PARTICLES = [
  { x: '12%', y: '25%', opacity: 0.35, scale: 0.6, delay: 0.2, duration: 12 },
  { x: '45%', y: '60%', opacity: 0.25, scale: 0.8, delay: 0.8, duration: 15 },
  { x: '78%', y: '15%', opacity: 0.4, scale: 0.5, delay: 1.2, duration: 11 },
  { x: '23%', y: '80%', opacity: 0.2, scale: 0.7, delay: 0.4, duration: 14 },
  { x: '88%', y: '45%', opacity: 0.3, scale: 0.9, delay: 1.6, duration: 16 },
  { x: '34%', y: '10%', opacity: 0.45, scale: 0.4, delay: 0.1, duration: 10 },
  { x: '65%', y: '75%', opacity: 0.15, scale: 0.65, delay: 2.0, duration: 13 },
  { x: '15%', y: '50%', opacity: 0.3, scale: 0.75, delay: 0.6, duration: 12 },
  { x: '92%', y: '85%', opacity: 0.25, scale: 0.55, delay: 1.4, duration: 17 },
  { x: '50%', y: '35%', opacity: 0.4, scale: 0.85, delay: 0.9, duration: 11 },
  { x: '28%', y: '90%', opacity: 0.2, scale: 0.45, delay: 1.8, duration: 15 },
  { x: '72%', y: '30%', opacity: 0.35, scale: 0.6, delay: 0.5, duration: 13 },
  { x: '08%', y: '70%', opacity: 0.3, scale: 0.7, delay: 1.1, duration: 14 },
  { x: '82%', y: '65%', opacity: 0.25, scale: 0.8, delay: 1.7, duration: 12 },
  { x: '40%', y: '20%', opacity: 0.45, scale: 0.5, delay: 0.3, duration: 10 },
  { x: '58%', y: '82%', opacity: 0.15, scale: 0.9, delay: 1.9, duration: 16 },
  { x: '95%', y: '12%', opacity: 0.35, scale: 0.6, delay: 0.7, duration: 11 },
  { x: '30%', y: '42%', opacity: 0.28, scale: 0.75, delay: 1.3, duration: 13 },
  { x: '62%', y: '55%', opacity: 0.32, scale: 0.5, delay: 1.5, duration: 15 },
  { x: '18%', y: '95%', opacity: 0.22, scale: 0.65, delay: 0.2, duration: 14 },
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-white selection:bg-purple-500 overflow-hidden"
        >
          {/* Ambient particle glow */}
          <div className="absolute inset-0 bg-aurora-mesh opacity-50 animate-pulse-glow pointer-events-none" />

          {/* Floating background particles (rendered on client only or deterministic) */}
          {isMounted && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {PARTICLES.map((particle, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: particle.x,
                    y: particle.y,
                    opacity: particle.opacity,
                    scale: particle.scale,
                  }}
                  animate={{
                    y: ['-10%', '110%'],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: particle.delay,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-flux-purple blur-[1px]"
                />
              ))}
            </div>
          )}

          <div className="relative z-10 flex flex-col items-center">
            {/* Glowing Ring with Animated Logo */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
              {/* Outer spin ring */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-flux-purple shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-b-2 border-l-2 border-flux-blue shadow-[0_0_20px_rgba(56,189,248,0.5)]"
              />

              {/* Central Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-flux-purple via-flux-blue to-flux-pink p-[2px] shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                  <div className="w-full h-full bg-[#050816] rounded-2xl flex items-center justify-center">
                    <span className="font-extrabold text-2xl md:text-3xl text-gradient-primary">
                      F
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-xl md:text-2xl font-bold tracking-widest uppercase text-gradient-primary"
            >
              Fluxora Studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
              className="text-xs md:text-sm text-flux-gray tracking-wider uppercase mt-1"
            >
              Crafting Digital Perfection
            </motion.p>

            {/* Progress Percentage */}
            <div className="mt-8 flex flex-col items-center w-64">
              <div className="w-full h-1 bg-surface-glass rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink shadow-[0_0_10px_#8B5CF6]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 font-mono text-sm tracking-wider text-flux-purple font-semibold">
                {progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
