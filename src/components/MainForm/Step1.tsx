import { useWizard } from "react-use-wizard";
import { whoNeedsTutoring, type WhoNeedsTutoring } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const text = {
  Child: "My child",
  Self: "I do",
  Other: "Someone else",
} satisfies Record<WhoNeedsTutoring, string>;

const Step1 = () => {
  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );

  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: WhoNeedsTutoring) => {
    updateStudentDetails({
      studentDetails: { whoNeedsTutoring: value },
    });
    nextStep();
  };

  return (
    <form>
      <h2>Who needs tutoring?</h2>
      {whoNeedsTutoring.map((value) => (
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
