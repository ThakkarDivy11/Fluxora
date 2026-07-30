'use client';

import { useState } from 'react';
import LenisProvider from '@/components/providers/LenisProvider';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LivePreviewSection from '@/components/sections/LivePreviewSection';
import ClientLogos from '@/components/sections/ClientLogos';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection';
import WhyFluxoraSection from '@/components/sections/WhyFluxoraSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import BookCallModal from '@/components/modals/BookCallModal';

export default function Home() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <LenisProvider>
      {/* Animated Splash Preloader */}
      <Preloader />

      {/* Interactive Magnetic Glow Cursor */}
      <CustomCursor />

      {/* Main Container */}
      <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC] overflow-hidden selection:bg-purple-500 selection:text-white">
        
        {/* Sticky Glass Navigation Bar */}
        <Navbar onOpenBookCall={() => setIsBookModalOpen(true)} />

        <main>
          {/* Hero Section with 3D Canvas */}
          <HeroSection onOpenBookCall={() => setIsBookModalOpen(true)} />

          {/* Live Preview Section with Scrolling Browser Mockup */}
          <LivePreviewSection />

          {/* Infinite Client Logos Marquee */}
          <ClientLogos />

          {/* About & Agency Manifesto Section */}
          <AboutSection onOpenBookCall={() => setIsBookModalOpen(true)} />

          {/* 3D Glass Services Section */}
          <ServicesSection />

          {/* Featured Portfolio & Case Study Showcase */}
          <FeaturedWorkSection />

          {/* Why Fluxora Direct Comparison Table */}
          <WhyFluxoraSection />

          {/* 7-Step Precision Process Timeline */}
          <ProcessSection />

          {/* Client Testimonials Slider */}
          <TestimonialsSection />

          {/* Investment & Pricing Tiers */}
          <PricingSection onOpenBookCall={() => setIsBookModalOpen(true)} />

          {/* FAQ Accordion */}
          <FAQSection />

          {/* Final CTA Section */}
          <FinalCTA onOpenBookCall={() => setIsBookModalOpen(true)} />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />

        {/* Lead Capture Strategy Call Modal */}
        <BookCallModal
          isOpen={isBookModalOpen}
          onClose={() => setIsBookModalOpen(false)}
        />
      </div>
    </LenisProvider>
  );
}
