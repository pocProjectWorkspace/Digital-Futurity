'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <HeroScene />
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-cyan mb-6 font-medium"
          >
            Senior Digital Product & Engineering Consultancy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Design, Build, and Scale
            <br />
            <span className="text-glow">Digital Products</span> for What&apos;s Next
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver text-lg leading-relaxed mb-8 max-w-xl"
          >
            Digital Futurity helps organisations turn ambitious ideas into scalable digital
            platforms — through strategy, architecture, engineering, cloud delivery, and
            operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/contact" variant="primary">Book a Consultation</Button>
            <Button href="/capabilities" variant="ghost">Explore Capabilities</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
