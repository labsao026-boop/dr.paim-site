import React, { useEffect, useRef } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlueCircleCheckIcon, WhatsAppIcon } from './Icons.tsx';
import { getWhatsAppUrl } from '../config/contact.ts';

gsap.registerPlugin(ScrollTrigger);

interface AboutPaimProps {
  onOpenAppointmentModal?: () => void;
}

export function AboutPaim({ onOpenAppointmentModal }: AboutPaimProps) {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      // Doctor portrait card fade-up
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 92%',
              once: true,
            },
            clearProps: 'all',
          }
        );
      }

      // Bio text items and checklist cascade
      if (bioRef.current) {
        gsap.fromTo(
          '.about-anim-item',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.09,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: bioRef.current,
              start: 'top 92%',
              once: true,
            },
            clearProps: 'all',
          }
        );
      }
    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const highlights = [
    'Mais de 15 anos de dedicação à odontologia estética e funcional',
    'Planejamento digital com escaneamento intraoral sem moldes desconfortáveis',
    'Protocolos rigorosos de esterilização e biossegurança hospitalar',
    'Ambiente calmo, privativo e projetado para seu máximo conforto',
  ];

  return (
    <section ref={containerRef} id="sobre" className="w-full bg-white py-12 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left Column: Doctor Portrait Card Filled with Provided Image */}
          <div ref={cardRef} className="md:col-span-5 relative flex items-center justify-center">
            {/* Ambient Soft Glow Behind Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0066FF]/10 via-[#0066FF]/5 to-transparent rounded-[40px] blur-xl -z-10" />

            {/* Perfect Image Card */}
            <div className="relative w-full max-w-[310px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[430px] aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,102,255,0.12)] group">
              <img
                src="https://res.cloudinary.com/r8des9mz/image/upload/v1790970852/Retrato_profissional_de_m%C3%A9dico_sorridente.png"
                alt="Dr. Paim - Retrato profissional"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 select-none"
              />

              {/* Bottom Subtle Overlay Card */}
              <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[15px] font-bold text-[#0F172A] leading-tight">
                    Dr. Paim
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-[#0066FF] tracking-wider uppercase mt-0.5">
                    Cirurgião-Dentista
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF6FF] rounded-full text-[#0066FF] text-[10px] sm:text-xs font-semibold">
                  <Award size={13} />
                  <span>15+ Anos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div ref={bioRef} className="md:col-span-7 flex flex-col items-start">
            <span className="about-anim-item text-[10px] sm:text-[11px] font-semibold text-[#64748B] tracking-[0.24em] uppercase block mb-2.5 sm:mb-3">
              SOBRE O PROFISSIONAL
            </span>

            <h2 className="about-anim-item text-[26px] sm:text-[38px] lg:text-[42px] font-bold text-[#0F172A] tracking-[-0.03em] leading-tight mb-4 sm:mb-6">
              Compromisso com a sua saúde, bem-estar e <span className="text-[#0066FF]">confiança</span>
            </h2>

            <p className="about-anim-item text-[13.5px] sm:text-base text-[#64748B] leading-[1.65] mb-3.5 sm:mb-5">
              O Dr. Paim combina visão artística, precisão técnica e equipamentos de última geração
              para oferecer tratamentos odontológicos minimamente invasivos, confortáveis e altamente eficazes.
            </p>

            <p className="about-anim-item text-[13.5px] sm:text-base text-[#64748B] leading-[1.65] mb-6 sm:mb-8">
              Cada plano de tratamento é desenhado exclusivamente para a anatomia e os objetivos de cada paciente,
              priorizando a preservação da estrutura dental e a harmonia facial biológica.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 sm:space-y-3.5 mb-7 sm:mb-9 w-full">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-anim-item flex items-start gap-2.5 sm:gap-3 py-0.5">
                  <BlueCircleCheckIcon className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[14px] text-[#334155] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="about-anim-item w-full sm:w-auto">
              <a
                href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de conhecer o consultório e agendar uma avaliação.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm sm:text-[15px] px-8 py-3.5 rounded-full shadow-md shadow-[#0066FF]/20 hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Conhecer o Consultório</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

