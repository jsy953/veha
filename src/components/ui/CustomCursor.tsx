"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let raf = 0;

    function loop() {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function handleMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      const el = (e.target as HTMLElement)?.closest("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") || "" : "");
    }

    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const big = label.length > 0;

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        width: big ? 84 : 14,
        height: big ? 84 : 14,
        marginLeft: big ? -42 : -7,
        marginTop: big ? -42 : -7,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden
    >
      <span style={{ opacity: big ? 1 : 0 }}>{label}</span>
    </div>
  );
}
