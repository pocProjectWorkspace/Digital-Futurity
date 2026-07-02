'use client';

import { motion } from 'framer-motion';

export default function PageHero({
  eyebrow,
  title,
  subheading,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Editorial background wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] rounded-full bg-violet/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface/60 px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
          <span className="text-xs uppercase tracking-widest text-silver font-medium">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold tracking-tight text-white leading-[0.98] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl"
        >
          {title}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver text-lg md:text-xl leading-relaxed mt-8 max-w-2xl"
          >
            {subheading}
          </motion.p>
        )}
      </div>
    </section>
  );
}
