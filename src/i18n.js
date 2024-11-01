// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "weather": "Weather",
                    "temperature": "Temperature",
                    "humidity": "Humidity",
                    // Add all the other translations for English here
                },
            },
            ar: {
                translation: {
                    "weather": "الطقس",
                    "temperature": "درجة الحرارة",
                    "humidity": "الرطوبة",
                    "cairo": "القاهرة",
                    "min": "الصغرى",
                    "max" : "الكبرى",
                    "clear sky": "سماء صافية",
                    "broken clouds": "سحب متفرقة",
                    "light rain": "امطار خفيفة",
                    "few clouds": "سحب قليلة",
                    "scattered clouds": "غيوم متفرقة",
                    "shower rain": "امطار غزيرة",
                    "rain": "ممطر",
                    "thunderstorm": "عاصفة رعدية",
                    "overcast clouds" : "سحب ملبدة بالغيوم"
                    // Add all the other translations for Arabic here
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;