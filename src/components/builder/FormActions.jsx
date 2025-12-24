import { useNavigate } from "react-router-dom";
import { useFormStore } from "../../store/formStore";

export default function FormActions({ formId }) {
  const save = useFormStore((s) => s.saveDraft);
  const publish = useFormStore((s) => s.publishForm);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-64 right-0 bg-white border-t px-6 py-4 flex justify-end gap-4 z-50">
      <button
        onClick={() => {
          save(formId);
          navigate("/");
        }}
        className="px-4 py-2 border rounded"
      >
        Save Draft
      </button>

      <button
        onClick={() => {
          publish(formId);
          navigate("/");
        }}
        className="px-5 py-2 bg-blue-600 text-white rounded"
      >
        Publish
      </button>
    </div>
  );
}
