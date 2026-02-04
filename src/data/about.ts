import type { AboutSkill, AboutStat } from "../types/content";

export const aboutSkills: AboutSkill[] = [
  {
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Next.js, Vue.js",
    command: "Component-driven development",
    delayMs: 0,
    iconAnimationClassName: "animate-float",
  },
  {
    title: "Backend & DevOps",
    description: "Node.js, Express, Python, PostgreSQL, MongoDB",
    command: "RESTful & GraphQL APIs",
    delayMs: 200,
    iconAnimationClassName: "animate-float animation-delay-200",
  },
  {
    title: "Tools & Environment",
    description: "Git, Docker, Linux, VS Code, CI/CD Pipelines",
    command: "Terminal ninja",
    delayMs: 400,
    iconAnimationClassName: "animate-float animation-delay-400",
  },
];

export const aboutStats: AboutStat[] = [
  { value: 5, suffix: "+", label: "Anos Experiência", delayMs: 0 },
  { value: 50, suffix: "+", label: "Projetos Completos", delayMs: 100 },
  { value: 100, suffix: "%", label: "Satisfação Cliente", delayMs: 200 },
  { value: "infinity", label: "Sempre Aprendendo", delayMs: 300 },
];
