import { FaCaretDown, FaQuoteLeft } from "react-icons/fa";
import { useWizard } from "react-use-wizard";
import { reviewOne } from "../../../reviews";
import BackButton from "../BackButton";
import BackIcon from "../BackIcon";
import BreadCrumb from "../BreadCrumb";
import CheckIcon from "../CheckIcon";
import ProgressBar from "../ProgressBar";
import SelectButton from "../SelectButton";
import { howSoon, type HowSoon } from "../types/types";
import { studentDetails, updateStudentDetails } from "../useFormStore";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";

const headerText = {
  Child: "How soon does your child need help?",
  Self: "How soon do you need help?",
  Other: "How soon does the student need help?",
};

const Step1 = () => {
  const { nextStep, activeStep } = useWizard();

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
      <LeftSideFormPartLayout
        activeStep={activeStep}
        headerText={headerText[studentDetails.get().whoNeedsTutoring]}
      >
        {howSoon.map((value) => (
          <SelectButton
            selected={(value) => value === studentDetails.get().howSoon}
            value={value}
            text={value}
            handleSubmit={handleSubmit}
          />
        ))}
      </LeftSideFormPartLayout>

      <div className="hidden-mobile-flex-normal flex-[2_2_0%] relative self-end h-72 bg-light rounded-lg justify-center flex-col px-12 gap-4">
        <div className="flex flex-col justify-end items-start gap-5">
          <FaQuoteLeft className="icon" size={16} color="#f43f5e" />
          <p className="text-black text-base font-primary font-light mt-2">
            {reviewOne.text}
          </p>
          <FaCaretDown
            className="icon absolute left-8 bottom-[-38px]"
            color="white"
            size={80}
          />
          <p className="text-black text-base font-primary font-light">
            {reviewOne.author}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Step1;
