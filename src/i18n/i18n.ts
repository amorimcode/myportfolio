import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptbr from "./ptbr.json";
import en from "./en.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ptbr: {
        translation: ptbr,
      },
      en: {
        translation: en,
      },
    },
    lng: "ptbr",
    fallbackLng: "ptbr",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
