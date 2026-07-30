'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  Code2, 
  MousePointerClick
} from 'lucide-react';

export default function HeroVisualShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      
      {/* Radiant Glowing Energy Portal Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-purple-500/20 bg-gradient-to-tr from-flux-purple/10 via-transparent to-flux-blue/10 blur-sm"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-flux-blue/30"
        />
      </div>

      {/* Central Ambient Pulsing Orbs */}
      <div className="absolute w-64 h-64 bg-flux-purple/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-64 h-64 bg-flux-blue/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow [animation-delay:2s]" />

      {/* Main Floating Glass Hero Dashboard Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 w-full max-w-[440px] bg-surface-glass border border-white/20 rounded-3xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl group"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-flux-gray">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-semibold">FLUXORA ENGINE 2.0</span>
          </div>

          <div className="text-flux-purple">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Live Real-Time Conversion Waveform Graph */}
        <div className="mb-5 p-4 rounded-2xl bg-[#050816]/70 border border-white/10 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] text-flux-gray font-mono uppercase">Live Conversion Rate</div>
              <div className="text-xl font-extrabold text-white flex items-center gap-2">
                <span>18.4%</span>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ▲ +240%
                </span>
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-flux-purple/20 border border-flux-purple/30 flex items-center justify-center text-flux-purple">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
          </div>

          {/* Animated SVG Waveform Line */}
          <div className="h-16 w-full relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 50 Q 50 10, 100 35 T 200 15 T 300 5 L 300 60 L 0 60 Z"
                fill="url(#gradientWave)"
              />
              <motion.path
                d="M 0 50 Q 50 10, 100 35 T 200 15 T 300 5"
                fill="none"
                stroke="url(#strokeGrad)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Mini 3-Stat Metric Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div className="bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="text-[10px] text-flux-gray font-mono">Lighthouse</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
              99/100 <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="text-[10px] text-flux-gray font-mono">Frame Rate</div>
            <div className="text-sm font-bold text-flux-blue">60 FPS</div>
          </div>

          <div className="bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="text-[10px] text-flux-gray font-mono">Delivery</div>
            <div className="text-sm font-bold text-flux-purple">7 Days</div>
          </div>
        </div>

        {/* Live Client Notification Feed Item */}
        <div className="p-3 rounded-xl bg-surface-glass border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">YC AI Startup Booked</div>
              <div className="text-[10px] text-flux-gray">Growth Package (₹45,000)</div>
            </div>
          </div>
          <div className="text-[10px] text-flux-gray font-mono">Just now</div>
        </div>
      </motion.div>

      {/* Floating Orbital Glass Card 1 - Conversion Boost (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-4 -right-2 sm:-right-8 z-30 glass-panel p-4 rounded-2xl border border-white/15 flex items-center gap-3 animate-float-slow shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] text-flux-gray">Conversion Boost</div>
          <div className="text-base font-bold text-white flex items-center gap-1">
            +240% <span className="text-emerald-400 text-xs">▲ ROI</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Orbital Glass Card 2 - Delivery Speed (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 -left-2 sm:-left-8 z-30 glass-panel p-4 rounded-2xl border border-white/15 flex items-center gap-3 animate-float-slow [animation-delay:2s] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-flux-purple to-flux-blue flex items-center justify-center text-white shadow-lg">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] text-flux-gray">Turnaround Time</div>
          <div className="text-base font-bold text-white">7 Days Guaranteed</div>
        </div>
      </motion.div>

      {/* Floating Orbital Badge 3 - Tech Stack Badge (Top Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-12 left-0 z-30 glass-panel px-3.5 py-2 rounded-full border border-white/15 flex items-center gap-2 text-xs font-mono font-bold text-white shadow-lg animate-float-slow [animation-delay:4s]"
      >
        <Code2 className="w-4 h-4 text-flux-blue" />
        <span>Next.js 15 • R3F • GSAP</span>
      </motion.div>

    </div>
  );
}
