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
    <div>
      <div className="hero-content">
        <h1>Award Winning Coding Tutors</h1>
        <p className="text-light">
          Welcome! Let's match you with the perfect Coding tutor
        </p>
        {/* <h3 className="text-center">Who needs tutoring</h3> */}
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {whoNeedsTutoring.map((value) => (
              <li
                key={value}
                className="cursor-pointer flex items-center justify-center block my-2 overflow-hidden hover:bg-cyan-500 bg-white hover:text-white rounded-md w-80 max-w-full min-h-14"
              >
                <label className="font-bold cursor-pointer">
                  {text[value]}
                </label>
                <input
                  className="hover:text-white hidden"
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
      </div>
    </div>
  );
};

export default Step1;
