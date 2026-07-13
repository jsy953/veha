import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { Work } from "@/components/home/Work";
import { Capabilities } from "@/components/home/Capabilities";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <Hero />
        <Work />
        <Capabilities />
        <Contact />
      </main>
    </>
  );
}
