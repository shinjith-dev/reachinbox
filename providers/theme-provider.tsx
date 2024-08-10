"use client";

import { createThemeStore } from "@/stores/theme";
import { createContext, ReactNode, useRef } from "react";

export type ThemeStoreApi = ReturnType<typeof createThemeStore>;

export const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(
  undefined,
);

export interface ThemeStoreProviderProps {
  children: ReactNode;
}

export const ThemeStoreProvider = ({ children }: ThemeStoreProviderProps) => {
  const storeRef = useRef<ThemeStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createThemeStore();
  }

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  );
};
