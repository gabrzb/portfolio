import type { Certificate } from "../types/content";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "React Avançado com TypeScript",
    provider: "Rocketseat",
    year: "2025",
    duration: "80h",
    skills: ["React", "TypeScript", "Hooks", "Performance"],
  },
  {
    id: 2,
    title: "Arquitetura Front-End Escalável",
    provider: "Alura",
    year: "2024",
    duration: "60h",
    skills: ["Arquitetura", "Clean Code", "Componentização", "Design System"],
  },
  {
    id: 3,
    title: "Node.js e APIs REST",
    provider: "Udemy",
    year: "2023",
    duration: "54h",
    skills: ["Node.js", "Express", "REST", "Autenticação"],
  },
  {
    id: 4,
    title: "Git e CI/CD para Times de Produto",
    provider: "DIO",
    year: "2023",
    duration: "32h",
    skills: ["Git", "GitHub Actions", "CI/CD", "Fluxo de Versionamento"],
  },
];
