import { gsap } from './gsap.config';

export function animateHeroReveal(elements: HTMLElement[]) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo(
    elements,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
    }
  );

  return tl;
}

export function animateTypewriter(element: HTMLElement, text: string) {
  const chars = text.split('');
  element.textContent = '';

  const tl = gsap.timeline();

  chars.forEach((char, index) => {
    tl.to(
      {},
      {
        duration: 0.05,
        onStart: () => {
          element.textContent += char;
        },
      },
      index * 0.05
    );
  });

  return tl;
}
