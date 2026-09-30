export interface ObeliskProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: "live" | "wip" | "soon";
  url?: string;
  github?: string;
  image?: string;
  imageBg?: string;
}

// Añade aquí tus proyectos de ObeliskLabs
export const obeliskProjects: ObeliskProject[] = [
  {
    id: "bhainepal",
    name: "Bhainepal",
    description:
      "Web de una ONG española que combate la anemia y la malnutrición infantil en orfanatos de Katmandú (Nepal). Presenta sus programas de salud, nutrición y educación, el impacto conseguido, la transparencia de sus cuentas y las opciones de donación y apadrinamiento.",
    tags: ["Astro", "ONG", "Donaciones"],
    status: "live",
    url: "https://bhainepal.obelisklabs.dev/",
    image: "/projects/bhainepal.webp",
    imageBg: "#f5efe6",
  },
  {
    id: "geganters",
    name: "Geganters",
    description:
      "Agenda unificada de cercaviles y directorio de gegants y gegantons de Mataró. Permite consultar las salidas del fin de semana, conocer las figuras de cada colla, guardar favoritos y que nuevas colles soliciten darse de alta.",
    tags: ["Next.js", "Supabase", "Cultura popular"],
    status: "live",
    url: "https://geganters.obelisklabs.dev/",
    image: "/projects/geganters.png",
    imageBg: "#f4f2ee",
  },
  {
    id: "lobby",
    name: "Lobby",
    description:
      "Algo se está cocinando en el laboratorio. Las cartas ya están sobre la mesa, pero todavía boca abajo: de momento no podemos desvelar nada más. Muy pronto, nueva partida.",
    tags: ["Top secret", "En construcción"],
    status: "wip",
    image: "/projects/lobby.svg",
    imageBg: "#0c0c0f",
  },
];
