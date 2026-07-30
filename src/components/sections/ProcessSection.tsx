'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  LayoutTemplate, 
  Palette, 
  Code, 
  CheckCheck, 
  Rocket,
  Sparkles
} from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your offer, target audience personas, unit economics, and current conversion bottlenecks.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Research & Copywriting',
      description: 'We craft high-converting hooks, value propositions, and persuasive sales narrative copy.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'UX Wireframing',
      description: 'Mapping visitor visual eye-flow, trust triggers, and frictionless call-to-action paths.',
      icon: LayoutTemplate,
    },
    {
      num: '04',
      title: 'Awwwards UI Design',
      description: 'Designing bespoke 3D glassmorphism visuals, micro-interactions, and responsive layouts.',
      icon: Palette,
    },
    {
      num: '05',
      title: 'Next.js Development',
      description: 'Clean Next.js 15 App Router code, GSAP animation timelines, and Three.js WebGL rendering.',
      icon: Code,
    },
    {
      num: '06',
      title: 'Testing & QA',
      description: 'Lighthouse 95+ performance validation, cross-browser testing (Mobile, iPad, Ultra-wide), and SEO audit.',
      icon: CheckCheck,
    },
    {
      num: '07',
      title: 'Global Launch',
      description: 'Deployment to Vercel/Cloudflare CDN, Google Analytics setup, and 30-day post-launch optimization.',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-flux-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-blue mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" /> 7-Step Precision Roadmap
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            From Concept To Live Launch In <span className="text-gradient-primary">7 Days</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg"
          >
            Our streamlined engineering protocol ensures zero delays and flawless execution at every single stage.
          </motion.p>
        </div>

        {/* Horizontal & Vertical Timeline Grid */}
        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink -translate-y-1/2 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card p-6 rounded-3xl flex flex-col justify-between relative group hover:border-flux-purple transition-all duration-300"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black font-mono text-gradient-purple-pink">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-surface-glass border border-white/10 flex items-center justify-center text-flux-purple group-hover:scale-110 group-hover:bg-flux-purple group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-flux-blue transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-flux-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-flux-blue font-bold">
                    DAY {idx + 1} PROTOCOL
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
