import { gsap, ScrollTrigger } from './gsap.config';

export function initScrollAnimations() {
  ScrollTrigger.defaults({
    markers: process.env.NODE_ENV === 'development',
  });
}

export function animateChapterTitle(element: HTMLElement) {
  ScrollTrigger.create({
    trigger: element,
    start: 'top 20%',
    end: 'bottom 20%',
    pin: true,
    pinSpacing: false,
  });
}

export function animateRevealOnScroll(
  element: HTMLElement,
  delay: number = 0
) {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    }
  );
}

export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
