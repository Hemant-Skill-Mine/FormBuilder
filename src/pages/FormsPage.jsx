import { useState } from 'react';
import FormsList from '../components/forms/FormsList';
import CreateFormModal from '../components/forms/CreateFormModal';

export default function FormsPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FormsList onCreate={() => setOpen(true)} />
      {open && <CreateFormModal onClose={() => setOpen(false)} />}
    </>
  );
}
