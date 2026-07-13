import { TreatedImage } from "@/components/ui/TreatedImage";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { instrument } from "./fonts";

const tint = "rgba(122,47,31,0.3)";

export function Philosophy() {
  return (
    <section className="bg-[#170b0a] px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-[1300px] items-center gap-16 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <TreatedImage
            src="/images/ambre/212.jpg"
            alt="La salle d'Ambre"
            tint={tint}
            grayscale={false}
            className="col-span-2 aspect-[16/9] w-full"
          />
          <TreatedImage
            src="/images/ambre/225.jpg"
            alt="Service en salle"
            tint={tint}
            grayscale={false}
            className="aspect-square w-full"
          />
          <TreatedImage
            src="/images/ambre/23.jpg"
            alt="Détail de la table"
            tint={tint}
            className="aspect-square w-full"
          />
        </div>

        <div>
          <Reveal>
            <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-[#d4a35a]">
              Le mot du chef
            </p>
          </Reveal>
          <h2
            className={`${instrument.className} text-3xl italic leading-[1.2] text-[#f0e6d8] sm:text-4xl`}
          >
            <RevealText text="Je cuisine ce que la terre donne, pas ce que la carte impose." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[#cbb89a]">
              Formé auprès de plusieurs tables étoilées avant d&apos;ouvrir
              Ambre en 2019, Antoine Vasseur travaille en direct avec une
              dizaine de producteurs franciliens. La carte change au fil des
              récoltes — jamais figée, toujours honnête.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
