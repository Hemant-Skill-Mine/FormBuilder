import { useThemeStore } from "../../store/themeStore";

export default function Header() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="h-14 flex items-center justify-end px-6 border-b bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <button
        onClick={toggleTheme}
        className="border px-3 py-1 rounded text-sm"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}
