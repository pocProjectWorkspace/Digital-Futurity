'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', href, className, type = 'button', onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-cyan text-black hover:shadow-[0_0_30px_#00d4ff40] active:scale-[0.98]',
    ghost: 'border border-cyan/30 text-cyan hover:bg-cyan/10 active:scale-[0.98]',
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
