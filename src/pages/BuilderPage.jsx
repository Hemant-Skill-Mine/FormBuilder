import ElementsPanel from '../components/builder/ElementsPanel';
import Canvas from '../components/builder/Canvas';
import PropertiesPanel from '../components/builder/PropertiesPanel';
import { useFormStore } from '../store/useFormStore';

export default function BuilderPage() {
  const { saveDraft, publishForm } = useFormStore();

  return (
    <div className="flex flex-col flex-1">

      {/* MAIN BUILDER AREA */}
      <div className="flex flex-1 overflow-hidden">
        <ElementsPanel />
        <Canvas />
        <PropertiesPanel />
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="h-16 border-t bg-white dark:bg-slate-900
                      flex items-center justify-end gap-3 px-6">
        <button
          onClick={saveDraft}
          className="btn-secondary"
        >
          Save Draft
        </button>

        <button
          onClick={publishForm}
          className="btn-primary"
        >
          Publish
        </button>
      </div>

    </div>
  );
}
