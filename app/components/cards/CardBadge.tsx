import React from 'react';
import { cn } from '@/app/lib/utils';

interface CardBadgeProps {
  variant: 'new' | 'update' | 'beta';
}

export function CardBadge({ variant }: CardBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full',
        {
          'bg-accent-ai text-white': variant === 'new',
          'bg-accent-gold text-bg-primary': variant === 'update',
          'bg-white/10 text-text-primary border border-border-subtle': variant === 'beta',
        }
      )}
    >
      {variant}
    </span>
  );
}
