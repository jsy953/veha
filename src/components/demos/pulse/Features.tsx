"use client";

import { useRef, useState, type MouseEvent } from "react";
import {
  Activity,
  Blocks,
  FileText,
  ShieldCheck,
  Users,
  Webhook,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: Activity,
    title: "Alertes en temps réel",
    desc: "Détectez les anomalies dès qu'elles apparaissent, sur n'importe quelle métrique.",
    span: "lg:col-span-2",
  },
  {
    icon: Blocks,
    title: "30+ intégrations",
    desc: "Stripe, Segment, HubSpot, Slack — connectez votre stack en un clic.",
    span: "",
  },
  {
    icon: FileText,
    title: "Rapports automatisés",
    desc: "Un résumé hebdomadaire généré et envoyé sans que vous leviez le petit doigt.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité SOC 2",
    desc: "Chiffrement de bout en bout, hébergement européen, audits réguliers.",
    span: "",
  },
  {
    icon: Users,
    title: "Collaboration d'équipe",
    desc: "Partagez des tableaux de bord, commentez les métriques, alignez les équipes.",
    span: "lg:col-span-2",
  },
  {
    icon: Webhook,
    title: "API ouverte",
    desc: "Exportez chaque donnée, automatisez chaque workflow.",
    span: "",
  },
];

function Card({ f }: { f: (typeof features)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  const Icon = f.icon;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}% ${pos.y}%, rgba(99,102,241,0.15), transparent 70%)`,
        }}
      />
      <div className="relative">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-indigo-300">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <h3 className="text-[16px] font-medium text-white">{f.title}</h3>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-white/50">
          {f.desc}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="produit" className="bg-[#0a0a16] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-indigo-300/70">
            Fonctionnalités
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tout ce qu&apos;il faut pour comprendre vos données, rien de plus.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className={f.span}>
              <Card f={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
