// stores/theme.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "lofi" | "black";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "lofi",

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set({
          theme: get().theme === "lofi" ? "black" : "lofi",
        }),
    }),
    {
      name: "theme-storage",
    }
  )
);