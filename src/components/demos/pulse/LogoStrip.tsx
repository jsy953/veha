import { Marquee } from "@/components/ui/Marquee";

const names = ["Northwind", "Lumen", "Vortex", "Arclight", "Fenwick", "Solstice", "Ampere", "Kestrel"];

export function LogoStrip() {
  return (
    <div className="border-y border-white/10 bg-[#0a0a16] py-8">
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
        Ils pilotent leur croissance avec Pulse
      </p>
      <Marquee>
        {names.map((n) => (
          <span key={n} className="mx-10 text-[17px] font-medium text-white/25">
            {n}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
