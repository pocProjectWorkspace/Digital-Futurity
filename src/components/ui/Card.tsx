import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 md:p-8',
        hover && 'transition-all duration-300 hover:border-cyan/20 hover:glow-cyan',
        className
      )}
    >
      {children}
    </div>
  );
}
