'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { services } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import GlowDivider from '@/components/ui/GlowDivider';
import Button from '@/components/ui/Button';

export default function CapabilitiesContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <SectionHeader
              eyebrow="What We Do"
              heading="End-to-End Digital Product & Engineering Capabilities"
              subheading="From product strategy and architecture to cloud delivery, DevOps, and AI governance — we bring senior capability across the full lifecycle."
            />
          </AnimatedReveal>
        </div>
      </section>

      <GlowDivider />

      {/* Services - Desktop tabs */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-8">
            <div className="space-y-2">
              {services.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                    activeTab === i
                      ? 'bg-cyan/10 text-cyan border border-cyan/20'
                      : 'text-silver hover:text-white hover:bg-surface-2'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 md:p-10"
              >
                <ServiceDetail service={services[activeTab]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden space-y-3">
            {services.map((service, i) => (
              <div key={service.id}>
                <button
                  onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                  className="w-full glass rounded-xl p-5 text-left flex items-center justify-between"
                >
                  <h3 className="font-heading text-lg font-bold text-white pr-4">{service.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan transition-transform shrink-0 ${activeTab === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-4">
                        <ServiceDetail service={service} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Need a capability conversation?
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-8">
              Let&apos;s discuss how our capabilities align with your needs.
            </p>
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}

function ServiceDetail({ service }: { service: typeof services[number] }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h2>
        <p className="text-silver text-lg leading-relaxed">{service.intro}</p>
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">Key Outcomes</h4>
        <ul className="space-y-3">
          {service.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-3 text-silver">
              <CheckCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" strokeWidth={1.5} />
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">Sample Deliverables</h4>
        <ul className="space-y-3">
          {service.deliverables.map((deliverable, i) => (
            <li key={i} className="flex items-start gap-3 text-silver">
              <span className="w-1.5 h-1.5 rounded-full bg-violet mt-2 shrink-0" />
              {deliverable}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-widest text-cyan mb-4 font-medium">Ideal For</h4>
        <p className="text-silver leading-relaxed">{service.idealFor}</p>
      </div>
    </div>
  );
}
