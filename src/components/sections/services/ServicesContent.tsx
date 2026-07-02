'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { services } from '@/lib/constants';
import PageHero from '@/components/ui/PageHero';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import Button from '@/components/ui/Button';

export default function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow="How We Help"
        title={
          <>
            One senior team for the{' '}
            <span className="text-cyan">whole journey.</span>
          </>
        }
        subheading="From an idea to a product that scales — four stages, wherever you are on the path. Start at any one; most founders move through several with us."
      />

      {/* Journey nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 border-y border-border py-6">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 text-sm text-silver hover:text-cyan transition-colors"
            >
              <span className="font-heading font-bold text-cyan">{s.stage}</span>
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Stages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-24 py-16 md:py-24 border-b border-border last:border-b-0"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Big number + title */}
              <div className="lg:col-span-5">
                <AnimatedReveal>
                  <div className="flex items-start gap-5">
                    <span className="font-heading font-bold text-6xl md:text-7xl text-border-bright leading-none select-none">
                      {s.stage}
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-cyan mb-2 font-medium">
                        {s.tagline}
                      </p>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">
                        {s.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-silver text-lg leading-relaxed mt-6 max-w-md">{s.intro}</p>
                  <p className="text-silver/70 text-sm leading-relaxed mt-6 max-w-md">
                    <span className="text-white font-medium">Ideal for: </span>
                    {s.idealFor}
                  </p>
                </AnimatedReveal>
              </div>

              {/* Outcomes + includes */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                <AnimatedReveal delay={0.1}>
                  <div className="glass rounded-2xl p-6 h-full">
                    <h3 className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">
                      What you get
                    </h3>
                    <ul className="space-y-3">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-silver text-sm">
                          <Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" strokeWidth={2.5} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.15}>
                  <div className="glass rounded-2xl p-6 h-full">
                    <h3 className="text-sm uppercase tracking-widest text-violet-soft mb-4 font-medium">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3">
                      {s.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-silver text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 shrink-0" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedReveal>
              </div>
            </div>

            {i === 2 && (
              <AnimatedReveal>
                <a
                  href="/what-we-build"
                  className="inline-flex items-center gap-2 text-sm text-cyan hover:gap-3 transition-all mt-8"
                >
                  See everything we build for growth
                  <ArrowRight className="w-4 h-4" />
                </a>
              </AnimatedReveal>
            )}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Not sure which stage you&apos;re at?
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-8">
              Tell us what you&apos;ve got — an idea, a shaky MVP, or a product straining under growth
              — and we&apos;ll tell you exactly what it needs next.
            </p>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
