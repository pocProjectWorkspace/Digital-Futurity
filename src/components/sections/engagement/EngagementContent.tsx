'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { engagementModels, bestFitEngagements } from '@/lib/constants';
import PageHero from '@/components/ui/PageHero';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

export default function EngagementContent() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title={
          <>
            Work with us the way{' '}
            <span className="text-cyan">that fits.</span>
          </>
        }
        subheading="From a one-off second opinion to a full product team, pick the level of commitment that matches where you are. You can always start small and go deeper."
      />

      {/* Models */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {engagementModels.map((model, i) => (
          <section
            key={model.title}
            className="py-14 md:py-20 border-b border-border last:border-b-0"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Number + title + commitment */}
              <div className="lg:col-span-5">
                <AnimatedReveal>
                  <div className="flex items-start gap-5">
                    <span className="font-heading font-bold text-5xl md:text-6xl text-border-bright leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="inline-block text-xs uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/20 rounded-full px-3 py-1 mb-3">
                        {model.commitment}
                      </span>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {model.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-silver leading-relaxed mt-6 max-w-md">{model.whatItIs}</p>
                  <p className="text-silver/70 text-sm leading-relaxed mt-5 max-w-md">
                    <span className="text-white font-medium">When it fits: </span>
                    {model.whenItFits}
                  </p>
                </AnimatedReveal>
              </div>

              {/* What you get + outcome */}
              <div className="lg:col-span-7">
                <AnimatedReveal delay={0.1}>
                  <div className="glass rounded-2xl p-6 md:p-8">
                    <h3 className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">
                      What you get
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {model.whatClientsGet.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-silver text-sm">
                          <Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border mt-6 pt-6">
                      <p className="text-white leading-relaxed">
                        <span className="text-silver/70 text-sm uppercase tracking-widest block mb-2">
                          The outcome
                        </span>
                        {model.expectedOutcomes}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <GlowDivider />

      {/* Best fit */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-10">
              Where founders bring us in
            </h2>
          </AnimatedReveal>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-wrap justify-center gap-3"
          >
            {bestFitEngagements.map((engagement) => (
              <motion.span
                key={engagement}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="glass rounded-lg px-5 py-3 text-silver text-sm hover:text-cyan hover:border-cyan/20 transition-all duration-300"
              >
                {engagement}
              </motion.span>
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
              Not sure which model fits?
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-8">
              Tell us where you are and we&apos;ll suggest the right way to start.
            </p>
            <Button href="/contact" variant="primary">Start the Conversation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
