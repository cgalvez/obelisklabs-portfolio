export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
  accent: "blue" | "green" | "gray";
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    category: "Backend Mastery",
    skills: ["Kotlin", "Java", "Python", "PHP", "REST APIs", "Spring Boot", "Django", "Symfony", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
    accent: "blue",
  },
  {
    id: "mobile",
    category: "Mobile",
    skills: ["Android", "Jetpack Compose", "MVVM", "Clean Architecture", "Room", "Retrofit", "Coroutines", "Hilt", "Firebase", "Flutter", "iOS", "SwiftUI", "UIKit"],
    accent: "green",
  },
  {
    id: "process",
    category: "Process & Tools",
    skills: ["CI/CD", "GitHub Actions", "Jira", "Figma", "Scrum", "Domain-Driven Design"],
    accent: "gray",
  },
  {
    id: "education",
    category: "Education",
    skills: ["Ing. Informática", "UPC — Universitat Politècnica de Catalunya", "2014 — 2018"],
    accent: "gray",
  },
];
