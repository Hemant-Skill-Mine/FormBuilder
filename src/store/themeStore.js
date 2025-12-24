import { create } from "zustand";

export const useThemeStore = create((set) => ({
  dark: false,
  toggle: () =>
    set((state) => {
      const next = !state.dark;
      document.documentElement.classList.toggle("dark", next);
      return { dark: next };
    }),
}));
