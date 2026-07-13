import type { Metadata } from "next";
import { Nav } from "@/components/demos/pulse/Nav";
import { Hero } from "@/components/demos/pulse/Hero";
import { LogoStrip } from "@/components/demos/pulse/LogoStrip";
import { Features } from "@/components/demos/pulse/Features";
import { Pricing } from "@/components/demos/pulse/Pricing";
import { Testimonials } from "@/components/demos/pulse/Testimonials";
import { FAQ } from "@/components/demos/pulse/FAQ";
import { CTAFooter } from "@/components/demos/pulse/CTAFooter";

export const metadata: Metadata = {
  title: "Pulse — L'analytics qui parle enfin votre langage",
  description:
    "Concept fictif de landing page SaaS analytics, réalisé à titre de démonstration.",
};

export default function PulsePage() {
  return (
    <main className="bg-[#0a0a16]">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
