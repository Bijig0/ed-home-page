import useStateMachine, { t } from "@cassiozen/usestatemachine";
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
  FormState,
  PartialFormState,
  Payload,
  StudentDetails,
} from "./types";

const steps = {
  step1: <Step1 />,
  step2: <Step2 />,
  step3: <Step3 />,
  step4: <Step4 />,
  step5: <Step5 />,
  step6: <Step6 />,
  step7: <Step7 />,
  step8: <Step8 />,
};

const updateContext = (
  context: FormState,
  toUpdate: PartialFormState
): FormState => {
  return merge(context, toUpdate) as FormState;
};

const MainForm = () => {
  const [state, send] = useStateMachine({
    schema: {
      context: t<FormState>(),
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

  return <div className="main-form">{steps[state.value]}</div>;
};

export default MainForm;
