import { ThemeStoreContext } from "@/providers/theme-provider";
import { ThemeStore } from "@/stores/theme";
import { useContext } from "react";
import { useStore } from "zustand";

export const useThemeStore = <T>(selector: (store: ThemeStore) => T): T => {
  const themeStoreContext = useContext(ThemeStoreContext);

  if (!themeStoreContext) {
    throw new Error(`useThemeStore must be used within ThemeStoreProvider`);
  }

  return useStore(themeStoreContext, selector);
};
