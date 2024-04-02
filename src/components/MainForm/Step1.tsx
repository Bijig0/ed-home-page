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
    <form className="stepper-body">
      <h3 className="stepper-head">Step 1</h3>

      <ul className="el-radio-option el-radio-option-text">
        {whoNeedsTutoring.map((value) => (
          <li key={value} className=" hover:bg-green-600">
            <label>I've had a private tutor</label>
            <input
              className="hover:text-white hover:bg-green-600"
              value={value}
              onClick={() => handleSubmit(value)}
              name="question3"
              type="radio"
              required
            />
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Step1;
