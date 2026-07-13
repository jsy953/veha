import type { Metadata } from "next";
import { Nav } from "@/components/demos/ambre/Nav";
import { Hero } from "@/components/demos/ambre/Hero";
import { Philosophy } from "@/components/demos/ambre/Philosophy";
import { Menu } from "@/components/demos/ambre/Menu";
import { Reservation } from "@/components/demos/ambre/Reservation";
import { Footer } from "@/components/demos/ambre/Footer";

export const metadata: Metadata = {
  title: "Ambre — Restaurant gastronomique, Paris",
  description:
    "Concept fictif de site vitrine pour un restaurant gastronomique, réalisé à titre de démonstration.",
};

export default function AmbrePage() {
  return (
    <main className="bg-[#170b0a]">
      <Nav />
      <Hero />
      <Philosophy />
      <Menu />
      <Reservation />
      <Footer />
    </main>
  );
}
