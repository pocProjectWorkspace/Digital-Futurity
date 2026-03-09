'use client';

import { motion } from 'framer-motion';
import { Radio, Landmark, GraduationCap, Building2 } from 'lucide-react';
import { industries } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

const icons = [Radio, Landmark, GraduationCap, Building2];

export default function IndustriesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader
              eyebrow="Industries"
              heading="Sector-Relevant Expertise"
              subheading="We bring deep contextual understanding to the industries we serve — combining technical capability with sector-specific insight."
            />
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Industry sections */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((industry, i) => {
            const Icon = icons[i];
            return (
              <AnimatedReveal key={i}>
                <Card hover={false} className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className="w-10 h-10 text-cyan" strokeWidth={1.5} />
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                      {industry.name}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-cyan mb-3 font-medium">Context</h4>
                      <p className="text-silver leading-relaxed mb-6">{industry.context}</p>

                      <h4 className="text-sm uppercase tracking-widest text-cyan mb-3 font-medium">How We Help</h4>
                      <p className="text-silver leading-relaxed">{industry.howWeHelp}</p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-cyan mb-3 font-medium">Relevant Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service) => (
                          <span
                            key={service}
                            className="text-xs text-cyan bg-cyan/10 px-3 py-1.5 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Operating in your sector?
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-8">
              Let&apos;s discuss how we can support your transformation.
            </p>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
