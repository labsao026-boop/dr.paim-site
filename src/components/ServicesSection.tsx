import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, HeartPulse, Stethoscope } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToothMinimalIcon, WhatsAppIcon } from './Icons.tsx';
import { getWhatsAppUrl } from '../config/contact.ts';

gsap.registerPlugin(ScrollTrigger);

interface ServicesSectionProps {
  onOpenAppointmentModal?: () => void;
}

export function ServicesSection({ onOpenAppointmentModal }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      id: 1,
      title: 'Ortodontia & Alinhadores',
      description:
        'Alinhadores invisíveis modernos e aparelhos estéticos com planejamento digital 3D para um sorriso harmonioso.',
      icon: <Sparkles className="w-6 h-6 text-[#0066FF]" />,
      tag: 'Alta Precisão',
    },
    {
      id: 2,
      title: 'Estética Dental & Clareamento',
      description:
        'Facetas de porcelana, lentes de contato dental e clareamento a laser para realçar a luminosidade natural dos seus dentes.',
      icon: <ToothMinimalIcon className="w-6 h-6 text-[#0066FF]" />,
      tag: 'Resultados Naturais',
    },
    {
      id: 3,
      title: 'Implantes & Reabilitação',
      description:
        'Tecnologia guiada por computador para implantes seguros, confortáveis e com recuperação rápida e previsível.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0066FF]" />,
      tag: 'Tecnologia de Ponta',
    },
    {
      id: 4,
      title: 'Prevenção & Saúde Periodontal',
      description:
        'Check-up digital com câmera intraoral, profilaxia ultrassônica e monitoramento contínuo da sua saúde bucal.',
      icon: <HeartPulse className="w-6 h-6 text-[#0066FF]" />,
      tag: 'Cuidado Contínuo',
    },
    {
      id: 5,
      title: 'Endodontia & Preservação',
      description:
        'Tratamento de canal sob microscopia óptica para desinfecção milimétrica, alívio da dor e preservação do dente.',
      icon: <Stethoscope className="w-6 h-6 text-[#0066FF]" />,
      tag: 'Conforto & Precisão',
    },
    {
      id: 6,
      title: 'Harmonização Orofacial',
      description:
        'Procedimentos minimamente invasivos que valorizam as linhas do sorriso e proporcionam simetria natural.',
      icon: <Sparkles className="w-6 h-6 text-[#0066FF]" />,
      tag: 'Equilíbrio Estético',
    },
  ];

  // Tripled list for a seamless, continuous infinite loop track
  const carouselItems = [...services, ...services, ...services];

  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize track position to the middle set on mount
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const singleSetWidth = track.scrollWidth / 3;
      track.scrollLeft = singleSetWidth;
    }
  }, []);

  // Continuous fluid motion loop (60fps requestAnimationFrame)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const moveTrack = () => {
      if (!isPaused && !isDragging) {
        track.scrollLeft += 0.8; // Smooth, elegant dynamic pace

        const singleSetWidth = track.scrollWidth / 3;
        // Infinite wraparound in both directions
        if (track.scrollLeft >= singleSetWidth * 2) {
          track.scrollLeft -= singleSetWidth;
        } else if (track.scrollLeft <= 0) {
          track.scrollLeft += singleSetWidth;
        }
      }
      animationFrameRef.current = requestAnimationFrame(moveTrack);
    };

    animationFrameRef.current = requestAnimationFrame(moveTrack);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, isDragging]);

  // Drag interaction handlers (mouse & touch)
  const handleMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.pageX - track.offsetLeft);
    setScrollLeft(track.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;

    const singleSetWidth = track.scrollWidth / 3;
    if (track.scrollLeft >= singleSetWidth * 2) {
      track.scrollLeft -= singleSetWidth;
    } else if (track.scrollLeft <= 0) {
      track.scrollLeft += singleSetWidth;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - track.offsetLeft);
    setScrollLeft(track.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;

    const singleSetWidth = track.scrollWidth / 3;
    if (track.scrollLeft >= singleSetWidth * 2) {
      track.scrollLeft -= singleSetWidth;
    } else if (track.scrollLeft <= 0) {
      track.scrollLeft += singleSetWidth;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Nudge navigation buttons
  const nudge = (direction: 'next' | 'prev') => {
    const track = trackRef.current;
    if (!track) return;
    const step = 310;
    track.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 92%',
              once: true,
            },
            clearProps: 'all',
          }
        );
      }

      if (carouselWrapperRef.current) {
        gsap.fromTo(
          carouselWrapperRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: carouselWrapperRef.current,
              start: 'top 92%',
              once: true,
            },
            clearProps: 'all',
          }
        );
      }
    }, sectionRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="servicos" className="w-full bg-[#F8FAFC] py-14 sm:py-20 border-t border-slate-100 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Original Typography and Dynamic Controls */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#64748B] tracking-[0.24em] uppercase block mb-3">
              ESPECIALIDADES ODONTOLÓGICAS
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#0F172A] tracking-[-0.03em] leading-tight">
              Tratamentos modernos para o seu <span className="text-[#0066FF]">melhor sorriso</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => nudge('prev')}
              className="p-2.5 sm:p-3 rounded-full border border-slate-200 bg-white text-[#0F172A] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => nudge('next')}
              className="p-2.5 sm:p-3 rounded-full border border-slate-200 bg-white text-[#0F172A] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
            <a
              href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de consultar todos os procedimentos odontológicos e agendar uma avaliação.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors group cursor-pointer ml-3"
            >
              <span>Saiba Mais</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Contained Carousel Wrapper with Smooth Edge Fade Masks */}
        <div ref={carouselWrapperRef} className="relative w-full overflow-hidden">
          {/* Lateral Edge Fade Gradients for Refined Contained Aesthetic */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-16 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-16 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />

          {/* Dynamic Infinite Scroll Track */}
          <div
            ref={trackRef}
            className="w-full overflow-x-scroll scrollbar-none py-3 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              if (!isDragging) setIsPaused(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-4 sm:gap-5 w-max px-2 sm:px-4">
              {carouselItems.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="w-[260px] sm:w-[280px] md:w-[290px] shrink-0"
                >
                  {/* Exact Original Card Appearance */}
                  <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,102,255,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.1)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                    <div>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EEF6FF] flex items-center justify-center mb-5 sm:mb-6 transition-colors group-hover:bg-[#0066FF] group-hover:text-white">
                        {React.cloneElement(service.icon, {
                          className: "w-5 h-5 sm:w-6 sm:h-6 transition-colors group-hover:text-white text-[#0066FF]",
                        })}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#0066FF] tracking-wide uppercase block mb-2">
                        {service.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-2.5 sm:mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#64748B] leading-[1.65]">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={getWhatsAppUrl(`Olá, Dr. Paim! Gostaria de saber mais informações sobre o tratamento de ${service.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#0066FF] inline-flex items-center gap-1 group-hover:underline cursor-pointer py-1"
                      >
                        <span>Saiba mais</span>
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Call to Action Link */}
        <div className="mt-8 sm:hidden text-center px-4">
          <a
            href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de consultar todos os procedimentos e agendar uma avaliação.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[280px] mx-auto py-3 px-5 rounded-full border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all inline-flex items-center justify-center gap-2 text-xs font-semibold shadow-xs"
          >
            <span>Saiba Mais sobre Tratamentos</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}



