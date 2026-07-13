"use client";

import { useState } from "react";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { Reveal } from "@/components/ui/Reveal";
import { bodoni } from "./fonts";
import { categories, products, type Product } from "./data";
import { QuickView } from "./QuickView";

export function ProductGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tout");
  const [active, setActive] = useState<Product | null>(null);

  const filtered =
    filter === "Tout" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="grille" className="bg-[#f7f5f0] px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.1em] transition ${
                filter === c
                  ? "border-[#1c1b1a] bg-[#1c1b1a] text-[#f7f5f0]"
                  : "border-[#1c1b1a]/20 text-[#4a4640] hover:border-[#1c1b1a]/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05} y={20}>
              <div className="group">
                <button
                  onClick={() => setActive(p)}
                  data-cursor="Aperçu"
                  className="block w-full"
                >
                  <TreatedImage
                    src={p.image}
                    alt={p.name}
                    tint="rgba(28,27,26,0.12)"
                    className="aspect-[3/4] w-full transition-opacity duration-500 group-hover:opacity-90"
                  />
                </button>
                <div className="mt-3 flex items-start justify-between">
                  <div>
                    <h3 className={`${bodoni.className} text-base text-[#1c1b1a]`}>
                      {p.name}
                    </h3>
                    <div className="mt-1.5 flex gap-1.5">
                      {p.colors.map((c) => (
                        <span
                          key={c}
                          className="h-3 w-3 rounded-full border border-black/10"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[13px] text-[#4a4640]">{p.price} €</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <QuickView product={active} onClose={() => setActive(null)} />
    </section>
  );
}
