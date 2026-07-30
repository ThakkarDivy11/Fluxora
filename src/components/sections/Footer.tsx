'use client';

import { ArrowUp, Mail, MessageCircle, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/919664925159?text=Hi%20Fluxora%20Studio!%20I%20want%20to%20inquire%20about%20a%20high-converting%20landing%20page.";

  return (
    <footer className="bg-[#050816] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flux-purple via-flux-blue to-flux-pink p-[1.5px]">
                <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center">
                  <span className="font-extrabold text-xl text-gradient-primary">F</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  FLUXORA<span className="text-flux-blue">.</span>
                </span>
                <span className="text-[10px] tracking-widest text-flux-gray uppercase -mt-1 font-mono">
                  STUDIO
                </span>
              </div>
            </a>

            <p className="text-sm text-flux-gray max-w-sm mb-6 leading-relaxed">
              Landing Pages That Convert. Not Just Look Good. <br />
              Engineering high-ticket digital experiences for AI startups, SaaS, & luxury brands globally.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@fluxora-studio.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-flux-gray hover:text-white hover:border-flux-purple transition-all"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-flux-gray hover:text-emerald-400 hover:border-emerald-400 transition-all"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-flux-gray hover:text-flux-pink hover:border-flux-pink transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-flux-gray hover:text-flux-blue hover:border-flux-blue transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-flux-gray hover:text-white hover:border-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-flux-gray">
              <li><a href="#services" className="hover:text-white transition-colors">Services & Capabilities</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Featured Work</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Fluxora Studio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">7-Step Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Investment Tiers</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact Direct Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Direct Contact & WhatsApp</h4>
            <div className="space-y-3 text-sm text-flux-gray">
              <div>
                <span className="text-xs text-emerald-400 font-mono block uppercase">WhatsApp Direct Inquiry:</span>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-white font-bold font-mono hover:text-emerald-400 hover:underline flex items-center gap-1.5 mt-0.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  +91 96649 25159
                </a>
              </div>
              <div>
                <span className="text-xs text-flux-purple font-mono block uppercase">General Email:</span>
                <a href="mailto:hello@fluxora-studio.com" className="text-white hover:underline">hello@fluxora-studio.com</a>
              </div>
              <div>
                <span className="text-xs text-flux-pink font-mono block uppercase">Pricing Range:</span>
                <span className="text-white">₹20,000 – ₹50,000+ per Landing Page</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-flux-gray">
          <div>
            © {new Date().getFullYear()} Fluxora Studio. All rights reserved. Direct Inquiries: +91 96649 25159
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-flux-purple text-white transition-all group"
            data-cursor="TOP"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-flux-purple" />
          </button>
        </div>

      </div>
    </footer>
  );
}
