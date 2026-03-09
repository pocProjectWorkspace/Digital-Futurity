import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, heading, subheading, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-left')}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className={cn('text-silver text-lg leading-relaxed', align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl')}>
          {subheading}
        </p>
      )}
    </div>
  );
}
