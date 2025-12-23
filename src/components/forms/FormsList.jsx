import { useFormStore } from '../../store/useFormStore';

export default function FormsList({ onCreate }) {
  const { forms, openForm } = useFormStore();

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Forms</h1>
        <button onClick={onCreate} className="btn-primary">
          + Create Form
        </button>
      </div>

      {forms.length === 0 && (
        <div className="card text-center text-gray-500">
          No forms yet
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {forms.map(f => (
          <div
            key={f.id}
            onClick={() => openForm(f.id)}
            className="card cursor-pointer hover:border-blue-500"
          >
            <h3 className="font-semibold">{f.name}</h3>
            <p className="text-sm">{f.type}</p>
            <p className="text-xs">{f.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
