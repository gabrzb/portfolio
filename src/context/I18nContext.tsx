/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  detectBrowserLocale,
  supportedLocales,
  toSupportedLocale,
  translations,
  type AppLocale,
  type AppTranslations,
} from "../data/lang";

const STORAGE_KEY = "portfolio.language";

interface I18nContextValue {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
  content: AppTranslations;
  locales: readonly AppLocale[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

const getInitialLocale = (): AppLocale => {
  if (typeof window === "undefined") return defaultLocale;

  const storedLocale = toSupportedLocale(window.localStorage.getItem(STORAGE_KEY));
  if (storedLocale) return storedLocale;

  return detectBrowserLocale();
};

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocale] = useState<AppLocale>(getInitialLocale);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const contextValue = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      content: translations[locale],
      locales: supportedLocales,
    }),
    [locale],
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n deve ser usado dentro de I18nProvider");
  }

  return context;
}
