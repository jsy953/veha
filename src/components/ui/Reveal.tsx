"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span";
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const wordContainer = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.035, delayChildren: delay },
  }),
};

const wordItem = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
      variants={wordContainer}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
          <motion.span className="inline-block" variants={wordItem}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
