import type { Metadata } from "next";
import { Nav } from "@/components/demos/meridian/Nav";
import { Hero } from "@/components/demos/meridian/Hero";
import { ClientStrip } from "@/components/demos/meridian/ClientStrip";
import { Projects } from "@/components/demos/meridian/Projects";
import { Approach } from "@/components/demos/meridian/Approach";
import { Contact } from "@/components/demos/meridian/Contact";

export const metadata: Metadata = {
  title: "MERIDIAN — Studio d'architecture & d'intérieur",
  description:
    "Concept fictif de site vitrine pour un studio d'architecture, réalisé à titre de démonstration.",
};

export default function MeridianPage() {
  return (
    <main className="bg-[#141210]">
      <Nav />
      <Hero />
      <ClientStrip />
      <Projects />
      <Approach />
      <Contact />
    </main>
  );
}
