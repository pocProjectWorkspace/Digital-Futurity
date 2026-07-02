'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  CalendarCheck,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { whatWeBuild } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const icons: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  CalendarCheck,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
};

export default function WhatWeBuildStrip() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="What We Build"
            heading="The Systems Founders Actually Ask For"
            subheading="Not industries. Outcomes. The practical things that move your business forward."
          />
        </AnimatedReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {whatWeBuild.map((item) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <motion.a
                key={item.title}
                href="/what-we-build"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group glass rounded-2xl p-6 md:p-7 flex flex-col hover:border-cyan/20 transition-colors"
              >
                <Icon className="w-8 h-8 text-cyan mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-base md:text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-sm text-silver group-hover:text-cyan transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
