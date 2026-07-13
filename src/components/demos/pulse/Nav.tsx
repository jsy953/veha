"use client";

import { Magnetic } from "@/components/ui/Magnetic";

const links = ["Produit", "Tarifs", "Témoignages"];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a16]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300" />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Pulse
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[13px] text-white/60 transition hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-[13px] text-white/60 transition hover:text-white sm:block"
          >
            Se connecter
          </a>
          <Magnetic>
            <a
              href="#tarifs"
              className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#0a0a16] transition hover:bg-white/90"
            >
              Essai gratuit
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
