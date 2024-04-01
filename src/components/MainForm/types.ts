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
}

declare module "little-state-machine" {
  interface GlobalState {

    formState: {

        studentDetails: StudentDetails;
        
    };
  }
}

export type GlobalState = {
  yourDetails: {
    firstname: string;
    lastname: string;
  };
};
