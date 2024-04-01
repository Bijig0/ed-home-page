export const whoNeedsTutoring = ["Child", "Self", "Other"] as const;
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

export type StudentDetails = {
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

export type MainFormState = {
  studentDetails: StudentDetails;
};

export type PartialFormState = {
  studentDetails: Partial<StudentDetails>;
};

export type Payload = {
  payload: PartialFormState;
};
