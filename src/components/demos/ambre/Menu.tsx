"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { instrument } from "./fonts";

const menu = [
  {
    category: "Entrées",
    dishes: [
      { name: "Œuf parfait, champignons des bois, sabayon fumé", price: "18€" },
      { name: "Betterave rôtie, fromage frais, noisette torréfiée", price: "16€" },
      { name: "Tartare de daurade, agrumes, huile d'olive nouvelle", price: "22€" },
    ],
  },
  {
    category: "Plats",
    dishes: [
      { name: "Volaille fermière, jus corsé, légumes racines", price: "34€" },
      { name: "Filet de bar, beurre blanc, fenouil confit", price: "38€" },
      { name: "Risotto d'épeautre, potimarron, sauge croustillante", price: "29€" },
    ],
  },
  {
    category: "Desserts",
    dishes: [
      { name: "Tarte fine aux pommes, caramel au sel de Guérande", price: "14€" },
      { name: "Chocolat grand cru, praliné noisette, sorbet cacao", price: "16€" },
      { name: "Fromages affinés, pain de campagne, miel de châtaignier", price: "15€" },
    ],
  },
  {
    category: "Accords mets & vins",
    dishes: [
      { name: "Verre de Chablis 1er cru", price: "14€" },
      { name: "Verre de Pinot Noir, Sancerre", price: "13€" },
      { name: "Accord complet, 3 verres sélectionnés par le sommelier", price: "38€" },
    ],
  },
];

export function Menu() {
  const [open, setOpen] = useState(0);

  return (
    <section id="menu" className="bg-[#170b0a] px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-[#d4a35a]">
            La carte
          </p>
          <h2 className={`${instrument.className} text-4xl italic text-[#f0e6d8] sm:text-5xl`}>
            Renouvelée chaque semaine
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-[#d4a35a]/15 border-y border-[#d4a35a]/15">
          {menu.map((section, i) => (
            <div key={section.category}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between py-6"
              >
                <span
                  className={`${instrument.className} text-2xl italic text-[#f0e6d8]`}
                >
                  {section.category}
                </span>
                <Plus
                  size={18}
                  className={`shrink-0 text-[#d4a35a] transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-4 pb-8">
                      {section.dishes.map((d) => (
                        <li
                          key={d.name}
                          className="flex items-baseline justify-between gap-6"
                        >
                          <span className="text-[15px] text-[#cbb89a]">
                            {d.name}
                          </span>
                          <span className="shrink-0 font-mono text-[13px] text-[#d4a35a]">
                            {d.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
