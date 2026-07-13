import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";

export function CTAFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a16] px-6 pb-12 pt-28 sm:px-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(500px circle at 50% 0%, rgba(99,102,241,0.4), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1300px] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Prêt à voir clair dans vos données ?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] text-white/55">
            Rejoignez plus de 400 équipes qui pilotent leur croissance avec
            Pulse.
          </p>
          <Magnetic className="mt-9 inline-block">
            <a
              href="#tarifs"
              className="inline-flex items-center rounded-full bg-white px-7 py-4 text-[14px] font-medium text-[#0a0a16] transition hover:bg-white/90"
            >
              Commencer gratuitement
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-24 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-[12px] text-white/30 sm:flex-row sm:justify-between">
          <span>© 2026 Pulse Analytics</span>
          <span>Projet fictif — réalisé pour un portfolio de développeur</span>
        </div>
      </div>
    </footer>
  );
}
