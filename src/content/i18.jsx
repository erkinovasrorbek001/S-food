import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzb from '../content/translate/uzb.json';
import eng from '../content/translate/eng.json';
import rus from '../content/translate/rus.json';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'eng',
        lng: 'eng',
        debug: true,
        resources: {
            uzb: { translation: uzb },
            eng: { translation: eng },
            rus: { translation: rus }
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
