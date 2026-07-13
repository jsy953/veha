"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

const bars = [38, 62, 45, 80, 55, 92, 70, 48, 65, 88];

export function DashboardMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#15152b] to-[#0c0c1a] p-5 shadow-[0_40px_120px_-20px_rgba(99,102,241,0.45)]"
      >
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-[11px] text-white/30">
            pulse.app/dashboard
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "MRR", value: "84.2k €", delta: "+12.4%" },
            { label: "Utilisateurs actifs", value: "18 942", delta: "+6.1%" },
            { label: "Churn", value: "1.8%", delta: "-0.4%" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                {k.label}
              </p>
              <p className="mt-1.5 text-lg text-white">{k.value}</p>
              <p className="mt-0.5 text-[11px] text-emerald-400">{k.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-end gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500 to-cyan-400"
              style={{ maxHeight: 90 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          style={{ transform: "translateZ(40px)" }}
          className="absolute -right-6 top-16 hidden rounded-xl border border-white/10 bg-[#15152b] px-4 py-3 shadow-xl sm:block"
        >
          <p className="font-mono text-[10px] text-white/40">Signal détecté</p>
          <p className="mt-1 text-[13px] text-white">Pic de trafic — API v2</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
