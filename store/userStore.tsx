import { Roles } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
} | null;

type UserStore = {
  user: User;
  role: Roles;
  isAuthenticatedUser: boolean;
  setIsAuthenticatedUser: (isAuthenticated: boolean) => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      role: Roles.USER,
      isAuthenticatedUser: false,
      setIsAuthenticatedUser: (isAuthenticated: boolean) =>
        set((state) => {
          return {
            ...state,
            isAuthenticatedUser: isAuthenticated,
          };
        }),
    }),
    {
      name: "news-portal-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
