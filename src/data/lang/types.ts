import type {
  AboutSkill,
  AboutStat,
  Certificate,
  Job,
  NavItem,
  ProfileContact,
  Project,
  SocialLink,
} from "../../types/content";

export const supportedLocales = ["pt-BR", "en", "es"] as const;

export type AppLocale = (typeof supportedLocales)[number];

export interface AppTranslations {
  navigation: {
    logoText: string;
    items: NavItem[];
    languageSwitcherLabel: string;
    languageNames: Record<AppLocale, string>;
  };
  profile: {
    contact: ProfileContact;
    socialLinks: SocialLink[];
  };
  about: {
    sectionTitle: string;
    introRole: string;
    introLead: string;
    paragraphs: string[];
    ctaLabel: string;
    techLoopLabel: string;
    techLoopAriaLabel: string;
    skills: AboutSkill[];
    stats: AboutStat[];
  };
  education: {
    sectionTitle: string;
    certificates: Certificate[];
  };
  career: {
    sectionTitle: string;
    prompt: string;
    ctaLabel: string;
    activeJobLabel: string;
    stackUsedLabel: string;
    jobs: Job[];
  };
  projects: {
    sectionTitle: string;
    featuredTitle: string;
    moreTitle: string;
    githubPrompt: string;
    githubButtonLabel: string;
    stackLabel: string;
    codeLabel: string;
    demoLabel: string;
    codeAriaLabelPrefix: string;
    demoAriaLabelPrefix: string;
    items: Project[];
  };
  footer: {
    rightsReservedLabel: string;
  };
  techModal: {
    launcherLabel: string;
    modalTitle: string;
    modalSubtitle: string;
    closeLabel: string;
    docsLinkLabel: string;
    emptyStateLabel: string;
  };
  loading: {
    loadingText: string;
    cautionText: string;
  };
}
