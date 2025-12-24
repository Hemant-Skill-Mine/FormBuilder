import { Trash2 } from "lucide-react";
import { useFormStore } from "../../store/formStore";
import Question from "./Question";

const FIELD_TYPES = [
  "text",
  "textarea",
  "email",
  "number",
  "date",
  "radio",
  "checkbox",
  "select",
  "yesno",
  "file",
];

export default function Section({ formId, section }) {
  const addQuestion = useFormStore((s) => s.addQuestion);

  return (
    <div className="bg-gray-50 rounded-xl mb-8 border">
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center rounded-t-xl">
        <input
          className="bg-transparent outline-none font-semibold w-full"
          value={section.title}
          readOnly
        />
        <Trash2 size={18} className="opacity-70" />
      </div>

      <div className="p-4 grid md:grid-cols-2 gap-4">
        {section.questions.map((q) => (
          <Question
            key={q.id}
            formId={formId}
            sectionId={section.id}
            question={q}
          />
        ))}
      </div>

      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {FIELD_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => addQuestion(formId, section.id, t)}
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
          >
            + {t}
          </button>
        ))}
      </div>
    </div>
  );
}
