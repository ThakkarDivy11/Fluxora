'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Star, Zap } from 'lucide-react';
import HeroVisualShowcase from '../ui/HeroVisualShowcase';

interface HeroSectionProps {
  onOpenBookCall: () => void;
}

export default function HeroSection({ onOpenBookCall }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-[#050816] bg-noise">
      {/* Aurora Ambient Mesh Background */}
      <div className="absolute inset-0 bg-aurora-mesh opacity-70 pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-flux-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-flux-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-glass border border-white/10 backdrop-blur-md mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flux-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-flux-purple"></span>
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide text-flux-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                World-Class Landing Pages (₹20,000–₹50,000+)
              </span>
            </motion.div>

            {/* Massive Clamp Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-hero text-white mb-6"
            >
              Landing Pages That{' '}
              <span className="text-gradient-primary relative inline-block">
                Sell Before
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-flux-purple/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              They Scroll.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-body-lg mb-8 max-w-2xl"
            >
              We craft bespoke, ultra-high-converting digital experiences for SaaS, AI startups, & luxury brands. Engineered with 3D visuals, micro-interactions, and conversion psychology that turn visitors into high-paying clients instantly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenBookCall}
                data-cursor="BOOK CALL"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink text-white font-bold text-base shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 fill-white" />
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#portfolio"
                data-cursor="PORTFOLIO"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-button text-white font-semibold text-base hover:text-flux-purple flex items-center justify-center gap-2 group"
              >
                <Play className="w-4 h-4 fill-white group-hover:fill-flux-purple transition-colors" />
                <span>Explore Portfolio</span>
              </a>
            </motion.div>

            {/* Client Social Proof & Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 w-full"
            >
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#050816] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#050816] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#050816] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Client avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#050816] object-cover"
                />
                <div className="w-10 h-10 rounded-full border-2 border-[#050816] bg-flux-purple/40 backdrop-blur-md flex items-center justify-center text-xs font-bold text-white">
                  +150
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                  <span className="text-sm font-bold text-white ml-2">4.98/5</span>
                </div>
                <span className="text-xs text-flux-gray">Trusted by founders from YC, SaaS, & D2C</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Ultra-Luxury Interactive Hero Visual Showcase */}
          <div className="lg:col-span-5 relative h-[480px] sm:h-[560px] lg:h-[600px] flex items-center justify-center">
            <HeroVisualShowcase />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-flux-gray"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-flux-purple"
          />
        </div>
      </motion.div>
    </section>
  );
}
