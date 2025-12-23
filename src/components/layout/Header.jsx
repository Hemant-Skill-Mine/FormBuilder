import { useFormStore } from '../../store/useFormStore';

export default function Header() {
  const { theme, toggleTheme } = useFormStore();

  return (
    <header className="h-14 px-6 flex items-center justify-between border-b">
      <h1 className="font-bold text-blue-600">FormBuilder</h1>
      <button onClick={toggleTheme} className="btn-secondary">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}
