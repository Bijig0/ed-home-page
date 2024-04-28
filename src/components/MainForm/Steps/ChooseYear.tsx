import { IoDocumentTextSharp } from "react-icons/io5";
import { useWizard } from "react-use-wizard";
import FormPartLayout from "../FormPartLayout";
import LeftSideFormPartLayout from "../LeftSideFormPartLayout";
import SelectButton from "../SelectButton";
import yearByYearDetails from "../types/subjects";
import { type GradeLevel, type WhoNeedsTutoring } from "../types/types";
import { studentDetails, updateStudentDetails } from "../useFormStore";

const headerText = {
  Child: "What year is your child in?",
  Self: "What year are you in?",
  Other: "What year is the student in?",
} satisfies Record<WhoNeedsTutoring, string>;

const ChooseYear = () => {
  const { nextStep, activeStep } = useWizard();

  const years = Object.values(yearByYearDetails).map(({ name }) => name);

  const handleSubmit = (value: GradeLevel) => {
    updateStudentDetails({
      studentDetails: {
        year: value,
      },
    });
    nextStep();
  };

  console.log(studentDetails.get());

  return (
    <FormPartLayout>
      <LeftSideFormPartLayout
        activeStep={activeStep}
        headerText={headerText[studentDetails.get().whoNeedsTutoring]}
      >
        {years.map((value) => (
          <SelectButton
            selected={(value) => value === studentDetails.get().year}
            value={value}
            text={value}
            handleSubmit={handleSubmit}
          />
        ))}
      </LeftSideFormPartLayout>
      <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        <div className="bg-light rounded-lg flex justify-center flex-col items-center px-8 py-8 gap-4">
          <IoDocumentTextSharp className="icon" size={60} color="#f43f5e" />
          <p className="text-base text-black font-primary font-light">
            Our experienced tutors{" "}
            <span className="inline text-black text-base font-primary font-semibold">
              individualize their learning plans
            </span>{" "}
            to match each student's personal needs and goals!
          </p>
        </div>
      </div>
    </FormPartLayout>
  );
};

export default ChooseYear;
