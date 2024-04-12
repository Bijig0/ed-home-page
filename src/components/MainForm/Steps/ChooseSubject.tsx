import { FaCaretDown, FaQuoteLeft } from "react-icons/fa";
import { useWizard } from "react-use-wizard";
import { reviewThree } from "../../../reviews";
import BackButton from "../BackButton";
import BackIcon from "../BackIcon";
import BreadCrumb from "../BreadCrumb";
import CheckIcon from "../CheckIcon";
import ProgressBar from "../ProgressBar";
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

  const firstHalfSubjects =
    selectedYear === "Year 11 or 12"
      ? subjects.slice(0, Math.ceil(subjects.length / 2))
      : subjects;
  const secondHalfSubjects =
    selectedYear === "Year 11 or 12"
      ? subjects.slice(Math.ceil(subjects.length / 2), subjects.length)
      : null;

  return (
    <div className="flex">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        <div>
          <BreadCrumb />
          <ProgressBar step={activeStep} />

          <div className="my-4"></div>
        </div>
        <h1 className="text-white mb-0 text-2xl md:text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          {headerText[studentDetails.get().whoNeedsTutoring]}
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {firstHalfSubjects.map((subject) => (
              <div className="relative" key={subject}>
                <SelectButton
                  selected={(subject) =>
                    subject === studentDetails.get().subject
                  }
                  value={subject}
                  text={subject}
                  handleSubmit={handleSubmit}
                />
                <CheckIcon
                  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                  enabled={subject === studentDetails.get().subject}
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
      {secondHalfSubjects ? (
        <div className="hidden-mobile-flex-normal flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
          <form className="flex flex-col items-center justify-center">
            <ul className="p-0">
              {secondHalfSubjects.map((value) => (
                <div className="relative" key={value}>
                  <SelectButton
                    selected={(value) => value === studentDetails.get().subject}
                    value={value}
                    text={value}
                    handleSubmit={handleSubmit}
                  />
                  <CheckIcon
                    className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                    enabled={value === studentDetails.get().subject}
                  />
                </div>
              ))}
            </ul>
          </form>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ChooseSubjects;
