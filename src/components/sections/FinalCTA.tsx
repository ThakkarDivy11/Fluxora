'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenBookCall: () => void;
}

export default function FinalCTA({ onOpenBookCall }: FinalCTAProps) {
  return (
    <section className="py-28 md:py-40 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Intense Glowing Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-r from-flux-purple/25 via-flux-blue/20 to-flux-pink/25 rounded-full blur-[220px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel max-w-5xl mx-auto p-10 sm:p-16 rounded-3xl border border-white/20 shadow-[0_30px_120px_rgba(139,92,246,0.3)] relative overflow-hidden"
        >
          {/* Animated Background Mesh Inside Card */}
          <div className="absolute inset-0 bg-aurora-mesh opacity-60 pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-blue mb-6 uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> Limited 3 Slots Open For Next Month
            </div>

            {/* Massive Glowing Title */}
            <h2 className="heading-section text-white mb-6">
              Let's Build Something <br />
              <span className="text-gradient-primary">Extraordinary Together.</span>
            </h2>

            <p className="text-body-lg max-w-2xl mx-auto mb-10">
              Ready to double your conversions and make your brand look like a market leader? Book a 15-minute strategy call with our Senior Architects today.
            </p>

            {/* Huge Glowing Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBookCall}
                data-cursor="BOOK CALL"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink text-white font-extrabold text-lg shadow-[0_0_50px_rgba(139,92,246,0.7)] hover:shadow-[0_0_80px_rgba(56,189,248,0.9)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-6 h-6 fill-white" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Guarantee Tag */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-flux-gray">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 7-Day Money Back Delivery Guarantee
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-flux-purple" /> No Sales Pressure • Free UX Audit Included
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
