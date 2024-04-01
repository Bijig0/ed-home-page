import "little-state-machine";

type WhoNeedsTutoring = "Parent" | "Child" | "Self";
type GradeLevel =
  | "Elementary School"
  | "Middle School"
  | "High School"
  | "College"
  | "Adult Learner"
  | "Other";

type ReasonForTutoring =
  | "I need help with a class"
  | "I'm preparing for a test"
  | "I want to learn something new"
  | "Other";

type HowSoon = "Right away" | "In a few weeks" | "Not sure";

type TutoringMode = "Online" | "In-person";

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
