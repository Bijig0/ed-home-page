import { merge } from "ts-deepmerge";
import { create } from "zustand";
import type { MainFormState, PartialFormState, StudentDetails } from "./types";

type FormState = MainFormState & {
  updateStudentDetails: (toUpdate: PartialFormState) => void;
};

const useFormStore = create<FormState>((set) => ({
  studentDetails: {} as StudentDetails,
  updateStudentDetails: (toUpdate) =>
    set((state) => ({ studentDetails: merge(state.studentDetails, toUpdate) })),
}));

export default useFormStore;
