'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Layout, 
  Layers, 
  Palette, 
  Search, 
  Gauge, 
  Cpu, 
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  X
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: any;
  title: string;
  category: string;
  description: string;
  features: string[];
  deliverables: string[];
  techBadge: string;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'landing-pages',
      icon: Rocket,
      title: 'High-Converting Landing Pages',
      category: 'Core Specialty',
      description: 'Custom-built single-page experiences engineered for AI startups, SaaS products, and luxury brands. Built to convert at 12-25% baseline.',
      features: [
        'Psychological Copywriting Included',
        'Custom 3D Spline / R3F Canvas Elements',
        'Mobile-First Responsive Layouts',
        'Integrated Lead Capture & Calendly',
      ],
      deliverables: ['Design Figma Source', 'Next.js 15 Source Code', 'Analytics Setup', '7 Days Delivery'],
      techBadge: 'Next.js 15 • R3F • Framer',
    },
    {
      id: 'web-design',
      icon: Layout,
      title: 'Awwwards-Level Web Design',
      category: 'Design Engineering',
      description: 'Art direction that makes your company look like a billion-dollar market leader. Typography, layout, and visual hierarchy designed to wow.',
      features: [
        'Bespoke Grid & Fluid Typography',
        'Interactive Hover Micro-animations',
        'Dark Mode & Glassmorphic UI System',
        'Custom Iconography & Graphic Assets',
      ],
      deliverables: ['Full Figma System', 'Design Tokens', 'Clickable Prototype'],
      techBadge: 'Figma • Design System',
    },
    {
      id: 'ui-ux',
      icon: Layers,
      title: 'UI/UX Architecture',
      category: 'Product Experience',
      description: 'User-centric wireframing and interactive prototypes that eliminate friction points and guide visitors smoothly toward conversion.',
      features: [
        'User Journey Mapping',
        'Frictionless Checkout / Lead Funnels',
        'A/B Testing Wireframe Variants',
        'Accessibility (WCAG AA Compliant)',
      ],
      deliverables: ['UX Wireframes', 'User Flow Diagrams', 'Usability Report'],
      techBadge: 'Prototyping • User Research',
    },
    {
      id: 'brand-identity',
      icon: Palette,
      title: 'Luxury Brand Identity',
      category: 'Visual Branding',
      description: 'Complete brand positioning including premium typography selection, bespoke color matrices, 3D brand logos, and brand guidelines.',
      features: [
        '3D Vector Logo Marks',
        'Color Token System (Hex & HSL)',
        'Typography Pairing Hierarchy',
        'Social Media Kit & Mockups',
      ],
      deliverables: ['Brand Guidelines PDF', 'Vector Logos', '3D Asset Pack'],
      techBadge: 'Brand Strategy • 3D Assets',
    },
    {
      id: 'seo-optimization',
      icon: Search,
      title: 'Technical & Organic SEO',
      category: 'Traffic Engine',
      description: 'Structural search engine optimization with Schema.org rich snippets, Open Graph tags, canonical structures, and sub-second rendering.',
      features: [
        'Schema.org JSON-LD Structured Data',
        'Dynamic OpenGraph & Twitter Cards',
        'Sitemap & Robots.txt Automated Setup',
        'Semantic HTML5 Heading Hierarchy',
      ],
      deliverables: ['SEO Audit', 'Structured Metadata', 'Search Console Indexing'],
      techBadge: 'SEO • Schema.org • OpenGraph',
    },
    {
      id: 'performance',
      icon: Gauge,
      title: 'Sub-Second Performance',
      category: 'Speed Engineering',
      description: 'Lighthouse 95+ score optimization. Next.js image optimization, tree-shaking, code splitting, and zero render-blocking scripts.',
      features: [
        'WebP & AVIF Image Optimization',
        '95+ Lighthouse Score Guarantee',
        'Minimal Bundle Size Footprint',
        'Core Web Vitals Optimization',
      ],
      deliverables: ['Performance Report', 'Speed Optimization Guarantee'],
      techBadge: 'Lighthouse 95+ • Next.js Turbo',
    },
    {
      id: 'ai-integration',
      icon: Cpu,
      title: 'Autonomous AI Integration',
      category: 'Smart Automation',
      description: 'Embed smart AI chat assistants, automated lead qualification chatbots, dynamic personalized content, and instant CRM sync.',
      features: [
        'OpenAI / Anthropic API Custom Chatbots',
        'Automated CRM Lead Routing (Hubspot/Zapier)',
        'Dynamic Visitor Personalization',
        'Instant Voice / AI Demo Modules',
      ],
      deliverables: ['AI Bot Integration', 'Webhook & API Setup'],
      techBadge: 'OpenAI API • Webhooks • CRM',
    },
    {
      id: 'creative-animations',
      icon: Sparkles,
      title: 'GSAP & 3D Visual Effects',
      category: 'Motion Design',
      description: 'High-frame-rate GSAP scroll timelines, Lenis smooth scrolling, canvas particles, and 3D webgl shaders that leave visitors speechless.',
      features: [
        'Scroll-Triggered Text & Image Reveals',
        'Magnetic Button Interactions',
        'WebGL Shader Particle Orbs',
        'Lenis Inertia Smooth Scrolling',
      ],
      deliverables: ['GSAP Timelines', 'WebGL Shader Code', 'Custom Cursor'],
      techBadge: 'GSAP • Three.js • Lenis Scroll',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-flux-purple/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-blue mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" /> High-Ticket Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Capabilities Designed To <span className="text-gradient-primary">Outperform Competition</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg"
          >
            We don't just deliver code; we build conversion machinery crafted to justify high-ticket pricing for your business.
          </motion.p>
        </div>

        {/* 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="glass-card p-6 rounded-3xl flex flex-col justify-between cursor-pointer group hover:border-flux-purple/50 relative overflow-hidden"
                data-cursor="EXPAND"
              >
                {/* Glow border gradient effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-flux-purple/10 via-transparent to-flux-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-glass border border-white/10 flex items-center justify-center text-flux-purple group-hover:scale-110 group-hover:bg-flux-purple group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-flux-gray uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-flux-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-flux-gray line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badge */}
                  <div className="text-[11px] font-mono text-flux-purple mb-4 font-semibold">
                    {service.techBadge}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold text-white group-hover:text-flux-purple">
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Expanded Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[100] bg-[#050816]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-surface-glass border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-flux-purple to-flux-blue p-[2px]">
                  <div className="w-full h-full bg-[#050816] rounded-2xl flex items-center justify-center text-white">
                    {<selectedService.icon className="w-7 h-7" />}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-flux-purple uppercase font-bold tracking-wider">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-flux-gray text-sm md:text-base mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Architecture Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle className="w-4 h-4 text-flux-blue flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs text-flux-gray">
                  Included Tech: <span className="text-white font-mono">{selectedService.techBadge}</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const el = document.getElementById('pricing');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-flux-purple to-flux-blue text-white text-xs font-bold shadow-lg"
                >
                  View Pricing Tiers
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
