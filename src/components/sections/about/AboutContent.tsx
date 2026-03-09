'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Eye, Layers, Target, BarChart3, Cpu } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

const FloatingGrid = dynamic(() => import('@/components/three/FloatingGrid'), { ssr: false });

const values = [
  { icon: Eye, title: 'Clarity Before Complexity', desc: 'We design solutions that reduce ambiguity, not add to it.' },
  { icon: Layers, title: 'Architecture That Scales', desc: 'Foundations built for growth from the first line of architecture.' },
  { icon: Target, title: 'Delivery With Accountability', desc: 'We take full ownership — outcomes, not activity.' },
  { icon: BarChart3, title: 'Business Outcomes Over Activity', desc: 'Everything we build maps to a measurable business objective.' },
  { icon: Cpu, title: 'Modern Engineering by Default', desc: 'Cloud-native, automated, and observable — by design.' },
];

const regions = [
  { region: 'Middle East', tags: ['Telecom', 'Banking', 'Education', 'Enterprise'] },
  { region: 'Asia', tags: ['Product Builds', 'Platform Modernisation'] },
  { region: 'Cross-sector', tags: ['Architecture', 'Cloud', 'DevOps', 'Governance'] },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <Suspense fallback={null}>
          <FloatingGrid />
        </Suspense>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedReveal>
            <SectionHeader
              eyebrow="Who We Are"
              heading="Technology Leadership with Delivery Depth"
              align="left"
            />
          </AnimatedReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <p className="text-silver text-lg leading-relaxed">
              Digital Futurity is a senior digital product and engineering team with 15-18+ years
              of experience each across product innovation, enterprise architecture, and cloud
              delivery. We operate across the Middle East and Asia, partnering with enterprises,
              founders, and transformation leaders who need more than execution — they need
              seniority, judgement, and accountability at every level of the engagement.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Why We Exist */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Built for Complex Transformation" align="left" />
            <p className="text-silver text-lg leading-relaxed">
              We exist because complex organisations often choose between strategic advisors who
              can&apos;t build, or engineering teams that can&apos;t think strategically. Digital
              Futurity bridges that gap — combining product vision, architectural rigour, and
              hands-on delivery capability in a single senior team.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Philosophy */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Our Delivery Philosophy" align="left" />
            <blockquote className="border-l-4 border-cyan pl-6 mb-8">
              <p className="text-white text-xl italic leading-relaxed font-heading">
                &ldquo;Transformative products are built at the intersection of clarity,
                architectural discipline, and execution rigour.&rdquo;
              </p>
            </blockquote>
            <p className="text-silver text-lg leading-relaxed">
              We combine strategic product thinking, strong engineering foundations, agile delivery
              practices, and a cloud-first operating mindset. This means our clients get platforms
              that are not only delivered — they are designed to last and built to scale.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Values */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Our Values" />
          </AnimatedReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
              >
                <Card>
                  <v.icon className="w-10 h-10 text-cyan mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-silver leading-relaxed">{v.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlowDivider />

      {/* Experience */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Where We've Delivered" />
          </AnimatedReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {regions.map((r, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
              >
                <Card className="text-center">
                  <h3 className="font-heading text-xl font-bold text-white mb-4">{r.region}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {r.tags.map((tag) => (
                      <span key={tag} className="text-xs text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to work with a senior team that delivers?
            </h2>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
