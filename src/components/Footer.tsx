import React from 'react';
import { ArrowRight, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { DrPaimToothLogo, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './Icons.tsx';
import { CONTACT_INFO, getWhatsAppUrl } from '../config/contact.ts';

export function Footer() {
  return (
    <footer id="rodape" className="w-full bg-[#0B132B] text-white pt-16 pb-12 border-t border-slate-800 scroll-mt-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand & Professional Profile (5 cols on desktop, 1 on tablet) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#0066FF] flex items-center justify-center text-white shadow-md shadow-[#0066FF]/30">
                <DrPaimToothLogo className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[22px] tracking-tight text-white leading-none">
                  Dr. Paim
                </span>
                <span className="text-[9px] font-semibold text-[#60A5FA] tracking-[0.24em] uppercase mt-1">
                  ODONTOLOGISTA
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              Odontologia moderna, estética e funcional com foco no bem-estar, tecnologia digital avançada e atendimento personalizado.
            </p>

            {/* Direct WhatsApp Pill */}
            <a
              href={getWhatsAppUrl('Olá, Dr. Paim! Gostaria de tirar uma dúvida pelo WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-md shadow-[#0066FF]/25 hover:shadow-lg transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>Fale Conosco: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Column 2: Navigation Links (3 cols on desktop, 1 on tablet) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-[#60A5FA] transition-colors py-0.5 inline-block">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#60A5FA] transition-colors py-0.5 inline-block">
                  Sobre o Dr. Paim
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#60A5FA] transition-colors py-0.5 inline-block">
                  Especialidades & Tratamentos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#60A5FA] transition-colors py-0.5 inline-block">
                  Casos Clínicos & Depoimentos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#60A5FA] transition-colors py-0.5 inline-block">
                  Agendamento & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Redes Sociais Oficiais (4 cols on desktop, full span on tablet) */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col">
            <h4 className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-4">
              Redes Sociais Oficiais
            </h4>
            <div className="flex flex-col gap-3">
              {/* Instagram */}
              <a
                href={CONTACT_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-[#E1306C]/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {CONTACT_INFO.social.instagram.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {CONTACT_INFO.social.instagram.handle}
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors mr-1" />
              </a>

              {/* Facebook */}
              <a
                href={CONTACT_INFO.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-[#1877F2]/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FacebookIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {CONTACT_INFO.social.facebook.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {CONTACT_INFO.social.facebook.handle}
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors mr-1" />
              </a>

              {/* TikTok */}
              <a
                href={CONTACT_INFO.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-[#00F2FE]/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <TikTokIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {CONTACT_INFO.social.tiktok.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {CONTACT_INFO.social.tiktok.handle}
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors mr-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>&copy; {new Date().getFullYear()} Dr. Paim Odontologia. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Atendimento com Hora Marcada</span>
            <span>&bull;</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60A5FA] hover:underline"
            >
              WhatsApp: {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
