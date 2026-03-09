'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, Layers, CloudCog } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { coreStrengths } from '@/lib/constants';

const icons = [Lightbulb, Users, Layers, CloudCog];

export default function CapabilitiesSnapshot() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeader heading="Core Strengths" />
        </AnimatedReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-wrap justify-center gap-4"
        >
          {coreStrengths.map((strength, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                className="glass rounded-full px-6 py-3 flex items-center gap-3 hover:border-cyan/20 hover:glow-cyan transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-cyan" strokeWidth={1.5} />
                <span className="text-white font-medium text-sm">{strength}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
