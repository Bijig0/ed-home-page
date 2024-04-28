import { FaCaretDown, FaQuoteLeft } from "react-icons/fa";
import { useWizard } from "react-use-wizard";
import { reviewThree } from "../../../reviews";
import FormPartLayout from "../FormPartLayout";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import SelectButton from "../SelectButton";
import yearByYearDetails, { type Subject } from "../types/subjects";
import { type WhoNeedsTutoring } from "../types/types";
import { studentDetails, updateStudentDetails } from "../useFormStore";

const headerText = {
  Child: "What subject does your child need help with?",
  Self: "What subject do you need help with?",
  Other: "What subject does the student need help with?",
} satisfies Record<WhoNeedsTutoring, string>;

const ChooseSubjects = () => {
  const { nextStep, activeStep } = useWizard();

  const selectedYear = studentDetails.get().year;
  const subjects = yearByYearDetails[selectedYear].subjects;

  const handleSubmit = (value: Subject) => {
    updateStudentDetails({
      studentDetails: {
        subject: value,
      },
    });
    nextStep();
  };

  console.log(studentDetails.get());

  return (
    <FormPartLayout >
      <LeftSideFormPartLayout
        activeStep={activeStep}
        headerText={headerText[studentDetails.get().whoNeedsTutoring]}
      >
        {subjects.map((subject) => (
          <SelectButton
            selected={(subject) => subject === studentDetails.get().subject}
            value={subject}
            text={subject}
            handleSubmit={handleSubmit}
          />
        ))}
      </LeftSideFormPartLayout>

      <div className="hidden-mobile-flex-normal flex-[2_2_0%] relative self-end h-72 bg-light rounded-lg justify-center flex-col px-12 mb-4">
        <div className="flex flex-col justify-end items-start gap-5">
          <FaQuoteLeft className="icon" size={16} color="#f43f5e" />
          <p className="text-black text-base font-primary font-light mt-2">
            {reviewThree.text}
          </p>
          <FaCaretDown
            className="icon absolute left-8 bottom-[-38px]"
            color="white"
            size={80}
          />
          <p className="text-black text-base font-primary font-light">
            -- {reviewThree.author}
          </p>
        </div>
      </div>
    </FormPartLayout>
  );
};

export default ChooseSubjects;
