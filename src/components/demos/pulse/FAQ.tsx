"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Combien de temps prend l'installation ?",
    a: "La plupart des équipes sont opérationnelles en moins de 20 minutes grâce à nos intégrations natives et notre assistant de configuration.",
  },
  {
    q: "Puis-je changer de plan à tout moment ?",
    a: "Oui, vous pouvez passer d'un plan à l'autre à tout moment depuis vos paramètres — la différence est calculée au prorata.",
  },
  {
    q: "Où sont hébergées mes données ?",
    a: "Toutes les données sont hébergées dans l'Union Européenne, chiffrées au repos et en transit, conformément au RGPD.",
  },
  {
    q: "Proposez-vous un essai gratuit ?",
    a: "Chaque nouveau compte bénéficie de 14 jours d'essai complet sur le plan Pro, sans carte bancaire requise.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0a0a16] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-indigo-300/70">
            Questions fréquentes
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tout ce que vous vous demandez.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-[15px] text-white">{f.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-white/40 transition-transform duration-300 ${
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
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[14px] leading-relaxed text-white/55">
                      {f.a}
                    </p>
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
