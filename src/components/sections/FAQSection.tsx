'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can Fluxora Studio build & launch my landing page?',
      a: 'Our baseline turnaround time is exactly 7 Days from strategy brief signoff to live production deployment. For urgent launch deadlines, we offer an expedited 72-hour express delivery option.',
    },
    {
      q: 'Why should I pay ₹20,000–₹50,000+ instead of using a $50 template?',
      a: 'Generic templates are built without conversion psychology, custom 3D webgl art direction, or high-speed code optimization. A $50 template converting at 1% loses you tens of thousands in lost revenue. A bespoke Fluxora landing page engineered to convert at 10-25% pays for itself in the first 7 days.',
    },
    {
      q: 'Do I own the complete source code and design files after completion?',
      a: '100% Yes. Upon completion, we hand over full ownership of the clean Next.js 15 repository, Figma design system source files, 3D WebGL assets, and hosting keys to your team with zero locking.',
    },
    {
      q: 'What stack do you use to build the websites?',
      a: 'We engineer using Next.js 15 (App Router), React 19 / 18, TypeScript, Tailwind CSS, Framer Motion, GSAP scroll timelines, Three.js / React Three Fiber for 3D graphics, and Lenis for inertia smooth scrolling.',
    },
    {
      q: 'Do you write the conversion copywriting and content as well?',
      a: 'Yes! Every tier includes full conversion copywriting. Our senior copywriters analyze your ideal client persona, objections, and value props to craft persuasive hooks, headlines, and call-to-actions.',
    },
    {
      q: 'How do revisions work if I want to request changes?',
      a: 'We offer unlimited revisions during the design & prototyping phase on our Growth and Premium tiers. We only write code once you have 100% approved the interactive Figma design mockup.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-flux-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-blue mb-4 uppercase tracking-widest"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg"
          >
            Everything you need to know about partnering with Fluxora Studio.
          </motion.p>
        </div>

        {/* Animated Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`glass-card rounded-2xl border transition-all ${
                  isOpen ? 'border-flux-purple bg-surface-glass/90' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-flux-purple flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-flux-gray leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
