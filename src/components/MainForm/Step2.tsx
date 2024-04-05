import { IoDocumentTextSharp } from "react-icons/io5";
import { useWizard } from "react-use-wizard";
import BackButton from "./BackButton";
import BackIcon from "./BackIcon";
import CheckIcon from "./CheckIcon";
import SelectButton from "./SelectButton";
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

const ProgressBar = () => {
  return (
    <div
      className="flex w-[450px] h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
      role="progressbar"
    >
      <div
        className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
        style={{ width: "25%" }}
      ></div>
    </div>
  );
};

const BreadCrumb = () => {
  return (
    <ol className="flex items-center whitespace-nowrap p-0">
      <li className="inline-flex items-center">
        <a
          className="flex items-center text-base text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
          href="#"
        >
          Home
        </a>
        <svg
          className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li
        className="inline-flex items-center text-base font-semibold text-gray-800 truncate dark:text-gray-200"
        aria-current="page"
      >
        Schedule
      </li>
    </ol>
  );
};

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
        <div>
          <BreadCrumb />
          <ProgressBar />
          <div className="flex justify-center">
            <p>2 of 8</p>
          </div>
        </div>
        <h1 className="text-white mb-6 text-4xl font-semibold leading-none tracking-tighter text-black lg:max-w-2xl">
          {headerText[studentDetails.get().whoNeedsTutoring]}
        </h1>
        <div className="my-2"></div>
        <form className="flex flex-col items-center justify-center">
          <ul className="p-0">
            {gradeLevels.map((value) => (
              <div className="relative" key={value}>
                <SelectButton
                  selected={(value) =>
                    value === studentDetails.get().gradeLevel
                  }
                  value={value}
                  text={text[value]}
                  handleSubmit={handleSubmit}
                />
                <CheckIcon
                  className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
                  enabled={value === studentDetails.get().gradeLevel}
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
