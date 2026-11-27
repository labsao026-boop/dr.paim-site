import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Optimize GSAP ticker and ScrollTrigger for jitter-free scrolling
gsap.ticker.lagSmoothing(500, 33);
ScrollTrigger.config({
  ignoreMobileResize: true,
});

export const PAUSE_AUTOSCROLL_EVENT = 'drpaim:pause-autoscroll';

export function pauseAutoScroll() {
  window.dispatchEvent(new CustomEvent(PAUSE_AUTOSCROLL_EVENT));
}

export function getNavbarOffset(): number {
  if (typeof window === 'undefined') return 80;
  return window.innerWidth >= 640 ? 80 : 64;
}

export function scrollToSection(target: string | number) {
  pauseAutoScroll();

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isTopTarget = target === 0 || target === '#inicio' || target === '#';
  const offsetY = isTopTarget ? 0 : getNavbarOffset();

  if (prefersReducedMotion) {
    if (isTopTarget) {
      window.scrollTo(0, 0);
    } else if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offsetY;
        window.scrollTo(0, Math.max(0, y));
      }
    } else {
      window.scrollTo(0, Math.max(0, target - offsetY));
    }
    return;
  }

  gsap.killTweensOf(window);
  gsap.to(window, {
    duration: 0.75,
    scrollTo: {
      y: isTopTarget ? 0 : target,
      offsetY,
      autoKill: true,
    },
    ease: 'power3.out',
  });
}
