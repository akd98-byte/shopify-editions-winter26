'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CardBadge } from './CardBadge';
import { CardSpotlight } from './CardSpotlight';
import { VideoPlayer } from '../primitives/VideoPlayer';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import { useEditionStore } from '@/app/store/edition.store';
import { trackFeatureClick, trackFeatureHover } from '@/app/lib/analytics';
import { cn } from '@/app/lib/utils';
import type { Feature } from '@/app/lib/sanity.types';

interface FeatureCardWideProps {
  feature: Feature;
  className?: string;
}

export function FeatureCardWide({ feature, className }: FeatureCardWideProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
  const { setIsVideoModalOpen, setCurrentVideoUrl } = useEditionStore();
  const [hoverStartTime, setHoverStartTime] = useState<number | null>(null);

  const handleClick = () => {
    trackFeatureClick(feature._id, feature.title);
    
    if (feature.media?.asset?.url) {
      setCurrentVideoUrl(feature.media.asset.url);
      setIsVideoModalOpen(true);
    }
  };

  const handleMouseEnter = () => {
    setHoverStartTime(Date.now());
  };

  const handleMouseLeave = () => {
    if (hoverStartTime) {
      const duration = Date.now() - hoverStartTime;
      trackFeatureHover(feature._id, duration);
      setHoverStartTime(null);
    }
  };

  return (
    <div ref={ref} className="md:col-span-2">
      <CardSpotlight
        className={cn(
          'group relative bg-bg-secondary border border-border-subtle rounded-card overflow-hidden',
          'hover:border-white/20 transition-all duration-300 cursor-pointer h-full',
          className
        )}
      >
        <div
          className="h-full flex flex-col md:flex-row"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Media */}
          <div className="relative md:w-1/2 aspect-video md:aspect-auto bg-black overflow-hidden">
            {feature.media?.asset?.url && isIntersecting ? (
              <VideoPlayer
                src={feature.media.asset.url}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            ) : feature.thumbnail?.asset?.url ? (
              <Image
                src={feature.thumbnail.asset.url}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent-ai/20 to-accent-gold/20" />
            )}
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-2xl font-semibold text-text-primary group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              {feature.badge && <CardBadge variant={feature.badge} />}
            </div>

            {feature.description && (
              <p className="text-text-muted mb-4 line-clamp-4">
                {feature.description}
              </p>
            )}

            {feature.links && feature.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {feature.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-sm text-accent-ai hover:text-accent-ai/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}
