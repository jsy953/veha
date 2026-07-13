"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";

const EMAIL = "ekpo95210@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <footer id="contact" className="px-6 pb-10 pt-24 sm:px-10">
      <div className="mx-auto max-w-[1240px] border-t border-black/[0.06] pt-20 text-center">
        <Reveal>
          <p className="mb-5 text-[12px] uppercase tracking-[0.2em] text-black/40">
            Un projet en tête ?
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-black sm:text-6xl">
            Discutons de votre prochain site.
          </h2>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Magnetic>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-black px-7 py-4 text-[14px] font-medium text-white transition hover:bg-black/85"
              >
                {EMAIL}
              </a>
            </Magnetic>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-full border border-black/15 px-5 py-4 text-[13px] text-black/70 transition hover:border-black/30"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copié !" : "Copier l'adresse"}
            </button>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col items-center gap-4 border-t border-black/[0.06] pt-8 text-[12px] text-black/40 sm:flex-row sm:justify-between">
          <span>© 2026 Studio Veha</span>
          <span>Conçu &amp; développé à la main — Next.js, Framer Motion, Lenis</span>
        </div>
      </div>
    </footer>
  );
}
