import { useEffect } from "react";
import { useWizard } from "react-use-wizard";
import { isStepOne } from "../../globalStore";
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

const callbackLink =
  "https://calendly.com/bradysuryasie/eduline-tutoring-callback";

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  useEffect(() => {
    isStepOne.set(true);
  }, []);

  const handleSubmit = (value: WhoNeedsTutoring) => {
    console.log(value);
    updateStudentDetails({
      studentDetails: { whoNeedsTutoring: value },
    });
    console.log(studentDetails.get());
    nextStep();
    isStepOne.set(false);
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
        <div className="flex justify-center items-center">
          <div className="divider divider-line bg-light"></div>
          <p className="font-primary text-lg font-bold text-center my-4 text-light">
            OR
          </p>
          <div className="divider divider-line bg-light"></div>
        </div>
        <div className="my-4"></div>
        <a
          target="_blank"
          href={callbackLink}
          className="bg-white hover:bg-[#eee] animate-none hover:transition-none hover:transform-none hover:text-black text-[#5b70f9] text-md text-center w-80 px-6 py-4 font-semibold rounded-lg"
        >
          Skip The Questions And Request A Callback
        </a>
      </div>
    </div>
  );
};

export default Step1;
