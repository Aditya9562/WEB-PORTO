"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type RevealProps = MotionProps & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ as = "div", children, className, delay = 0, ...props }: RevealProps) {
  const Component = motion.create(as);

  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] as const }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
