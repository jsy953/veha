"use client";

import { motion } from "framer-motion";
import { fraunces } from "./fonts";
import { ArchitectureSketch } from "./ArchitectureSketch";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#141210] px-6 pt-28 sm:px-10">
      <div className="grain opacity-[0.06]" />
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 text-[12px] uppercase tracking-[0.3em] text-[#a08e6f]"
          >
            Studio d&apos;architecture &amp; d&apos;intérieur — depuis 2011
          </motion.p>
          <h1
            className={`${fraunces.className} text-[11vw] leading-[1.12] text-[#f4ede3] sm:text-[7.5vw] lg:text-[5.2vw]`}
          >
            <motion.span
              className="block overflow-hidden py-[0.08em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                Des espaces
              </motion.span>
            </motion.span>
            <motion.span
              className="block overflow-hidden py-[0.08em] italic text-[#c1673f]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                qui racontent
              </motion.span>
            </motion.span>
            <motion.span
              className="block overflow-hidden py-[0.08em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                une histoire.
              </motion.span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-md text-[15px] leading-relaxed text-[#cabfae]"
          >
            MERIDIAN conçoit des résidences, équipements culturels et lieux de
            vie sur mesure — de l&apos;esquisse à la livraison, en France et à
            l&apos;international.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mx-auto aspect-[4/4.2] w-full max-w-md text-[#c1673f]/70"
        >
          <ArchitectureSketch className="h-full w-full" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#a08e6f] sm:flex"
      >
        <span>Défiler</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-[#a08e6f]"
        />
      </motion.div>
    </section>
  );
}
