"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "@/components/ui/Magnetic";

const links = [
  { label: "Travaux", href: "#travaux" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-black/[0.06] bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 sm:px-10">
        <a href="#" className="text-[15px] font-semibold tracking-tight">
          Studio&nbsp;Veha
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-black/60 transition hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Magnetic>
          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-[13px] font-medium text-white transition hover:bg-black/85"
          >
            Discutons
          </a>
        </Magnetic>
      </div>
    </header>
  );
}
