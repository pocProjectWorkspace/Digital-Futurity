'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { trustStats } from '@/lib/constants';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {trustStats.map((stat, i) => (
            <div key={i} className="text-center flex items-center gap-8">
              {i > 0 && <div className="hidden md:block w-px h-12 bg-border-bright" />}
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-silver text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
