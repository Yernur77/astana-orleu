import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-sm border border-[#e2e6ed]',
        hoverable && 'transition-all duration-200 hover:shadow-md hover:border-[#c0c8d8]',
        className
      )}
    >
      {children}
    </div>
  );
}
