'use client';

import { motion } from 'framer-motion';
import { Radio, Landmark, GraduationCap, Building2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import Card from '@/components/ui/Card';

const industries = [
  { name: 'Telecom', Icon: Radio },
  { name: 'Banking & Financial Services', Icon: Landmark },
  { name: 'Education', Icon: GraduationCap },
  { name: 'Enterprise Transformation', Icon: Building2 },
];

export default function IndustriesStrip() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeader heading="Sectors We Serve" />
        </AnimatedReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {industries.map(({ name, Icon }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <Card className="text-center py-8">
                <Icon className="w-10 h-10 text-cyan mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-base md:text-lg font-bold text-white">{name}</h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
