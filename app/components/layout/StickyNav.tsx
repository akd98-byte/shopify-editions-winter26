'use client';

import React from 'react';
import { useScrollSpy } from '@/app/hooks/useScrollSpy';
import { useEditionStore } from '@/app/store/edition.store';
import { scrollTo } from '@/animations/smooth-scroll';
import { cn } from '@/app/lib/utils';
import type { Chapter } from '@/app/lib/sanity.types';

interface StickyNavProps {
  chapters: Chapter[];
}

export function StickyNav({ chapters }: StickyNavProps) {
  const chapterIds = chapters.map((ch) => ch.slug.current);
  const activeId = useScrollSpy(chapterIds, 200);
  const { setIsSearchOpen } = useEditionStore();

  const handleNavClick = (id: string) => {
    scrollTo(`#${id}`);
  };

  return (
    <nav className="fixed top-20 left-0 right-0 z-40 bg-bg-primary/60 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-container mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-6">
            {chapters.map((chapter) => (
              <button
                key={chapter._id}
                onClick={() => handleNavClick(chapter.slug.current)}
                className={cn(
                  'whitespace-nowrap text-sm font-medium transition-colors',
                  activeId === chapter.slug.current
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                )}
              >
                {chapter.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-bg-secondary border border-border-subtle rounded-lg text-text-muted hover:text-text-primary hover:border-white/20 transition-all"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="7" cy="7" r="5" />
              <path d="M14 14l-3-3" />
            </svg>
            <span className="text-sm">Search</span>
            <kbd className="text-xs px-1.5 py-0.5 bg-white/10 rounded">⌘K</kbd>
          </button>
        </div>
      </div>
    </nav>
  );
}
