'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import BrowserMock from '@/components/ui/BrowserMock';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Editorial background: bold gradient wash, no particle noise */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface/60 px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span className="text-xs uppercase tracking-widest text-silver font-medium">
              Senior product engineering — built for founders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold tracking-tight text-white leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            You&apos;ve built
            <br />
            something.
            <br />
            <span className="inline-block mt-3 bg-cyan text-black px-4 pb-1">
              We make it real.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver text-lg md:text-xl leading-relaxed mt-8 mb-10 max-w-xl"
          >
            We take founders from a fragile MVP to a secure, scalable, production-grade product —
            and build it with you from scratch when you&apos;re starting there. Big-firm seniority,
            at startup speed and price.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/contact" variant="primary">Book a Consultation</Button>
            <Button href="/proof-points" variant="ghost">See What We&apos;ve Built</Button>
          </motion.div>
        </div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="lg:col-span-5"
        >
          <BrowserMock url="app.upllyft.com" className="glow-cyan" />
        </motion.div>
      </div>
    </section>
  );
}
