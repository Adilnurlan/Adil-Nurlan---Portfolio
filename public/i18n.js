import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationRUS from './locales/ru.json';

const resources = {
  rus: {
    translation: translationRUS
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'ru',
    resources,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
