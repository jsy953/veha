"use client";

import { motion } from "framer-motion";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { bodoni } from "./fonts";

const tint = "rgba(28,27,26,0.15)";

export function Hero() {
  return (
    <section className="border-b border-[#1c1b1a]/10 bg-[#f7f5f0] px-6 pb-16 pt-16 sm:px-10 sm:pt-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-[12px] uppercase tracking-[0.25em] text-[#8a7d6b]"
          >
            Collection Terrain — Été 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`${bodoni.className} text-5xl leading-[1.05] text-[#1c1b1a] sm:text-6xl lg:text-[4.2vw]`}
          >
            Des lignes nues,
            <br />
            <span className="italic">une matière franche.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#5b564c]"
          >
            Douze pièces pensées pour durer : matières naturelles, coupes
            précises, fabrication en petites séries en Europe.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#grille"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#1c1b1a] pb-1 text-[13px] uppercase tracking-[0.14em] text-[#1c1b1a]"
          >
            Découvrir la collection →
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4"
        >
          <TreatedImage
            src="/images/noir/21.jpg"
            alt="Collection Terrain"
            tint={tint}
            priority
            className="col-span-2 aspect-[16/10] w-full"
          />
          <TreatedImage
            src="/images/noir/31.jpg"
            alt="Détail collection"
            tint={tint}
            priority
            className="aspect-[3/4] w-full"
          />
          <TreatedImage
            src="/images/noir/240.jpg"
            alt="Détail matière"
            tint={tint}
            priority
            className="aspect-[3/4] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
