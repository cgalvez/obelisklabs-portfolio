export interface ObeliskProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: "live" | "wip" | "soon";
  url?: string;
  github?: string;
}

// Añade aquí tus proyectos de ObeliskLabs
export const obeliskProjects: ObeliskProject[] = [];
