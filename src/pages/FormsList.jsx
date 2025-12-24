import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/formStore";
import CreateFormModal from "../components/modals/CreateFormModal";

export default function FormsList() {
  const forms = useFormStore((s) => s.forms);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Forms</h2>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Form
        </button>
      </div>

      {forms.map((f) => (
        <div
          key={f.id}
          onClick={() => navigate(`/builder/${f.id}`)}
          className="cursor-pointer bg-white p-4 rounded shadow mb-3"
        >
          <div className="font-semibold">{f.name}</div>
          <div className="text-sm text-gray-500">
            {f.sections.length} sections • {f.status.toUpperCase()}
          </div>
        </div>
      ))}

      <CreateFormModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
