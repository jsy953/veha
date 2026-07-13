"use client";

import { motion } from "framer-motion";

const paths = [
  "M40,420 L40,140 L220,60 L400,140 L400,420",
  "M40,420 L400,420",
  "M100,420 L100,240 L160,240 L160,420",
  "M220,60 L220,420",
  "M280,420 L280,180 L340,180 L340,420",
  "M40,140 L400,140",
];

export function ArchitectureSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 460"
      fill="none"
      className={className}
      aria-hidden
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.3 + i * 0.18,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </svg>
  );
}
