import { Filters } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

type SearchFilterStore = {
  filter: Filters;
  isActive: boolean;
  setQuery: (query: string) => void;
  query: string;
};

export const useSearchFilterStore = create(
  persist<SearchFilterStore>(
    (set) => ({
      filter: "news",
      isActive: false,
      query: "",
      setQuery: (query: string) =>
        set((state) => {
          return {
            ...state,
            query,
            isActive: query.length > 0,
          };
        }),
    }),
    {
      name: "news-portal-search-filter-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
