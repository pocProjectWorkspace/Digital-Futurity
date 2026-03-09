'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { deliveryStages } from '@/lib/constants';

export default function DeliveryLifecycle() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeader heading="End-to-End Across the Delivery Lifecycle" />
        </AnimatedReveal>

        {/* Desktop pipeline */}
        <div className="hidden lg:flex items-start justify-between gap-2">
          {deliveryStages.map((stage, i) => (
            <AnimatedReveal key={i} delay={i * 0.1} className="flex-1 flex items-start gap-2">
              <div className="glass rounded-xl p-6 flex-1 transition-all duration-300 hover:border-cyan/20 hover:glow-cyan group">
                <h3 className="font-heading text-lg font-bold text-white mb-4 group-hover:text-cyan transition-colors">
                  {stage.title}
                </h3>
                <ul className="space-y-2">
                  {stage.items.map((item, j) => (
                    <li key={j} className="text-silver text-sm flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < deliveryStages.length - 1 && (
                <div className="flex items-center pt-8">
                  <ArrowRight className="w-5 h-5 text-cyan/50" />
                </div>
              )}
            </AnimatedReveal>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden space-y-3">
          {deliveryStages.map((stage, i) => (
            <AnimatedReveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setActiveStage(activeStage === i ? null : i)}
                className="w-full glass rounded-xl p-5 text-left flex items-center justify-between"
              >
                <h3 className="font-heading text-lg font-bold text-white">{stage.title}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-cyan transition-transform ${activeStage === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeStage === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2">
                      <ul className="space-y-2">
                        {stage.items.map((item, j) => (
                          <li key={j} className="text-silver text-sm flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-cyan mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
