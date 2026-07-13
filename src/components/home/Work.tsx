import { Reveal } from "@/components/ui/Reveal";
import { projects } from "./projects";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section id="travaux" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-black/40">
            Sélection de projets
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Des univers différents — un seul niveau d&apos;exigence.
          </h2>
        </Reveal>

        <div className="mt-4 divide-y divide-black/[0.06]">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
