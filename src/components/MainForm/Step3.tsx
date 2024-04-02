import { useWizard } from "react-use-wizard";
import BackIcon from "./BackIcon";
import { gradeLevels, type GradeLevel, type ReasonForTutoring } from "./types";
import useFormStore from "./useFormStore";

const text = {
  "Help with class": "I need help with a class",
  "Preparing for est": "I'm preparing for a test",
  "Want to learn something new": "I want to learn something new",
  Other: "Other",
} satisfies Record<ReasonForTutoring, string>;

const Step1 = () => {
  const { updateStudentDetails, studentDetails } = useFormStore(
    (state) => state
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
    <div className="flex ">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        <h1 className="text-4xl text-white font-primary">
          What grade level are you in?
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {gradeLevels.map((value) => (
              <li
                onClick={() => handleSubmit(value)}
                key={value}
                className="border border-black cursor-pointer px-5 flex items-center justify-center block my-2 overflow-hidden hover:bg-cyan-500 bg-white hover:text-white rounded-md w-button min-h-14"
              >
                <label className="text-lg font-primary cursor-pointer">
                  {value}
                </label>
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
          <BackIcon />
          <button
            className="hover:underline text-lg font-primary"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
      <div className="flex-[2_2_0%] flex items-center flex-col justify-end">
        <p className="text-black text-lg font-primary font-light mb-12 mt-2">
          Our experienced tutors{" "}
          <p className="inline text-black text-lg font-primary font-semibold">
            individualize their learning plans
          </p>{" "}
          to match each student's personal needs and goals!
        </p>
      </div>
    </div>
  );
};

export default Step1;
