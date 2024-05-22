import { useMediaQuery } from "react-responsive";
import { useWizard } from "react-use-wizard";
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

  const firstHalfSubjects = subjects.slice(0, Math.floor(subjects.length / 2));
  const secondHalfSubjects = subjects.slice(Math.floor(subjects.length / 2));

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  console.log({ isDesktopOrLaptop });

  if (isDesktopOrLaptop) {
    return (
      <FormPartLayout>
        <LeftSideFormPartLayout
          activeStep={activeStep}
          headerText={headerText[studentDetails.get().whoNeedsTutoring]}
        >
          {firstHalfSubjects.map((subject) => (
            <SelectButton
              key={subject}
              selected={(subject) => subject === studentDetails.get().subject}
              value={subject}
              text={subject}
              handleSubmit={handleSubmit}
            />
          ))}
        </LeftSideFormPartLayout>

        <div className="flex flex-1 md:mb-10">
          <div className="flex flex-col justify-end">
            {secondHalfSubjects.map((subject) => (
              <SelectButton
                key={subject}
                selected={(subject) => subject === studentDetails.get().subject}
                value={subject}
                text={subject}
                handleSubmit={handleSubmit}
              />
            ))}
          </div>
        </div>
      </FormPartLayout>
    );
  }

  return (
    <FormPartLayout>
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
    </FormPartLayout>
  );
};

export default ChooseSubjects;
