'use client'
import { TranslateContext } from '@/app/template';
import { getTranslation } from '@/i18n';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const languageList = [
  { code: 'en' },
  { code: 'br' }
];

const LanguageOverlay = () => {
  const router = useRouter();
  const { t, i18n } = getTranslation();
  const { incrementTypeAnimationKey } = useContext(TranslateContext);

  return (
    <ul className="flex flex-col gap-2 !px-2">
      {languageList.map((item: any) => {
        return (
          <li key={item.code}>
            <button
              type="button"
              className={
                `flex w-full rounded-lg hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary-500' : ''}`
              }
              onClick={() => {
                const lang = item.code as string;
                i18n.changeLanguage(lang);
                incrementTypeAnimationKey();
                router.refresh();
              }}
            >
              <Image
                src={`/images/flags/${item.code.toUpperCase()}.svg`}
                alt="flag"
                className="h-5 w-5 rounded-full object-cover"
                width={21}
                height={15}
              />
              <span
                className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0
                ${item.code === 'br' ? 'hover:text-secondary-500' : 'hover:text-primary-500'}
                `}>
                {t(item.code)}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  )
}

export default LanguageOverlay