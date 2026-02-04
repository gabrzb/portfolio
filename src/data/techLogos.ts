import type { LogoItem } from "../types/content";

const iconifySimpleIcon = (name: string) =>
  `https://api.iconify.design/simple-icons:${name}.svg?color=%23ffffff`;

export const techLogos: LogoItem[] = [
  { src: iconifySimpleIcon("javascript"), alt: "JavaScript", title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { src: iconifySimpleIcon("typescript"), alt: "TypeScript", title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { src: iconifySimpleIcon("react"), alt: "React", title: "React", href: "https://react.dev/" },
  { src: iconifySimpleIcon("angular"), alt: "Angular", title: "Angular", href: "https://angular.dev/" },
  { src: iconifySimpleIcon("nodedotjs"), alt: "Node.js", title: "Node.js", href: "https://nodejs.org/" },
  { src: iconifySimpleIcon("php"), alt: "PHP", title: "PHP", href: "https://www.php.net/" },
  { src: iconifySimpleIcon("python"), alt: "Python", title: "Python", href: "https://www.python.org/" },
  { src: iconifySimpleIcon("openjdk"), alt: "Java", title: "Java", href: "https://www.java.com/" },
  { src: iconifySimpleIcon("csharp"), alt: "C#", title: "C#", href: "https://learn.microsoft.com/dotnet/csharp/" },
  { src: iconifySimpleIcon("cplusplus"), alt: "C++", title: "C++", href: "https://isocpp.org/" },
  { src: iconifySimpleIcon("mysql"), alt: "MySQL", title: "MySQL", href: "https://www.mysql.com/" },
  { src: iconifySimpleIcon("tailwindcss"), alt: "Tailwind CSS", title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { src: iconifySimpleIcon("docker"), alt: "Docker", title: "Docker", href: "https://www.docker.com/" },
];
