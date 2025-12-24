import { useFormStore } from "../../store/formStore";
import Section from "./Section";

export default function Sections({ form }) {
  const addSection = useFormStore((s) => s.addSection);

  return (
    <>
      {form.sections.map((s) => (
        <Section key={s.id} formId={form.id} section={s} />
      ))}

      <button
        onClick={() => addSection(form.id)}
        className="mt-4 w-full border-dashed border-2 py-3 rounded text-blue-600"
      >
        + Add Section
      </button>
    </>
  );
}
