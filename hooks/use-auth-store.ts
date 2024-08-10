import { AuthStoreContext } from "@/providers/auth-provider";
import { AuthStore } from "@/stores/auth";
import { useContext } from "react";
import { useStore } from "zustand";

export const useAuthStore = <T>(selector: (store: AuthStore) => T): T => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be used within AuthStoreProvider`);
  }

  return useStore(authStoreContext, selector);
};
