import type { Locale } from "@/i18n/config";

export interface ObeliskProject {
  id: string;
  name: string;
  description: Record<Locale, string>;
  tags: Record<Locale, string[]>;
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
    description: {
      es: "Web de una ONG española que combate la anemia y la malnutrición infantil en orfanatos de Katmandú (Nepal). Presenta sus programas de salud, nutrición y educación, el impacto conseguido, la transparencia de sus cuentas y las opciones de donación y apadrinamiento.",
      ca: "Web d'una ONG espanyola que combat l'anèmia i la malnutrició infantil en orfenats de Katmandú (Nepal). Presenta els seus programes de salut, nutrició i educació, l'impacte aconseguit, la transparència dels seus comptes i les opcions de donació i apadrinament.",
    },
    tags: {
      es: ["Astro", "ONG", "Donaciones"],
      ca: ["Astro", "ONG", "Donacions"],
    },
    status: "live",
    url: "https://bhainepal.obelisklabs.dev/",
    image: "/projects/bhainepal.webp",
    imageBg: "#f5efe6",
  },
  {
    id: "geganters",
    name: "Geganters",
    description: {
      es: "Agenda unificada de cercaviles y directorio de gegants y gegantons de Mataró. Permite consultar las salidas del fin de semana, conocer las figuras de cada colla, guardar favoritos y que nuevas colles soliciten darse de alta.",
      ca: "Agenda unificada de cercaviles i directori de gegants i gegantons de Mataró. Permet consultar les sortides del cap de setmana, conèixer les figures de cada colla, desar preferits i que noves colles sol·licitin donar-se d'alta.",
    },
    tags: {
      es: ["Next.js", "Supabase", "Cultura popular"],
      ca: ["Next.js", "Supabase", "Cultura popular"],
    },
    status: "live",
    url: "https://geganters.obelisklabs.dev/",
    image: "/projects/geganters.png",
    imageBg: "#f4f2ee",
  },
  {
    id: "cronobeat",
    name: "Cronobeat",
    description: {
      es: "Juego musical de fiesta: escanea una carta, escucha un fragmento y adivina el año de la canción. Crea tu mazo pegando una lista o elige una de las predefinidas, imprime las cartas con QR en PDF y compártelo por enlace. Sin cuentas ni Spotify Premium.",
      ca: "Joc musical de festa: escaneja una carta, escolta un fragment i endevina l'any de la cançó. Crea la teva baralla enganxant una llista o tria'n una de les predefinides, imprimeix les cartes amb QR en PDF i comparteix-la per enllaç. Sense comptes ni Spotify Premium.",
    },
    tags: {
      es: ["Next.js", "iTunes API", "PDF + QR", "Juego"],
      ca: ["Next.js", "iTunes API", "PDF + QR", "Joc"],
    },
    status: "live",
    url: "https://cronobeat.obelisklabs.dev/",
    image: "/projects/cronobeat.svg",
    imageBg: "#15122b",
  },
  {
    id: "lobby",
    name: "Lobby",
    description: {
      es: "Algo se está cocinando en el laboratorio. Las cartas ya están sobre la mesa, pero todavía boca abajo: de momento no podemos desvelar nada más. Muy pronto, nueva partida.",
      ca: "Alguna cosa s'està coent al laboratori. Les cartes ja són sobre la taula, però encara de cara avall: de moment no podem revelar res més. Molt aviat, nova partida.",
    },
    tags: {
      es: ["Top secret", "En construcción"],
      ca: ["Top secret", "En construcció"],
    },
    status: "wip",
    image: "/projects/lobby.svg",
    imageBg: "#0c0c0f",
  },
];
