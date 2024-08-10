import { create, createStore } from "zustand";

export type AuthState = {
  token: string | null;
};

export type AuthActions = {
  update: (token: string) => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
  token: null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    update: (token) => set(() => ({ token })),
  }));
};
