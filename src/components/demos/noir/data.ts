export type Product = {
  id: string;
  name: string;
  category: "Vestes" | "Robes" | "Accessoires" | "Mailles";
  price: number;
  image: string;
  colors: string[];
  desc: string;
};

const photos = [
  "/images/noir/21.jpg",
  "/images/noir/31.jpg",
  "/images/noir/111.jpg",
  "/images/noir/240.jpg",
];

export const categories = ["Tout", "Vestes", "Robes", "Mailles", "Accessoires"] as const;

export const products: Product[] = [
  {
    id: "p1",
    name: "Manteau Cocon",
    category: "Vestes",
    price: 420,
    image: photos[0],
    colors: ["#1c1b1a", "#c9c2b4"],
    desc: "Laine double face, coupe oversize, doublure en satin de viscose.",
  },
  {
    id: "p2",
    name: "Robe Sillage",
    category: "Robes",
    price: 310,
    image: photos[1],
    colors: ["#1c1b1a", "#8a7d6b"],
    desc: "Crêpe fluide à coupe biaise, dos drapé, fermeture invisible.",
  },
  {
    id: "p3",
    name: "Pull Îlot",
    category: "Mailles",
    price: 180,
    image: photos[2],
    colors: ["#c9c2b4", "#403a30"],
    desc: "Maille côtelée en laine mérinos, col montant, coupe droite.",
  },
  {
    id: "p4",
    name: "Trench Méridien",
    category: "Vestes",
    price: 480,
    image: photos[3],
    colors: ["#403a30", "#1c1b1a"],
    desc: "Coton ciré déperlant, ceinture amovible, coupe longue.",
  },
  {
    id: "p5",
    name: "Sac Dune",
    category: "Accessoires",
    price: 260,
    image: photos[0],
    colors: ["#8a7d6b"],
    desc: "Cuir grainé tanné végétal, fermoir laiton brossé, bandoulière ajustable.",
  },
  {
    id: "p6",
    name: "Robe Lisière",
    category: "Robes",
    price: 340,
    image: photos[1],
    colors: ["#1c1b1a"],
    desc: "Laine légère à fines rayures, manches longues, ceinture cuir.",
  },
  {
    id: "p7",
    name: "Cardigan Rive",
    category: "Mailles",
    price: 210,
    image: photos[2],
    colors: ["#c9c2b4", "#8a7d6b"],
    desc: "Cachemire mélangé, boutons corne, poches passepoilées.",
  },
  {
    id: "p8",
    name: "Ceinture Arc",
    category: "Accessoires",
    price: 95,
    image: photos[3],
    colors: ["#1c1b1a", "#403a30"],
    desc: "Cuir pleine fleur, boucle laiton massif, largeur 3cm.",
  },
];
