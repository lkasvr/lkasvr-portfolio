'use client';
import { createContext } from "react";

const initialContextValue = {
  typeAnimationKey: 0,
  incrementTypeAnimationKey: () => initialContextValue.typeAnimationKey++,
};

export const TranslateContext = createContext(initialContextValue);

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <TranslateContext.Provider value={initialContextValue}>
      {children}
    </TranslateContext.Provider>
  );
}
