import { useStore } from "@nanostores/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Wizard } from "react-use-wizard";
import { isStepOne } from "../../globalStore";
import FormCompleted from "./FormCompleted";
import ChooseSubjects from "./Steps/ChooseSubject";
import { default as ChooseYear } from "./Steps/ChooseYear";
import Step1 from "./Steps/Step1";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import InputStudentName from "./Steps/inputStudentName";

const queryClient = new QueryClient();

const MainForm = () => {
  const $isStepOne = useStore(isStepOne);
  return (
    <div
      className={`mt-12 ${$isStepOne ? "pt-16" : "pt-12"} pb-16 md:pt-24 md:pb-32`}
    >
      <div className="">
        <QueryClientProvider client={queryClient}>
          <Wizard>
            <Step1 />
            <ChooseYear />
            <ChooseSubjects />
            <Step3 />
            <Step4 />
            <Step5 />
            <InputStudentName />
            <Step6 />
            <Step7 />
            <Step8 />
            <FormCompleted />
          </Wizard>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default MainForm;
