'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Send, ShieldCheck, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'AI Startup',
    budget: 'Growth Tier (₹45,000)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Fire celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Generate pre-filled WhatsApp message URL targeting +91 9664925159
    const phoneNumber = '919664925159';
    const textMessage = `*🔥 New Inquiry for Fluxora Studio!*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Business Category:* ${encodeURIComponent(formData.businessType)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Project Details:* ${encodeURIComponent(formData.message || 'Needs high-converting landing page')}`;
    
    const waUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    // Open WhatsApp in new tab after brief delay for smooth UI feedback
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-[#050816]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-surface-glass border border-white/20 rounded-3xl p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] my-auto overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-flux-purple/20 text-flux-purple text-xs font-mono font-bold border border-flux-purple/30 w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Book 1-on-1 Strategy Call
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                Let's Reserve Your <span className="text-gradient-primary">7-Day Slot</span>
              </h2>

              <p className="text-xs sm:text-sm text-flux-gray mb-6">
                Fill in your details below. Your inquiry will be automatically routed directly to WhatsApp (<span className="text-white font-mono">+91 9664925159</span>).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-flux-gray mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-flux-purple focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-flux-gray mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-flux-purple focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-flux-gray mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 96649 25159"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-flux-purple focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-flux-gray mb-1">Business Category</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-white/10 text-white text-sm focus:border-flux-purple focus:outline-none"
                    >
                      <option value="AI Startup">AI Startup</option>
                      <option value="SaaS Company">SaaS Company</option>
                      <option value="Luxury / D2C Brand">Luxury / D2C Brand</option>
                      <option value="Agency / Coach">Agency / Coach</option>
                      <option value="Personal Brand">Personal Brand</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-flux-gray mb-1">Budget Allocation</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-white/10 text-white text-sm focus:border-flux-purple focus:outline-none"
                  >
                    <option value="Starter Tier (₹25,000)">Starter Tier (₹25,000)</option>
                    <option value="Growth Tier (₹45,000)">Growth Tier (₹45,000)</option>
                    <option value="Premium Suite (₹75,000)">Premium Suite (₹75,000)</option>
                    <option value="Enterprise / Custom">Enterprise / Custom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-flux-gray mb-1">Project Details / Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your product, target audience, or current conversion challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-flux-purple focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-flux-blue to-flux-purple text-white font-bold text-base shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Send Direct WhatsApp Inquiry</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-flux-gray pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Direct Routing to WhatsApp: +91 9664925159</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Redirecting to WhatsApp...</h3>
              <p className="text-sm text-flux-gray max-w-md mx-auto mb-6">
                Thank you <span className="text-white font-bold">{formData.name}</span>! Opening WhatsApp to send your inquiry directly to <span className="text-emerald-400 font-mono font-bold">+91 9664925159</span>.
              </p>
              <a
                href={`https://wa.me/919664925159?text=*🔥 New Inquiry for Fluxora Studio!*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Business:* ${encodeURIComponent(formData.businessType)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Message:* ${encodeURIComponent(formData.message || 'Needs landing page')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-500 text-black font-extrabold text-xs shadow-lg hover:bg-emerald-400 transition-all mb-4"
              >
                <MessageSquare className="w-4 h-4" /> Click Here If WhatsApp Didn't Open Automatically
              </a>
              <br />
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-flux-gray underline hover:text-white mt-2"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
