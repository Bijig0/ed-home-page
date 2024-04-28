import { useEffect } from "react";
import { useWizard } from "react-use-wizard";
import { isStepOne } from "../../../globalStore";
import CheckIcon from "../CheckIcon";
import SelectButton from "../SelectButton";
import { whoNeedsTutoring, type WhoNeedsTutoring } from "../types/types";
import { studentDetails, updateStudentDetails } from "../useFormStore";

const text = {
  Child: "My child",
  Self: "I do",
  Other: "Someone else",
} satisfies Record<WhoNeedsTutoring, string>;

const callbackLink =
  "https://calendly.com/bradysuryasie/eduline-tutoring-callback";

const Step1 = () => {
  const { nextStep } = useWizard();

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
        <h1 className="text-white mx-auto mb-6 text-4xl md:text-6xl text-center font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          Australia's #1 Top Rated Tutors
        </h1>

        <p className="text-light text-md md:text-xl mb-7">
          Welcome! Let's match you with the perfect tutor
        </p>

        <div className="flex text-center mt-6 mx-auto justify-center w-3/4 md:w-64 items-center px-6 py-2 font-semibold bg-rose-500 rounded-lg">
          <p className="text-light text-lg text-center m-0">
            Who needs tutoring?
          </p>
        </div>

        <div className="my-4"></div>

        <form className="px-4 flex flex-col items-center justify-center">
          {whoNeedsTutoring.map((value) => (
            <div className="relative w-full" key={value}>
              <SelectButton
                selected={(value) =>
                  value === studentDetails.get().whoNeedsTutoring
                }
                value={value}
                text={text[value]}
                handleSubmit={handleSubmit}
              />
              <CheckIcon
                className="absolute right-[-2.25rem] md:right-[-3rem] top-1/2 transform -translate-y-1/2"
                enabled={value === studentDetails.get().whoNeedsTutoring}
              />
            </div>
          ))}
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
