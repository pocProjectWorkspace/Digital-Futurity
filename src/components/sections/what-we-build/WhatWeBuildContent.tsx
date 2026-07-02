'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  CalendarCheck,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { whatWeBuild } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

const icons: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  CalendarCheck,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
};

export default function WhatWeBuildContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader
              eyebrow="What We Build"
              heading="Built Around What Founders Actually Need"
              subheading="You don't need a “telecom solution” — you need users, bookings, leads, and a product that doesn't fall over. Here's the practical stuff we build into your product to move the business forward."
            />
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Outcome grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whatWeBuild.map((item) => {
              const Icon = icons[item.icon] ?? Sparkles;
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="glass rounded-2xl p-8 flex flex-col hover:border-cyan/20 transition-colors"
                >
                  <Icon className="w-10 h-10 text-cyan mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-silver leading-relaxed flex-1">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.examples.map((ex) => (
                      <span key={ex} className="text-xs text-silver bg-surface-2 border border-border px-3 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <GlowDivider />

      {/* Tie back to productionize */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              And all of it, built to last.
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-8">
              Whatever we build, it ships production-grade — secure, tested, and ready to scale. No
              throwaway MVPs that break the moment they matter.
            </p>
            <Button href="/contact" variant="primary">Tell Us What You Need</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
