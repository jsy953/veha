import { Layers, ShoppingBag, Sparkles, UtensilsCrossed } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    icon: Layers,
    title: "Sites vitrines & éditoriaux",
    desc: "Studios, cabinets, marques — des sites qui racontent une histoire avec une direction artistique forte.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce sur-mesure",
    desc: "Boutiques rapides et soignées, du catalogue au tunnel d'achat, pensées pour convertir sans friction.",
  },
  {
    icon: Sparkles,
    title: "Produits SaaS",
    desc: "Landing pages et interfaces produit qui expliquent, démontrent et convainquent en quelques secondes.",
  },
  {
    icon: UtensilsCrossed,
    title: "Expériences sur-mesure",
    desc: "Réservation, prise de rendez-vous, configurateurs — des interactions pensées pour votre métier.",
  },
];

export function Capabilities() {
  return (
    <section id="approche" className="border-t border-black/[0.06] bg-[#fafafa] px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-black/40">
            Ce que nous faisons
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Du design à la mise en production, sans compromis.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-black/[0.06] sm:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-[#fafafa] p-8 transition-colors duration-300 hover:bg-white">
                  <Icon size={22} strokeWidth={1.5} className="text-black/70" />
                  <h3 className="mt-5 text-[17px] font-medium text-black">
                    {it.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-black/55">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
