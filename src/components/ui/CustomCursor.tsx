'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only initialize on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, textarea, select');
      if (interactive) {
        setIsPointer(true);
        const cursorData = interactive.getAttribute('data-cursor');
        if (cursorData) {
          setCursorText(cursorData);
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      } else {
        setIsPointer(false);
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-flux-blue rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0.5 : isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Main Glow Circle & Text Overlay */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider text-white hidden md:flex"
        style={{
          background: isHovered
            ? 'radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(56,189,248,0.7) 100%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(56,189,248,0.1) 70%, transparent 100%)',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          boxShadow: isHovered
            ? '0 0 30px rgba(139, 92, 246, 0.6)'
            : '0 0 20px rgba(56, 189, 248, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 45 : isPointer ? 25 : 20),
          y: mousePosition.y - (isHovered ? 45 : isPointer ? 25 : 20),
          width: isHovered ? 90 : isPointer ? 50 : 40,
          height: isHovered ? 90 : isPointer ? 50 : 40,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] tracking-widest px-2"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
