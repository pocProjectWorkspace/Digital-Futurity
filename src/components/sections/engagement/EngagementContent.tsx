'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { engagementModels, bestFitEngagements } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

export default function EngagementContent() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader
              eyebrow="How We Work"
              heading="Engagement Models"
              subheading="Flexible models designed to match your needs — whether you need strategic guidance, embedded leadership, or a full delivery team."
            />
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Models */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {engagementModels.map((model, i) => (
            <AnimatedReveal key={i} delay={i * 0.05}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between"
                >
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white pr-4">
                    {model.title}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-cyan transition-transform shrink-0 ${expanded === i ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 space-y-6">
                        <div>
                          <h4 className="text-sm uppercase tracking-widest text-cyan mb-2 font-medium">What It Is</h4>
                          <p className="text-silver leading-relaxed">{model.whatItIs}</p>
                        </div>

                        <div>
                          <h4 className="text-sm uppercase tracking-widest text-cyan mb-2 font-medium">When It Fits</h4>
                          <p className="text-silver leading-relaxed">{model.whenItFits}</p>
                        </div>

                        <div>
                          <h4 className="text-sm uppercase tracking-widest text-cyan mb-3 font-medium">What Clients Get</h4>
                          <ul className="space-y-2">
                            {model.whatClientsGet.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-silver">
                                <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" strokeWidth={1.5} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm uppercase tracking-widest text-cyan mb-2 font-medium">Expected Outcomes</h4>
                          <p className="text-silver leading-relaxed">{model.expectedOutcomes}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <GlowDivider />

      {/* Best Fit Engagements */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Best Fit Engagements" />
          </AnimatedReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-wrap justify-center gap-3"
          >
            {bestFitEngagements.map((engagement, i) => (
              <motion.span
                key={i}
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
              Let&apos;s have a conversation and find the right approach together.
            </p>
            <Button href="/contact" variant="primary">Start the Conversation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
