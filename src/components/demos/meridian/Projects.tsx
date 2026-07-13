"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { fraunces } from "./fonts";

const tint = "rgba(193,103,63,0.35)";

const projects = [
  {
    name: "Pavillon Sequoia",
    type: "Résidence privée",
    place: "Biarritz",
    year: "2024",
    image: "/images/meridian/58.jpg",
    desc: "Une maison de bord de falaise organisée autour d'un patio de bois brûlé, pensée pour dissoudre la frontière entre intérieur et pinède.",
  },
  {
    name: "Musée de la Lumière",
    type: "Équipement culturel",
    place: "Lyon",
    year: "2023",
    image: "/images/meridian/181.jpg",
    desc: "Extension souterraine d'un musée existant, éclairée par une faille zénithale qui suit la course du soleil toute l'année.",
  },
  {
    name: "Tour Arcadia",
    type: "Bureaux",
    place: "Paris La Défense",
    year: "2024",
    image: "/images/meridian/101.jpg",
    desc: "Un socle poreux et un jardin suspendu au 18e étage réinventent la tour de bureaux comme lieu de vie collective.",
  },
  {
    name: "Maison Hâ",
    type: "Résidence privée",
    place: "Bordeaux",
    year: "2022",
    image: "/images/meridian/142.jpg",
    desc: "Réhabilitation d'un chai du XIXe siècle en résidence familiale, structure d'origine préservée et révélée.",
  },
  {
    name: "Atelier Vosges",
    type: "Rénovation loft",
    place: "Paris",
    year: "2023",
    image: "/images/meridian/221.jpg",
    desc: "Un loft d'artiste réorganisé autour d'une mezzanine d'acier noir et d'une bibliothèque traversante.",
  },
  {
    name: "Le Cloître",
    type: "Hôtellerie",
    place: "Aix-en-Provence",
    year: "2021",
    image: "/images/meridian/142.jpg",
    desc: "Un ancien cloître converti en hôtel de dix suites, chaque chambre ouvrant sur un jardin de senteurs distinct.",
  },
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="etudes" className="bg-[#141210] px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-[#a08e6f]">
            Études sélectionnées
          </p>
        </Reveal>
        <h2
          className={`${fraunces.className} max-w-2xl text-4xl leading-[1.05] text-[#f4ede3] sm:text-5xl`}
        >
          <RevealText text="Six lieux, six manières d'habiter le monde." />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <button
                onClick={() => setActive(i)}
                data-cursor="Voir"
                className="group block w-full text-left"
              >
                <TreatedImage
                  src={p.image}
                  alt={p.name}
                  tint={tint}
                  className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`${fraunces.className} text-xl text-[#f4ede3]`}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#948669]">
                      {p.type} — {p.place}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 font-mono text-[12px] text-[#726554]">
                    {p.year}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0b0a09]/95 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid w-full max-w-4xl gap-10 lg:grid-cols-2"
            >
              <TreatedImage
                src={projects[active].image}
                alt={projects[active].name}
                tint={tint}
                className="aspect-[4/5] w-full"
              />
              <div className="flex flex-col justify-center">
                <span className="font-mono text-[12px] text-[#726554]">
                  {projects[active].year}
                </span>
                <h3
                  className={`${fraunces.className} mt-2 text-3xl text-[#f4ede3] sm:text-4xl`}
                >
                  {projects[active].name}
                </h3>
                <p className="mt-1 text-[13px] uppercase tracking-[0.15em] text-[#a08e6f]">
                  {projects[active].type} — {projects[active].place}
                </p>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#cabfae]">
                  {projects[active].desc}
                </p>
              </div>
            </motion.div>
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 rounded-full border border-white/15 p-2.5 text-[#f4ede3] transition hover:bg-white/10"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
