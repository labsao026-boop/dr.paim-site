import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WhatsAppIcon } from './Icons.tsx';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact.ts';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsPaimProps {
  onOpenAppointmentModal?: () => void;
}

export function TestimonialsPaim({ onOpenAppointmentModal }: TestimonialsPaimProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryCardRef = useRef<HTMLDivElement>(null);
  const testimonialsListRef = useRef<HTMLDivElement>(null);
  const contactBannerRef = useRef<HTMLDivElement>(null);

  const patientImages = [
    'https://res.cloudinary.com/r8des9mz/image/upload/v1791022580/470938324_18476044642039701_256077602641235139_n.jpg',
    'https://res.cloudinary.com/r8des9mz/image/upload/v1791022580/493563811_1264044752390844_30401824988038570_n.jpg',
    'https://res.cloudinary.com/r8des9mz/image/upload/v1791022572/494730754_1274617601333559_3461689859268723536_n.jpg',
    'https://res.cloudinary.com/r8des9mz/image/upload/v1791022574/492804115_1264953335633319_7499630647413029650_n.jpg',
    'https://res.cloudinary.com/r8des9mz/image/upload/v1791022576/495178269_1271170211678298_3271779105587573536_n.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic crossfade dissolve timer (every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % patientImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [patientImages.length]);

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Refresh ScrollTrigger after layout settles to guarantee accurate positions
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 16 },
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

      if (galleryCardRef.current) {
        gsap.fromTo(
          galleryCardRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: galleryCardRef.current,
              start: 'top 92%',
              once: true,
            },
            clearProps: 'all',
          }
        );
      }

      const cards = sectionRef.current?.querySelectorAll('.testimonial-card-anim');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: testimonialsListRef.current || sectionRef.current,
              start: 'top 94%',
              once: true,
            },
            clearProps: 'all',
          }
        );
      }

      if (contactBannerRef.current) {
        gsap.fromTo(
          contactBannerRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: contactBannerRef.current,
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

  const testimonials = [
    {
      id: 1,
      quote:
        'O Dr. Paim transformou minha confiança com as facetas. O processo foi indolor e o resultado ficou incrivelmente natural!',
      author: 'Carolina Mendes',
      role: 'Paciente há 3 anos &bull; Facetas em Resina',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Clínica impecável, pontualidade britânica e um atendimento que tira todo o medo de dentista. Recomendo de olhos fechados.',
      author: 'Marcelo Rezende',
      role: 'Tratamento com Alinhadores Invisíveis',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'A clareza nas explicações e a tecnologia dos equipamentos me impressionaram. Minha reabilitação oral foi um sucesso completo.',
      author: 'Juliana Costa',
      role: 'Implante & Reabilitação Estética',
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} id="depoimentos" className="w-full bg-[#F8FAFC] py-16 sm:py-24 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#64748B] tracking-[0.24em] uppercase block mb-3">
            EXPERIÊNCIAS REAIS
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#0F172A] tracking-[-0.03em] leading-tight mb-3">
            O que nossos pacientes <span className="text-[#0066FF]">compartilham</span>
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Histórias reais de satisfação e confiança no cuidado odontológico do Dr. Paim.
          </p>
        </div>

        {/* 2-Column Layout: Left Crossfade Image Slot & Right Stacked Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center mb-12 sm:mb-20">
          {/* Left Column: Crossfade Image Card with Patient Cases */}
          <div ref={galleryCardRef} className="md:col-span-5 relative flex items-center justify-center">
            {/* Ambient Soft Glow Behind Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0066FF]/10 via-[#0066FF]/5 to-transparent rounded-[40px] blur-xl -z-10" />

            {/* Perfect Image Card with Crossfade Dissolve Transition */}
            <div className="relative w-full max-w-[310px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[430px] aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,102,255,0.12)] group bg-slate-900">
              {patientImages.map((src, idx) => {
                const isActive = idx === currentImageIndex;
                return (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Dr. Paim - Caso Clínico e Paciente ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover object-center select-none transition-transform duration-5000 ease-out ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  </div>
                );
              })}

              {/* Discreet Top Image Indicators */}
              <div className="absolute top-4 left-0 right-0 z-20 flex justify-center items-center gap-1.5 px-4 pointer-events-none">
                {patientImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === currentImageIndex
                        ? 'w-6 bg-white shadow-sm'
                        : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Bottom Subtle Overlay Badge */}
              <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between z-20 transition-transform duration-300 group-hover:translate-y-[-2px]">
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[15px] font-bold text-[#0F172A] leading-tight">
                    Casos Reais &bull; Dr. Paim
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-[#0066FF] tracking-wider uppercase mt-0.5">
                    Avaliação 5.0 &bull; +1.200 Sorrisos
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Testimonial Cards Stacked Vertically, Harmonious & Concise */}
          <div ref={testimonialsListRef} className="md:col-span-7 flex flex-col gap-4 sm:gap-4.5 justify-between">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="testimonial-card-anim bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,102,255,0.04)] hover:shadow-[0_10px_30px_rgba(0,102,255,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  {/* Subtle Quote Icon */}
                  <Quote size={18} className="text-[#0066FF]/20 group-hover:text-[#0066FF]/40 transition-colors shrink-0" />
                </div>

                {/* Concise Testimonial Quote */}
                <p className="text-[13px] sm:text-[14px] text-[#334155] leading-[1.65] mb-4 italic">
                  "{item.quote}"
                </p>

                {/* Patient Author Signature */}
                <div className="pt-3 border-t border-slate-100/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EEF6FF] text-[#0066FF] font-bold text-xs flex items-center justify-center shrink-0">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#0F172A] leading-tight">
                      {item.author}
                    </h4>
                    <span
                      className="text-[11px] text-[#64748B] block mt-0.5"
                      dangerouslySetInnerHTML={{ __html: item.role }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Consultation Banner */}
        <div ref={contactBannerRef} id="contacto" className="bg-[#0066FF] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-16 text-white shadow-xl shadow-[#0066FF]/20 relative overflow-hidden">
          {/* Subtle Background Glow Elements */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-[10px] sm:text-[11px] font-semibold text-white/80 tracking-[0.24em] uppercase block mb-2 sm:mb-3">
                AGENDE SUA AVALIAÇÃO
              </span>
              <h3 className="text-[24px] sm:text-[38px] font-bold tracking-tight leading-tight mb-3 sm:mb-4 text-white">
                Pronto para conquistar um sorriso mais saudável e confiante?
              </h3>
              <p className="text-xs sm:text-base text-white/85 max-w-xl mb-6 leading-relaxed">
                Entre em contato com nossa equipe para agendar sua consulta personalizada com o Dr. Paim.
                Atendemos com total privacidade e hora marcada.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-white/90">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors bg-white/12 sm:bg-transparent py-2 px-3.5 sm:p-0 rounded-xl border border-white/10 sm:border-none w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                  <span className="font-semibold">{CONTACT_INFO.phoneDisplay}</span>
                </a>
                <div className="flex items-center gap-2.5 bg-white/12 sm:bg-transparent py-2 px-3.5 sm:p-0 rounded-xl border border-white/10 sm:border-none w-full sm:w-auto">
                  <MapPin size={15} className="shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/12 sm:bg-transparent py-2 px-3.5 sm:p-0 rounded-xl border border-white/10 sm:border-none w-full sm:w-auto">
                  <Clock size={15} className="shrink-0" />
                  <span>Segunda a Sábado &bull; Hora Marcada</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex md:justify-end w-full">
              <a
                href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de agendar uma consulta de avaliação odontológica.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center bg-white text-[#0066FF] hover:bg-slate-50 font-bold text-sm sm:text-[15px] px-8 py-4 rounded-full shadow-lg transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer active:scale-[0.98] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Agendar Consulta</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

