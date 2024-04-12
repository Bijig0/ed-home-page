export const whoNeedsTutoring = ["Self", "Child", "Other"] as const;
export const gradeLevels = [
  "PreK/K",
  "Year 1 to 6",
  "Year 7 to 10",
  "Year 11 or 12",
] as const;
export const reasonsForTutoring = [
  "Help with class",
  "Preparing for est",
  "Want to learn something new",
  "Other",
] as const;
export const howSoon = ["Right away", "In a few weeks", "Not sure"] as const;

export type WhoNeedsTutoring = (typeof whoNeedsTutoring)[number];
export type GradeLevel = (typeof gradeLevels)[number];
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

// first name
// zip code
// email
// phone number
// and agree to terms of use
// Describe the student

export type StudentDetails = {
  whoNeedsTutoring: WhoNeedsTutoring;
  gradeLevel: GradeLevel;
  reasonForTutoring: ReasonForTutoring;
  howSoon: HowSoon;
  fullName: string;
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
