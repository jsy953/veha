import { Marquee } from "@/components/ui/Marquee";

const names = [
  "Atelier Vosges",
  "Musée de la Lumière",
  "Tour Arcadia",
  "Maison Hâ",
  "Le Cloître",
  "Pavillon Sequoia",
  "Fondation Ilot",
  "Villa Cassiopée",
];

export function ClientStrip() {
  return (
    <div className="border-y border-white/10 bg-[#141210] py-6">
      <Marquee>
        {names.map((n) => (
          <span
            key={n}
            className="mx-8 text-[13px] uppercase tracking-[0.2em] text-[#726554]"
          >
            {n}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
