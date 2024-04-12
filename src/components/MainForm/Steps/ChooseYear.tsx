import { IoDocumentTextSharp } from "react-icons/io5";
import { useWizard } from "react-use-wizard";
import BackButton from "../BackButton";
import BackIcon from "../BackIcon";
import BreadCrumb from "../BreadCrumb";
import CheckIcon from "../CheckIcon";
import ProgressBar from "../ProgressBar";
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
    <div className="flex">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        <div>
          <BreadCrumb />
          <ProgressBar step={activeStep} />

          <div className="my-4"></div>
        </div>
        <h1 className="text-white mb-0 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          {headerText[studentDetails.get().whoNeedsTutoring]}
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {years.map((value) => (
              <div className="relative" key={value}>
                <SelectButton
                  selected={(value) => value === studentDetails.get().year}
                  value={value}
                  text={value}
                  handleSubmit={handleSubmit}
                />
                <CheckIcon
                  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                  enabled={value === studentDetails.get().year}
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
    </div>
  );
};

export default ChooseYear;
