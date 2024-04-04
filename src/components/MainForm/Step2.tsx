import { IoDocumentTextSharp } from "react-icons/io5";
import { useWizard } from "react-use-wizard";
import BackButton from "./BackButton";
import BackIcon from "./BackIcon";
import SelectButtonWithCheckMark from "./SelectButtonWithCheckMark";
import { gradeLevels, type GradeLevel, type WhoNeedsTutoring } from "./types";
import { studentDetails, updateStudentDetails } from "./useFormStore";

const headerText = {
  Child: "What grade level is your child in?",
  Self: "What grade level are you in?",
  Other: "What grade level is the student in?",
} satisfies Record<WhoNeedsTutoring, string>;

const text = {
  "Elementary School": "Elementary School",
  "Middle School": "Middle School",
  "High School": "High School",
  College: "College",
  "Adult Learner": "Adult Learner",
  Other: "Other",
} satisfies Record<GradeLevel, string>;

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  const handleSubmit = (value: GradeLevel) => {
    updateStudentDetails({
      studentDetails: { gradeLevel: value },
    });
    nextStep();
  };

  console.log(studentDetails.get());

  return (
    <div className="flex ">
      <div className="flex flex-col items-start flex-[3_3_0%]">
        {/* <h1 className="text-4xl text-white font-primary">
          {headerText[studentDetails.whoNeedsTutoring]}
        </h1> */}
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          {headerText[studentDetails.get().whoNeedsTutoring]}
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {gradeLevels.map((value) => (
              <SelectButtonWithCheckMark
                value={value}
                text={text[value]}
                handleSubmit={handleSubmit}
              />
            ))}
          </ul>
        </form>
        <div className="flex items-center justify-start">
          <BackIcon />
          <BackButton />
        </div>
      </div>
      <div className="flex flex-[2_2_0%] flex-col justify-end text-center p-8 items-center font-semibold">
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

export default Step1;
