import type { Subject } from "./subjects";

export const whoNeedsTutoring = ["Self", "Child", "Other"] as const;
export const gradeLevels = [
  "PreK/K",
  "Year 1 to 6",
  "Year 7 to 10",
  "Year 11 or 12",
] as const;
export const reasonsForTutoring = [
  "Long Term Improvement",
  "Help With A Test",
  "General Support",
  "Other",
] as const;
export const howSoon = ["Right away", "In a few weeks", "Not sure"] as const;

export const years = [
  "PreK/K",
  "Year 1 to 6",
  "Year 7 to 10",
  "Year 11 or 12",
] as const;

export type WhoNeedsTutoring = (typeof whoNeedsTutoring)[number];
export type GradeLevel = (typeof gradeLevels)[number];
export type Year = (typeof years)[number];
export type ReasonForTutoring = (typeof reasonsForTutoring)[number];
export type HowSoon = (typeof howSoon)[number];

export type LessonType =
  | {
      lessonType: "online";
    }
  | {
      lessonType: "in-person";
      zipCode: string;
    };

export type StudentDetails = {
  whoNeedsTutoring: WhoNeedsTutoring;
  year: Year;
  subject: Subject;
  reasonForTutoring: ReasonForTutoring;
  howSoon: HowSoon;
  parentName: string;
  studentName: string;
  lessonType: LessonType;
  email: string;
  phoneNumber: string;
  agreedToTermsOfUse: boolean;
};

type UnionOfValues<T> = T[keyof T];

export type AllStudentDetailsValues = UnionOfValues<StudentDetails>;

export type MainFormState = {
  studentDetails: StudentDetails;
};

export type PartialFormState = {
  studentDetails: Partial<StudentDetails>;
};
