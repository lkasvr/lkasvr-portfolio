'use client';
import { TranslateContext } from '@/app/template';
import Dropdown from '@/components/Dropdown';
import { getTranslation } from '@/i18n';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

interface LanguageDropdownProps {
    className?: string;
}

const languageList = [
    { code: 'en', name: 'English' },
    { code: 'br', name: 'Português' }
];

const LanguageDropdown = ({ className = '' }: LanguageDropdownProps) => {
    const router = useRouter();
    const { i18n } = getTranslation();
    const { incrementTypeAnimationKey } = useContext(TranslateContext);


    return (
        <div className={`dropdown ${className}`}>
            {i18n.language && (
                <Dropdown
                    offset={[0, 8]}
                    placement="bottom-start"
                    btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-[#121212] px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary"
                    button={
                        <>
                            <div>
                                <Image
                                    src={`/images/flags/${i18n.language.toUpperCase()}.svg`}
                                    alt="image"
                                    className="h-5 w-5 rounded-full object-cover"
                                    width={21}
                                    height={15}
                                />
                            </div>
                            <div className="text-base font-bold uppercase">{i18n.language}</div>
                            <span className="shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9L12 15L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </>
                    }
                >
                    <ul className="flex flex-col gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                        {languageList.map((item: any) => {
                            return (
                                <li key={item.code}>
                                    <button
                                        type="button"
                                        className={
                                            `flex w-full rounded-lg hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary' : ''}`
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
                                        <span className="ml-3 mr-3">{item.name}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </Dropdown>
            )}
        </div>
    );
};

export default LanguageDropdown;
