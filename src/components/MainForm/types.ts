import "little-state-machine";

export const whoNeedsTutoring = ["Parent", "Child", "Self"] as const;
export const gradeLevel = [
  "Elementary School",
  "Middle School",
  "High School",
  "College",
  "Adult Learner",
  "Other",
] as const;
export const reasonForTutoring = [
  "I need help with a class",
  "I'm preparing for a test",
  "I want to learn something new",
  "Other",
] as const;
export const howSoon = ["Right away", "In a few weeks", "Not sure"] as const;
export const tutoringMode = ["Online", "In-person"] as const;

export type WhoNeedsTutoring = (typeof whoNeedsTutoring)[number];
export type GradeLevel = (typeof gradeLevel)[number];
export type ReasonForTutoring = (typeof reasonForTutoring)[number];
export type HowSoon = (typeof howSoon)[number];
export type TutoringMode = (typeof tutoringMode)[number];

// first name
// zip code
// email
// phone number
// and agree to terms of use
// Describe the student

type StudentDetails = {
  whoNeedsTutoring: WhoNeedsTutoring;
  gradeLevel: GradeLevel;
  reasonForTutoring: ReasonForTutoring;
  howSoon: HowSoon;
  tutoringMode: TutoringMode;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  agreedToTermsOfUse: boolean;
};

type Step =
  | "Step 1"
  | "Step 2"
  | "Step 3"
  | "Step 4"
  | "Step 5"
  | "Step 6"
  | "Step 7"
  | "Step 8";

declare module "little-state-machine" {
  interface GlobalState {
    formState: {
      step: Step;
      studentDetails: StudentDetails;
    };
  }
}

export type GlobalState = {
  formState: {
    step: Step;
    studentDetails: StudentDetails;
  };
};
