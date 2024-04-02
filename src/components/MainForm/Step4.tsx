import { useWizard } from "react-use-wizard";
import { howSoon, type HowSoon } from "./types";
import useFormStore from "./useFormStore";

type FormValues = {
  howSoon: HowSoon;
};

const Step1 = () => {
  const updateStudentDetails = useFormStore(
    (state) => state.updateStudentDetails
  );

  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: HowSoon) => {
    updateStudentDetails({
      studentDetails: { howSoon: value },
    });
    nextStep();
  };

  return (
    <form>
      <h2>Who needs tutoring?</h2>
      {howSoon.map((value) => (
        <button
          type="button"
          key={value}
          defaultValue={value}
          value={value}
          onClick={() => handleSubmit(value)}
        >
          {value}
        </button>
      ))}
    </form>
  );
};

export default Step1;
