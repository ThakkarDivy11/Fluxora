'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBookCall: () => void;
}

export default function Navbar({ onOpenBookCall }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#050816]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            data-cursor="FLUXORA"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-flux-purple via-flux-blue to-flux-pink p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center">
                <span className="font-extrabold text-xl text-gradient-primary">F</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-flux-purple transition-colors">
                FLUXORA<span className="text-flux-blue">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-flux-gray uppercase -mt-1 font-mono">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-glass border border-white/10 px-5 py-2 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-flux-gray hover:text-white transition-colors relative rounded-full group"
                data-cursor="NAV"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-flux-purple to-flux-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBookCall}
              data-cursor="BOOK"
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-sm transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink animate-aurora-spin" />
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050816] text-white transition-all group-hover:bg-transparent group-hover:text-white">
                <Sparkles className="w-4 h-4 text-flux-blue animate-pulse" />
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4 text-flux-gray group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-surface-glass border border-white/10 text-white hover:text-flux-purple transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-2xl lg:hidden flex flex-col pt-28 px-6 pb-10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-bold text-white hover:text-flux-purple transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-flux-gray" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookCall();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-flux-purple via-flux-blue to-flux-pink text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </button>
              <div className="text-center text-xs text-flux-gray">
                High-Converting Landing Pages • ₹20,000–₹50,000+
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
