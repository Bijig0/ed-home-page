import { useWizard } from "react-use-wizard";
import { reasonsForTutoring, type ReasonForTutoring } from "./types";
import useFormStore from "./useFormStore";

const text = {
  "Help with class": "I need help with a class",
  "Preparing for est": "I'm preparing for a test",
  "Want to learn something new": "I want to learn something new",
  Other: "Other",
} satisfies Record<ReasonForTutoring, string>;

const Step1 = () => {
  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );

  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: ReasonForTutoring) => {
    updateStudentDetails({
      studentDetails: { reasonForTutoring: value },
    });
    nextStep();
  };

  return (
    <form>
      <h2>Who needs tutoring?</h2>
      {reasonsForTutoring.map((value) => (
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
