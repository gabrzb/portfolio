import type { ProfileContact, SocialLink } from "../types/content";

export const profileContact: ProfileContact = {
  name: "Seu Nome",
  role: "Desenvolvedor Full Stack",
  email: "contato@portfolio.dev",
};

export const socialLinks: SocialLink[] = [
  { href: "https://github.com", label: "GitHub", platform: "github" },
  { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
];
