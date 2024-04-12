import { useWizard } from "react-use-wizard";
import type { YearDetails } from "./types/subjects";
import type { LessonType, Year } from "./types/types";
import { updateStudentDetails } from "./useFormStore";
import useStateMachine, { t } from "./useStateMachine/useStateMachine";

const useLessonTypeStateMachine = () => {
  const { previousStep, nextStep } = useWizard();

  return useStateMachine({
    schema: {
      context: t<{ yearDetails: YearDetails | undefined }>(),
      events: {
        CHOOSE_YEAR: t<{ value: Year }>(),
        LESSON_TYPE_FILLED: t<{ value: LessonType }>(),
        BACK: t<{ value: { prevState: string } }>(),
      },
    },
    context: {
      yearDetails: undefined,
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
          CHOOSE_SUBJECT: {
            target: "completed",
          },
        },
        effect({ send }) {
          send({ type: "LESSON_TYPE_FILLED", value: { lessonType: "online" } });
        },
      },
      completed: {
        effect({ setContext, event }) {
          const lessonType = event.value;
          setContext(() => ({ lessonType }));
          updateStudentDetails({
            studentDetails: { lessonType },
          });
          nextStep();
        },
      },
    },
  });
};

export default useLessonTypeStateMachine;
