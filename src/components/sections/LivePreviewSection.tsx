'use client';

import { motion } from 'framer-motion';
import { Eye, Shield, Sparkles, ExternalLink, Zap, MousePointer, Flame } from 'lucide-react';

export default function LivePreviewSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050816] overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flux-purple/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-blue mb-4 uppercase tracking-widest"
          >
            <Eye className="w-3.5 h-3.5" /> Live Visual Engine
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            What Your Visitors Will Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg"
          >
            An immersive preview of the fluid motion, glass reflections, and pixel-perfect design standards every Fluxora page delivers.
          </motion.p>
        </div>

        {/* MacOS Large Interactive Browser Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-2xl border border-white/15 bg-surface-glass backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden group"
          data-cursor="PREVIEW"
        >
          {/* MacOS Top Window Controls Bar */}
          <div className="px-5 py-4 bg-[#0F172A]/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-6 py-1.5 rounded-full bg-[#050816]/80 border border-white/10 text-xs font-mono text-flux-gray w-full max-w-md justify-center shadow-inner">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-medium">https://</span>
              <span>fluxora-studio.com/live-demo</span>
            </div>

            <div className="flex items-center gap-2 text-flux-gray">
              <ExternalLink className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Browser Content Simulated Viewport with Infinite Scroll Animation */}
          <div className="relative h-[480px] sm:h-[560px] overflow-hidden bg-[#050816] select-none">
            {/* Ambient glass reflection layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20" />

            {/* Scrolling Simulated Website Body */}
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="w-full flex flex-col"
            >
              {/* Simulated Hero Block */}
              <div className="p-8 md:p-12 min-h-[480px] flex flex-col justify-center items-center text-center relative border-b border-white/5 bg-gradient-to-b from-purple-950/20 to-transparent">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
                  ⚡ AI SaaS Platform 2.0
                </span>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-xl">
                  Automate Workflows With Neural Speed
                </h3>
                <p className="text-flux-gray text-sm md:text-base max-w-lg mb-6">
                  Empower your team with autonomous AI agents that handle lead scoring, analytics, and instant multi-channel deployment.
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-flux-purple to-flux-blue text-white text-xs font-bold shadow-lg">
                    Start Free Trial
                  </div>
                  <div className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold">
                    Watch Demo Video
                  </div>
                </div>

                {/* Dashboard Card Graphic */}
                <div className="mt-10 w-full max-w-2xl rounded-xl border border-white/15 bg-surface-glass p-6 text-left shadow-2xl">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-flux-purple/30 flex items-center justify-center text-flux-purple">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-white">Live AI Analytics</div>
                    </div>
                    <div className="text-xs text-emerald-400 font-mono">+348.2% Growth</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-[10px] text-flux-gray">Active Users</div>
                      <div className="text-base font-bold text-white">48,920</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-[10px] text-flux-gray">Conversion Rate</div>
                      <div className="text-base font-bold text-flux-blue">14.8%</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-[10px] text-flux-gray">Revenue (ARR)</div>
                      <div className="text-base font-bold text-flux-pink">$1.4M</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Repeat Block for Seamless Infinite Loop */}
              <div className="p-8 md:p-12 min-h-[480px] flex flex-col justify-center items-center text-center relative border-b border-white/5 bg-gradient-to-b from-blue-950/20 to-transparent">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
                  🚀 Luxury E-commerce Theme
                </span>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-xl">
                  Next-Gen Spatial Audio Tech
                </h3>
                <p className="text-flux-gray text-sm md:text-base max-w-lg mb-6">
                  Immerse yourself in studio-grade acoustics crafted for audiophiles who demand true high-fidelity sound.
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-flux-blue to-flux-pink text-white text-xs font-bold shadow-lg">
                    Pre-order Headphones
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Floating Live Interaction Widgets over the Mockup */}
            <div className="absolute bottom-6 left-6 z-30 glass-panel px-4 py-2 rounded-full flex items-center gap-3 border border-white/20 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-white">60 FPS Hardware Accelerated</span>
            </div>

            <div className="absolute top-6 right-6 z-30 glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-xl text-flux-purple text-xs font-bold">
              <Flame className="w-4 h-4 text-flux-pink" /> 99/100 Lighthouse Performance
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
