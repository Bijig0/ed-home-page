import { FaCaretDown, FaQuoteLeft } from "react-icons/fa";
import { useWizard } from "react-use-wizard";
import { reviewTwo } from "../../../reviews";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import SelectButton from "../SelectButton";
import {
  reasonsForTutoring,
  whoNeedsTutoring,
  type ReasonForTutoring,
  type WhoNeedsTutoring,
} from "../types/types";
import { studentDetails, updateStudentDetails } from "../useFormStore";
import FormPartLayout from "../FormPartLayout";

const headerText = {
  Child: "What are your goals with your child's tutoring?",
  Self: "What are your goals with tutoring?",
  Other: "What are your goals with the student's tutoring?",
} satisfies Record<WhoNeedsTutoring, string>;

const text = {
  "General Support": "General Support",
  "Help With A Test": "Help With A Test",
  "Long Term Improvement": "Long Term Improvement",
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
    <FormPartLayout>
      <LeftSideFormPartLayout
        activeStep={activeStep}
        headerText={headerText[studentDetails.get().whoNeedsTutoring]}
      >
        {reasonsForTutoring.map((value) => (
          <SelectButton
            selected={(value) =>
              value === studentDetails.get().reasonForTutoring
            }
            value={value}
            text={text[value]}
            handleSubmit={handleSubmit}
          />
        ))}
      </LeftSideFormPartLayout>

      <div className="hidden-mobile-flex-normal flex-[2_2_0%] relative self-end h-80 bg-light rounded-lg justify-center flex-col px-12 gap-4">
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
    </FormPartLayout>
  );
};

export default Step1;
