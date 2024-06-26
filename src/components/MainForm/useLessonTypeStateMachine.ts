import { useWizard } from "react-use-wizard";
import type { LessonType } from "./types/types";
import { updateStudentDetails } from "./useFormStore";
import useStateMachine, { t } from "./useStateMachine/useStateMachine";

const useLessonTypeStateMachine = () => {
  const { previousStep, nextStep } = useWizard();

  return useStateMachine({
    schema: {
      context: t<{ lessonType: LessonType | undefined }>(),
      events: {
        CHOOSE_LOCATION: t<{ value: { zipCode: string } }>(),
        LESSON_TYPE_FILLED: t<{ value: LessonType }>(),
        BACK: t<{ value: { prevState: string } }>(),
      },
    },
    context: {
      lessonType: undefined,
    },
    initial: "choosingLessonType",
    states: {
      choosingLessonType: {
        on: {
          CHOOSE_ONLINE: {
            target: "online",
          },
          CHOOSE_IN_PERSON: {
            target: "in-person",
          },
          BACK: {
            target: "choosingLessonType",
          },
        },
        effect({ event }) {
          if (
            event.type === "BACK" &&
            event.value.prevState === "choosingLessonType"
          ) {
            previousStep();
          }
        },
      },
      online: {
        on: {
          LESSON_TYPE_FILLED: {
            target: "completed",
          },
        },
        effect({ send }) {
          send({ type: "LESSON_TYPE_FILLED", value: { lessonType: "online" } });
        },
      },
      "in-person": {
        on: {
          CHOOSE_IN_PERSON_LOCATION: {
            target: "choosingLocation",
          },
        },
        effect({ send }) {
          updateStudentDetails({
            studentDetails: {
              lessonType: { lessonType: "in-person", zipCode: "" },
            },
          });
          send({ type: "CHOOSE_IN_PERSON_LOCATION" });
        },
      },
      choosingLocation: {
        on: {
          CHOOSE_LOCATION: {
            target: "locationChosen",
          },
          BACK: {
            target: "choosingLessonType",
          },
        },
      },
      locationChosen: {
        on: {
          LESSON_TYPE_FILLED: {
            target: "completed",
          },
        },
        effect({ send, event }) {
          const zipCode = event.value.zipCode;
          const inPersonLessonType = {
            lessonType: "in-person",
            zipCode,
          } as const;
          send({ type: "LESSON_TYPE_FILLED", value: inPersonLessonType });
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
