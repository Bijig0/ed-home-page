import { FaCaretDown, FaQuoteLeft } from "react-icons/fa";
import { useWizard } from "react-use-wizard";
import { reviewTwo } from "../../../reviews";
import BackButton from "../BackButton";
import BackIcon from "../BackIcon";
import BreadCrumb from "../BreadCrumb";
import CheckIcon from "../CheckIcon";
import ProgressBar from "../ProgressBar";
import SelectButton from "../SelectButton";
import {
  reasonsForTutoring,
  whoNeedsTutoring,
  type ReasonForTutoring,
  type WhoNeedsTutoring,
} from "../types/types";
import { studentDetails, updateStudentDetails } from "../useFormStore";

const headerText = {
  Child: "What are your goals with your child's tutoring?",
  Self: "What are your goals with tutoring?",
  Other: "What are your goals with the student's tutoring?",
} satisfies Record<WhoNeedsTutoring, string>;

const text = {
  "Help with class": "I need help with a class",
  "Preparing for est": "I'm preparing for a test",
  "Want to learn something new": "I want to learn something new",
  Other: "Other",
} satisfies Record<ReasonForTutoring, string>;

const Step1 = () => {
  const { previousStep, nextStep, activeStep } = useWizard();

  const handleSubmit = (value: ReasonForTutoring) => {
    updateStudentDetails({
      studentDetails: { reasonForTutoring: value },
    });
    nextStep();
  };

  console.log(whoNeedsTutoring);

  console.log(studentDetails.get());

  return (
    <div className="flex ">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        <div>
          <BreadCrumb />
          <ProgressBar step={activeStep} />

          <div className="my-4"></div>
        </div>
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          {headerText[studentDetails.get().whoNeedsTutoring]}
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {reasonsForTutoring.map((value) => (
              <div className="relative" key={value}>
                <SelectButton
                  selected={(value) =>
                    value === studentDetails.get().reasonForTutoring
                  }
                  value={value}
                  text={text[value]}
                  handleSubmit={handleSubmit}
                />
                <CheckIcon
                  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                  enabled={value === studentDetails.get().reasonForTutoring}
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
      <div className="flex-[2_2_0%] relative self-end h-72 bg-light rounded-lg flex justify-center flex-col px-12 gap-4">
        <div className="flex flex-col justify-end items-start gap-5">
          <FaQuoteLeft className="icon" size={16} color="#f43f5e" />
          <p className="text-black text-base font-primary font-light mt-2">
            {reviewTwo.text}
          </p>
          <FaCaretDown
            className="icon absolute left-8 bottom-[-38px]"
            color="white"
            size={80}
          />
          <p className="text-black text-base font-primary font-light">
            -- {reviewTwo.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
