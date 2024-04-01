import useStateMachine, { t } from "@cassiozen/usestatemachine";
import React from "react";
import type { FormState } from "./types";
import { type StudentDetails } from "./types";

export const MainFormContext = React.createContext({
  state: () => {},
  send: () => {},
});

export const MainFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, send] = useStateMachine({
    schema: {
      context: t<FormState>(),
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
