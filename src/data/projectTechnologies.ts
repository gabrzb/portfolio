export interface ProjectTechnology {
  id: string;
  title: string;
  href?: string;
  iconSrc?: string;
}

const iconifySimpleIcon = (name: string) =>
  `https://api.iconify.design/simple-icons:${name}.svg?color=%23ffffff`;

export const projectTechnologies: ProjectTechnology[] = [
  {
    id: "react",
    title: "React",
    href: "https://react.dev/",
    iconSrc: iconifySimpleIcon("react"),
  },
  {
    id: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    iconSrc: iconifySimpleIcon("typescript"),
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    iconSrc: iconifySimpleIcon("tailwindcss"),
  },
  {
    id: "vite",
    title: "Vite",
    href: "https://vite.dev/",
    iconSrc: iconifySimpleIcon("vite"),
  },
  {
    id: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    iconSrc: iconifySimpleIcon("shadcnui"),
  },
  {
    id: "ogl",
    title: "OGL",
    href: "https://github.com/oframe/ogl",
  },
  {
    id: "lucide-react",
    title: "Lucide React",
    href: "https://lucide.dev/",
  },
];
