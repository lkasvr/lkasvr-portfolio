const cookieObj = typeof window === 'undefined' ? require('next/headers') : require('universal-cookie');

import en from '../public/locales/en.json';
import br from '../public/locales/br.json';
const langObj: any = { en, br };

export const getLang = () => {
    let lang = null;
    if (typeof window !== 'undefined') {
        const cookies = new cookieObj.default(null, { path: '/' });
        lang = cookies.get('i18nextLng');
    } else {
        const cookies = cookieObj.cookies();
        lang = cookies.get('i18nextLng')?.value;
    }
    return lang;
};

export const getTranslation = () => {
    const lang = getLang();
    const data: any = langObj[lang || 'br'];

    const t = (key: string) => data[key] ? data[key] : key;

    const initLocale = (themeLocale: string) => {
        const lang = getLang();
        i18n.changeLanguage(lang || themeLocale);
    };

    initLocale(lang);

    const i18n = {
        language: lang,
        changeLanguage: (lang: string) => {
            const cookies = new cookieObj.default(null, { path: '/' });
            cookies.set('i18nextLng', lang);
        },
    };

    return { t, i18n, initLocale };
};
