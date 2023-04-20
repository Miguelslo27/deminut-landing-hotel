import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import esTranslation from './es';
import enTranslation from './en';
import ptTranslation from './pt';
import itTranslation from './it';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
      it: { translation: itTranslation },
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
