"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    desc: "Pour découvrir Pulse en solo.",
    features: ["1 tableau de bord", "3 intégrations", "Rapports hebdomadaires", "Support email"],
    highlight: false,
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 39,
    desc: "Pour les équipes qui grandissent vite.",
    features: [
      "Tableaux de bord illimités",
      "30+ intégrations",
      "Alertes en temps réel",
      "Collaboration d'équipe",
      "Support prioritaire",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    monthly: 149,
    yearly: 119,
    desc: "Pour les organisations à fort volume.",
    features: [
      "Tout Pro, plus :",
      "API dédiée & webhooks",
      "SSO & SCIM",
      "SLA 99.9%",
      "Account manager dédié",
    ],
    highlight: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="tarifs" className="bg-[#0a0a16] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="text-center">
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-indigo-300/70">
            Tarifs
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, transparent, sans surprise.
          </h2>

          <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-[13px] transition ${
                !yearly ? "bg-white text-[#0a0a16]" : "text-white/60"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition ${
                yearly ? "bg-white text-[#0a0a16]" : "text-white/60"
              }`}
            >
              Annuel
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] text-emerald-300">
                -20%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  p.highlight
                    ? "border-indigo-400/40 bg-gradient-to-b from-indigo-500/10 to-transparent"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-indigo-400/20 px-3 py-1 text-[11px] text-indigo-300">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-lg font-medium text-white">{p.name}</h3>
                <p className="mt-1.5 text-[13px] text-white/50">{p.desc}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-semibold text-white">
                    {yearly ? p.yearly : p.monthly}€
                  </span>
                  <span className="mb-1 text-[13px] text-white/40">/mois</span>
                </div>

                <Magnetic className="mt-7">
                  <a
                    href="#"
                    className={`block rounded-full py-3 text-center text-[13px] font-medium transition ${
                      p.highlight
                        ? "bg-white text-[#0a0a16] hover:bg-white/90"
                        : "border border-white/15 text-white hover:border-white/30"
                    }`}
                  >
                    Choisir {p.name}
                  </a>
                </Magnetic>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13px] text-white/60"
                    >
                      <Check size={15} className="mt-0.5 shrink-0 text-indigo-300" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
