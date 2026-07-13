"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { bodoni } from "./fonts";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const { lines, drawerOpen, closeDrawer, removeItem, totalPrice } = useCart();
  const [confirmed, setConfirmed] = useState(false);

  function handleCheckout() {
    setConfirmed(true);
  }

  function handleClose() {
    closeDrawer();
    setTimeout(() => setConfirmed(false), 400);
  }

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-[#1c1b1a]/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col bg-[#f7f5f0] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#1c1b1a]/10 px-6 py-5">
              <span className={`${bodoni.className} text-xl italic text-[#1c1b1a]`}>
                Panier
              </span>
              <button
                onClick={handleClose}
                aria-label="Fermer le panier"
                className="rounded-full p-2 transition hover:bg-[#1c1b1a]/5"
              >
                <X size={18} />
              </button>
            </div>

            {confirmed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1c1b1a] text-[#f7f5f0]">
                  <Check size={24} />
                </div>
                <h3 className={`${bodoni.className} text-2xl text-[#1c1b1a]`}>
                  Commande confirmée
                </h3>
                <p className="text-[14px] text-[#5b564c]">
                  Référence #NC-{Math.floor(10000 + totalPrice)} — un email de
                  confirmation vous a été envoyé. Merci pour votre confiance.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-3 rounded-full border border-[#1c1b1a]/20 px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-[#1c1b1a] transition hover:border-[#1c1b1a]/50"
                >
                  Continuer mes achats
                </button>
              </motion.div>
            ) : lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 text-center text-[#8a7d6b]">
                <p className="text-[14px]">Votre panier est vide.</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {lines.map((l) => (
                    <div
                      key={l.key}
                      className="flex items-center gap-4 border-b border-[#1c1b1a]/10 py-4"
                    >
                      <div
                        className="h-16 w-14 shrink-0 rounded"
                        style={{ background: l.product.colors[0] }}
                      />
                      <div className="flex-1">
                        <p className="text-[14px] text-[#1c1b1a]">
                          {l.product.name}
                        </p>
                        <p className="mt-0.5 text-[12px] text-[#8a7d6b]">
                          Taille {l.size} · Qté {l.qty}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[13px] text-[#1c1b1a]">
                          {l.product.price * l.qty} €
                        </span>
                        <button
                          onClick={() => removeItem(l.key)}
                          className="text-[11px] uppercase tracking-[0.08em] text-[#8a7d6b] underline underline-offset-2 hover:text-[#1c1b1a]"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#1c1b1a]/10 px-6 py-6">
                  <div className="mb-4 flex items-center justify-between text-[15px] text-[#1c1b1a]">
                    <span>Sous-total</span>
                    <span>{totalPrice} €</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full rounded-full bg-[#1c1b1a] py-4 text-[13px] uppercase tracking-[0.14em] text-[#f7f5f0] transition hover:bg-[#403a30]"
                  >
                    Passer commande
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
