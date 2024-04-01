import { merge } from "ts-deepmerge";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import type {
  MainFormState,
  PartialFormState,
  Payload,
  StudentDetails,
} from "./types";
import useStateMachine, { t } from "./useStateMachine/useStateMachine";

const steps = {
  step1: (send: any) => <Step1 send={send} />,
  step2: (send: any) => <Step2 send={send} />,
  step3: (send: any) => <Step3 send={send} />,
  step4: (send: any) => <Step4 send={send} />,
  step5: (send: any) => <Step5 send={send} />,
  step6: (send: any) => <Step6 send={send} />,
  step7: (send: any) => <Step7 send={send} />,
  step8: (send: any) => <Step8 send={send} />,
};

const updateContext = (
  context: MainFormState,
  toUpdate: PartialFormState
): MainFormState => {
  return merge(context, toUpdate) as MainFormState;
};

const MainForm = () => {
  const [state, send] = useStateMachine({
    schema: {
      context: t<MainFormState>(),
      events: {
        NEXT: t<Payload>(),
      },
    },
    context: {
      studentDetails: {} as StudentDetails,
    },
    verbose: true,
    initial: "step1" as const,
    states: {
      step1: {
        on: { NEXT: "step2" },
      },
      step2: {
        on: { NEXT: "step3", BACK: "step1" },
        effect({ setContext, event }) {
          setContext((context) => updateContext(context, event.payload));
        },
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

  return <div className="main-form">{steps[state.value](send)}</div>;
};

export default MainForm;
