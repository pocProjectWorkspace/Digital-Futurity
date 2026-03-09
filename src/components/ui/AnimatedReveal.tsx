'use client';

import { motion } from 'framer-motion';

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedReveal({ children, className, delay = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
