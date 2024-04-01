import useStateMachine, { t } from "@cassiozen/usestatemachine";
import React from "react";
import { merge } from "ts-deepmerge";
import type {
  FormState,
  PartialFormState,
  Payload,
  StudentDetails,
} from "./types";

export const MainFormContext = React.createContext({
  state: () => {},
  send: () => {},
});

const updateContext = (
  context: FormState,
  toUpdate: PartialFormState
): FormState => {
  return merge(context, toUpdate) as FormState;
};

export const MainFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
  return (
    <MainFormContext.Provider value={{ state, send }}>
      {children}
    </MainFormContext.Provider>
  );
};

export const useMainFormContext = () => {
  return React.useContext(MainFormContext);
};

export default MainFormContext;
