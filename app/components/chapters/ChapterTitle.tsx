'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';
import { animateChapterTitle } from '@/animations/scroll-animations';

interface ChapterTitleProps {
  title: string;
  accentColor?: string;
}

export function ChapterTitle({ title, accentColor }: ChapterTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (titleRef.current && !prefersReducedMotion) {
      animateChapterTitle(titleRef.current);
    }
  }, [prefersReducedMotion]);

  return (
    <h2
      ref={titleRef}
      className="text-chapter font-bold text-text-primary mb-12"
      style={{
        color: accentColor || undefined,
      }}
    >
      {title}
    </h2>
  );
}
