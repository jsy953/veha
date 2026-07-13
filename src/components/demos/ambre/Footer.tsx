import { instrument } from "./fonts";

export function Footer() {
  return (
    <footer id="adresse" className="bg-[#170b0a] px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-[1300px] border-t border-[#d4a35a]/15 pt-16">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <span className={`${instrument.className} text-2xl italic text-[#f0e6d8]`}>
              Ambre
            </span>
            <p className="mt-4 text-[14px] leading-relaxed text-[#cbb89a]">
              14 rue des Écoles
              <br />
              75005 Paris
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#d4a35a]">
              Horaires
            </p>
            <p className="text-[14px] leading-relaxed text-[#cbb89a]">
              Mardi – Samedi
              <br />
              12h – 14h30 · 19h – 22h30
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#d4a35a]">
              Contact
            </p>
            <p className="text-[14px] leading-relaxed text-[#cbb89a]">
              01 42 00 00 00
              <br />
              reservation@ambre-paris.fr
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#d4a35a]/15 pt-8 text-[11px] uppercase tracking-[0.12em] text-[#7a6a5a] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Ambre</span>
          <span>Projet fictif — réalisé pour un portfolio de développeur</span>
        </div>
      </div>
    </footer>
  );
}
