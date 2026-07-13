import type { Metadata } from "next";
import { CartProvider } from "@/components/demos/noir/CartContext";
import { Nav } from "@/components/demos/noir/Nav";
import { Hero } from "@/components/demos/noir/Hero";
import { ProductGrid } from "@/components/demos/noir/ProductGrid";
import { CartDrawer } from "@/components/demos/noir/CartDrawer";
import { Footer } from "@/components/demos/noir/Footer";

export const metadata: Metadata = {
  title: "Noir & Co — Prêt-à-porter en petites séries",
  description:
    "Concept fictif de boutique e-commerce mode, réalisé à titre de démonstration.",
};

export default function NoirPage() {
  return (
    <CartProvider>
      <main className="bg-[#f7f5f0]">
        <Nav />
        <Hero />
        <ProductGrid />
        <Footer />
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
