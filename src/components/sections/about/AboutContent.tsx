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
              heading="Big-Firm Seniority, Without the Big Firm"
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
              Digital Futurity is a small, senior team of product and engineering practitioners —
              principal-level architects, engineers, and delivery leads with 15+ years each. We&apos;ve
              mentored 50+ startups through Misk Launchpad and shipped real products of our own. We
              partner with founders and small teams who need more than a cheap build — they need the
              seniority to take a product from fragile MVP to production-grade, and the judgement to
              know which battles to fight first.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader eyebrow="Our Story" heading="We've Been in Your Seat" align="left" />
            <div className="space-y-6 text-silver text-lg leading-relaxed">
              <p>
                We didn&apos;t start as a consultancy. We started as builders — shipping our own
                products fast, the way every founder does. Upllyft, IntentOS, ClearPoint and more
                went from idea to working demo in weeks.
              </p>
              <p>
                Then came the part no one warns you about. The demo that impressed everyone
                couldn&apos;t take real users. Auth was an afterthought. The database buckled. The
                cloud bill climbed. What we&apos;d built to move fast now stood in the way of moving
                at all.
              </p>
              <p>
                We felt that gap ourselves — then watched 50+ founders hit the exact same wall while
                mentoring at Misk Launchpad. Same story every time: getting to an MVP was easy;
                making it real was where things stalled.
              </p>
              <p className="text-white font-heading text-xl leading-relaxed border-l-4 border-cyan pl-6">
                That&apos;s why Digital Futurity exists. We do the unglamorous, decisive work of
                turning something that &ldquo;works&rdquo; into something real — because we&apos;ve
                lived the struggle, and we know exactly how to get you through it.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Why We Exist */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Built for the Gap Founders Fall Into" align="left" />
            <p className="text-silver text-lg leading-relaxed">
              Getting an MVP built has never been easier. Making it real — secure, scalable, reliable,
              fundable — is where founders get stuck, usually with a codebase no one senior ever
              touched. Big firms can do it, but they&apos;re slow and priced for enterprises. Cheap
              teams are fast but leave you with the same fragile product. Digital Futurity sits exactly
              in that gap: big-firm engineering seniority, at a pace and price a startup can actually
              work with.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Confidential by design */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader heading="Why You Won't See Our Names Here" align="left" />
            <p className="text-silver text-lg leading-relaxed">
              Our practitioners hold senior roles elsewhere, so we keep the team confidential by
              design — and we treat your work with the same discretion. What matters is verifiable:
              15+ years each, 50+ startups mentored through Misk Launchpad, and products we&apos;ve
              designed and shipped. Names, CVs, and references are shared directly under NDA once
              we&apos;re in conversation.
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
