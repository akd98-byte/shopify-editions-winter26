import React from 'react';
import { cn } from '@/app/lib/utils';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassContainer({ children, className }: GlassContainerProps) {
  return (
    <div
      className={cn(
        'bg-overlay-glass backdrop-blur-glass border border-border-subtle rounded-card',
        className
      )}
    >
      {children}
    </div>
  );
}
