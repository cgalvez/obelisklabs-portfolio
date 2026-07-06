export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "nexus-fintech",
    title: "Nexus Fintech",
    tagline: "Plataforma financiera empresarial",
    description:
      "Backend de alto rendimiento para procesamiento de transacciones financieras en tiempo real. Arquitectura de microservicios con Spring Boot, Kafka y PostgreSQL capaz de manejar 50k transacciones por segundo.",
    tags: ["Kotlin", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    links: {"demo":"https://google.es"},
  },
  {
    id: "aurum-luxury",
    title: "Aurum Luxury",
    tagline: "App Android para e-commerce premium",
    description:
      "Aplicación Android nativa con Jetpack Compose para una marca de lujo. Experiencia de compra fluida con integración de pasarela de pago, notificaciones push y modo offline.",
    tags: ["Android", "Jetpack Compose", "Kotlin", "Retrofit", "Room"],
    links: {},
  },
  {
    id: "skyline-cloud",
    title: "Skyline Cloud",
    tagline: "Orquestación de infraestructura",
    description:
      "Sistema de orquestación de microservicios con despliegue automatizado en Kubernetes. Pipeline CI/CD completo con monitorización en tiempo real mediante Prometheus y Grafana.",
    tags: ["Go", "Kubernetes", "Terraform", "Grafana", "GitHub Actions"],
    links: {},
  },
];
