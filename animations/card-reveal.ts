import { gsap } from './gsap.config';

export function animateCardReveal(cards: HTMLElement[]) {
  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 85%',
      },
    }
  );
}

export function animateCardHover(card: HTMLElement, isHovering: boolean) {
  gsap.to(card, {
    scale: isHovering ? 1.02 : 1,
    duration: 0.3,
    ease: 'power2.out',
  });
}
