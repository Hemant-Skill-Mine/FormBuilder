import { create } from 'zustand';

export const useFormStore = create((set, get) => ({
  theme: 'light',
  page: 'forms',

  forms: [],
  activeFormId: null,
  selectedFieldId: null,

  toggleTheme: () =>
    set(s => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),

  createForm: (data) => {
    const id = crypto.randomUUID();
    set(s => ({
      forms: [...s.forms, {
        id,
        name: data.name,
        type: data.type,
        description: data.description,
        status: 'DRAFT',
        fields: []
      }],
      activeFormId: id,
      page: 'builder'
    }));
  },

  openForm: (id) => set({ activeFormId: id, page: 'builder' }),
  backToForms: () => set({ page: 'forms', activeFormId: null }),

  addField: (type) => {
    const forms = [...get().forms];
    const form = forms.find(f => f.id === get().activeFormId);

    form.fields.push({
      id: crypto.randomUUID(),
      type,
      label: type,
      placeholder: `Enter ${type}`,
      required: false
    });

    set({ forms });
  },

  selectField: (id) => set({ selectedFieldId: id }),

  updateField: (updates) => {
    const forms = [...get().forms];
    const form = forms.find(f => f.id === get().activeFormId);
    const field = form.fields.find(f => f.id === get().selectedFieldId);
    Object.assign(field, updates);
    set({ forms });
  },

  saveDraft: () => set({ page: 'forms' }),

  publishForm: () => {
    const forms = get().forms.map(f =>
      f.id === get().activeFormId ? { ...f, status: 'PUBLISHED' } : f
    );
    set({ forms, page: 'forms' });
  },

  getActiveForm: () =>
    get().forms.find(f => f.id === get().activeFormId),

  getSelectedField: () => {
    const form = get().getActiveForm();
    return form?.fields.find(f => f.id === get().selectedFieldId);
  }
}));
