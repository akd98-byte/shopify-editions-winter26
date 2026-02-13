import React from 'react';
import { ChapterTitle } from './ChapterTitle';
import { FeatureGrid } from './FeatureGrid';
import type { Chapter } from '@/app/lib/sanity.types';

interface ChapterWrapperProps {
  chapter: Chapter;
}

export function ChapterWrapper({ chapter }: ChapterWrapperProps) {
  return (
    <section
      id={chapter.slug.current}
      className="py-24 px-4 md:px-8 max-w-container mx-auto"
    >
      <ChapterTitle title={chapter.title} accentColor={chapter.accentColor} />
      
      {chapter.description && (
        <p className="text-text-muted text-lg mb-12 max-w-3xl">
          {chapter.description}
        </p>
      )}

      {chapter.features && chapter.features.length > 0 && (
        <FeatureGrid features={chapter.features} />
      )}
    </section>
  );
}
