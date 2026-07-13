"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { instrument } from "./fonts";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#170b0a]">
      <Image
        src="/images/ambre/195.jpg"
        alt="Ambre — salle de restaurant"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 mix-blend-color" style={{ background: "rgba(122,47,31,0.55)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#170b0a] via-[#170b0a]/50 to-[#170b0a]/20" />

      <div className="relative mx-auto w-full max-w-[1300px] px-6 pb-24 pt-40 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-[12px] uppercase tracking-[0.3em] text-[#d4a35a]"
        >
          Restaurant gastronomique — Paris 6e
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className={`${instrument.className} max-w-2xl text-5xl italic leading-[1.1] text-[#f0e6d8] sm:text-7xl`}
        >
          Une cuisine de saison, sincère et précise.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 max-w-md text-[15px] leading-relaxed text-[#cbb89a]"
        >
          Le chef Antoine Vasseur compose une carte courte, renouvelée chaque
          semaine au gré du marché — produits locaux, cuissons justes, sans
          artifice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#reservation"
            className="rounded-full bg-[#d4a35a] px-7 py-3.5 text-[13px] uppercase tracking-[0.1em] text-[#170b0a] transition hover:bg-[#e3b876]"
          >
            Réserver une table
          </a>
          <a
            href="#menu"
            className="rounded-full border border-[#d4a35a]/40 px-7 py-3.5 text-[13px] uppercase tracking-[0.1em] text-[#f0e6d8] transition hover:border-[#d4a35a]"
          >
            Découvrir le menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
