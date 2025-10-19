import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LanguageCode,
  languages,
  changeLanguage as changeI18nLanguage,
  getLanguageDirection,
  getCurrentLanguage,
} from '../i18n/config';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  changeLanguage: (lang: LanguageCode) => Promise<void>;
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
  availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(getCurrentLanguage());
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(
    getLanguageDirection(getCurrentLanguage())
  );

  useEffect(() => {
    // Set initial HTML attributes
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = direction;
  }, []);

  const handleChangeLanguage = async (lang: LanguageCode) => {
    try {
      await changeI18nLanguage(lang);
      setCurrentLanguage(lang);
      const newDirection = getLanguageDirection(lang);
      setDirection(newDirection);

      // Update body class for RTL styling
      if (newDirection === 'rtl') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage: handleChangeLanguage,
    direction,
    isRTL: direction === 'rtl',
    availableLanguages: languages,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
