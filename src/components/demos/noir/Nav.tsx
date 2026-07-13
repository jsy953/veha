"use client";

import { ShoppingBag } from "lucide-react";
import { bodoni } from "./fonts";
import { useCart } from "./CartContext";

const links = ["Nouveautés", "Vêtements", "Accessoires", "Éditions limitées"];

export function Nav() {
  const { totalCount, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-[#1c1b1a]/10 bg-[#f7f5f0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <span className={`${bodoni.className} text-2xl italic text-[#1c1b1a]`}>
          Noir &amp; Co
        </span>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href="#grille"
              className="text-[12px] uppercase tracking-[0.14em] text-[#4a4640] transition hover:text-[#1c1b1a]"
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          onClick={openDrawer}
          data-cursor="Panier"
          className="relative flex items-center gap-2 rounded-full border border-[#1c1b1a]/15 px-4 py-2 text-[#1c1b1a] transition hover:border-[#1c1b1a]/40"
          aria-label="Ouvrir le panier"
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          <span className="text-[12px]">{totalCount}</span>
        </button>
      </div>
    </header>
  );
}
