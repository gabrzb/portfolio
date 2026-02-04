import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma de e-commerce completa com sistema de pagamento e admin dashboard",
    longDescription:
      "Uma plataforma de e-commerce de alto desempenho construída com React, Node.js e PostgreSQL. Inclui integração com Stripe, painel administrativo em tempo real, gerenciamento de inventário e sistema de recomendação baseado em IA.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e0e359d2?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Tailwind CSS"],
    features: [
      "Sistema de pagamento integrado",
      "Painel administrativo em tempo real",
      "Recomendação de produtos",
      "Geolocalização de pedidos",
    ],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Dashboard de analytics em tempo real com visualizações de dados complexos",
    longDescription:
      "Dashboard responsivo para visualização de dados em tempo real. Utiliza WebSockets para atualizações instantâneas, gráficos interativos com Chart.js e D3.js, e suporta múltiplos formatos de exportação.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "Chart.js", "WebSockets", "MongoDB", "Express"],
    features: [
      "Atualizações em tempo real",
      "Múltiplos gráficos interativos",
      "Exportação de dados",
      "Filtros avançados",
    ],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas com colaboração em tempo real",
    longDescription:
      "Aplicativo colaborativo de gerenciamento de tarefas com suporte a múltiplos usuários, comentários em tempo real, anexos de arquivos e notificações push. Construído com React, Firebase e Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1540350881767-4e5e7b1883e5?w=500&h=300&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    features: [
      "Colaboração em tempo real",
      "Comentários e discussões",
      "Anexo de arquivos",
      "Notificações push",
    ],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Mobile App Backend",
    description: "API robusta para aplicação mobile com autenticação e segurança avançada",
    longDescription:
      "Backend escalável e seguro para aplicação mobile. Implementa autenticação JWT, validação de dados, rate limiting, logging centralizado e monitoramento de performance com APM.",
    image: "https://images.unsplash.com/photo-1633356022997-36dff1e1f18e?w=500&h=300&fit=crop",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker", "Redis"],
    features: [
      "Autenticação JWT",
      "Rate limiting",
      "Logging centralizado",
      "Monitoramento APM",
    ],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Design System",
    description: "Sistema de design completo com documentação Storybook interativa",
    longDescription:
      "Design System completo com mais de 50 componentes reutilizáveis, tema dark/light, documentação Storybook, testes automatizados e integração com Figma.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest"],
    features: ["50+ componentes", "Tema dark/light", "Documentação Storybook", "Testes automatizados"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "CLI Tool",
    description: "Ferramenta CLI para automação de desenvolvimento com suporte a plugins",
    longDescription:
      "Ferramenta CLI poderosa para automação de fluxos de desenvolvimento. Suporta plugins customizáveis, scaffolding de projetos, integração com Git e automação de tarefas repetitivas.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    technologies: ["Node.js", "TypeScript", "Commander.js", "Inquirer.js"],
    features: [
      "Sistema de plugins",
      "Scaffolding de projetos",
      "Integração com Git",
      "Configuração customizável",
    ],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];
