import React from 'react';
import { FeatureCard } from '../cards/FeatureCard';
import { FeatureCardWide } from '../cards/FeatureCardWide';
import { FeatureCardLarge } from '../cards/FeatureCardLarge';
import type { Feature } from '@/app/lib/sanity.types';

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
      {features.map((feature) => {
        if (feature.gridSize === 'large') {
          return <FeatureCardLarge key={feature._id} feature={feature} />;
        } else if (feature.gridSize === 'wide') {
          return <FeatureCardWide key={feature._id} feature={feature} />;
        } else {
          return <FeatureCard key={feature._id} feature={feature} />;
        }
      })}
    </div>
  );
}
