'use client';

import { motion } from 'framer-motion';
import { Check, X, Sparkles, ShieldAlert, Award } from 'lucide-react';

export default function WhyFluxoraSection() {
  const comparisonItems = [
    { feature: 'Modern Custom UI & Art Direction', others: 'Generic Templates & UI Kits', fluxora: 'Bespoke 3D & Awwwards Award Quality' },
    { feature: 'High-FPS Motion & Animations', others: 'Laggy CSS or No Animations', fluxora: 'GSAP Timelines & 60 FPS WebGL' },
    { feature: 'Search Engine Optimization', others: 'Basic Meta Description', fluxora: 'Full Schema.org JSON-LD & OpenGraph' },
    { feature: 'Lighthouse & Page Speed', others: '40 - 65 Score (Slow)', fluxora: '95 - 100 Score Guaranteed' },
    { feature: 'Average Delivery Timeline', others: '3 - 6 Weeks (Unpredictable)', fluxora: '7 Days Delivery Guaranteed' },
    { feature: 'Code Architecture', others: 'Bloated WordPress / Elementor', fluxora: 'Clean Next.js 15 App Router Code' },
    { feature: 'Conversion Psychology', others: 'Looks Pretty, 0 Conversions', fluxora: 'Engineered for 12%-25% Conversion' },
  ];

  return (
    <section id="why-fluxora" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Soft Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-flux-purple/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-purple mb-4 uppercase tracking-widest"
          >
            <Award className="w-3.5 h-3.5" /> Direct Comparison
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Why Industry Leaders Choose <span className="text-gradient-primary">Fluxora Studio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg"
          >
            Compare what typical freelancers & agencies deliver versus our boutique engineering standard.
          </motion.p>
        </div>

        {/* Responsive Comparison Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0F172A] p-6 border-b border-white/10 text-sm font-bold text-white items-center">
            <div className="col-span-5 sm:col-span-4 text-flux-gray uppercase tracking-wider font-mono text-xs">
              Feature Specification
            </div>
            <div className="col-span-3 sm:col-span-4 text-center text-red-400 font-mono text-xs flex items-center justify-center gap-1">
              <ShieldAlert className="w-4 h-4 hidden sm:inline" /> Typical Agencies
            </div>
            <div className="col-span-4 text-center text-flux-purple font-mono text-xs sm:text-sm flex items-center justify-center gap-1 bg-flux-purple/10 py-2 rounded-xl border border-flux-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-4 h-4 text-flux-blue" /> Fluxora Studio
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisonItems.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-5 text-xs sm:text-sm items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-4 font-semibold text-white">
                  {row.feature}
                </div>

                {/* Typical Agencies Column */}
                <div className="col-span-3 sm:col-span-4 text-center text-flux-gray px-2 flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="hidden sm:inline">{row.others}</span>
                </div>

                {/* Fluxora Studio Column */}
                <div className="col-span-4 text-center font-bold text-white px-2 flex items-center justify-center gap-1.5 bg-flux-purple/5 py-2 rounded-lg border border-flux-purple/20">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-gradient-primary">{row.fluxora}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
