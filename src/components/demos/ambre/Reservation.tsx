"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { instrument } from "./fonts";

const days = ["Jeu 16", "Ven 17", "Sam 18", "Dim 19", "Lun 20", "Mar 21", "Mer 22"];
const times = ["12:00", "12:30", "13:00", "19:00", "19:30", "20:00", "20:30", "21:00"];

export function Reservation() {
  const [day, setDay] = useState(2);
  const [time, setTime] = useState("20:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) return;
    setConfirmed(true);
  }

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-[#0f0706] px-6 py-24 sm:px-10"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-[#d4a35a]">
            Réservation
          </p>
          <h2 className={`${instrument.className} text-4xl italic text-[#f0e6d8] sm:text-5xl`}>
            Réserver une table
          </h2>
        </Reveal>

        <div className="mt-14 rounded-3xl border border-[#d4a35a]/15 bg-[#170b0a] p-8 sm:p-10">
          {confirmed ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 py-10 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a35a] text-[#170b0a]">
                <Check size={24} />
              </div>
              <h3 className={`${instrument.className} text-2xl italic text-[#f0e6d8]`}>
                Réservation confirmée
              </h3>
              <p className="max-w-sm text-[14px] text-[#cbb89a]">
                Table pour {guests} — {days[day]} à {time}. Un SMS de
                confirmation vient d&apos;être envoyé. À très vite, {name}.
              </p>
              <button
                onClick={() => setConfirmed(false)}
                className="mt-2 rounded-full border border-[#d4a35a]/30 px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-[#f0e6d8] transition hover:border-[#d4a35a]"
              >
                Nouvelle réservation
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#d4a35a]">
                  Date
                </p>
                <div className="flex flex-wrap gap-2">
                  {days.map((d, i) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setDay(i)}
                      className={`rounded-full border px-4 py-2 text-[12px] transition ${
                        day === i
                          ? "border-[#d4a35a] bg-[#d4a35a] text-[#170b0a]"
                          : "border-[#d4a35a]/25 text-[#cbb89a] hover:border-[#d4a35a]/60"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[#d4a35a]">
                  Heure
                </p>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`rounded-full border px-4 py-2 text-[12px] transition ${
                        time === t
                          ? "border-[#d4a35a] bg-[#d4a35a] text-[#170b0a]"
                          : "border-[#d4a35a]/25 text-[#cbb89a] hover:border-[#d4a35a]/60"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4a35a]">
                  Convives
                </p>
                <div className="flex items-center gap-4 rounded-full border border-[#d4a35a]/25 px-4 py-2">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    aria-label="Diminuer"
                    className="text-[#f0e6d8]"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-[13px] text-[#f0e6d8]">
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(12, g + 1))}
                    aria-label="Augmenter"
                    className="text-[#f0e6d8]"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                className="w-full border-b border-[#d4a35a]/25 bg-transparent py-2.5 text-[15px] text-[#f0e6d8] outline-none placeholder:text-[#7a6a5a] focus:border-[#d4a35a]"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#d4a35a] py-4 text-[13px] uppercase tracking-[0.1em] text-[#170b0a] transition hover:bg-[#e3b876]"
              >
                Confirmer la réservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
