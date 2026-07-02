'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const symptoms = [
  'Held together with tape — one dependency from breaking',
  'Insecure: no real auth, secrets in the code, open data',
  'Falls over the moment real users show up',
  'No one but the original builder can extend it',
  'Cloud bills that make no sense',
  'Nothing investors can safely look under the hood at',
];

const production = [
  'Architecture that holds up as you grow',
  'Security and data protection done properly',
  'Tested, observable, and reliable under load',
  'A clean codebase any engineer can pick up',
  'Cloud set up to scale — and cost what it should',
  'Ready for users, investors, and due diligence',
];

export default function ProductionizationProblem() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="The Real Problem"
            heading="Building an MVP is easy now. Making it real is where founders get stuck."
            subheading="Anyone can ship a demo — no-code, AI, a cheap dev. But the day you have real users, a raise, or investors looking closely, the cracks show. Closing the gap between “it works on my screen” and “it’s a real product” is exactly what we do."
          />
        </AnimatedReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <AnimatedReveal>
            <div className="glass rounded-2xl p-8 h-full border border-red-500/10">
              <h3 className="font-heading text-xl font-bold text-white mb-6">
                The MVP you have today
              </h3>
              <ul className="space-y-4">
                {symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-silver">
                    <X className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" strokeWidth={2} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full border border-cyan/20 glow-cyan">
              <h3 className="font-heading text-xl font-bold text-white mb-6">
                The product we hand back
              </h3>
              <ul className="space-y-4">
                {production.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-silver">
                    <Check className="w-5 h-5 text-cyan shrink-0 mt-0.5" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={0.2}>
          <motion.p className="text-center text-white text-lg md:text-xl font-heading mt-14 max-w-3xl mx-auto leading-relaxed">
            And we&apos;ll tell you straight whether to <span className="text-cyan">harden what you have</span> or{' '}
            <span className="text-cyan">rebuild it right</span> — not just bill you to patch it.
          </motion.p>
        </AnimatedReveal>
      </div>
    </section>
  );
}
