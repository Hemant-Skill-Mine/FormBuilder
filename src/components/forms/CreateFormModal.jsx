import { useState } from 'react';
import { useFormStore } from '../../store/useFormStore';

export default function CreateFormModal({ onClose }) {
  const createForm = useFormStore(s => s.createForm);
  const [form, setForm] = useState({ name:'', type:'Basic', description:'' });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="card w-96 space-y-4">
        <h2 className="text-xl font-bold">Create Form</h2>

        <input className="input" placeholder="Form name"
          onChange={e => setForm({...form, name:e.target.value})} />

        <select className="input"
          onChange={e => setForm({...form, type:e.target.value})}>
          <option>Basic</option>
          <option>Survey</option>
          <option>Feedback</option>
          <option>Registration</option>
        </select>

        <textarea className="input" placeholder="Description"
          onChange={e => setForm({...form, description:e.target.value})} />

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={() => {
            createForm(form);
            onClose();
          }}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
