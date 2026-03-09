'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import Button from '@/components/ui/Button';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

export default function HomeCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <Suspense fallback={null}>
        <ParticleField count={800} color="#00d4ff" size={0.015} speed={0.01} />
      </Suspense>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedReveal>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-silver text-lg leading-relaxed mb-8">
            Whether you&apos;re launching a new product, modernising a platform, or scaling an
            existing system — Digital Futurity brings the seniority, architecture, and delivery
            capability to make it happen.
          </p>
          <Button href="/contact" variant="primary">Start the Conversation</Button>
        </AnimatedReveal>
      </div>
    </section>
  );
}
