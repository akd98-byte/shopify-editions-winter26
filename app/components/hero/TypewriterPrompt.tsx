'use client';

import React, { useEffect, useRef } from 'react';
import { animateTypewriter } from '@/animations/hero-reveal';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

const prompts = [
  'Create a checkout that converts...',
  'Build an AI-powered storefront...',
  'Scale B2B commerce globally...',
  'Design the future of shopping...',
];

export function TypewriterPrompt() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [currentPromptIndex, setCurrentPromptIndex] = React.useState(0);

  useEffect(() => {
    if (!textRef.current || prefersReducedMotion) {
      if (textRef.current) {
        textRef.current.textContent = prompts[0];
      }
      return;
    }

    const currentPrompt = prompts[currentPromptIndex];
    const timeline = animateTypewriter(textRef.current, currentPrompt);

    timeline.eventCallback('onComplete', () => {
      setTimeout(() => {
        setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
      }, 2000);
    });

    return () => {
      timeline.kill();
    };
  }, [currentPromptIndex, prefersReducedMotion]);

  return (
    <p
      ref={textRef}
      className="font-mono text-accent-ai text-lg md:text-xl mb-8 h-8"
    >
      {prefersReducedMotion ? prompts[0] : ''}
    </p>
  );
}
