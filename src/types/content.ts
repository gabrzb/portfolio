import type { ReactNode } from "react";

export interface NavItem {
  href: string;
  label: string;
}

export type SocialPlatform = "github" | "linkedin";

export interface SocialLink {
  href: string;
  label: string;
  platform: SocialPlatform;
}

export interface ProfileContact {
  name: string;
  role: string;
  email: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  current: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface AboutSkill {
  title: string;
  description: string;
  command: string;
  delayMs: number;
  iconAnimationClassName: string;
}

export interface AboutStat {
  value: number | "infinity";
  suffix?: string;
  label: string;
  delayMs: number;
}

export interface Certificate {
  id: number;
  title: string;
  provider: string;
  year: string;
  duration: string;
  skills: string[];
}

export type LogoItem =
  | {
      node: ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };
