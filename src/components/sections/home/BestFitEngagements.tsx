'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { bestFitEngagements } from '@/lib/constants';

export default function BestFitEngagements() {
  return (
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
  );
}
