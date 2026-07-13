import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { fraunces } from "./fonts";

export function Contact() {
  return (
    <footer
      id="contact"
      className="bg-[#141210] px-6 pb-10 pt-28 sm:px-10 lg:pt-36"
    >
      <div className="mx-auto max-w-[1400px] border-t border-white/10 pt-16">
        <Reveal>
          <h2
            className={`${fraunces.className} max-w-2xl text-4xl leading-[1.05] text-[#f4ede3] sm:text-6xl`}
          >
            Un projet en tête ?
            <br />
            <span className="italic text-[#c1673f]">Parlons-en.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Magnetic className="mt-10 inline-block">
            <a
              href="mailto:contact@meridian-studio.fr"
              className="inline-flex items-center gap-3 rounded-full bg-[#f4ede3] px-8 py-4 text-sm uppercase tracking-[0.1em] text-[#141210] transition hover:bg-white"
            >
              contact@meridian-studio.fr
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-8 text-[12px] uppercase tracking-[0.15em] text-[#726554] sm:flex-row sm:items-center sm:justify-between">
          <span>MERIDIAN — Studio d&apos;architecture, Paris</span>
          <span>Projet fictif — réalisé pour un portfolio de développeur</span>
        </div>
      </div>
    </footer>
  );
}
