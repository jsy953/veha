import { Reveal } from "@/components/ui/Reveal";
import { fraunces } from "./fonts";

const steps = [
  {
    n: "01",
    title: "Écoute",
    text: "Un temps long passé sur site et auprès de vous, pour comprendre les usages avant de dessiner quoi que ce soit.",
  },
  {
    n: "02",
    title: "Concept",
    text: "Une intention forte, unique, capable de tenir tout le projet — du plan masse jusqu'à la poignée de porte.",
  },
  {
    n: "03",
    title: "Matérialité",
    text: "Le choix des matières comme un vocabulaire : bois brûlé, pierre locale, acier patiné, lumière naturelle.",
  },
  {
    n: "04",
    title: "Livraison",
    text: "Un suivi de chantier exigeant, jusqu'à la remise des clés et bien après — nous restons vos architectes.",
  },
];

export function Approach() {
  return (
    <section
      id="approche"
      className="border-t border-white/10 bg-[#141210] px-6 py-28 sm:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-[#a08e6f]">
              Notre approche
            </p>
            <h2
              className={`${fraunces.className} max-w-sm text-4xl leading-[1.05] text-[#f4ede3] sm:text-5xl`}
            >
              Quatre temps, une seule exigence.
            </h2>
          </Reveal>

          <div className="divide-y divide-white/10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-6 py-8 sm:grid-cols-[80px_1fr]">
                  <span
                    className={`${fraunces.className} text-3xl italic text-[#c1673f]`}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg text-[#f4ede3]">{s.title}</h3>
                    <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-[#948669]">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
