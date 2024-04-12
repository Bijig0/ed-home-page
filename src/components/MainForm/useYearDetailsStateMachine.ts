import { useWizard } from "react-use-wizard";
import type { Subject, YearDetails } from "./types/subjects";
import type { Year } from "./types/types";
import { updateStudentDetails } from "./useFormStore";
import useStateMachine, { t } from "./useStateMachine/useStateMachine";

const useLessonTypeStateMachine = () => {
  const { previousStep, nextStep } = useWizard();

  return useStateMachine({
    schema: {
      context: t<{
        yearDetails: YearDetails | undefined;
        ibOrVCE: "ib" | "vce" | undefined;
      }>(),
      events: {
        CHOOSE_SUBJECT: t<{ value: Subject }>(),
        CHOOSE_IB_OR_VCE: t<{ value: "ib" | "vce" }>(),
        CHOOSE_YEAR: t<{ value: Year }>(),
        YEAR_CHOSEN: t<{ value: Year }>(),
        BACK: t<{ value: { prevState: string } }>(),
      },
    },
    context: {
      yearDetails: undefined,
      ibOrVCE: undefined,
    },
    initial: "choosingYear",
    states: {
      choosingYear: {
        on: {
          CHOOSE_YEAR: {
            target: "yearChosen",
          },
          BACK: {
            target: "choosingYear",
          },
        },
        effect({ event }) {
          if (
            event.type === "BACK" &&
            event.value.prevState === "choosingYear"
          ) {
            previousStep();
          }
        },
      },
      yearChosen: {
        on: {
          YEAR_CHOSEN_NOT_YEAR_11_OR_12: {
            target: "choosingSubject",
          },
          YEAR_CHOSEN_YEAR_11_OR_12: {
            target: "choosingIBOrVCE",
          },
        },
        effect({ send, event, setContext }) {
          const year = event.value;
          updateStudentDetails({
            studentDetails: {
              yearAndSubject: { name: year, subject: undefined } as any,
            },
          });
          setContext(
            () =>
              ({
                yearDetails: { name: year, subject: undefined },
              }) as any
          );

          if (event.value === "Year 11 or 12") {
            send({ type: "YEAR_CHOSEN_YEAR_11_OR_12" });
          } else {
            send({ type: "YEAR_CHOSEN_NOT_YEAR_11_OR_12" });
          }
        },
      },
      choosingIBOrVCE: {
        on: {
          CHOOSE_IB_OR_VCE: {
            target: "choosingSubject",
          },
        },
      },
      choosingSubject: {
        on: {
          CHOOSE_SUBJECT: {
            target: "completed",
          },
          BACK: {
            target: "choosingYear",
          },
        },
      },
      completed: {
        effect({ event, context }) {
          const subject = event.value;
          const year = context.yearDetails?.name;
          if (!year) {
            throw new Error("Year is undefined");
          }
          if (!subject) {
            throw new Error("Subject is undefined");
          }
          updateStudentDetails({
            studentDetails: {
              yearAndSubject: { name: year, subject: subject },
            } as any,
          });
          nextStep();
        },
      },
    },
  });
};

export default useLessonTypeStateMachine;
