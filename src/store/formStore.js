import { create } from "zustand";
import { nanoid } from "nanoid";

export const useFormStore = create((set) => ({
  forms: [],

  createForm: (name) =>
    set((state) => ({
      forms: [
        ...state.forms,
        {
          id: nanoid(),
          name,
          status: "draft",
          sections: [],
        },
      ],
    })),

  addSection: (formId) =>
    set((state) => ({
      forms: state.forms.map((f) =>
        f.id === formId
          ? {
              ...f,
              sections: [
                ...f.sections,
                { id: nanoid(), title: "New Section", questions: [] },
              ],
            }
          : f
      ),
    })),

  addQuestion: (formId, sectionId, type) =>
    set((state) => ({
      forms: state.forms.map((f) =>
        f.id === formId
          ? {
              ...f,
              sections: f.sections.map((s) =>
                s.id === sectionId
                  ? {
                      ...s,
                      questions: [
                        ...s.questions,
                        {
                          id: nanoid(),
                          label: "Untitled Question",
                          type,
                          options:
                            type === "radio" || type === "checkbox"
                              ? ["Option 1"]
                              : [],
                        },
                      ],
                    }
                  : s
              ),
            }
          : f
      ),
    })),

  updateQuestion: (formId, sectionId, qId, data) =>
    set((state) => ({
      forms: state.forms.map((f) =>
        f.id === formId
          ? {
              ...f,
              sections: f.sections.map((s) =>
                s.id === sectionId
                  ? {
                      ...s,
                      questions: s.questions.map((q) =>
                        q.id === qId ? { ...q, ...data } : q
                      ),
                    }
                  : s
              ),
            }
          : f
      ),
    })),

  deleteQuestion: (formId, sectionId, qId) =>
    set((state) => ({
      forms: state.forms.map((f) =>
        f.id === formId
          ? {
              ...f,
              sections: f.sections.map((s) =>
                s.id === sectionId
                  ? {
                      ...s,
                      questions: s.questions.filter((q) => q.id !== qId),
                    }
                  : s
              ),
            }
          : f
      ),
    })),

  saveDraft: (formId) =>
    set((state) => ({
      forms: state.forms.map((f) =>
        f.id === formId ? { ...f, status: "draft" } : f
      ),
    })),

  publishForm: (formId) =>
    set((state) => ({
      forms: state.forms.map((f) =>
        f.id === formId ? { ...f, status: "published" } : f
      ),
    })),
}));
