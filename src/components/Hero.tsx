import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Smile } from 'lucide-react';
import gsap from 'gsap';
import { ToothMinimalIcon, WhatsAppIcon } from './Icons.tsx';
import { getWhatsAppUrl } from '../config/contact.ts';

interface HeroProps {
  onOpenAppointmentModal?: () => void;
}

export function Hero({ onOpenAppointmentModal }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const doctorImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Content items staggered entrance
      gsap.from('.hero-anim-item', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.inOut',
        clearProps: 'transform',
      });

      // Doctor background image elegant scale & fade entrance
      if (doctorImgRef.current) {
        gsap.from(doctorImgRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 1.15,
          ease: 'power2.inOut',
          delay: 0.1,
          clearProps: 'transform',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white overflow-hidden min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background Doctor Image: hidden on mobile (< 640px), compact on tablet (sm/md), full on desktop (lg/xl) */}
      <div
        ref={doctorImgRef}
        className="hidden sm:flex absolute inset-y-0 right-0 sm:w-[46%] md:w-[48%] lg:w-[56%] xl:w-[52%] items-end justify-end pointer-events-none z-0"
      >
        <img
          src="https://res.cloudinary.com/r8des9mz/image/upload/v1790963047/M%C3%A9dico_sorridente_com_bra%C3%A7os_cruzados_1.png"
          alt="Dr. Paim - Médico sorridente com braços cruzados"
          referrerPolicy="no-referrer"
          className="h-[88%] lg:h-full w-auto max-w-none object-contain object-bottom select-none drop-shadow-sm"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-8 lg:pt-8 pb-10 sm:pb-12 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Main Column: Typography, Headline, CTA & 3 Features */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10 pt-1 lg:pt-2 sm:max-w-[390px] md:max-w-[430px] lg:max-w-none">
            {/* Eyebrow with wide letter-spacing and horizontal divider rule */}
            <div className="hero-anim-item flex items-center gap-3.5 mb-3.5 sm:mb-4">
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#64748B] tracking-[0.24em] sm:tracking-[0.26em] uppercase">
                SAÚDE ORAL &bull; MAIS QUALIDADE DE VIDA
              </span>
              <div className="w-14 sm:w-24 h-[1px] bg-[#CBD5E1]" />
            </div>

            {/* Main Headline H1 */}
            <h1 className="hero-anim-item flex flex-col mb-4 sm:mb-5 tracking-[-0.035em]">
              <span className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[72px] xl:text-[76px] font-bold text-[#0F172A] leading-[0.98]">
                Dr.Paim
              </span>
              <span className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[72px] xl:text-[76px] font-normal text-[#526077] leading-[1.02]">
                Odontologista
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="hero-anim-item text-[14px] sm:text-[15px] lg:text-[16px] text-[#64748B] leading-[1.65] max-w-[420px] mb-7 sm:mb-8">
              Cuidado, tecnologia e experiência para
              <br />
              um sorriso mais saudável e confiante.
            </p>

            {/* Primary CTA Button: Direct to WhatsApp */}
            <div className="hero-anim-item w-full sm:w-auto">
              <a
                href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de agendar uma consulta odontológica.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm sm:text-[15px] px-8 py-3.5 rounded-full shadow-md shadow-[#0066FF]/25 hover:shadow-xl hover:shadow-[#0066FF]/35 transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Agendar Consulta</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Bottom 3 Feature Highlights: encased in subtle pill-card strip on mobile */}
            <div className="hero-anim-item mt-8 sm:mt-10 lg:mt-12 bg-slate-50/80 sm:bg-transparent border border-slate-100/90 sm:border-none rounded-2xl p-3.5 sm:p-0 grid grid-cols-3 gap-1.5 sm:flex sm:flex-nowrap items-center sm:gap-y-0 w-full sm:w-auto shadow-xs sm:shadow-none">
              {/* Feature 1: Atendimento personalizado */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pr-0 sm:pr-6 md:pr-7">
                <Shield size={18} strokeWidth={1.5} className="text-[#334155] mb-1.5 sm:mb-2 sm:w-5 sm:h-5" />
                <span className="text-[10.5px] sm:text-[12px] md:text-[13px] font-medium text-[#334155] leading-snug">
                  Atendimento
                  <br />
                  personalizado
                </span>
              </div>

              {/* Hairline Divider */}
              <div className="hidden sm:block w-[1px] h-9 bg-[#E2E8F0] mr-4 sm:mr-6 md:mr-7 shrink-0" />

              {/* Feature 2: Tecnologia de ponta */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-1 sm:px-0 sm:pr-6 md:pr-7">
                <ToothMinimalIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#334155] mb-1.5 sm:mb-2" />
                <span className="text-[10.5px] sm:text-[12px] md:text-[13px] font-medium text-[#334155] leading-snug">
                  Tecnologia
                  <br />
                  de ponta
                </span>
              </div>

              {/* Hairline Divider */}
              <div className="hidden sm:block w-[1px] h-9 bg-[#E2E8F0] mr-4 sm:mr-6 md:mr-7 shrink-0" />

              {/* Feature 3: Resultados naturais */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <Smile size={18} strokeWidth={1.5} className="text-[#334155] mb-1.5 sm:mb-2 sm:w-5 sm:h-5" />
                <span className="text-[10.5px] sm:text-[12px] md:text-[13px] font-medium text-[#334155] leading-snug">
                  Resultados
                  <br />
                  naturais
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean space for doctor background image on desktop and tablet */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 relative min-h-[540px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}



