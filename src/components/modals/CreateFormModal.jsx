import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../../store/formStore";

export default function CreateFormModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("survey");
  const createForm = useFormStore((s) => s.createForm);
  const navigate = useNavigate();

  if (!open) return null;

  const submit = () => {
    const id = createForm(name, type);
    onClose();
    navigate(`/builder/${id}`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="font-bold text-lg mb-4">Create Form</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Form name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-4"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="survey">Survey</option>
          <option value="feedback">Feedback</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={submit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
