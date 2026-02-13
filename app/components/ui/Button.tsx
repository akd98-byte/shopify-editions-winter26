import React from 'react';
import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ai',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-accent-ai text-white hover:bg-opacity-90': variant === 'primary',
          'bg-bg-secondary text-text-primary border border-border-subtle hover:border-white':
            variant === 'secondary',
          'text-text-primary hover:text-white': variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm rounded-button': size === 'sm',
          'px-6 py-3 text-base rounded-button': size === 'md',
          'px-8 py-4 text-lg rounded-button': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
