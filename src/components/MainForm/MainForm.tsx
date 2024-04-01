import { Wizard } from "react-use-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const formStore = 

const MainForm = () => {
  return (
    <div className="main-form">
      <Wizard>
        <Step1 />
        <Step2 />
        <Step3 />
      </Wizard>
    </div>
  );
};

export default MainForm;
