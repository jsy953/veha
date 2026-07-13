"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { GradientArt } from "@/components/ui/GradientArt";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "./projects";

function ProjectLink({
  p,
  className,
  cursor,
  children,
}: {
  p: Project;
  className?: string;
  cursor?: string;
  children: ReactNode;
}) {
  if (p.external) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={cursor}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={p.href} data-cursor={cursor} className={className}>
      {children}
    </Link>
  );
}

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const reverse = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal y={40}>
        <ProjectLink p={p} cursor={p.external ? "Visiter" : "Voir le site"} className="group block">
          <motion.div style={{ y }}>
            <BrowserFrame url={p.url} className="transition-transform duration-500 group-hover:-translate-y-1.5">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              ) : (
                <GradientArt
                  seed={p.seed}
                  colors={p.colors}
                  variant={p.variant}
                  className="h-full w-full"
                />
              )}
            </BrowserFrame>
          </motion.div>
        </ProjectLink>
      </Reveal>

      <Reveal y={40} delay={0.1}>
        <p className="font-mono text-[13px] text-black/35">
          {String(index + 1).padStart(2, "0")} — {p.year}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          {p.name}
        </h3>
        <p className="mt-1 text-[14px] text-black/45">{p.role}</p>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-black/60">
          {p.desc}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 px-3 py-1 text-[12px] text-black/55"
            >
              {t}
            </span>
          ))}
        </div>
        <ProjectLink
          p={p}
          className="mt-8 inline-flex items-center gap-1.5 border-b border-black pb-1 text-[14px] font-medium text-black"
        >
          {p.external ? "Visiter le site" : "Découvrir le projet"}
          <ArrowUpRight size={16} />
        </ProjectLink>
      </Reveal>
    </div>
  );
}
