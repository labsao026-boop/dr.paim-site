import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AboutPaim } from './components/AboutPaim.tsx';
import { TestimonialsPaim } from './components/TestimonialsPaim.tsx';
import { Footer } from './components/Footer.tsx';
import { AutoScrollControl } from './components/AutoScrollControl.tsx';
import './utils/scroll.ts';

export default function App() {
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === 'complete') {
      const id = requestAnimationFrame(onLoad);
      return () => cancelAnimationFrame(id);
    }
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-sans selection:bg-[#0066FF]/10 selection:text-[#0066FF]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1" id="inicio">
        {/* Exact Hero Section with direct WhatsApp CTA */}
        <Hero />

        {/* Supporting Cohesive Sections */}
        <AboutPaim />
        <ServicesSection />
        <TestimonialsPaim />
      </main>

      {/* Professional Footer with Official Social Links & Contact */}
      <Footer />

      {/* Minimalist Guided Auto-Scroll & Back-to-Top Control */}
      <AutoScrollControl />
    </div>
  );
}
