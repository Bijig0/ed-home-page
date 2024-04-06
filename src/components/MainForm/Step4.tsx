import { useWizard } from "react-use-wizard";
import BackButton from "./BackButton";
import BackIcon from "./BackIcon";
import BreadCrumb from "./BreadCrumb";
import CheckIcon from "./CheckIcon";
import ProgressBar from "./ProgressBar";
import SelectButton from "./SelectButton";
import { howSoon, type HowSoon } from "./types";
import { studentDetails, updateStudentDetails } from "./useFormStore";

type FormValues = {
  howSoon: HowSoon;
};

const headerText = {
  Child: "How soon does your child need help?",
  Self: "How soon do you need help?",
  Other: "How soon does the student need help?",
};

const Step1 = () => {
  const { nextStep } = useWizard();

  const handleSubmit = (value: HowSoon) => {
    updateStudentDetails({
      studentDetails: { howSoon: value },
    });
    nextStep();
  };

  console.log(studentDetails);

  // console.log(headerText[studentDetails.whoNeedsTutoring]);

  return (
    <div className="flex ">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        {/* <h1 className="text-4xl text-white font-primary">
          {headerText[studentDetails.whoNeedsTutoring]}
        </h1> */}
        <div>
          <BreadCrumb />
          <ProgressBar step={4} />
        </div>
        <div className="my-4"></div>
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          {headerText[studentDetails.get().whoNeedsTutoring]}
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {howSoon.map((value) => (
              <div className="relative">
                <SelectButton
                  selected={(value) => value === studentDetails.get().howSoon}
                  value={value}
                  text={value}
                  handleSubmit={handleSubmit}
                />
                <CheckIcon
                  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                  enabled={value === studentDetails.get().howSoon}
                />
              </div>
            ))}
          </ul>
        </form>
        <div className="flex items-center justify-start">
          <BackIcon />
          <BackButton />
        </div>
      </div>
      <div className="flex flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8">
          <h2 className="mb-4 bg-rose-200 text-red-600 px-4 py-2 rounded-lg md:w-84 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            DID YOU KNOW?
          </h2>
          <p className="text-black text-base font-primary font-light">
            Our experienced tutors{" "}
            <span className="inline text-black text-base font-primary font-semibold">
              individualize their learning plans
            </span>{" "}
            to match each student's personal needs and goals!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Step1;
