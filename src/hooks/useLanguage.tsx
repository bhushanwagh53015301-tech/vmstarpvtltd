import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

type TranslationType = (typeof translations)['en'] | (typeof translations)['mr'];

interface LanguageContextType {
  lang: Language;
  t: TranslationType;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('vm-lang');
    return (saved === 'mr' ? 'mr' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('vm-lang', lang);
  }, [lang]);

  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'mr' : 'en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
