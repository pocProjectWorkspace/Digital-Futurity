'use client';

import { motion } from 'framer-motion';
import { Award, Compass, MessageSquare, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { whyUsCards } from '@/lib/constants';

const icons = [Award, Compass, MessageSquare, ShieldCheck];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeader heading="Why Founders Choose Us" />
        </AnimatedReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          {whyUsCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
              >
                <Card>
                  <Icon className="w-10 h-10 text-cyan mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-silver leading-relaxed">{card.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
