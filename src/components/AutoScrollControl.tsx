import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Pause, Play } from 'lucide-react';
import gsap from 'gsap';
import { PAUSE_AUTOSCROLL_EVENT, scrollToSection } from '../utils/scroll.ts';

export function AutoScrollControl() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const controlRef = useRef<HTMLDivElement>(null);
  const autoScrollTweenRef = useRef<gsap.core.Tween | null>(null);

  // Lightweight rAF-throttled Back-to-Top visibility check
  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const shouldShow = window.scrollY > 360;
        setShowBackToTop((prev) => (prev === shouldShow ? prev : shouldShow));
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Guided sub-pixel smooth auto-scroll via GSAP ScrollToPlugin
  useEffect(() => {
    if (!isAutoScrolling) {
      if (autoScrollTweenRef.current) {
        autoScrollTweenRef.current.kill();
        autoScrollTweenRef.current = null;
      }
      return;
    }

    const stopAutoScroll = () => {
      setIsAutoScrolling(false);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (controlRef.current && controlRef.current.contains(e.target as Node)) {
        return;
      }
      stopAutoScroll();
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (controlRef.current && controlRef.current.contains(e.target as Node)) {
        return;
      }
      stopAutoScroll();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (scrollKeys.includes(e.key)) {
        stopAutoScroll();
      }
    };

    window.addEventListener('wheel', stopAutoScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener(PAUSE_AUTOSCROLL_EVENT, stopAutoScroll);

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const remainingPx = Math.max(0, maxScroll - window.scrollY);

    if (remainingPx <= 2) {
      setIsAutoScrolling(false);
      return;
    }

    const speedPxPerSec = 110;
    const duration = Math.max(0.5, remainingPx / speedPxPerSec);

    gsap.killTweensOf(window);
    autoScrollTweenRef.current = gsap.to(window, {
      scrollTo: {
        y: maxScroll,
        autoKill: true,
      },
      duration,
      ease: 'none',
      onComplete: () => {
        autoScrollTweenRef.current = null;
        setIsAutoScrolling(false);
      },
      onInterrupt: () => {
        autoScrollTweenRef.current = null;
        setIsAutoScrolling(false);
      },
    });

    return () => {
      if (autoScrollTweenRef.current) {
        autoScrollTweenRef.current.kill();
        autoScrollTweenRef.current = null;
      }
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener(PAUSE_AUTOSCROLL_EVENT, stopAutoScroll);
    };
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (!isAutoScrolling && window.scrollY >= maxScroll - 4) {
      scrollToSection(0);
      setTimeout(() => setIsAutoScrolling(true), 800);
      return;
    }
    setIsAutoScrolling((prev) => !prev);
  };

  const handleBackToTop = () => {
    setIsAutoScrolling(false);
    scrollToSection(0);
  };

  return (
    <div
      ref={controlRef}
      className="fixed bottom-5 right-5 z-30 flex items-center gap-1 p-1.5 rounded-full bg-white border border-slate-200 shadow-[0_10px_28px_-6px_rgba(15,23,42,0.16)]"
      aria-label="Controles de leitura e navegação"
    >
      <button
        type="button"
        onClick={toggleAutoScroll}
        title={isAutoScrolling ? 'Pausar scroll automático' : 'Iniciar leitura automática'}
        aria-label={isAutoScrolling ? 'Pausar scroll automático' : 'Iniciar scroll automático'}
        aria-pressed={isAutoScrolling}
        className={`h-9 px-3 rounded-full text-xs font-medium inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer active:scale-95 ${
          isAutoScrolling
            ? 'bg-[#0066FF] text-white shadow-sm shadow-[#0066FF]/30'
            : 'text-[#0F172A] hover:text-[#0066FF] hover:bg-[#EEF6FF]'
        }`}
      >
        {isAutoScrolling ? (
          <>
            <Pause size={13} className="fill-current" />
            <span className="hidden sm:inline">Pausar</span>
          </>
        ) : (
          <>
            <Play size={13} className="fill-current" />
            <span className="hidden sm:inline">Auto</span>
          </>
        )}
      </button>

      {showBackToTop && (
        <button
          type="button"
          onClick={handleBackToTop}
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
          className="w-9 h-9 rounded-full text-[#0F172A] hover:text-white hover:bg-[#0066FF] bg-[#F8FAFC] border border-slate-100 flex items-center justify-center transition-colors duration-200 cursor-pointer active:scale-95"
        >
          <ArrowUp size={15} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
