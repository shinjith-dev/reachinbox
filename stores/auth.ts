import { create } from "zustand";

interface AuthState {
  token: string | null;
  update: (token: string) => void;
}

const useAuth = create<AuthState>()((set) => ({
  token: null,
  update: (token) => set(() => ({ token })),
}));

export default useAuth;
