import { useFormStore } from '../../store/useFormStore';

export default function PropertiesPanel() {
  const field = useFormStore(s => s.getSelectedField());
  const update = useFormStore(s => s.updateField);

  return (
    <aside className="w-80 border-l p-4 bg-white dark:bg-slate-900">

      <h3 className="font-semibold mb-4">Properties</h3>

      {!field && (
        <div className="card text-center text-gray-500">
          🧩 Select a field to edit properties
        </div>
      )}

      {field && (
        <div className="space-y-3">
          <div>
            <label className="text-sm">Label</label>
            <input
              className="input"
              value={field.label}
              onChange={e => update({ label: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm">Placeholder</label>
            <input
              className="input"
              value={field.placeholder}
              onChange={e => update({ placeholder: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={field.required}
              onChange={e => update({ required: e.target.checked })}
            />
            <span>Required</span>
          </div>
        </div>
      )}
    </aside>
  );
}
