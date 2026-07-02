'use client';

import { motion } from 'framer-motion';
import { Eye, Layers, Target, BarChart3, Cpu } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Card from '@/components/ui/Card';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

const values = [
  { icon: Eye, title: 'Clarity Before Complexity', desc: 'We design solutions that reduce ambiguity, not add to it.' },
  { icon: Layers, title: 'Architecture That Scales', desc: 'Foundations built for growth from the first line of code.' },
  { icon: Target, title: 'Delivery With Accountability', desc: 'We take full ownership. Outcomes, not activity.' },
  { icon: BarChart3, title: 'Business Outcomes Over Activity', desc: 'Everything we build maps to a measurable business objective.' },
  { icon: Cpu, title: 'Modern Engineering by Default', desc: 'Cloud-native, automated, and observable, by design.' },
];

const stats = [
  { value: '15+', label: 'Years experience, each' },
  { value: '50+', label: 'Startups mentored at Misk Launchpad' },
  { value: '6+', label: 'Products designed & shipped' },
  { value: '3', label: 'Clouds: AWS · GCP · Azure' },
];

export default function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Big-firm seniority.{' '}
            <span className="text-cyan">Without the big firm.</span>
          </>
        }
        subheading="A small, senior team of product and engineering practitioners: principal-level architects, engineers, and delivery leads with 15+ years each, partnering with founders who need more than a cheap build."
      />

      {/* Lead statement */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <p className="text-white text-2xl md:text-3xl font-heading font-medium leading-snug tracking-tight">
              We&apos;ve mentored 50+ startups through Misk Launchpad and shipped real products of
              our own. We know the founder&apos;s road, because we&apos;ve walked it.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <p className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
              We&apos;ve been in your seat.
            </h2>
            <div className="space-y-6 text-silver text-lg leading-relaxed">
              <p>
                We didn&apos;t start as a consultancy. We started as builders, shipping our own
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
                We felt that gap ourselves, then watched 50+ founders hit the exact same wall while
                mentoring at Misk Launchpad. Same story every time: getting to an MVP was easy;
                making it real was where things stalled.
              </p>
              <p className="text-white font-heading text-xl leading-relaxed border-l-4 border-cyan pl-6">
                That&apos;s why Digital Futurity exists. We do the unglamorous, decisive work of
                turning something that &ldquo;works&rdquo; into something real, because we&apos;ve
                lived the struggle, and we know exactly how to get you through it.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Built for the gap */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Built for the gap founders fall into.
            </h2>
            <p className="text-silver text-lg leading-relaxed">
              Getting an MVP built has never been easier. Making it real, and secure, scalable,
              reliable, and fundable, is where founders get stuck, usually with a codebase no one senior
              ever touched. Big firms can do it, but they&apos;re slow and priced for enterprises.
              Cheap teams are fast but leave you with the same fragile product. Digital Futurity sits
              exactly in that gap: big-firm engineering seniority, at a pace and price a startup can
              actually work with.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Confidential by design */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Why you won&apos;t see our names here.
            </h2>
            <p className="text-silver text-lg leading-relaxed">
              Our practitioners hold senior roles elsewhere, so we keep the team confidential by
              design, and we treat your work with the same discretion. What matters is verifiable:
              15+ years each, 50+ startups mentored through Misk Launchpad, and products we&apos;ve
              designed and shipped. Names, CVs, and references are shared directly under NDA once
              we&apos;re in conversation.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* By the numbers */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight">
                  {s.value}
                </p>
                <p className="text-silver text-sm mt-2 leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlowDivider />

      {/* Philosophy quote */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug tracking-tight">
              &ldquo;Transformative products are built at the intersection of clarity, architectural
              discipline, and execution rigour.&rdquo;
            </blockquote>
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
              How we work.
            </h2>
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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to work with a senior team that ships?
            </h2>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
