import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Wizard } from "react-use-wizard";
import FormCompleted from "./FormCompleted";
import ChooseSubjects from "./Steps/ChooseSubjects";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";

const queryClient = new QueryClient();

const MainForm = () => {
  return (
    <div className="main-form">
      <QueryClientProvider client={queryClient}>
        <Wizard>
          <Step1 />
          <ChooseSubjects />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
          <Step7 />
          <Step8 />
          <FormCompleted />
        </Wizard>
      </QueryClientProvider>
    </div>
  );
};

export default MainForm;
