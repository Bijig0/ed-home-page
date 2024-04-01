import Step1 from "./Step1";
import Step2 from "./Step2";
import useStateMachine from "@cassiozen/usestatemachine";

const MainForm = () => {
  const [state, send] = useStateMachine({
    initial: "step1" as const,
    states: {
      step1: {
        on: { NEXT: "step2" },
      },
      step2: {
        on: { NEXT: "step3", BACK: "step1" },
      },
      step3: {
        on: { NEXT: "step2", BACK: "step4" },
      },
      step4: {
        on: { NEXT: "step3", BACK: "step5" },
      },
      step5: {
        on: { NEXT: "step4", BACK: "step6" },
      },
      step6: {
        on: { NEXT: "step5", BACK: "step7" },
      },
      step7: {
        on: { NEXT: "step6", BACK: "step6" },
      },
      step8: {
        on: { BACK: "step8" },
      },
    },
  });

  return (
    <div className="main-form">
      <Step1 />
      <Step2 />
    </div>
  );
};

export default MainForm;
