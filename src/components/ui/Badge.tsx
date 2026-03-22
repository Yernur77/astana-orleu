import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-[#1a3a6b] text-white',
    secondary: 'bg-[#e2e6ed] text-[#1a3a6b]',
    accent: 'bg-[#c0c8d8] text-[#1a3a6b]',
    outline: 'border border-[#1a3a6b] text-[#1a3a6b] bg-transparent',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
