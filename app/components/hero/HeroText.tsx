'use client';

import React, { useEffect, useRef } from 'react';
import { animateHeroReveal } from '@/animations/hero-reveal';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface HeroTextProps {
  lines: string[];
}

export function HeroText({ lines }: HeroTextProps) {
  const linesRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const validElements = linesRef.current.filter(
      (el): el is HTMLHeadingElement => el !== null
    );

    if (validElements.length > 0) {
      const timeline = animateHeroReveal(validElements);
      return () => {
        timeline.kill();
      };
    }
  }, [prefersReducedMotion]);

  return (
    <div className="mb-12">
      {lines.map((line, index) => (
        <h1
          key={index}
          ref={(el) => {
            linesRef.current[index] = el;
          }}
          className="text-hero font-bold text-text-primary leading-none"
          style={{ opacity: prefersReducedMotion ? 1 : 0 }}
        >
          {line}
        </h1>
      ))}
    </div>
  );
}
