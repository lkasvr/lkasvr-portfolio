'use client';
import { getTranslation } from "@/i18n";
import { createContext, useEffect } from "react";

const initialContextValue = {
  typeAnimationKey: 0,
  incrementTypeAnimationKey: () => initialContextValue.typeAnimationKey++,
};

export const TranslateContext = createContext(initialContextValue);

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { initLocale } = getTranslation();

  useEffect(() => {
    initLocale('br');
  }, [initLocale]);

  return (
    <TranslateContext.Provider value={initialContextValue}>
      {children}
    </TranslateContext.Provider>
  );
}
