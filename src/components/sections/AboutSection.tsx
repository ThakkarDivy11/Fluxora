'use client';

import { motion } from 'framer-motion';
import { Award, Zap, Clock, Smile, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBookCall: () => void;
}

export default function AboutSection({ onOpenBookCall }: AboutSectionProps) {
  const stats = [
    { value: '150+', label: 'Projects Completed', subtext: 'SaaS, AI & High-Ticket Brands', icon: Award },
    { value: '98%', label: 'Client Satisfaction', subtext: 'Based on 120+ verified reviews', icon: Smile },
    { value: '7 Days', label: 'Average Delivery', subtext: 'From strategy brief to live launch', icon: Clock },
    { value: '14x', label: 'Average Client ROI', subtext: 'Measured 30-day conversion lift', icon: Zap },
  ];

  return (
    <section id="why-us" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-flux-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-flux-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-purple mb-4 uppercase tracking-widest"
            >
              <Award className="w-3.5 h-3.5" /> The Fluxora Manifesto
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-section text-white mb-6"
            >
              We Build Landing Pages That <span className="text-gradient-purple-pink">Refuse To Be Ignored.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body-lg mb-6"
            >
              Most digital agencies build generic templates that look pretty but convert zero visitors into paying customers. At Fluxora Studio, we combine conversion copywriting, 3D WebGL interactions, and quantitative UX engineering.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-body-sm text-flux-gray mb-8"
            >
              Whether you are an AI startup launching a new product or a luxury personal brand charging ₹50,000+, your landing page is your primary sales engine. We ensure it operates at maximum efficiency.
            </motion.p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {[
                'Zero generic templates used',
                'Custom 3D & Framer Motion',
                'Sub-second page loading speed',
                'Full copy & design included',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-2.5 text-sm font-medium text-white"
                >
                  <CheckCircle2 className="w-4 h-4 text-flux-blue flex-shrink-0" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={onOpenBookCall}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-flux-purple to-flux-blue text-white font-bold text-sm shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              <span>Work With Fluxora Studio</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

          </div>

          {/* Right Column: Luxury Image Visual & Stats Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Main Luxury Imagery Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-white/15 glass-panel group"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Fluxora Studio Agency Team Working"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl">
                <div className="text-xs font-mono text-flux-blue mb-1 uppercase">Awwwards Nominated Studio</div>
                <div className="text-lg font-bold text-white">"Perfection is not when there is nothing more to add, but when there is nothing left to take away."</div>
              </div>
            </motion.div>

            {/* Animated Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">
                        {stat.value}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-surface-glass border border-white/10 flex items-center justify-center text-flux-purple">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">{stat.label}</div>
                      <div className="text-xs text-flux-gray">{stat.subtext}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
