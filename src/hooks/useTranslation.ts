import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Custom hook that combines i18next translation with language context
 */
export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();
  const { currentLanguage, changeLanguage, direction, isRTL } = useLanguage();

  return {
    t, // Translation function
    i18n, // i18next instance
    currentLanguage,
    changeLanguage,
    direction,
    isRTL,
    language: currentLanguage,
  };
};

export default useTranslation;
