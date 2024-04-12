import { IoDocumentTextSharp } from "react-icons/io5";
import { useWizard } from "react-use-wizard";
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
  const { nextStep } = useWizard();

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
          <ProgressBar step={2} />

          <div className="my-4"></div>
        </div>
        <h1 className="text-white mb-0 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
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
      <div className="flex flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
        {secondHalfSubjects ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ChooseSubjects;
