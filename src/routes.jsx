import { useFormStore } from './store/useFormStore';
import { FormsPage } from './pages/FormsPage';
import { BuilderPage } from './pages/BuilderPage';

export const Routes = () => {
  const active = useFormStore((s) => s.activeFormId);
  return active ? <BuilderPage /> : <FormsPage />;
};
