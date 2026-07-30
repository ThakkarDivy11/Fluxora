'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp, Layers, Clock, Sparkles, X, CheckCircle2, ArrowRight } from 'lucide-react';
import CaseStudyModal from '../modals/CaseStudyModal';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'AI Startup' | 'SaaS' | 'Luxury & D2C' | 'Fintech';
  tagline: string;
  image: string;
  results: {
    conversionBoost: string;
    arrIncrease: string;
    speedScore: string;
  };
  timeline: string;
  techStack: string[];
  challenge: string;
  solution: string;
  beforeAfter: {
    beforeImg: string;
    afterImg: string;
    beforeRate: string;
    afterRate: string;
  };
}

export default function FeaturedWorkSection() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'synapse-ai',
      title: 'Synapse AI Engine',
      client: 'Synapse Labs Inc.',
      category: 'AI Startup',
      tagline: 'Autonomous AI workflow platform built for enterprise engineering teams.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      results: {
        conversionBoost: '+340%',
        arrIncrease: '$2.4M ARR',
        speedScore: '99/100',
      },
      timeline: '6 Days Delivery',
      techStack: ['Next.js 15', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      challenge: 'Low conversion on original self-hosted SaaS page (1.8% signup rate) due to complex technical terminology.',
      solution: 'Rebuilt with interactive 3D particle demo, simplified value proposition, and instant interactive trial widget.',
      beforeAfter: {
        beforeImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        beforeRate: '1.8%',
        afterRate: '7.92%',
      },
    },
    {
      id: 'aura-watches',
      title: 'Aura Haute Horlogerie',
      client: 'Aura Geneve',
      category: 'Luxury & D2C',
      tagline: 'Ultra-exclusive Swiss timepieces with 3D luxury customization.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      results: {
        conversionBoost: '+215%',
        arrIncrease: '₹4.2 Cr Revenue',
        speedScore: '98/100',
      },
      timeline: '8 Days Delivery',
      techStack: ['Next.js 15', 'R3F Canvas', 'GSAP', 'WebGL'],
      challenge: 'High bounce rate on mobile devices and lack of sensory tactile luxury feel online.',
      solution: 'Crafted 360° interactive 3D model customizer with glass reflections and sound design.',
      beforeAfter: {
        beforeImg: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        beforeRate: '0.9%',
        afterRate: '2.84%',
      },
    },
    {
      id: 'hyperion-fintech',
      title: 'Hyperion Quantum Pay',
      client: 'Hyperion Financial',
      category: 'Fintech',
      tagline: 'Institutional cross-border payment protocol with sub-millisecond settlement.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      results: {
        conversionBoost: '+280%',
        arrIncrease: '$18M Volume',
        speedScore: '100/100',
      },
      timeline: '7 Days Delivery',
      techStack: ['Next.js 15', 'Lenis Scroll', 'Tailwind', 'TypeScript'],
      challenge: 'Traditional bank clients doubted security compliance and speed performance claims.',
      solution: 'Created transparent live transaction visualizer, interactive SOC-2 compliance badges, and instant demo scheduler.',
      beforeAfter: {
        beforeImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
        beforeRate: '2.1%',
        afterRate: '7.98%',
      },
    },
    {
      id: 'nexus-cloud',
      title: 'Nexus Autonomous Cloud',
      client: 'Nexus Infra Inc.',
      category: 'SaaS',
      tagline: 'Zero-config cloud serverless infrastructure for AI developers.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      results: {
        conversionBoost: '+310%',
        arrIncrease: '$850K ARR',
        speedScore: '99/100',
      },
      timeline: '5 Days Delivery',
      techStack: ['Next.js 15', 'Framer Motion', 'Tailwind CSS'],
      challenge: 'Developers were bouncing before understanding the developer-first CLI integration.',
      solution: 'Embedded interactive terminal simulator directly on hero section with copy-paste installation command.',
      beforeAfter: {
        beforeImg: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        beforeRate: '3.4%',
        afterRate: '13.9%',
      },
    },
  ];

  const categories = ['All', 'AI Startup', 'SaaS', 'Luxury & D2C', 'Fintech'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-flux-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-pink mb-4 uppercase tracking-widest"
            >
              <Layers className="w-3.5 h-3.5" /> Featured Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-section text-white"
            >
              Proof, Not Promises. <br />
              <span className="text-gradient-purple-pink">Awwwards-Winning Portfolio</span>
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-glass p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-flux-purple to-flux-blue text-white shadow-md'
                    : 'text-flux-gray hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedCaseStudy(project)}
              className="glass-card rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between"
              data-cursor="CASE STUDY"
            >
              {/* Image Preview Container with Glass reflection */}
              <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />

                {/* Floating Metric Badges */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold backdrop-blur-md flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.results.conversionBoost}</span>
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 rounded-full bg-surface-glass border border-white/10 text-white text-xs font-mono backdrop-blur-md flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-flux-purple" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-[11px] font-mono font-bold text-flux-blue uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-flux-purple transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-flux-purple transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-flux-gray mb-6">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-flux-gray px-2 py-0.5 rounded bg-white/5 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-flux-blue group-hover:underline">
                    View Case Breakdown →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Interactive Case Study Popup Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}
