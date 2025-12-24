import { useFormStore } from "../../store/formStore";

export default function OptionsEditor({ question, formId, sectionId }) {
  const update = useFormStore((s) => s.updateQuestion);

  const addOption = () => {
    update(formId, sectionId, question.id, {
      options: [...question.options, `Option ${question.options.length + 1}`],
    });
  };

  const updateOption = (index, value) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    update(formId, sectionId, question.id, { options: newOptions });
  };

  const deleteOption = (index) => {
    const newOptions = question.options.filter((_, i) => i !== index);
    update(formId, sectionId, question.id, { options: newOptions });
  };

  return (
    <div className="space-y-2">
      {question.options.map((opt, i) => (
        <div key={i} className="flex items-center gap-2">
          <input type={question.type} disabled />

          <input
            className="border p-2 rounded flex-1"
            value={opt}
            onChange={(e) => updateOption(i, e.target.value)}
          />

          <button
            onClick={() => deleteOption(i)}
            className="text-red-500"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addOption}
        className="text-blue-600 text-sm mt-2"
      >
        + Add option
      </button>
    </div>
  );
}
