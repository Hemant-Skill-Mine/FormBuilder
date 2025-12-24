import { X } from "lucide-react";
import { useFormStore } from "../../store/formStore";

export default function Question({ formId, sectionId, question }) {
  const update = useFormStore((s) => s.updateQuestion);
  const del = useFormStore((s) => s.deleteQuestion);

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow transition">
      {/* Question title */}
      <input
        value={question.label}
        onChange={(e) =>
          update(formId, sectionId, question.id, {
            label: e.target.value,
          })
        }
        placeholder="Question"
        className="text-lg font-medium w-full outline-none mb-2"
      />

      {/* Question type badge */}
      <span className="inline-block text-xs bg-gray-100 px-2 py-1 rounded mb-3">
        {question.type.toUpperCase()}
      </span>

      {/* Fields */}
      {["radio", "checkbox", "select", "yesno"].includes(question.type) && (
        <div className="space-y-2">
          {question.options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type={question.type === "checkbox" ? "checkbox" : "radio"}
                disabled
              />
              <input
                value={opt}
                onChange={(e) => {
                  const ops = [...question.options];
                  ops[i] = e.target.value;
                  update(formId, sectionId, question.id, {
                    options: ops,
                  });
                }}
                className="border px-2 py-1 flex-1 rounded"
              />
              <button
                onClick={() => {
                  const ops = question.options.filter((_, idx) => idx !== i);
                  update(formId, sectionId, question.id, { options: ops });
                }}
                className="text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          ))}

          <button
            onClick={() =>
              update(formId, sectionId, question.id, {
                options: [...question.options, "Option"],
              })
            }
            className="text-blue-600 text-sm"
          >
            + Add option
          </button>
        </div>
      )}

      {/* Simple fields */}
      {!["radio", "checkbox", "select", "yesno"].includes(question.type) && (
        <input
          disabled
          placeholder={question.type}
          className="border px-3 py-2 rounded w-full bg-gray-50"
        />
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={question.required || false}
            onChange={(e) =>
              update(formId, sectionId, question.id, {
                required: e.target.checked,
              })
            }
          />
          Required
        </label>

        <button
          onClick={() => del(formId, sectionId, question.id)}
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
