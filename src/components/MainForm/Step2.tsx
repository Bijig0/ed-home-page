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

  const handleBack = () => previousStep();

  return (
    <div>
      <div className="flex flex-col items-start">
        <h1 className="text-4xl text-white">What grade level are you in?</h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {gradeLevels.map((value) => (
              <li
                onClick={() => handleSubmit(value)}
                key={value}
                className="cursor-pointer flex items-center justify-center block my-2 overflow-hidden hover:bg-cyan-500 bg-white hover:text-white rounded-md w-96 max-w-full min-h-14"
              >
                <label className="text-lg  cursor-pointer">{text[value]}</label>
                <input
                  className="hover:text-white hidden"
                  value={value}
                  name="question3"
                  type="radio"
                />
              </li>
            ))}
          </ul>
        </form>
        <div className="flex items-center justify-start">
          <button className="hover:underline text-lg" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
