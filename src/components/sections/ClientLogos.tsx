'use client';

import { motion } from 'framer-motion';

export default function ClientLogos() {
  const logos = [
    { name: 'NEXUS AI', label: 'AI Platform' },
    { name: 'SYNAPSE SaaS', label: 'Enterprise Software' },
    { name: 'AURA LUXURY', label: 'Haute Horlogerie' },
    { name: 'VELOCITY D2C', label: 'E-commerce' },
    { name: 'HYPERION', label: 'Fintech Protocol' },
    { name: 'CREATOR HUB', label: 'Media Agency' },
    { name: 'QUANTUM SCALE', label: 'YC Backed SaaS' },
    { name: 'SOLARIS', label: 'Clean Tech' },
  ];

  return (
    <section className="py-16 bg-[#050816] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-flux-gray">
          TRUSTED BY HIGH-GROWTH STARTUPS & LUXURY BRANDS GLOBALLY
        </p>
      </div>

      {/* Marquee Wrapper with Gradient Edges */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 whitespace-nowrap min-w-max pr-12"
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-md opacity-70 hover:opacity-100 hover:border-flux-purple transition-all duration-300 group cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-flux-purple to-flux-blue group-hover:scale-125 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold tracking-wider text-white group-hover:text-flux-purple transition-colors">
                  {logo.name}
                </span>
                <span className="text-[10px] text-flux-gray font-mono">{logo.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
