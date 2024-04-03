import type { LessonType } from "./types";
import useStateMachine, { t } from "./useStateMachine/useStateMachine";

const useLessonTypeStateMachine = () => {
  return useStateMachine({
    schema: {
      context: t<{ lessonType: LessonType | undefined }>(),
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
        },
      },
      online: {
        on: {
          LESSON_TYPE_FILLED: {
            target: "completed",
          },
        },
        effect({ setContext, event }) {
          const typedEvent = event as unknown as { value: LessonType };
          setContext(() => ({ lessonType: typedEvent.value }));
        },
      },
      "in-person": {
        on: {
          CHOOSE_IN_PERSON_LOCATION: {
            target: "choosingLocation",
          },
        },
      },
      choosingLocation: {
        on: {
          CHOOSE_LOCATION: {
            target: "locationChosen",
          },
        },
      },
      locationChosen: {
        on: {
          LESSON_TYPE_FILLED: {
            target: "completed",
          },
        },
        effect({ setContext, event }) {
          const typedEvent = event as unknown as { value: LessonType };
          setContext(() => ({ lessonType: typedEvent.value }));
        },
      },
      completed: {},
    },
  });
};

export default useLessonTypeStateMachine;
