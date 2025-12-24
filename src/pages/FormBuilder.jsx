import { useParams } from "react-router-dom";
import { useFormStore } from "../store/formStore";
import Sections from "../components/builder/Sections";
import FormActions from "../components/builder/FormActions";

export default function FormBuilder() {
  const { id } = useParams();
  const form = useFormStore((s) => s.forms.find((f) => f.id === id));

  if (!form) return null;

  return (
    <div className="p-6 pb-32">
      <h2 className="text-xl font-bold mb-4">{form.name}</h2>
      <Sections form={form} />
      <FormActions formId={id} />
    </div>
  );
}
