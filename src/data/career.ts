import type { Job } from "../types/content";

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "São Paulo, SP",
    period: "2022 - Presente",
    current: true,
    description: [
      "Liderança técnica em projetos de grande escala com milhões de usuários",
      "Arquitetura e desenvolvimento de microserviços em Node.js",
      "Implementação de CI/CD pipelines e práticas DevOps",
      "Mentoria de junior developers e code reviews",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "São Paulo, SP",
    period: "2020 - 2022",
    current: false,
    description: [
      "Desenvolvimento de aplicações web responsivas com React",
      "APIs RESTful com Express.js e Node.js",
      "Otimização de performance e SEO",
      "Implementação de testes automatizados e E2E",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Jest", "Vite", "JavaScript"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebStudio Pro",
    location: "São Paulo, SP",
    period: "2019 - 2020",
    current: false,
    description: [
      "Desenvolvimento de interfaces responsivas e acessíveis",
      "Integração com APIs externas",
      "Implementação de design systems",
      "Testes unitários com Jest e React Testing Library",
    ],
    technologies: ["React", "CSS3", "JavaScript", "Redux", "Webpack"],
  },
];
