"use client";

import { useEffect, useState } from "react";
import { instrument } from "./fonts";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "L'adresse", href: "#adresse" },
  { label: "Réserver", href: "#reservation" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-[#170b0a]/90 backdrop-blur border-b border-[#d4a35a]/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-5 sm:px-10">
        <span className={`${instrument.className} text-2xl italic text-[#f0e6d8]`}>
          Ambre
        </span>
        <nav className="hidden items-center gap-9 md:flex">
          {links.slice(0, 2).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.12em] text-[#cbb89a] transition hover:text-[#f0e6d8]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservation"
          className="rounded-full bg-[#d4a35a] px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] text-[#170b0a] transition hover:bg-[#e3b876]"
        >
          Réserver une table
        </a>
      </div>
    </header>
  );
}
