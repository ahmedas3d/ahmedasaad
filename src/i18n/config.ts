import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

// Initialize i18next
i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    fallbackLng: 'en', // Fallback language
    debug: false, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

// Language configuration
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    flag: '🇺🇸',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    flag: '🇪🇬',
  },
} as const;

export type LanguageCode = keyof typeof languages;

// Helper function to get current language direction
export const getLanguageDirection = (lang: string): 'ltr' | 'rtl' => {
  return languages[lang as LanguageCode]?.dir || 'ltr';
};

// Helper function to change language
export const changeLanguage = async (lang: LanguageCode): Promise<void> => {
  await i18n.changeLanguage(lang);

  // Update HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = getLanguageDirection(lang);

  // Store in localStorage
  localStorage.setItem('i18nextLng', lang);
};

// Get available languages
export const getAvailableLanguages = () => {
  return Object.values(languages);
};

// Get current language
export const getCurrentLanguage = (): LanguageCode => {
  return (i18n.language || 'en') as LanguageCode;
};
