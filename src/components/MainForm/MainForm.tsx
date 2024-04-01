import Step1 from "./Step1";
import Step2 from "./Step2";
import { createStore } from "little-state-machine";
import { type GlobalState } from "./types";

createStore({
  formState: {
    step: "Step 1",
  },
} as GlobalState);

const MainForm = () => {
  return (
    <div className="main-form">
      <Step1 />
      <Step2 />
    </div>
  );
};

export default MainForm;
