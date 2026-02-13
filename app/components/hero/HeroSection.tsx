import React from 'react';
import { WebGLFluid } from './WebGLFluid';
import { TypewriterPrompt } from './TypewriterPrompt';
import { HeroText } from './HeroText';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  title: string[];
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({
  title = ['Shopify', 'Editions', 'Winter 2026'],
  ctaText = 'Explore Features',
  ctaLink = '#features',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* WebGL Background */}
      <WebGLFluid />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 text-center max-w-5xl mx-auto">
        <TypewriterPrompt />
        <HeroText lines={title} />
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const element = document.querySelector(ctaLink);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {ctaText}
          </Button>
          <Button variant="secondary" size="lg">
            Watch Keynote
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-muted"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
