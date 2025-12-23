import Header from './components/layout/Header';
import Sidebar from './components/sidebar/Sidebar';
import FormsPage from './pages/FormsPage';
import BuilderPage from './pages/BuilderPage';
import { useFormStore } from './store/useFormStore';
import { useEffect } from 'react';

export default function App() {
  const { page, theme } = useFormStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        {page === 'forms' ? <FormsPage /> : <BuilderPage />}
      </div>
    </div>
  );
}
