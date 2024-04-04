import { map } from "nanostores";
import type { PartialFormState, StudentDetails } from "./types";

export const studentDetails = map<StudentDetails>();

export const updateStudentDetails = (toUpdate: PartialFormState) => {
  const keys = Object.keys(toUpdate.studentDetails) as (keyof StudentDetails)[];
  console.log({ keys });
  keys.forEach((key) => {
    studentDetails.setKey(key, toUpdate.studentDetails[key]);
  });
};

// set((state) => ({ studentDetails: merge(state.studentDetails, toUpdate) }));
