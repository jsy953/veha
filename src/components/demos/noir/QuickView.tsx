"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { bodoni } from "./fonts";
import { useCart } from "./CartContext";
import type { Product } from "./data";

const sizes = ["XS", "S", "M", "L", "XL"];

export function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!product) return;
    addItem(product, size, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setQty(1);
    }, 700);
  }

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#1c1b1a]/50 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid w-full max-w-3xl gap-10 bg-[#f7f5f0] p-8 lg:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full border border-[#1c1b1a]/15 p-2 text-[#1c1b1a] transition hover:bg-[#1c1b1a]/5"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>

            <TreatedImage
              src={product.image}
              alt={product.name}
              tint="rgba(28,27,26,0.12)"
              className="aspect-[4/5] w-full"
            />

            <div className="flex flex-col justify-center">
              <p className="text-[12px] uppercase tracking-[0.15em] text-[#8a7d6b]">
                {product.category}
              </p>
              <h3 className={`${bodoni.className} mt-2 text-3xl text-[#1c1b1a]`}>
                {product.name}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5b564c]">
                {product.desc}
              </p>
              <p className="mt-5 text-lg text-[#1c1b1a]">{product.price} €</p>

              <div className="mt-7">
                <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-[#8a7d6b]">
                  Taille
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`h-9 w-9 rounded-full border text-[12px] transition ${
                        size === s
                          ? "border-[#1c1b1a] bg-[#1c1b1a] text-[#f7f5f0]"
                          : "border-[#1c1b1a]/20 text-[#1c1b1a] hover:border-[#1c1b1a]/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a7d6b]">
                  Quantité
                </p>
                <div className="flex items-center gap-3 rounded-full border border-[#1c1b1a]/20 px-3 py-1.5">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Diminuer"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-4 text-center text-[13px]">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(9, q + 1))}
                    aria-label="Augmenter"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="mt-8 w-full rounded-full bg-[#1c1b1a] py-4 text-[13px] uppercase tracking-[0.14em] text-[#f7f5f0] transition hover:bg-[#403a30]"
              >
                {added ? "Ajouté ✓" : "Ajouter au panier"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
