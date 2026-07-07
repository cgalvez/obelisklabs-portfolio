import type { Metadata } from "next";
import ObeliskLabsLanding from "@/components/ObeliskLabs";

export const metadata: Metadata = {
  title: "ObeliskLabs — Laboratorio personal de software",
  description:
    "Un espacio donde las ideas se convierten en realidad. Proyectos personales de Carlos Gálvez Chaves.",
};

export default function Page() {
  return <ObeliskLabsLanding />;
}
