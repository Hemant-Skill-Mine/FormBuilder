import { useFormStore } from '../../store/useFormStore';

export default function Canvas() {
  const form = useFormStore(s => s.getActiveForm());
  const selectField = useFormStore(s => s.selectField);

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-slate-50 dark:bg-slate-800">

      <h1 className="text-3xl font-bold mb-6">{form.name}</h1>

      {form.fields.length === 0 && (
        <div className="card text-center text-gray-500">
          ➕ Add fields from the left panel
        </div>
      )}

      <div className="space-y-4">
        {form.fields.map(field => (
          <div
            key={field.id}
            onClick={() => selectField(field.id)}
            className="card cursor-pointer hover:border-blue-500"
          >
            <label className="font-medium">{field.label}</label>
            <input
              disabled
              className="input mt-2"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

    </main>
  );
}
