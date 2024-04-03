import useStateMachine from "./useStateMachine/useStateMachine";

const useLessonTypeStateMachine = () => {
  const [state, send] = useStateMachine({
    initial: "online",
    states: {
      online: {
        on: {
          next: "in-person",
        },
      },
      "in-person": {
        on: {
          next: "online",
        },
      },
    },
    context: {
      lessonType: "online",
    },
  });

  return [state, send];
};
