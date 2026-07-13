import { Marquee } from "@/components/ui/Marquee";

const quotes = [
  { name: "Camille Roy", role: "CPO, Northwind", text: "Pulse a remplacé trois outils différents. On a enfin une seule source de vérité." },
  { name: "Nabil Idrissi", role: "Head of Growth, Vortex", text: "Les alertes prédictives nous ont fait gagner deux semaines sur un incident majeur." },
  { name: "Léa Fontaine", role: "CEO, Fenwick", text: "L'intégration a pris 20 minutes. Le dashboard, littéralement le lendemain." },
  { name: "Marc Dubreuil", role: "VP Data, Solstice", text: "Le meilleur rapport simplicité / puissance qu'on ait testé cette année." },
];

const quotes2 = [
  { name: "Inès Belkacem", role: "COO, Arclight", text: "Notre équipe commerciale vit dans Pulse désormais. Adoption à 100% en un mois." },
  { name: "Tom Brasseur", role: "CTO, Kestrel", text: "L'API est propre, la doc est claire — rare pour un outil analytics." },
  { name: "Sofia Marchetti", role: "Data Lead, Ampere", text: "On a divisé par deux le temps passé à préparer nos rapports mensuels." },
  { name: "Hugo Lambert", role: "Founder, Lumen", text: "Le support répond en quelques minutes. Ça change tout en période critique." },
];

function Card({ q }: { q: (typeof quotes)[number] }) {
  return (
    <div className="mx-3 w-[340px] shrink-0 whitespace-normal rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <p className="text-[14px] leading-relaxed text-white/70">
        &ldquo;{q.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 text-[12px] font-medium text-[#0a0a16]">
          {q.name[0]}
        </div>
        <div>
          <p className="text-[13px] text-white">{q.name}</p>
          <p className="text-[12px] text-white/40">{q.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="témoignages" className="bg-[#0a0a16] py-28">
      <div className="mx-auto mb-14 max-w-[1300px] px-6 sm:px-10">
        <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-indigo-300/70">
          Témoignages
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Des équipes qui ont arrêté de deviner.
        </h2>
      </div>

      <Marquee className="mb-4">
        {quotes.map((q) => (
          <Card key={q.name} q={q} />
        ))}
      </Marquee>
      <Marquee reverse>
        {quotes2.map((q) => (
          <Card key={q.name} q={q} />
        ))}
      </Marquee>
    </section>
  );
}
