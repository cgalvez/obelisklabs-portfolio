export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    id: "bekado",
    company: "Bekado",
    role: "Backend Developer",
    period: "2022 — Presente",
    location: "Madrid, España",
    description: [
      "Desarrollo de microservicios con Kotlin y Spring Boot para plataforma SaaS B2B con más de 200k usuarios activos.",
      "Diseño e implementación de arquitectura event-driven con Apache Kafka, reduciendo la latencia de procesamiento en un 60%.",
      "Liderazgo técnico del equipo backend: code reviews, arquitectura y mentoring.",
    ],
    tags: ["Kotlin", "Spring Boot", "Kafka", "Redis", "PostgreSQL"],
    current: true,
  },
  {
    id: "sircom",
    company: "Sircom Consulting",
    role: "Android Developer",
    period: "2020 — 2022",
    location: "Valencia, España",
    description: [
      "Desarrollo de aplicaciones Android nativas con Jetpack Compose siguiendo arquitectura MVVM + Clean Architecture.",
      "Integración con APIs REST y GraphQL para clientes del sector retail y logística.",
      "Reducción del tiempo de carga inicial de apps en un 40% mediante optimización de queries y caché.",
    ],
    tags: ["Android", "Kotlin", "Jetpack Compose", "GraphQL", "Hilt"],
  },
  {
    id: "syndivision",
    company: "Syndivision",
    role: "Software Engineer",
    period: "2018 — 2020",
    location: "Barcelona, España",
    description: [
      "Desarrollo backend con Java y Spring Boot para sistemas de gestión empresarial.",
      "Implementación de pipelines CI/CD con GitLab y contenerización con Docker.",
      "Optimización de queries SQL en bases de datos Oracle de alto volumen (>10M registros).",
    ],
    tags: ["Java", "Spring Boot", "Docker", "PostgreSQL", "GitLab CI"],
  },
];
