import { useFormStore } from '../../store/useFormStore';

const FIELDS = ['Text','Textarea','Email','Number','Password','Phone','URL','Checkbox','Radio','Date'];

export default function ElementsPanel() {
  const addField = useFormStore(s => s.addField);

  return (
    <div className="w-64 border-r p-4">
      <h3 className="font-semibold mb-3">Elements</h3>
      <div className="grid grid-cols-2 gap-2">
        {FIELDS.map(f => (
          <button key={f} onClick={() => addField(f)}
            className="card hover:border-blue-500">
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
