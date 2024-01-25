import enLocale from './locales/en.json';
import idLocale from './locales/id.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: enLocale,
      id: idLocale
    }
  }))

  // config/i18n.js
// export default {
//     locales: [
//       { code: 'en', iso: 'en-US', name: 'English' },
//       { code: 'fr', iso: 'fr-FR', name: 'Français' },
//       // Add more languages as needed
//     ],
//     defaultLocale: 'en',
//     vueI18n: {
//       fallbackLocale: 'en',
//       messages: {
//         en: enLocale,
//         fr: enLocale,
//         // Load other languages as needed
//       },
//     },
//   };