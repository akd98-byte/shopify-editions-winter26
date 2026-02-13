import React from 'react';
import { Button } from '../ui/Button';

export function GlobalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-border-subtle">
      <div className="max-w-container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-accent-ai"
            >
              <path
                d="M20.4 6.4L11.6 25.6M6.4 20.4L25.6 11.6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-text-primary font-bold text-xl">
              Shopify Editions
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            About
          </a>
          <Button variant="primary" size="sm">
            Log in
          </Button>
        </nav>

        <button className="md:hidden text-text-primary">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
