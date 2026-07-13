"use client";

import { useState } from "react";
import { bodoni } from "./fonts";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <footer className="bg-[#1c1b1a] px-6 py-20 text-[#f7f5f0] sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className={`${bodoni.className} text-2xl italic`}>
              Noir &amp; Co
            </span>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#a39c8d]">
              Prêt-à-porter en petites séries, fabriqué en Europe à partir de
              matières naturelles.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <p className="mb-3 text-[12px] uppercase tracking-[0.14em] text-[#a39c8d]">
              Restez informé
            </p>
            {subscribed ? (
              <p className="text-[14px] text-[#f7f5f0]">
                Merci, à très vite ✦
              </p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full border-b border-[#a39c8d]/40 bg-transparent py-2 text-[14px] outline-none placeholder:text-[#a39c8d] focus:border-[#f7f5f0]"
                />
                <button
                  type="submit"
                  className="shrink-0 border-b border-[#f7f5f0] pb-2 text-[12px] uppercase tracking-[0.1em]"
                >
                  Envoyer
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#a39c8d]/20 pt-8 text-[11px] uppercase tracking-[0.12em] text-[#8a7d6b] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Noir &amp; Co</span>
          <span>Projet fictif — réalisé pour un portfolio de développeur</span>
        </div>
      </div>
    </footer>
  );
}
