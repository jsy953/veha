"use client";

import { useEffect, useState } from "react";
import { fraunces } from "./fonts";

const links = [
  { label: "Études", href: "#etudes" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
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
        solid ? "bg-[#141210]/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <span
          className={`${fraunces.className} text-lg tracking-[0.2em] text-[#f4ede3]`}
        >
          MERIDIAN
        </span>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.12em] text-[#cabfae] transition hover:text-[#f4ede3]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[#cabfae]/40 px-5 py-2 text-[12px] uppercase tracking-[0.12em] text-[#f4ede3] transition hover:border-[#f4ede3] hover:bg-[#f4ede3] hover:text-[#141210]"
        >
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}
