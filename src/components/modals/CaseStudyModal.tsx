'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, TrendingUp, Clock, CheckCircle2, Award, Zap } from 'lucide-react';
import { ProjectItem } from '../sections/FeaturedWorkSection';

interface CaseStudyModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-[#050816]/95 backdrop-blur-2xl overflow-y-auto p-4 sm:p-6 md:p-10 flex justify-center"
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-surface-glass border border-white/20 rounded-3xl p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-flux-purple/20 text-flux-purple text-xs font-mono font-bold border border-flux-purple/30">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-flux-gray text-xs font-mono border border-white/10 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-flux-blue" /> {project.timeline}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-2">{project.title}</h2>
        <p className="text-flux-gray text-base sm:text-lg mb-8">{project.tagline}</p>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-gradient-to-r from-flux-purple/20 via-flux-blue/10 to-transparent border border-white/10 mb-8">
          <div>
            <div className="text-xs text-flux-gray mb-1">Conversion Lift</div>
            <div className="text-xl sm:text-3xl font-extrabold text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-5 h-5" /> {project.results.conversionBoost}
            </div>
          </div>
          <div>
            <div className="text-xs text-flux-gray mb-1">Revenue Impact</div>
            <div className="text-xl sm:text-3xl font-extrabold text-white">{project.results.arrIncrease}</div>
          </div>
          <div>
            <div className="text-xs text-flux-gray mb-1">Lighthouse Score</div>
            <div className="text-xl sm:text-3xl font-extrabold text-flux-blue">{project.results.speedScore}</div>
          </div>
        </div>

        {/* Interactive Before / After Comparison Slider */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
            <span>Before vs After Redesign Impact</span>
            <span className="text-xs text-flux-blue font-mono font-normal">Drag slider to compare</span>
          </h3>

          <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/15 select-none">
            {/* After Image (Base layer) */}
            <img
              src={project.beforeAfter.afterImg}
              alt="After Redesign"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              FLUXORA AFTER ({project.beforeAfter.afterRate})
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-flux-blue"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={project.beforeAfter.beforeImg}
                alt="Before Redesign"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                BEFORE ({project.beforeAfter.beforeRate})
              </div>
            </div>

            {/* Slider Control Line & Thumb */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">The Challenge</h4>
            <p className="text-xs sm:text-sm text-flux-gray leading-relaxed">{project.challenge}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">The Fluxora Solution</h4>
            <p className="text-xs sm:text-sm text-flux-gray leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className="text-xs text-flux-gray uppercase tracking-wider font-mono mb-3">Tech Stack Used:</div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-surface-glass border border-white/10 text-xs font-mono text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal CTA Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-flux-gray">
            Want a similar high-converting page for your business?
          </div>
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink text-white font-bold text-xs shadow-lg hover:shadow-purple-500/40 transition-all"
          >
            Get Guaranteed 10%+ Conversions
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
