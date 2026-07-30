'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Video, Play, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Fluxora redesigned our AI startup's landing page in 6 days. Our signup conversion jumped from 2.1% to 8.4% overnight. They are worth 10x what they charge.",
      author: "Alexander Wright",
      role: "Founder & CEO",
      company: "Synapse AI (YC W24)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      hasVideo: true,
      result: "+300% Conversion Lift",
    },
    {
      id: 2,
      quote: "The 3D interactive luxury horlogerie model built by Fluxora blew our board away. We generated ₹4.2 Cr in pre-orders within the first two weeks of launch.",
      author: "Elena Rostova",
      role: "Creative Director",
      company: "Aura Geneve Luxury",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      hasVideo: false,
      result: "₹4.2 Cr Pre-orders",
    },
    {
      id: 3,
      quote: "Fastest turnaround and best code quality I've ever seen from an agency. The Lighthouse score came out to 99/100 and Lenis scroll feels like Butter.",
      author: "Marcus Chen",
      role: "VP of Product",
      company: "Hyperion Protocol",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      hasVideo: true,
      result: "99/100 Speed Score",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flux-purple/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-purple mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" /> Client Reviews
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Trusted By High-Growth <span className="text-gradient-purple-pink">Founders & CMOs</span>
          </motion.h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 relative shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
            >
              {/* Top Quote Icon & Stars */}
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-12 h-12 text-flux-purple/40" />
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Quote Body Text */}
              <p className="text-lg sm:text-2xl font-medium text-white mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Result Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-8">
                ⚡ VERIFIED RESULT: {testimonials[currentIndex].result}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-14 h-14 rounded-full border-2 border-flux-purple object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonials[currentIndex].author}</h3>
                    <p className="text-xs text-flux-gray">{testimonials[currentIndex].role} • <span className="text-flux-blue">{testimonials[currentIndex].company}</span></p>
                  </div>
                </div>

                {testimonials[currentIndex].hasVideo && (
                  <div className="px-4 py-2 rounded-full bg-surface-glass border border-white/15 text-xs text-white flex items-center gap-2 cursor-pointer hover:border-flux-purple transition-all">
                    <div className="w-6 h-6 rounded-full bg-flux-purple flex items-center justify-center">
                      <Play className="w-3 h-3 fill-white" />
                    </div>
                    <span>Watch Video Review</span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-surface-glass border border-white/10 text-white hover:border-flux-purple transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-flux-purple w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-surface-glass border border-white/10 text-white hover:border-flux-purple transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
