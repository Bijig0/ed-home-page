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
  const { updateStudentDetails, studentDetails } = useFormStore();

  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: WhoNeedsTutoring) => {
    console.log(value);
    updateStudentDetails({
      studentDetails: { whoNeedsTutoring: value },
    });
    console.log({ studentDetails });
    nextStep();
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-white mx-auto mb-6 text-6xl text-center font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          Award Winning Programming Tutors
        </h1>

        <p className="text-light text-xl mb-7">
          Welcome! Let's match you with the perfect programming tutor
        </p>

        <button className="flex text-center mt-6 mx-auto justify-center w-64 items-center px-6 py-2 font-semibold bg-rose-500 rounded-lg">
          <p className="text-light text-lg text-center m-0">
            Who needs tutoring?
          </p>
        </button>

        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {whoNeedsTutoring.map((value) => (
              <li
                onClick={() => handleSubmit(value)}
                key={value}
                className="cursor-pointer flex items-center justify-center block my-2 overflow-hidden hover:bg-cyan-500 bg-white hover:text-white rounded-md w-button max-w-full min-h-14"
              >
                <label className="text-lg cursor-pointer">{text[value]}</label>
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
      </div>
    </div>
  );
};

export default Step1;
