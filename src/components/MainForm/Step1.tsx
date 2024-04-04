import { useWizard } from "react-use-wizard";
import CheckIcon from "./CheckIcon";
import SelectButton from "./SelectButton";
import { whoNeedsTutoring, type WhoNeedsTutoring } from "./types";
import { studentDetails, updateStudentDetails } from "./useFormStore";

type FormValues = {
  whoNeedsTutoring: WhoNeedsTutoring;
};

const text = {
  Child: "My child",
  Self: "I do",
  Other: "Someone else",
} satisfies Record<WhoNeedsTutoring, string>;

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: WhoNeedsTutoring) => {
    console.log(value);
    updateStudentDetails({
      studentDetails: { whoNeedsTutoring: value },
    });
    console.log(studentDetails.get());
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

        <div className="flex text-center mt-6 mx-auto justify-center w-64 items-center px-6 py-2 font-semibold bg-rose-500 rounded-lg">
          <p className="text-light text-lg text-center m-0">
            Who needs tutoring?
          </p>
        </div>

        <div className="my-4"></div>

        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {whoNeedsTutoring.map((value) => (
              <div className="relative" key={value}>
                <SelectButton
                  selected={(value) =>
                    value === studentDetails.get().whoNeedsTutoring
                  }
                  value={value}
                  text={text[value]}
                  handleSubmit={handleSubmit}
                />
                <CheckIcon
                  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                  enabled={value === studentDetails.get().whoNeedsTutoring}
                />
              </div>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Step1;
