import { useWizard } from "react-use-wizard";
import { gradeLevels, type GradeLevel } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  gradeLevel: GradeLevel;
};

const text = {
  "Elementary School": "Elementary School",
  "Middle School": "Middle School",
  "High School": "High School",
  College: "College",
  "Adult Learner": "Adult Learner",
  Other: "Other",
} satisfies Record<GradeLevel, string>;

const Step1 = () => {
  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );

  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: GradeLevel) => {
    updateStudentDetails({
      studentDetails: { gradeLevel: value },
    });
    nextStep();
  };

  return (
    <form>
      <h2>Who needs tutoring?</h2>
      {gradeLevels.map((value) => (
        <button
          type="button"
          key={value}
          defaultValue={value}
          value={value}
          onClick={() => handleSubmit(value)}
        >
          {text[value]}
        </button>
      ))}
    </form>
  );
};

export default Step1;
