'use client';

import AnimatedReveal from '@/components/ui/AnimatedReveal';
import Button from '@/components/ui/Button';

export default function HomeCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Editorial gradient wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-cyan/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedReveal>
          <h2 className="font-heading font-bold tracking-tight text-white leading-[0.98] text-4xl sm:text-5xl lg:text-6xl mb-8">
            Let&apos;s make it real.
          </h2>
          <p className="text-silver text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re launching, productionising a shaky MVP, or scaling what&apos;s already
            working, tell us where you are and we&apos;ll tell you the fastest way forward.
          </p>
          <Button href="/contact" variant="primary">Book a Consultation</Button>
        </AnimatedReveal>
      </div>
    </section>
  );
}
