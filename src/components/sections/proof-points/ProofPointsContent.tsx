'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { proofPoints, credibilityStats } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

const OrbitalRings = dynamic(() => import('@/components/three/OrbitalRings'), { ssr: false });

export default function ProofPointsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Suspense fallback={null}>
          <OrbitalRings />
        </Suspense>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader
              eyebrow="What We've Delivered"
              heading="Proof Points"
              subheading="Selected delivery outcomes across product launches, platform development, architecture modernisation, and enterprise program delivery."
            />
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Proof Points */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {proofPoints.map((pp, i) => (
            <AnimatedReveal key={i}>
              <Card hover={false} className="p-8 md:p-10">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-6">{pp.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-cyan mb-2 font-medium">Challenge</h4>
                    <p className="text-silver leading-relaxed">{pp.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-violet-soft mb-2 font-medium">Approach</h4>
                    <p className="text-silver leading-relaxed">{pp.approach}</p>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-white mb-2 font-medium">Outcome</h4>
                    <p className="text-silver leading-relaxed">{pp.outcome}</p>
                  </div>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <GlowDivider />

      {/* Credibility Strip */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {credibilityStats.map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                className="glass rounded-xl p-6 text-center"
              >
                <p className="text-white font-heading font-bold text-sm md:text-base">{stat}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to see what we can deliver for you?
            </h2>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
