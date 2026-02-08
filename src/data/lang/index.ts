import { enTranslations } from "./en";
import { esTranslations } from "./es";
import { ptBrTranslations } from "./pt-br";
import { supportedLocales, type AppLocale, type AppTranslations } from "./types";

export { supportedLocales, type AppLocale, type AppTranslations };

export const defaultLocale: AppLocale = "pt-BR";

export const translations: Record<AppLocale, AppTranslations> = {
  "pt-BR": ptBrTranslations,
  en: enTranslations,
  es: esTranslations,
};

const normalizeLocale = (value: string) => value.trim().toLowerCase().replace("_", "-");

export const toSupportedLocale = (value: string | null | undefined): AppLocale | null => {
  if (!value) return null;

  const locale = normalizeLocale(value);

  if (locale.startsWith("pt")) return "pt-BR";
  if (locale.startsWith("es")) return "es";
  if (locale.startsWith("en")) return "en";

  return null;
};

export const detectBrowserLocale = (): AppLocale => {
  if (typeof navigator === "undefined") return defaultLocale;

  const languageCandidates =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const candidate of languageCandidates) {
    const locale = toSupportedLocale(candidate);
    if (locale) return locale;
  }

  return defaultLocale;
};
