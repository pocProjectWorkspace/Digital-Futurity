'use client';

import { motion } from 'framer-motion';
import { products, proofPoints, credibilityStats } from '@/lib/constants';
import PageHero from '@/components/ui/PageHero';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

const gradients = [
  'from-cyan/25 to-violet/20',
  'from-violet/25 to-cyan/15',
  'from-cyan/20 to-cyan/5',
  'from-violet/25 to-violet/5',
  'from-cyan/25 to-violet/25',
  'from-violet/20 to-cyan/20',
];

function monogram(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function ProofPointsContent() {
  return (
    <>
      <PageHero
        eyebrow="Proof, Not Promises"
        title={
          <>
            We don&apos;t just advise. <span className="text-cyan">We ship.</span>
          </>
        }
        subheading="Real product work from our team, alongside the kinds of engagements we take on. Client names and references are shared under NDA."
      />

      {/* Products */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white mb-10">
              Products from our workbench
            </h2>
          </AnimatedReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="glass rounded-2xl overflow-hidden flex flex-col hover:border-cyan/20 transition-colors"
              >
                {/* Monogram banner; swap for a real screenshot later */}
                <div
                  className={`h-28 bg-gradient-to-br ${gradients[i % gradients.length]} border-b border-border flex items-center justify-center`}
                >
                  <span className="font-heading font-bold text-3xl text-white/90 tracking-tight">
                    {monogram(p.name)}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-silver text-sm leading-relaxed flex-1">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GlowDivider />

      {/* Engagement narratives */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              How we help founders
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-12 max-w-2xl">
              The shape of the engagements we take on, from getting off the ground to productionising
              and scaling.
            </p>
          </AnimatedReveal>

          <div className="space-y-6">
            {proofPoints.map((pp, i) => (
              <AnimatedReveal key={i}>
                <div className="glass rounded-2xl p-8 md:p-10 grid lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-4">
                    <span className="font-heading font-bold text-4xl text-border-bright leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-4">
                      {pp.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-cyan mb-1.5 font-medium">Challenge</h4>
                      <p className="text-silver leading-relaxed">{pp.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-violet-soft mb-1.5 font-medium">Approach</h4>
                      <p className="text-silver leading-relaxed">{pp.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white mb-1.5 font-medium">Outcome</h4>
                      <p className="text-silver leading-relaxed">{pp.outcome}</p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* Credibility band */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {credibilityStats.map((stat) => (
              <motion.div
                key={stat}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                className="glass rounded-xl p-6 text-center flex items-center justify-center"
              >
                <p className="text-white font-heading font-bold text-sm md:text-base leading-snug">{stat}</p>
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
              Want this kind of work on your product?
            </h2>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
