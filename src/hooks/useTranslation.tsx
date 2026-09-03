"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, TranslationKey } from "@/i18n/translations";

type Language = "en" | "hi";

interface TranslationContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "hi" ? "en" : "hi"));
  };

  const t = (key: TranslationKey) => {
    return translations[lang][key] || translations["en"][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
