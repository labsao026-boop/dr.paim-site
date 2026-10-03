import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AboutPaim } from './components/AboutPaim.tsx';
import { TestimonialsPaim } from './components/TestimonialsPaim.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
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
    </div>
  );
}
