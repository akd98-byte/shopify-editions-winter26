'use client';

import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';
import { animateRevealOnScroll } from '@/animations/scroll-animations';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({ children, delay = 0, className }: RevealOnScrollProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isIntersecting && elementRef.current && !prefersReducedMotion) {
      animateRevealOnScroll(elementRef.current, delay);
    }
  }, [isIntersecting, delay, prefersReducedMotion]);

  return (
    <div ref={ref} className={className}>
      <div ref={elementRef} style={{ opacity: prefersReducedMotion ? 1 : 0 }}>
        {children}
      </div>
    </div>
  );
}
