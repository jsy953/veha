export type Project = {
  name: string;
  role: string;
  desc: string;
  tags: string[];
  href: string;
  external: boolean;
  url: string;
  image: string;
  seed: number;
  colors: string[];
  variant: "mesh" | "lines" | "grid" | "orb" | "rings";
  year: string;
};

export const projects: Project[] = [
  {
    name: "Skeleton Music",
    role: "Site vitrine — projet réel",
    desc: "Studio de production audiovisuelle (clips, films, publicités) pour des artistes et marques comme Nike, Sony ou Universal. Direction artistique noir & blanc, portfolio de projets et prise de devis en ligne.",
    tags: ["Next.js", "Direction artistique", "Production"],
    href: "https://www.skltn-prod.com/",
    external: true,
    url: "skltn-prod.com",
    image: "/images/skeleton/hero.jpg",
    seed: 1,
    colors: ["#1a1a1a", "#3a3a3a", "#0a0a0a"],
    variant: "mesh",
    year: "2026",
  },
  {
    name: "Meridian",
    role: "Vitrine — studio d'architecture",
    desc: "Site éditorial pour un studio d'architecture et d'intérieur : galerie d'études avec lightbox, storytelling par la matière et la lumière, prise de rendez-vous.",
    tags: ["Next.js", "Framer Motion", "Éditorial"],
    href: "/demos/meridian",
    external: false,
    url: "meridian-studio.fr",
    image: "/images/projects/meridian.png",
    seed: 3,
    colors: ["#c1673f", "#8a7355", "#3d372c"],
    variant: "lines",
    year: "2026",
  },
  {
    name: "Noir & Co",
    role: "E-commerce — prêt-à-porter",
    desc: "Boutique mode minimaliste avec filtres produits, aperçu rapide, panier et tunnel de commande entièrement interactifs — pensée comme une vraie expérience d'achat.",
    tags: ["Next.js", "Panier interactif", "UI/UX"],
    href: "/demos/noir",
    external: false,
    url: "noir-co.com",
    image: "/images/projects/noir.png",
    seed: 9,
    colors: ["#1c1b1a", "#8a7d6b", "#c9c2b4"],
    variant: "grid",
    year: "2026",
  },
  {
    name: "Pulse",
    role: "SaaS — analytics produit",
    desc: "Landing page produit pour un outil d'analytics : dashboard animé, grille de fonctionnalités, tarifs mensuel/annuel et témoignages — le langage visuel type produit tech.",
    tags: ["Next.js", "Motion design", "Growth"],
    href: "/demos/pulse",
    external: false,
    url: "pulse.app",
    image: "/images/projects/pulse.png",
    seed: 14,
    colors: ["#6366f1", "#22d3ee", "#0a0a16"],
    variant: "rings",
    year: "2026",
  },
  {
    name: "Ambre",
    role: "Vitrine — restaurant gastronomique",
    desc: "Site pour un restaurant gastronomique : mot du chef, carte interactive par saison et prise de réservation en ligne avec confirmation immédiate.",
    tags: ["Next.js", "Réservation", "Éditorial"],
    href: "/demos/ambre",
    external: false,
    url: "ambre-paris.fr",
    image: "/images/projects/ambre.png",
    seed: 23,
    colors: ["#d4a35a", "#7a2f1f", "#170b0a"],
    variant: "mesh",
    year: "2026",
  },
];
