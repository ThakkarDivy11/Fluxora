'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenBookCall: () => void;
}

export default function PricingSection({ onOpenBookCall }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'project' | 'retainer'>('project');

  const plans = [
    {
      name: 'Starter',
      price: '₹25,000',
      period: 'one-time project',
      description: 'Ideal for early-stage startups and personal brands needing a high-impact, fast landing page.',
      popular: false,
      badge: 'Essential Pack',
      delivery: '5-7 Days Delivery',
      features: [
        'Single High-Converting Landing Page',
        'Custom Conversion Copywriting',
        'Framer Motion Micro-animations',
        'Mobile First Responsive Design',
        'Basic SEO & Meta Tags Setup',
        '1 Round of Design Revisions',
        'Full Source Code Delivery',
      ],
      buttonText: 'Get Starter Page',
      highlightColor: 'from-flux-blue to-cyan-500',
    },
    {
      name: 'Growth',
      price: '₹45,000',
      period: 'one-time project',
      description: 'Our most popular engineering tier. Designed for AI startups, SaaS, & high-ticket agencies.',
      popular: true,
      badge: 'Most Popular Choice',
      delivery: '7 Days Delivery',
      features: [
        'Everything in Starter Tier',
        'Custom 3D R3F Canvas / WebGL Element',
        'Psychological Conversion Funnel',
        'Schema.org & Advanced Technical SEO',
        'Lighthouse 95+ Score Guarantee',
        'Unlimited Design Revisions',
        'Calendly & CRM Webhook Integration',
        '30-Day Post Launch Support',
      ],
      buttonText: 'Claim Growth Tier',
      highlightColor: 'from-flux-purple via-flux-blue to-flux-pink',
    },
    {
      name: 'Premium',
      price: '₹75,000',
      period: 'one-time project',
      description: 'Full digital brand experience for luxury brands, e-commerce, & established SaaS platforms.',
      popular: false,
      badge: 'Bespoke Experience',
      delivery: '10 Days Delivery',
      features: [
        'Everything in Growth Tier',
        'Full Multi-Page Funnel (Up to 4 Pages)',
        'Bespoke 3D Product Customizer Module',
        'OpenAI Autonomous Chatbot Integration',
        'Full Brand Identity & Design Tokens',
        'Custom GSAP Timeline Animations',
        'Priority 24/7 Slack / WhatsApp Channel',
        'Conversion A/B Test Blueprint',
      ],
      buttonText: 'Build Premium Suite',
      highlightColor: 'from-amber-400 to-flux-pink',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored pricing',
      description: 'For venture-backed companies requiring dedicated frontend architecture team & ongoing retainer.',
      popular: false,
      badge: 'Retainer & Scale',
      delivery: 'Dedicated Squad',
      features: [
        'Full Frontend System Architecture',
        'Dedicated UX Engineer & 3D Artist',
        'Continuous Weekly A/B Experiments',
        'Custom Micro-Frontend Integration',
        'SOC-2 Security & GDPR Compliance',
        'SLA Guaranteed Uptime Support',
      ],
      buttonText: 'Talk to Architect',
      highlightColor: 'from-emerald-400 to-flux-blue',
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-flux-purple/15 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-glass border border-white/10 text-xs font-semibold text-flux-pink mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Transparent Investment. <br />
            <span className="text-gradient-primary">Guaranteed High Returns.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg"
          >
            No hidden costs. No surprise fees. Standardized pricing backed by our 7-day delivery guarantee.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative ${
                plan.popular
                  ? 'border-2 border-flux-purple shadow-[0_0_50px_rgba(139,92,246,0.35)] bg-surface-glass/90 scale-105 z-10'
                  : 'border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge Header */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-flux-purple to-flux-pink text-white text-xs font-extrabold tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-white" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {!plan.popular && (
                  <div className="text-xs font-mono font-bold text-flux-blue uppercase tracking-wider mb-2">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-flux-gray mb-6 leading-relaxed min-h-[48px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl sm:text-5xl font-extrabold text-white`}>
                      {plan.price}
                    </span>
                    <span className="text-xs text-flux-gray font-mono">{plan.period}</span>
                  </div>
                  <div className="mt-2 text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> {plan.delivery}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">Included Features:</div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-flux-white">
                      <Check className="w-4 h-4 text-flux-blue flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBookCall}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink text-white shadow-lg hover:shadow-purple-500/50'
                    : 'glass-button text-white hover:border-flux-purple'
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
