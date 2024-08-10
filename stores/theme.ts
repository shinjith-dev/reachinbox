import { createStore } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeState = {
  mode: "light" | "dark";
};

export type ThemeActions = {
  update: (mode: "light" | "dark") => void;
};

export type ThemeStore = ThemeState & ThemeActions;

export const defaultInitState: ThemeState = {
  mode: "dark",
};

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
  return createStore<ThemeStore>()(
    persist(
      (set) => ({
        ...initState,
        update: (mode) => set(() => ({ mode })),
      }),
      { name: "theme" },
    ),
  );
};
