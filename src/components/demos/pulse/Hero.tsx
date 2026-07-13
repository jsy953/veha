"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a16] px-6 pb-28 pt-40 sm:px-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 20% 0%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(500px circle at 80% 10%, rgba(34,211,238,0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12px] text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Nouveau — Alertes prédictives par IA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[13vw] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[3.6vw]"
          >
            L&apos;analytics qui parle{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              enfin votre langage.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/60"
          >
            Connectez vos outils, laissez Pulse détecter les signaux qui
            comptent vraiment, et agissez avant vos concurrents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#tarifs"
                className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-[#0a0a16] transition hover:bg-white/90"
              >
                Commencer gratuitement
              </a>
            </Magnetic>
            <a
              href="#produit"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[14px] text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Voir la démo ↓
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-[12px] text-white/35"
          >
            Sans carte bancaire — 14 jours d&apos;essai — annulable à tout moment.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
