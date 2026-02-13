'use client';

import React, { useEffect, useState } from 'react';

export function ReducedMotionToggle() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const toggleReducedMotion = () => {
    // This is informational only - actual preference is controlled by OS settings
    alert(
      'To change reduced motion preferences, please adjust your operating system accessibility settings.'
    );
  };

  return (
    <button
      onClick={toggleReducedMotion}
      className="fixed bottom-4 right-4 bg-bg-secondary border border-border-subtle text-text-muted hover:text-text-primary px-3 py-2 rounded-lg text-sm transition-colors z-40"
      aria-label="Reduced motion indicator"
    >
      {prefersReducedMotion ? '🐢 Reduced Motion On' : '⚡ Animations On'}
    </button>
  );
}
