import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Wizard } from "react-use-wizard";
import FormCompleted from "./FormCompleted";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

const queryClient = new QueryClient();

const MainForm = () => {
  return (
    <div className="main-form">
      <QueryClientProvider client={queryClient}>
        <Wizard>
          <FormCompleted />
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
          <Step7 />
          <Step8 />
        </Wizard>
      </QueryClientProvider>
    </div>
  );
};

export default MainForm;
