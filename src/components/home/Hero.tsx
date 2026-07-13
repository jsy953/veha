"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center sm:px-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 50% 20%, rgba(10,132,255,0.08), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 text-[12px] text-black/60"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Disponible pour de nouveaux projets
      </motion.div>

      <h1 className="max-w-4xl text-[12vw] font-semibold leading-[1.02] tracking-tight text-black sm:text-6xl lg:text-[5.2vw]">
        <RevealText text="Nous concevons et développons" />
        <br />
        <span className="text-black/30">
          <RevealText text="des expériences web qui" delay={0.15} />
        </span>
        <br />
        <RevealText text="marquent." delay={0.3} />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 max-w-lg text-[16px] leading-relaxed text-black/55"
      >
        Studio de design &amp; développement — nous construisons des sites
        vitrines, des boutiques, des plateformes SaaS et des expériences
        sur-mesure, du design à la mise en production.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.15 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#travaux"
          className="rounded-full bg-black px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-black/85"
        >
          Voir nos travaux
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-7 py-3.5 text-[14px] text-black/80 transition hover:border-black/30"
        >
          Nous contacter
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-16 hidden flex-col items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-black/35 sm:flex"
      >
        <span>Défiler</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-black/25"
        />
      </motion.div>
    </section>
  );
}
