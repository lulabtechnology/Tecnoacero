"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const axis = direction === "left" ? { x: -28, y: 0 } : direction === "right" ? { x: 28, y: 0 } : direction === "none" ? { x: 0, y: 0 } : { x: 0, y: 28 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...axis }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
