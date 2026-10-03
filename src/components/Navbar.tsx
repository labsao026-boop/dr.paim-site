import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { DrPaimToothLogo, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './Icons.tsx';
import { getWhatsAppUrl, CONTACT_INFO } from '../config/contact.ts';

interface NavbarProps {
  onOpenAppointmentModal?: () => void;
}

export function Navbar({ onOpenAppointmentModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="w-full bg-white relative z-30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <a href="#" className="flex items-center gap-2.5 group">
          <DrPaimToothLogo className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF] transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-bold text-[20px] sm:text-[22px] tracking-tight text-[#0F172A] leading-none">
              Dr.Paim
            </span>
            <span className="text-[8px] sm:text-[8.5px] font-semibold text-[#64748B] tracking-[0.24em] uppercase mt-0.5">
              ODONTOLOGISTA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (strictly 1024px+) */}
        <nav className="hidden lg:flex items-center gap-8 lg:gap-9 text-[14px]">
          <a
            href="#inicio"
            className="text-[#0066FF] font-medium relative py-1 transition-colors group"
          >
            Início
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0066FF] rounded-full" />
          </a>
          <a
            href="#sobre"
            className="text-[#475569] hover:text-[#0066FF] font-medium transition-colors"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-[#475569] hover:text-[#0066FF] font-medium transition-colors"
          >
            Serviços
          </a>
          <a
            href="#depoimentos"
            className="text-[#475569] hover:text-[#0066FF] font-medium transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#contacto"
            className="text-[#475569] hover:text-[#0066FF] font-medium transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Right CTA Outline Pill Button (Desktop strictly 1024px+) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#rodape"
            className="border-[1.5px] border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white rounded-full px-5 py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            <span>Fale Comigo</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile & Tablet Header Menu Controls (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2.5">
          <a
            href="#rodape"
            className="hidden sm:inline-flex border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors text-[12px] font-medium px-4 py-2 rounded-full items-center"
          >
            <span>Fale Comigo</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-[#0F172A] hover:text-[#0066FF] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Minimalist White & Blue Drawer (mobile & tablet < 1024px) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Soft Dimmed Backdrop (tap outside to close) */}
        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        />

        {/* Contained Drawer Panel: 84% width (max 350px) with elegant rounded-l-3xl corners */}
        <div
          className={`absolute top-0 right-0 w-[84%] sm:w-[350px] max-w-[350px] h-full bg-white text-[#0F172A] shadow-[-12px_0_35px_rgba(0,0,0,0.1)] rounded-l-3xl transition-transform duration-300 ease-out flex flex-col justify-between overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Section */}
          <div className="p-5 sm:p-6">
            {/* Top Bar: Brand Logo & Subtle Minimal Close (X) Button */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EEF6FF] flex items-center justify-center text-[#0066FF] border border-[#0066FF]/10">
                  <DrPaimToothLogo className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[17px] tracking-tight text-[#0F172A] leading-tight">
                    Dr. Paim
                  </span>
                  <span className="text-[8px] font-medium text-[#64748B] tracking-[0.2em] uppercase mt-0.5">
                    ODONTOLOGISTA
                  </span>
                </div>
              </div>

              <button
                onClick={closeMenu}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Fechar menu"
              >
                <X size={19} strokeWidth={1.75} />
              </button>
            </div>

            {/* Twin CTA Pill Buttons (Side by Side in clean white & blue palette) */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {/* Left Pill: Solid #0066FF action */}
              <a
                href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de agendar uma consulta odontológica.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-[12.5px] py-2.5 px-3 rounded-full text-center shadow-sm shadow-[#0066FF]/20 transition-all flex items-center justify-center gap-1.5 active:scale-95"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>Agendar</span>
              </a>

              {/* Right Pill: Crisp Minimal Outline action */}
              <a
                href="#rodape"
                onClick={closeMenu}
                className="border border-slate-200 hover:border-[#0066FF] text-[#0F172A] hover:text-[#0066FF] font-medium text-[12.5px] py-2.5 px-3 rounded-full text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-1 active:scale-95"
              >
                <span>Fale Comigo</span>
                <ArrowRight size={13} strokeWidth={1.5} />
              </a>
            </div>

            {/* Navigation List (Thinner & Refined Typography) */}
            <nav className="flex flex-col">
              {/* Item: Início */}
              <a
                href="#inicio"
                onClick={closeMenu}
                className="flex items-center justify-between py-3.5 border-b border-slate-100 text-[15px] sm:text-[16px] font-normal text-[#1E293B] hover:text-[#0066FF] transition-colors group"
              >
                <span>Início</span>
                <ArrowRight size={15} strokeWidth={1.5} className="text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Item: Sobre o Dr. Paim (Expandable Submenu) */}
              <div className="border-b border-slate-100">
                <button
                  onClick={() => toggleSubmenu('about')}
                  className="w-full flex items-center justify-between py-3.5 text-[15px] sm:text-[16px] font-normal text-[#1E293B] hover:text-[#0066FF] transition-colors cursor-pointer"
                >
                  <span>Sobre o Dr. Paim</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={`text-slate-400 transition-transform duration-200 ${
                      openSubmenu === 'about' ? 'rotate-180 text-[#0066FF]' : ''
                    }`}
                  />
                </button>
                {openSubmenu === 'about' && (
                  <div className="pb-3.5 pl-2.5 space-y-2 text-[13px] text-slate-500 font-normal animate-fade-in border-l-2 border-[#0066FF]/20 ml-1">
                    <a
                      href="#sobre"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Trajetória & 15+ Anos
                    </a>
                    <a
                      href="#sobre"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Tecnologia & Escaneamento
                    </a>
                    <a
                      href="#sobre"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Biossegurança & Conforto
                    </a>
                  </div>
                )}
              </div>

              {/* Item: Tratamentos & Procedimentos (Expandable Submenu) */}
              <div className="border-b border-slate-100">
                <button
                  onClick={() => toggleSubmenu('services')}
                  className="w-full flex items-center justify-between py-3.5 text-[15px] sm:text-[16px] font-normal text-[#1E293B] hover:text-[#0066FF] transition-colors cursor-pointer"
                >
                  <span>Procedimentos</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={`text-slate-400 transition-transform duration-200 ${
                      openSubmenu === 'services' ? 'rotate-180 text-[#0066FF]' : ''
                    }`}
                  />
                </button>
                {openSubmenu === 'services' && (
                  <div className="pb-3.5 pl-2.5 space-y-2 text-[13px] text-slate-500 font-normal animate-fade-in border-l-2 border-[#0066FF]/20 ml-1">
                    <a
                      href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de consultar sobre Implantes Dentários.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Implantes & Reabilitação Oral
                    </a>
                    <a
                      href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de saber mais sobre Clareamento Dental.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Clareamento a Laser
                    </a>
                    <a
                      href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de saber mais sobre Alinhadores Invisíveis.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Alinhadores Invisíveis
                    </a>
                    <a
                      href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de saber mais sobre Facetas e Lentes de Contato.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block py-0.5 pl-2 hover:text-[#0066FF] transition-colors"
                    >
                      Facetas & Lentes em Resina
                    </a>
                    <a
                      href="#servicos"
                      onClick={closeMenu}
                      className="block pt-1 pl-2 text-xs font-medium text-[#0066FF] hover:underline"
                    >
                      Ver todos os procedimentos &rarr;
                    </a>
                  </div>
                )}
              </div>

              {/* Item: Depoimentos & Casos Reais */}
              <a
                href="#depoimentos"
                onClick={closeMenu}
                className="flex items-center justify-between py-3.5 border-b border-slate-100 text-[15px] sm:text-[16px] font-normal text-[#1E293B] hover:text-[#0066FF] transition-colors group"
              >
                <span>Casos & Depoimentos</span>
                <ArrowRight size={15} strokeWidth={1.5} className="text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Item: Contacto & Agendamento */}
              <a
                href="#contacto"
                onClick={closeMenu}
                className="flex items-center justify-between py-3.5 border-b border-slate-100 text-[15px] sm:text-[16px] font-normal text-[#1E293B] hover:text-[#0066FF] transition-colors group"
              >
                <span>Contacto & Localização</span>
                <ArrowRight size={15} strokeWidth={1.5} className="text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all" />
              </a>
            </nav>
          </div>

          {/* Bottom Drawer Footer: Minimalist Light Card */}
          <div className="p-5 bg-slate-50/70 border-t border-slate-100 rounded-bl-3xl">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Redes Oficiais
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 text-[#475569] hover:text-[#0066FF] hover:border-[#0066FF] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 text-[#475569] hover:text-[#0066FF] hover:border-[#0066FF] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href={CONTACT_INFO.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 text-[#475569] hover:text-[#0066FF] hover:border-[#0066FF] flex items-center justify-center transition-colors shadow-xs"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-[#0066FF] hover:text-[#0052CC] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}



