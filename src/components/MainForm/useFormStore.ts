import { merge } from "ts-deepmerge";
import { create } from "zustand";
import type { MainFormState, PartialFormState, StudentDetails } from "./types";

type FormState = MainFormState & {
  fullName: () => string;
  phoneNumber: () => string;
  email: () => string;
  whoNeedsTutoring: () => string;
  updateStudentDetails: (toUpdate: PartialFormState) => void;
};

const useFormStore = create<FormState>((set, get) => ({
  studentDetails: {} as StudentDetails,
  fullName: () => get().studentDetails.fullName,
  phoneNumber: () => get().studentDetails.phoneNumber,
  email: () => get().studentDetails.email,
  whoNeedsTutoring: () => get().studentDetails.whoNeedsTutoring,
  updateStudentDetails: (toUpdate) =>
    set((state) => ({ studentDetails: merge(state.studentDetails, toUpdate) })),
}));

export default useFormStore;
